import config from '../_util/config'
import './iconfont.js'

export default {
  name: 'PIcon',
  props: {
    type: {
      type: String,
      default: () => ('')
    }
  },
  computed: {
    prefixCls: () => `${config.prefixCls}-icon`
  },
  render (h) {
    const {
      prefixCls,
      type
    } = this

    return (
      <svg class={`icon ${prefixCls}`} aria-hidden="true">
        <use {...{ attrs: { 'xlink:href': `#${type}` } }}></use>
      </svg>
    )
  }
}
