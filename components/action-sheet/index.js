import Component from './action-sheet'

export default {
  install: function (Vue, opts = {}) {
    Vue.component(Component.name, Component)
  }
}
