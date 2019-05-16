import ErrorMsg from "./errorMsg";
import requestURL from "./requestURL";
const certPhotoURL = "ScanReadIdCardInfo?OP-DEV=1&CMD-URL=4",
    scannerURL = "ScanReadIdCardInfo?OP-DEV=2&CMD-URL=1",
    IDReaderVerifyURL = "ZKLiveFace/LiveFaceVerify",
    visRegistURL = "visRegistration.do?save",
    visLeaveURL = "visRegistration.do?exit",
    visLoginURL = "/token.do?getToken",
    getIssOnlineInfoURL = "/ISSOnline/info",
    checkMacAndCPUSerialURL = requestURL.issonline.checkMacAndCPUSerialURL;

/**
 * 根据请求地址自定义加载显示内容
 * @param {Object} VueInstance
 * @param {String} url 
 */
const getLoadingMsg = ({VueInstance, url}) => {
    let loadingMsg = "";
    if(url.includes(certPhotoURL)) {
        loadingMsg = VueInstance.$t("vis_message_cardPrompt");
    }else if(url.includes(scannerURL)) {
        loadingMsg = VueInstance.$t("vis_message_scannerPrompt");
    }else if(url.includes(IDReaderVerifyURL)) {
        loadingMsg = VueInstance.$t("vis_message_humanVerifying");
    }else if(url.includes(visRegistURL) || url.includes(visLeaveURL)) {
        loadingMsg = VueInstance.$t("vis_message_submitting");
    }else if(url.includes(visLoginURL)) {
        loadingMsg = VueInstance.$t("vis_message_login");
    }else if(url.includes(getIssOnlineInfoURL)) {
        loadingMsg = VueInstance.$t("vis_test_hardwareDetecting");
    }else {
        loadingMsg = VueInstance.$t("vis_message_loading");
    }
    return loadingMsg;
}

/**
 * 根据请求地址处理异常加载显示内容
 * @param {Object} VueInstance
 * @param {String} url 
 */
const getErrorMsg = ({VueInstance, url}) => {
    let errorMsg = "";
    if(url.includes(checkMacAndCPUSerialURL)) {
        errorMsg = ErrorMsg.ISSONLINE_NOTINSTALLED;
    }else if(url.includes(visLoginURL)) {
        errorMsg = VueInstance.$t("vis_message_checkNetwork");
    }else {
        errorMsg = VueInstance.$t("vis_message_requestError");
    }
    return errorMsg;
}

export default {
    getLoadingMsg,
    getErrorMsg
}