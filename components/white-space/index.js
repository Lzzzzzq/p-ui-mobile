import Component from './white-space'

export default {
  install: function (Vue, opts = {}) {
    Vue.component(Component.name, Component)
  }
}
