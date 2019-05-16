/*
 * @Author: james.zhang 
 * @Date: 2018-11-28 16:44:30 
 * @Last Modified by: james.zhang
 * @Last Modified time: 2019-01-28 09:58:15
 * @Description: /api 获取证件类型数据
 */

import axios from "@/axios/api";
import requestURL from "@/axios/requestURL";

/** 
 * 获取证件类型所有数据信息
 */
const getCertTypeData = () => {
  return axios({
    url: requestURL.visGetCertTypeDataURL,
    method: 'get',
  })
}

export default {
  getCertTypeData
}
