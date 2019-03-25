import Vue from 'vue'
import App from './App.vue'
import router from './config/router'

import animated from 'animate.css'
import LIB from '../components/index'
// import '../components/style'

Vue.config.productionTip = false

Vue.use(LIB)
Vue.use(animated)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
