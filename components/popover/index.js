import Component from './popover'

export default {
  install: function (Vue, opts = {}) {
    Vue.component(Component.name, Component)
  }
}
