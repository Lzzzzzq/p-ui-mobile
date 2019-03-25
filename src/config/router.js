import Vue from 'vue'
import Router from 'vue-router'
import { basicConfig, componentDocConfig, componentDemoConfig } from './map'

Vue.use(Router)

const mainConfig = {
  routes: [
    {
      path: '/',
      name: '/',
      redirect: '/docs'
    }, {
      path: '/docs',
      name: 'docs',
      component: () => import(/* webpackChunkName: "doc" */ `@src/views/docs/index.vue`),
      children: [...basicConfig, ...componentDocConfig]
    }, {
      path: '/demo',
      name: 'demo',
      component: () => import(/* webpackChunkName: "demo" */ '@src/components/demo/wrap.vue'),
      children: [...componentDemoConfig]
    }
  ]
}

export default new Router(mainConfig)
