package xyz.erupt.auth.service;

import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Service;
import xyz.erupt.auth.model.EruptMenu;
import xyz.erupt.auth.model.EruptUser;
import xyz.erupt.auth.util.MD5Utils;
import xyz.erupt.core.util.ProjectUtil;
import xyz.erupt.tool.EruptDbFun;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

/**
 * Created by liyuepeng on 2019-07-15.
 */
@Service
@Order(10)
@Log
public class AuthDataLoadService implements CommandLineRunner {

    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    private EruptDbFun eruptDbFun;

    @Transactional
    @Override
    public void run(String... args) {
        new ProjectUtil().projectStartLoaded("auth", first -> {
            if (first) {
                try {
                    //用户
                    EruptUser eruptUser = new EruptUser();
                    eruptUser.setIsAdmin(true);
                    eruptUser.setIsMd5(true);
                    eruptUser.setStatus(true);
                    eruptUser.setAccount("erupt");
                    eruptUser.setPassword(MD5Utils.digest("erupt"));
                    eruptUser.setName("erupt");
                    eruptDbFun.persistIfNotExist(eruptUser, "account", eruptUser.getAccount());
                    //菜单
                    EruptMenu eruptMenu = new EruptMenu("manager", "系统管理", null, 1, 0, "fa fa-cogs", null);
                    eruptDbFun.persistIfNotExist(eruptMenu, "code", "manager");
                    eruptDbFun.persistIfNotExist(new EruptMenu(
                            "menu", "菜单维护", "/build/tree/EruptMenu", 1, 0, "fa fa-list-ul", eruptMenu
                    ), "code", "menu");
                    eruptDbFun.persistIfNotExist(new EruptMenu(
                            "user", "用户维护", "/build/table/EruptUser", 1, 10, "fa fa-user", eruptMenu
                    ), "code", "user");
                    eruptDbFun.persistIfNotExist(new EruptMenu(
                            "role", "角色维护", "/build/table/EruptRole", 1, 20, "fa fa-users", eruptMenu
                    ), "code", "role");
                    eruptDbFun.persistIfNotExist(new EruptMenu(
                            "dict", "字典维护", "/build/tree/EruptDict", 1, 30, "fa fa-book", eruptMenu
                    ), "code", "dict");
                    eruptDbFun.persistIfNotExist(new EruptMenu(
                            "loginLog", "登录日志", "/build/table/EruptLoginLog", 1, 40, "fa fa-book", eruptMenu
                    ), "code", "loginLog");
                    eruptDbFun.persistIfNotExist(new EruptMenu(
                            "erupt", "Erupt通用数据管理框架", "/page?&site=https://www.erupt.xyz", 1, 50, "fa fa-book", null
                    ), "code", "erupt");
                } catch (Exception e) {
                    e.printStackTrace();
                    log.warning("初始化用户角色数据失败：" + e.getMessage());
                }
            }
        });
    }

}