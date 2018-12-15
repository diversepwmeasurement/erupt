package com.erupt.exception;

import com.erupt.base.model.EruptModel;

/**
 * Created by liyuepeng on 11/1/18.
 */
public class EruptAnnotationException extends RuntimeException {

    public EruptAnnotationException(String message) {
        super(message);
    }


    public static void validateEruptInfo(EruptModel eruptModel) {
        if (null == eruptModel.getEruptFieldMap().get(eruptModel.getErupt().primaryKeyCol())) {
            throw ExceptionUtil.styleEruptException(eruptModel, "找不到主键id,请确认主键列名是否为id，" +
                    "如果你不想将主键名定义为id则可以修改erupt注解中的primaryKeyCol属性来实现");
        }
    }
}
