import Vue from 'vue'
import App from './App.vue'
import router from './router'

import animated from 'animate.css'
import Toast from '../components/toast'
import Icon from '../components/icon'

Vue.config.productionTip = false

Vue.use(Toast)
Vue.use(Icon)
Vue.use(animated)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
