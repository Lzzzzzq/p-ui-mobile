import Vue from 'vue'
import App from './App.vue'
import router from './router'

import animated from 'animate.css'
import NewsUI from '@NewsUI'

Vue.config.productionTip = false

Vue.use(NewsUI)
Vue.use(animated)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
