//配置vue-i18n实现国际化
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './langs'
import {
  Local
} from "@/utils/storage";

Vue.use(VueI18n) // 通过插件的形式挂载

const i18n = new VueI18n({
  // 语言标识//this.$i18n.locale // 通过切换locale的值来实现语言切换
  // locale: Local.get("lang") || 'zh',
  locale: 'zh_CN',
  messages
})
// locale.i18n((key, value) => i18n.t(key, value)) //重点：为了实现element插件的多语言切换

export default i18n

