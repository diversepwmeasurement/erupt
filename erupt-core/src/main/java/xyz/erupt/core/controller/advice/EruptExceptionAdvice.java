package xyz.erupt.core.controller.advice;

import lombok.extern.slf4j.Slf4j;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import xyz.erupt.core.constant.EruptConst;
import xyz.erupt.core.view.EruptExceptionVo;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author YuePeng
 * date 2020-09-30
 */
@Slf4j
@Order(Ordered.LOWEST_PRECEDENCE - 1)
@ControllerAdvice(EruptConst.BASE_PACKAGE)
public class EruptExceptionAdvice {
    private static final String ERE = "erupt exception";

    @ResponseBody
    @ExceptionHandler(Exception.class)
    public EruptExceptionVo eruptException(Exception e, HttpServletRequest request, HttpServletResponse response) {
        response.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value());
        log.error(ERE, e);
        return new EruptExceptionVo(request.getServletPath(), response.getStatus(), ERE, e instanceof RuntimeException ? e.getMessage() : null);
    }

}
