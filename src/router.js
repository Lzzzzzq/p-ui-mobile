import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/docs',
      name: 'docs',
      component: () => import(/* webpackChunkName: "doc" */ './views/docs/index.vue'),
      children: [
        {
          path: 'toast',
          name: 'toastDoc',
          component: () => import(/* webpackChunkName: "toastDoc" */ './views/docs/components/toast/index.vue')
        },
        {
          path: 'icon',
          name: 'iconDoc',
          component: () => import(/* webpackChunkName: "iconDoc" */ './views/docs/components/icon/index.vue')
        },
        {
          path: 'button',
          name: 'buttonDoc',
          component: () => import(/* webpackChunkName: "buttonDoc" */ './views/docs/components/button/index.vue')
        },
        {
          path: 'wingBlank',
          name: 'wingBlankDoc',
          component: () => import(/* webpackChunkName: "wingBlankDoc" */ './views/docs/components/wingBlank/index.vue')
        }
      ]
    }, {
      path: '/demo',
      name: 'demo',
      component: () => import(/* webpackChunkName: "demo" */ '@vc/demo/wrap.vue'),
      children: [
        {
          path: 'toast',
          name: 'toastDemo',
          component: () => import(/* webpackChunkName: "toastDemo" */ './views/docs/components/toast/demo.vue')
        },
        {
          path: 'icon',
          name: 'iconDemo',
          component: () => import(/* webpackChunkName: "iconDemo" */ './views/docs/components/icon/demo.vue')
        },
        {
          path: 'button',
          name: 'buttonDemo',
          component: () => import(/* webpackChunkName: "buttonDemo" */ './views/docs/components/button/demo.vue')
        },
        {
          path: 'wingBlank',
          name: 'wingBlankDemo',
          component: () => import(/* webpackChunkName: "wingBlankDemo" */ './views/docs/components/wingBlank/demo.vue')
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
