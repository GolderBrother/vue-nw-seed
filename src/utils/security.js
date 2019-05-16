/*
 * @Author: james.zhang 
 * @Date: 2019-02-13 11:12:57 
 * @Last Modified by:  james.zhang 
 * @Last Modified time: 2019-02-13 11:12:57 
 * @Description: 安全加密工具 
 */

const MD5 = require('md5');
const md5 = (data) => {
    return MD5(data);
}

export default {
    md5
}