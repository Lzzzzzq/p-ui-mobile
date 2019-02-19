import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/docs',
      name: 'docs',
      component: () => import(/* webpackChunkName: "about" */ './views/docs.vue'),
      children: [
        {
          path: 'toast',
          name: 'toast',
          component: () => import('./views/components/toast.vue')
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
