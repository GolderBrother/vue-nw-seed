/*
 * @Author: james.zhang 
 * @Date: 2018-11-28 10:30:23 
 * @Last Modified by: james.zhang
 * @Last Modified time: 2019-05-08 10:32:44
 * @Description: user api 
 */

import axios from "@/axios/api";
import qs from "qs";
import config from "@/axios/config";
import requestURL from "@/axios/requestURL";

/**
 * 登录接口
 * @param {Object} user 
 */
const login = userData => {
  // const userForm = new FormData();
  // 拼接成form表单格式
  // userForm.append("username", userData.username);
  // userForm.append("password", userData.password);
  // userForm.append("loginType", userData.loginType);
  return axios({
    url: requestURL.loginByTokenURL,
    method: "post",
    headers: config.headers,
    data: qs.stringify(userData),
    // transformRequest: function(data) {
    //   console.log(data);
    //   let ret = ''
    //   for (let it in data) {
    //     ret += decodeURIComponent(it) + '=' + decodeURIComponent(data[it]) + '&'
    //   }
    //   console.log(ret)
    //   return ret
    // }
  })
}

export default {
  login
};
