package xyz.erupt.flow.process.engine.condition;

import com.alibaba.fastjson.JSONObject;
import org.springframework.stereotype.Component;
import xyz.erupt.flow.bean.entity.node.OaProcessNodeCondition;

@Component
public class StringChecker implements ConditionChecker {

    @Override
    public boolean check(JSONObject form, OaProcessNodeCondition condition) {
        String formValue = form.getString(condition.getId());//表单值

        String[] value = condition.getValue();//对照值
        if(value==null || value.length<=0) {
            throw new RuntimeException("条件没有对照值");
        }
        if(formValue==null) {//不能报错，因为可能是测试走流程
            throw new RuntimeException("分支条件不能为空");
        }
        if("=".equals(condition.getCompare())) {
            return value[0].equals(formValue);
        }
        return false;
    }
}
