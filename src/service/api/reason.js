/*
 * @Author: james.zhang 
 * @Date: 2018-11-28 16:47:26 
 * @Last Modified by: james.zhang
 * @Last Modified time: 2019-03-08 10:46:30
 * @Description: reason api 获取来访事由数据
 */
import axios from "@/axios/api";
import requestURL from "@/axios/requestURL";

/** 
 * 获取来访事由信息
 */
const getReason = () => {
    return axios({
        url: `${requestURL.baseURL}/visReason.do?getReasonTree`,
        method: 'post',
    })
}

export default {
    getReason
}