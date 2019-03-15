import Component from './badge'

export default {
  install: function (Vue, opts = {}) {
    Vue.component(Component.name, Component)
  }
}
