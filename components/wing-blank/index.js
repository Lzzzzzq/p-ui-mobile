import Component from './wing-blank'

export default {
  install: function (Vue, opts = {}) {
    Vue.component(Component.name, Component)
  }
}
