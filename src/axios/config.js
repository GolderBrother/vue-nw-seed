/*
 * @Author: james.zhang 
 * @Date: 2018-11-28 09:25:06 
 * @Last Modified by: james.zhang
 * @Last Modified time: 2019-05-15 13:43:22
 * @Description: axios默认的配置参数 
 */
// import { requestURL } from "./requestURL";
export default {
  method: 'post',
  // 基础url前缀,
  baseURL: 'http://192.168.214.142:8098',
  // baseURL: 'http://192.168.218.51:8081',
  //   requestURL,
  // 请求头信息
  headers: {
    // 请求内容格式为form表单
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  },
  headersByJSON: {
    // 请求内容格式为json字符串
    'Content-Type': "application/json;charset=UTF-8",
  },
  // 演示用，正常通过登录获取
  token: "A0775791041AB23C8F23CC89A7407A860F3E9427C66F32F32AC154D71C0EBCD6",
  //参数
  data: {},
  // 设置超时时间(ms)
  timeout: 60000,
  // 携带凭证 允许携带cookies 后端需要配合 allow credentials
  withCredentials: false,
  // 返回数据类型
  responseType: 'json',
  url: {
    login: 'token.do?getToken',
    checkStatus: '/DialOut/CheckStatus',
    testVisClientServer: 'token.do?testVisClientServer'
  }
}
