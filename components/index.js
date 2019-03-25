import Icon from './icon/index'
import WingBlank from './wing-blank/index'
import Button from './button/index'
import WhiteSpace from './white-space/index'
import Flex from './flex/index'
import Drawer from './drawer/index'
import ActionSheet from './action-sheet/index'
import Popover from './popover/index'
import Badge from './badge/index'
import Switch from './switch/index'
import PullDown from './pull-down/index'

import Toast from './toast/index'
import Modal from './modal/index'

import { version } from '../package.json'

import './style/components.less'

const components = [
  Icon,
  WingBlank,
  Button,
  WhiteSpace,
  Flex,
  Drawer,
  ActionSheet,
  Popover,
  Badge,
  Switch,
  PullDown
]

const methods = [
  Toast,
  Modal
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.use(component)
  })

  methods.map(method => {
    Vue.use(method)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const PUIMobile = {
  version,
  install,
  ...components,
  ...methods
}

export default PUIMobile
