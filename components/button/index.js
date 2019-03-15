import Component from './button'

export default {
  install: function (Vue, opts = {}) {
    Vue.component(Component.name, Component)
  }
}
