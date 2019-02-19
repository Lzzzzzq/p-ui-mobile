import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/docs',
      name: 'docs',
      component: () => import(/* webpackChunkName: "about" */ './views/docs/index.vue'),
      children: [
        {
          path: 'toast',
          name: 'toastDoc',
          component: () => import('./views/components/toast/index.vue')
        }
      ]
    }, {
      path: '/demo',
      name: 'demo',
      component: () => import('@vc/demo/wrap.vue'),
      children: [
        {
          path: 'toast',
          name: 'toastDemo',
          component: () => import('./views/components/toast/demo.vue')
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
