import Toast from './toast'
import Icon from './icon/src/index'
import WingBlank from './wing-blank/src/index'
import Button from './button/src/index'
import WhiteSpace from './white-space/src/index'
import FlexWrap from './flex/src/flex-wrap'
import FlexItem from './flex/src/flex-item'
import Drawer from './drawer/src/index'
import Modal from './modal'

const components = [
  Icon,
  WingBlank,
  Button,
  WhiteSpace,
  FlexWrap,
  FlexItem,
  Drawer
]

const methods = [
  Toast,
  Modal
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })

  methods.map(method => {
    Vue.use(method)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const NewsUIMobile = {
  version: '0.0.1',
  install,
  Toast,
  Icon,
  WingBlank,
  Button,
  WhiteSpace,
  FlexWrap,
  FlexItem,
  Drawer,
  Modal
}

export default NewsUIMobile
