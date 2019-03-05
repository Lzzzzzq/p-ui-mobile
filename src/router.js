import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      redirect: '/docs',
      component: () => import(/* webpackChunkName: "doc" */ './views/docs/index.vue')
    }, {
      path: '/docs',
      name: 'docs',
      component: () => import(/* webpackChunkName: "doc" */ './views/docs/index.vue'),
      children: [
        {
          path: 'start',
          name: 'startDoc',
          component: () => import(/* webpackChunkName: "startDoc" */ './views/docs/start/index.vue')
        },
        {
          path: 'theme',
          name: 'themeDoc',
          component: () => import(/* webpackChunkName: "themeDoc" */ './views/docs/theme/index.vue')
        },
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
          component: () => import(/* webpackChunkName: "wingBlankDoc" */ './views/docs/components/wing-blank/index.vue')
        },
        {
          path: 'whiteSpace',
          name: 'whiteSpaceDoc',
          component: () => import(/* webpackChunkName: "whiteSpaceDoc" */ './views/docs/components/white-space/index.vue')
        },
        {
          path: 'flex',
          name: 'flexDoc',
          component: () => import(/* webpackChunkName: "flexDoc" */ './views/docs/components/flex/index.vue')
        },
        {
          path: 'drawer',
          name: 'drawerDoc',
          component: () => import(/* webpackChunkName: "drawerDoc" */ './views/docs/components/drawer/index.vue')
        },
        {
          path: 'modal',
          name: 'modalDoc',
          component: () => import(/* webpackChunkName: "modalDoc" */ './views/docs/components/modal/index.vue')
        },
        {
          path: 'actionsheet',
          name: 'actionSheetDoc',
          component: () => import(/* webpackChunkName: "actionSheetDoc" */ './views/docs/components/action-sheet/index.vue')
        },
        {
          path: 'popover',
          name: 'popoverDoc',
          component: () => import(/* webpackChunkName: "popoverDoc" */ './views/docs/components/popover/index.vue')
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
          component: () => import(/* webpackChunkName: "wingBlankDemo" */ './views/docs/components/wing-blank/demo.vue')
        },
        {
          path: 'whiteSpace',
          name: 'whiteSpaceDemo',
          component: () => import(/* webpackChunkName: "whiteSpaceDemo" */ './views/docs/components/white-space/demo.vue')
        },
        {
          path: 'flex',
          name: 'flexDemo',
          component: () => import(/* webpackChunkName: "flexDemo" */ './views/docs/components/flex/demo.vue')
        },
        {
          path: 'drawer',
          name: 'drawerDemo',
          component: () => import(/* webpackChunkName: "drawerDemo" */ './views/docs/components/drawer/demo.vue')
        },
        {
          path: 'modal',
          name: 'modalDemo',
          component: () => import(/* webpackChunkName: "modalDemo" */ './views/docs/components/modal/demo.vue')
        },
        {
          path: 'actionSheet',
          name: 'actionSheetDemo',
          component: () => import(/* webpackChunkName: "actionSheetDemo" */ './views/docs/components/action-sheet/demo.vue')
        },
        {
          path: 'popover',
          name: 'popoverDemo',
          component: () => import(/* webpackChunkName: "popoverDemo" */ './views/docs/components/popover/demo.vue')
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
