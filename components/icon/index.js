import Icon from './src/icon'

Icon.install = function (Vue, opts = {}) {
  Vue.component(Icon.name, Icon)
}

export default Icon
