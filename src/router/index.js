import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Hello from '@/components/pages/Hello'
import PageA from '@/components/pages/PageA'
import PageB from '@/components/pages/PageB'
import Demo from '@/components/pages/demo/Home'
import RequestDemo from '@/components/pages/demo/Request'
import RouterDemo from '@/components/pages/demo/Router'
import ScopeComp from '@/components/pages/demo/ScopeComp'
import GlobalComp from '@/components/pages/demo/GlobalComp'
import GlobalText from '@/components/pages/demo/GlobalText'
import Message from '@/components/pages/demo/Message'

Vue.use(Router)

// 配置路由，路由地址映射到显示的组件 path -> component
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/pageA',
      name: 'PageA',
      component: PageA
    },
    {
      path: '/pageB',
      name: 'PageB',
      component: PageB
    },
    {
      path: '/request',
      name: 'RequestDemo',
      component: RequestDemo
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/routerDemo',
      name: 'RouterDemo',
      component: RouterDemo
    },
    {
      path: '/scopeComp',
      name: 'ScopeComp',
      component: ScopeComp
    },
    {
      path: '/globalComp',
      name: 'GlobalComp',
      component: GlobalComp
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/globalText',
      name: 'GlobalText',
      component: GlobalText
    },
  ]
})
