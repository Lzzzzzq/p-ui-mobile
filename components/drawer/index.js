import Component from './src/index'

export default {
  install: function (Vue, opts = {}) {
    Vue.component(Component.name, Component)
  }
}
