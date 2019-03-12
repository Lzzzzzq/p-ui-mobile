import config from '../../_util/config'
import classnames from 'classnames'
import FlexWrap from '../../flex/src/flex-wrap'
import './index.less'

export default {
  name: 'PBadge',
  props: {
    size: {
      type: String,
      default: () => 'normal'
    },
    type: {
      type: String,
      default: () => 'primary'
    },
    border: {
      type: Boolean,
      default: () => false
    },
    radiusCircle: {
      type: Boolean,
      default: () => false
    }
  },
  computed: {
    prefixCls: () => `${config.prefixCls}-badge`
  },
  render (h) {
    const {
      $slots,
      prefixCls,
      size,
      type,
      border,
      radiusCircle
    } = this

    if (!$slots || !$slots.default || !$slots.default[0]) {
      return null
    }

    return (
      <div
        class={
          classnames({
            [`${prefixCls}-wrap`]: true
          })
        }
      >
        <FlexWrap
          class={
            classnames({
              [`${prefixCls}-item`]: true,
              [`${prefixCls}-${size}`]: true,
              [`${prefixCls}-${type}`]: true,
              [`${prefixCls}-border`]: border,
              [`${prefixCls}-circle`]: radiusCircle
            })
          }
          alignContent="center"
        >
          {$slots.default && $slots.default[0]}
        </FlexWrap>
      </div>
    )
  }
}
