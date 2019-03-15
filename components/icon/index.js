import Component from './icon'

export default {
  install: function (Vue, opts = {}) {
    Vue.component(Component.name, Component)
  }
}
