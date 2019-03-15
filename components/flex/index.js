import FlexWrap from './flex-wrap'
import FlexItem from './flex-item'

const Flex = {}

Flex.install = function (Vue, opts = {}) {
  Vue.component(FlexWrap.name, FlexWrap)
  Vue.component(FlexItem.name, FlexItem)
}

export default Flex
