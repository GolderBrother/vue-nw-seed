/*
 * @Author: james.zhang
 * @Date: 2018-11-28 09:17:57
 * @Last Modified by: james.zhang
 * @Last Modified time: 2019-05-15 14:16:36
 * @Description: axios 封装的请求对象
 */
import axios from 'axios'
import config from './config'
import Vue from 'vue'
import Router from 'vue-router'
// 国际化相关
import i18n from '@/i18n'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
Vue.use(Router)
import { Local } from '@/utils/storage'
import msgUtils from './msgUtils'
const router = new Router()
const VueInstance = new Vue({
  router,
  i18n
})
// 当前请求地址
let _url = '';
const token = Local.get("token") || config.token;
export default function $axios(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: config.baseURL,
      timeout: config.timeout,
      method: options.method || config.method,
      data: options.data || {},
      // params: Object.assign({}, options.params),
      // 不配置 headers,axios的 headers 默认值为 "application/json"
      headers: options.headers || config.headersByJSON,
      responseType: options.responseType || config.responseType
    })
    // 请求拦截
    let loading = null
    instance.interceptors.request.use(
      _config => {
        // 在发送请求之前做些什么
        // TODO 这边可以根据不同的请求流程(根据url)配置不同的加载内容
        // 根据请求地址自定义加载显示内容
        const loadingMsg = msgUtils.getLoadingMsg({
          VueInstance,
          url: _config.url
        });
        // 登录不需要token
        const isLoginReq =
          _config.url && _config.url.includes(config.url.login);
        if(!_config.url.includes('access_token') && !isLoginReq) {
          _config.url += `&access_token=${token}`
        }
        // 使用全局定义的加载框功能
        // loading = VueInstance.$showLoading(loadingMsg, {
        //   background: 'rgba(0, 0, 0, .9)',
        // })
        return _config
      },
      error => {
        // 对请求错误做些什么
        console.error('request error：' + error);
        loading && loading.close && loading.close();
        //  1.判断请求超时
        if (
          error.code === 'ECONNABORTED' &&
          error.message &&
          error.message.includes('timeout')
        ) {
          // 使用全局定义的消息框功能
          VueInstance.$openMessage({
            msg: VueInstance.$t('vis_message_requestError'),
            type: 'error',
          })
        }
        //  2.需要重定向到错误页面
        const errorInfo = error.response
        if (errorInfo) {
          VueInstance.$router.push('/vis-login')
        }

        VueInstance.$openMessage({
          type: 'error',
          msg: error.message || error
        })
        // return reject(error);
      }
    )

    instance.interceptors.response.use(
      response => {
        let data = null
        loading && loading.close && loading.close();
        // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
        if (response.data === undefined) {
          data = response.request.responseText || response
        } else {
          data = response.data || data
        }
        data = data || {}
          let res = {}
          switch (data.ret) {
            case '0':
              res = {
                code: 1,
                data: data.data || null,
                msg: data.msg || 'success',
                ...data
              }
              break
            default:
              res = {
                code: 0,
                data: data.data || {},
                msg: data.msg || data,
                ...data
              }
              break
          }
          return res
      },
      err => {
        // VueInstance.$fileLog.error('response error：' + err);
        loading && loading.close && loading.close();
        if (err && err.message) {
          if (err.message.includes('Network Error')) {
            // 请求错误 业务中自己处理
            err.message = msgUtils.getErrorMsg({ VueInstance, url: _url })
            // err.message = VueInstance.$t("vis_message_requestError");
          } else if (err.message.includes('timeout')) {
            // 请求超时
            err.message = VueInstance.$t('vis_message_requestTimeout')
            // 如果有错误,请求拦截器只提示请求超时
            VueInstance.$openMessage({
              type: 'error',
              msg: err.message || err,
              duration: 2000
            })
          }
        }
        // TODO: 只做控制台日志打印功能，方便排查问题
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              err.message = '请检查网络连接'
              break

            case 401:
              err.message = '未授权，请登录'
              VueInstance.$router.push('/vis-login')
              break

            case 403:
              err.message = '拒绝访问'
              break

            case 404:
              err.message = `请求地址出错: ${err.response.config.url}`
              VueInstance.$router.push('/404')
              break

            case 405:
              err.message = '登录已过期'
              VueInstance.$router.push('/vis-login')
              break

            case 408:
              err.message = '请求超时'
              break

            case 500:
              err.message = '服务器内部错误'
              break

            case 501:
              err.message = '服务未实现'
              break

            case 502:
              err.message = '网关错误'
              break

            case 503:
              err.message = '服务不可用'
              break

            case 504:
              err.message = '网关超时'
              break

            case 505:
              err.message = 'HTTP版本不受支持'
              break

            default:
              break
          }
          loading && loading.close && loading.close();
        }
        console.error(err);
        VueInstance.$openMessage({
          // customClass: 'error',
          type: 'error',
          msg: err.message || err,
          duration: 2000
        })
        // 接口返回的错误信息 业务方面的错误业务流程自己捕获解决
        return reject(err)
      }
    )
    // 请求处理
    instance(options)
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}
