import Component from './switch'

export default {
  install: function (Vue, opts = {}) {
    Vue.component(Component.name, Component)
  }
}
