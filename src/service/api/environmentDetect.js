/*
 * @Author: james.zhang 
 * @Date: 2019-01-02 17:54:30 
 * @Last Modified by: james.zhang
 * @Last Modified time: 2019-01-05 16:10:56
 * @Description: /api 环境检测 
 */

import axios from "@/axios/api";
import requestURL from "@/axios/requestURL";

/**
 * 开启硬件环境检测开启
 * @param {String} placeId 当前登记地点ID
 */
const openEnvironmentDetect = ({placeId}) => {
    return axios({
        url: requestURL.visDetectShowURL,
        method: 'post',
        params: {
            placeId
        }
    })
}

/**
 * 关闭硬件环境检测
 * @param {String} placeId  当前登记地点ID
 */
const closeEnvironmentDetect = ({placeId}) => {
    return axios({
        url: requestURL.visDetectNotShowURL,
        method: 'post',
        params: {
            placeId
        }
    })
}

// 获取IssOnline安装状态信息 ret === "0" 即为安装成功
const getIssOnlineInfo = () => {
    return axios({
        url: requestURL.issonline.getIssOnlineInfoURL,
        method: 'get'
    })
}

export default {
    openEnvironmentDetect,
    closeEnvironmentDetect,
    getIssOnlineInfo
}