package xyz.erupt.core.controller;import com.google.gson.Gson;import com.google.gson.JsonObject;import lombok.RequiredArgsConstructor;import lombok.SneakyThrows;import lombok.extern.slf4j.Slf4j;import org.apache.commons.lang3.StringUtils;import org.springframework.web.bind.annotation.*;import xyz.erupt.annotation.SceneEnum;import xyz.erupt.annotation.fun.PowerObject;import xyz.erupt.annotation.sub_erupt.LinkTree;import xyz.erupt.core.annotation.EruptRecordOperate;import xyz.erupt.core.annotation.EruptRouter;import xyz.erupt.core.config.GsonFactory;import xyz.erupt.core.constant.EruptRestPath;import xyz.erupt.core.invoke.DataProcessorManager;import xyz.erupt.core.invoke.DataProxyInvoke;import xyz.erupt.core.naming.EruptRecordNaming;import xyz.erupt.core.service.EruptCoreService;import xyz.erupt.core.service.EruptService;import xyz.erupt.core.service.IEruptDataService;import xyz.erupt.core.util.EruptUtil;import xyz.erupt.core.util.Erupts;import xyz.erupt.core.util.ReflectUtil;import xyz.erupt.core.view.EruptApiModel;import xyz.erupt.core.view.EruptModel;import javax.servlet.http.HttpServletRequest;import java.lang.reflect.Field;import java.util.ArrayList;import java.util.List;/** * Erupt 对数据的增删改查 * * @author YuePeng * date 9/28/18. */@Slf4j@RestController@RequestMapping(EruptRestPath.ERUPT_DATA_MODIFY)@RequiredArgsConstructorpublic class EruptModifyController {    private final Gson gson = GsonFactory.getGson();    private final EruptService eruptService;    @SneakyThrows    @PostMapping({"/{erupt}"})    @EruptRecordOperate(value = "新增", dynamicConfig = EruptRecordNaming.class)    @EruptRouter(skipAuthIndex = 3, authIndex = 1, verifyType = EruptRouter.VerifyType.ERUPT)    public EruptApiModel addEruptData(@PathVariable("erupt") String erupt, @RequestBody JsonObject data,                                      JsonObject jsonObject, HttpServletRequest request) {        EruptModel eruptModel = EruptCoreService.getErupt(erupt);        Erupts.powerLegal(eruptModel, PowerObject::isAdd);        EruptApiModel result = setLinkValue(jsonObject, request, eruptModel);        if (result.getStatus() == EruptApiModel.Status.ERROR) return result;        EruptApiModel eruptApiModel = EruptUtil.validateEruptValue(eruptModel, data);        if (eruptApiModel.getStatus() == EruptApiModel.Status.ERROR) return eruptApiModel;        Object obj = getEntity(jsonObject, eruptModel, data);        DataProxyInvoke.invoke(eruptModel, (dataProxy -> dataProxy.beforeAdd(obj)));        DataProcessorManager.getEruptDataProcessor(eruptModel.getClazz()).addData(eruptModel, obj);        this.modifyLog(eruptModel, "ADD", data.toString());        DataProxyInvoke.invoke(eruptModel, (dataProxy -> dataProxy.afterAdd(obj)));        return EruptApiModel.successApi();    }    @SneakyThrows    @PostMapping({"/batch/{erupt}"})    @EruptRecordOperate(value = "批量新增", dynamicConfig = EruptRecordNaming.class)    @EruptRouter(skipAuthIndex = 3, authIndex = 1, verifyType = EruptRouter.VerifyType.ERUPT)    public EruptApiModel addEruptDataBatch(@PathVariable("erupt") String erupt, @RequestBody List<JsonObject> data,                                           JsonObject jsonObject, HttpServletRequest request) {        EruptModel eruptModel = EruptCoreService.getErupt(erupt);        Erupts.powerLegal(eruptModel, PowerObject::isAdd);        EruptApiModel result = setLinkValue(jsonObject, request, eruptModel);        if (result.getStatus() == EruptApiModel.Status.ERROR) return result;        List<Object> objectList = new ArrayList<>();        for (int i = 0; i < data.size(); i++) {            JsonObject item = data.get(i);            EruptApiModel eruptApiModel = EruptUtil.validateEruptValue(eruptModel, item);            if (eruptApiModel.getStatus() == EruptApiModel.Status.ERROR) return eruptApiModel;            Object obj = getEntity(jsonObject, eruptModel, item);            DataProxyInvoke.invoke(eruptModel, (dataProxy -> dataProxy.beforeAdd(obj)));            this.modifyLog(eruptModel, "BATCH_ADD", item.toString());            objectList.add(obj);        }        DataProcessorManager.getEruptDataProcessor(eruptModel.getClazz()).batchInsert(eruptModel, objectList);        for (Object obj : objectList) {            DataProxyInvoke.invoke(eruptModel, (dataProxy -> dataProxy.afterAdd(obj)));        }        return EruptApiModel.successApi();    }    private EruptApiModel setLinkValue(JsonObject jsonObject, HttpServletRequest request, EruptModel eruptModel) {        LinkTree dependTree = eruptModel.getErupt().linkTree();        if (StringUtils.isNotBlank(dependTree.field()) && dependTree.dependNode()) {            String linkVal = request.getHeader("link");            //必须是强依赖才会自动注入值            if (dependTree.dependNode()) {                if (StringUtils.isBlank(linkVal)) {                    return EruptApiModel.errorApi("请选择树节点");                } else {                    if (null == jsonObject) jsonObject = new JsonObject();                    String rm = ReflectUtil.findClassField(eruptModel.getClazz(), dependTree.field()).getType().getSimpleName();                    JsonObject sub = new JsonObject();                    sub.addProperty(EruptCoreService.getErupt(rm).getErupt().primaryKeyCol(), linkVal);                    jsonObject.add(dependTree.field(), sub);                }            }        }        return EruptApiModel.successApi();    }    private Object getEntity(JsonObject jsonObject, EruptModel eruptModel, JsonObject item) throws InstantiationException, IllegalAccessException {        Object o = gson.fromJson(item.toString(), eruptModel.getClazz());        EruptUtil.clearObjectDefaultValueByJson(o, item);        Object obj = EruptUtil.dataTarget(eruptModel, o, eruptModel.getClazz().newInstance(), SceneEnum.ADD);        if (null != jsonObject) {            for (String key : jsonObject.keySet()) {                Field field = ReflectUtil.findClassField(eruptModel.getClazz(), key);                field.setAccessible(true);                field.set(obj, gson.fromJson(jsonObject.get(key).toString(), field.getType()));            }        }        return obj;    }    @PutMapping("/{erupt}")    @EruptRecordOperate(value = "修改", dynamicConfig = EruptRecordNaming.class)    @EruptRouter(skipAuthIndex = 3, authIndex = 1, verifyType = EruptRouter.VerifyType.ERUPT)    public EruptApiModel editEruptData(@PathVariable("erupt") String erupt, @RequestBody JsonObject data) throws IllegalAccessException {        EruptModel eruptModel = EruptCoreService.getErupt(erupt);        Erupts.powerLegal(eruptModel, PowerObject::isEdit);        EruptApiModel eruptApiModel = EruptUtil.validateEruptValue(eruptModel, data);        if (eruptApiModel.getStatus() == EruptApiModel.Status.ERROR) return eruptApiModel;        eruptService.verifyIdPermissions(eruptModel, data.get(eruptModel.getErupt().primaryKeyCol()).getAsString());        Object o = this.gson.fromJson(data.toString(), eruptModel.getClazz());        EruptUtil.clearObjectDefaultValueByJson(o, data);        Object obj = EruptUtil.dataTarget(eruptModel, o, DataProcessorManager.getEruptDataProcessor(eruptModel.getClazz())                .findDataById(eruptModel, ReflectUtil.findClassField(eruptModel.getClazz(), eruptModel.getErupt().primaryKeyCol()).get(o)), SceneEnum.EDIT);        DataProxyInvoke.invoke(eruptModel, (dataProxy -> dataProxy.beforeUpdate(obj)));        DataProcessorManager.getEruptDataProcessor(eruptModel.getClazz()).editData(eruptModel, obj);        this.modifyLog(eruptModel, "EDIT", data.toString());        DataProxyInvoke.invoke(eruptModel, (dataProxy -> dataProxy.afterUpdate(obj)));        return EruptApiModel.successApi();    }    @DeleteMapping("/{erupt}/{id}")    @EruptRecordOperate(value = "删除", dynamicConfig = EruptRecordNaming.class)    @EruptRouter(skipAuthIndex = 3, authIndex = 1, verifyType = EruptRouter.VerifyType.ERUPT)    public EruptApiModel deleteEruptData(@PathVariable("erupt") String erupt, @PathVariable("id") String id) {        EruptModel eruptModel = EruptCoreService.getErupt(erupt);        Erupts.powerLegal(eruptModel, PowerObject::isDelete);        eruptService.verifyIdPermissions(eruptModel, id);        IEruptDataService dataService = DataProcessorManager.getEruptDataProcessor(eruptModel.getClazz());        //获取对象数据信息用于DataProxy函数中        Object obj = dataService.findDataById(eruptModel, EruptUtil.toEruptId(eruptModel, id));        DataProxyInvoke.invoke(eruptModel, (dataProxy -> dataProxy.beforeDelete(obj)));        dataService.deleteData(eruptModel, obj);        this.modifyLog(eruptModel, "DELETE", id);        DataProxyInvoke.invoke(eruptModel, (dataProxy -> dataProxy.afterDelete(obj)));        return EruptApiModel.successApi();    }    @DeleteMapping("/{erupt}")    @EruptRouter(skipAuthIndex = 3, authIndex = 1, verifyType = EruptRouter.VerifyType.ERUPT)    @EruptRecordOperate(value = "批量删除", dynamicConfig = EruptRecordNaming.class)    public EruptApiModel deleteEruptDataList(@PathVariable("erupt") String erupt, @RequestParam("ids") String[] ids) {        EruptApiModel eruptApiModel = EruptApiModel.successApi();        for (String id : ids) {            eruptApiModel = this.deleteEruptData(erupt, id);            if (eruptApiModel.getStatus() == EruptApiModel.Status.ERROR) {                break;            }        }        return eruptApiModel;    }    private void modifyLog(EruptModel eruptModel, String placeholder, String content) {        log.info("[" + eruptModel.getEruptName() + " -> " + placeholder + "]:" + content);    }}