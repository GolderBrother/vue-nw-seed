/*
 * @Author: james.zhang 
 * @Date: 2019-01-28 15:42:47 
 * @Last Modified by: james.zhang
 * @Last Modified time: 2019-04-29 11:43:36
 * @Description: 所有的请求地址
 */

const baseURL = "";
const issonline = {
  baseURL: "http://127.0.0.1:24008/ISSOnline"
}
const requestURL = {
  port: 3000,
  baseURL,
  issonline: {
    certPhotoURL: `${issonline.baseURL}/ScanReadIdCardInfo?OP-DEV=1&CMD-URL=4&DllType=1`, // 身份证阅读器 获取证件照片等其他数据
    scannerURL: `${issonline.baseURL}/ScanReadIdCardInfo?OP-DEV=2&CMD-URL=1`, // 扫描仪
    IDReaderVerifyURL: `${issonline.baseURL}/ZKLiveFace/LiveFaceVerify`, // 人证核验结果
    checkMacAndCPUSerialURL: `${issonline.baseURL}/checkMacAndCPUSeri`, // 获取mac地址和CPU序列号
    beginCaptureURL: `${issonline.baseURL}/beginCapture`, // 开始采集指纹
    cancelCaptureURL: `${issonline.baseURL}/cancelCapture`, // 取消采集指纹
    getImageURL: `${issonline.baseURL}/getImage`, // 获取图像
    getTemplateURL: `${issonline.baseURL}/getTemplate`, // 获取模板
    getIssOnlineInfoURL: `${issonline.baseURL}/info`, // 获取issonline地址信息
    startDial: `${issonline.baseURL}/DialOut/StartDial`,  // 拨号
    checkPhoneStatus: `${issonline.baseURL}/DialOut/CheckStatus`,  // 检查电话机状态 
  },
  loginURL: `${baseURL}/login.do`, // 登录地址
  loginByTokenURL: `${baseURL}/token.do?getToken`, // 获取token并登陆
  visitedURL: `${baseURL}/visRegistration.do?getEmpByNameOrPhoneOrDept`, // 根据姓名、手机号、部门获取被访人信息  
  visRegistURL: `${baseURL}/visRegistration.do?save`, // 访客登记
  visLeaveURL: `${baseURL}/visRegistration.do?exit`, // 访客签离 
  visCheckCardBitURL: `${baseURL}/visPCRegistration.do?checkCardBit`, // 检查卡号位数
  visCheckIsCardExistURL: `${baseURL}/visPCRegistration.do?isCardExist`, // 检查卡号是否存在
  visCheckPwdURL: `${baseURL}/visPCRegistration.do?checkPwd`, // 检查密码是否正确
  visInfoByRegistURL: `${baseURL}/visPCRegistration.do?saveInfoLoad`, // 访客登记时根据证件类型+证件号获取访客信息
  visInfoByLeaveURL: `${baseURL}/visPCRegistration.do?exitInfoLoad`, // 访客签离时根据证件类型+证件号获取访客信息,
  visClientServerURL: `${baseURL}/token.do?testVisClientServer`, // 测试服务器是否连接
  visParamsURL: `${baseURL}/visParams.do?getParams`, // 获取参数设置值
  visGetScanCodeURL: `${baseURL}/visRegistration.do?getScanCode`, // 获取扫码开门的卡号
  visDetailsURL: `${baseURL}/visRegistration.do?getRegistrationItemById`, // 获取访客详细信息
  visListByDayEnterURL: `${baseURL}/visRegistration.do?list`, // 获取当日进入、当日未签离列表数据,
  visGetCertTypeDataURL:`${baseURL}/baseDictionaryValue.do?selectList&key=certificateType`,// 获取证件类型所有数据信息
  visCountByDayEnterURL: `${baseURL}/visRegistration.do?getTodayCount`, // 获取当日进入、未签离、已签离数量
  visGetCurrentPlaceURL: `${baseURL}/visRegistration.do?getCurrentPlaceTouch`, // 检测当前地点是否登记(包含硬件检测参数)
  visFpComparisionURL: `${baseURL}/baseBioVerify.do?fpComparison`, // 比对指纹模板
  visGetPrintDefaultXMLURL: `${baseURL}/template/VisPrint.Default`, // 获取默认模板xml文件
  visGetPrintTemplateXMLURL: `${baseURL}/visPrintTemplate.do?getPrintTemplateXML`, // 获取打印模板xml文件
  visGetPrintParamsURL: `${baseURL}/visPrintParam.do?getPrintParams`,  // 获取数据库打印参数
  visDetectShowURL: `${baseURL}/visPlace.do?detectShow`, // 硬件环境检测开启
  visDetectNotShowURL: `${baseURL}/visPlace.do?detectNotShow`, // 硬件环境检测关闭
}

export default requestURL
