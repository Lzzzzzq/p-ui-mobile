import Component from './src/index'

Component.install = function (Vue, opts = {}) {
  Vue.component(Component.name, Component)
}

export default Component
