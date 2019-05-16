// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import '@/styles/app.scss'
// 引入全局组件
import ZKHeader from '@/components/layout/ZKHeader.vue'
import { openMessage, showLoading, hideLoading } from "@/utils/message"

// 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

// 引入api 接口
import api from '@/axios';
// 引入国际化
import i18n from '@/i18n'
// 引入vuex store
import store from '@/store'
// 引入vue 路由
import router from '@/router'

// 引入日志收集工具
// import fileLog from "@/utils/log"

// 引入elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 路由动画
import Navigation from 'vue-navigation'

Vue.use(Navigation, {
  router
})

// 将请求方法都挂在到Vue原型对象的$http对象上 use: this.$http
Vue.use(api)
// 注入使用
Vue.use(ElementUI)

// 注册全局组件
Vue.component(ZKHeader.name, ZKHeader)

// 定义全局的消息提示：挂载公共的事件到vue原型上
Vue.prototype.$openMessage = openMessage
Vue.prototype.$showLoading = showLoading
Vue.prototype.$hideLoading = hideLoading
// Vue.prototype.$fileLog = fileLog

// for auto update
// import { checkUpdate } from '@/utils/update.js'
// checkUpdate()

// 开发环境下开启调试工具
if (process.env.NODE_ENV === 'development') {
  require('nw.gui').Window.get().showDevTools()
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  store,
  router,
  template: '<App/>',
  components: { App }
})
