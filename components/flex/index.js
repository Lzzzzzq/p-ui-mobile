import FlexWrap from './src/flexWrap'
import FlexItem from './src/flexItem'

const Flex = {}

Flex.install = function (Vue, opts = {}) {
  Vue.component(FlexWrap.name, FlexWrap)
  Vue.component(FlexItem.name, FlexItem)
}

export default Flex
