/*
 * @Author: james.zhang 
 * @Date: 2018-11-29 16:10:48 
 * @Last Modified by: james.zhang
 * @Last Modified time: 2019-05-08 10:47:07
 * @Description: /api 封装统一的请求方法，然后挂在到Vue原型对象的$http对象上
 */

import * as services from "@/service/index.js"

const install = Vue => {
  if (install.installed) return;
  install.installed = true;
  // 将对象转换成数组
  let servicesArr = [];
  for(let i in services) {
    servicesArr.push(services[i])
  }
  // 将请求方法都挂在到Vue原型对象的$http对象上
  Object.defineProperties(Vue.prototype, {
    $http: {
      get() {
        return Object.assign({}, ...servicesArr)
      }
    }
  })
}

export default install;
