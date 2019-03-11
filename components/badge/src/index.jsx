import config from '../../_util/config'
import classnames from 'classnames'
import FlexWrap from '../../flex/src/flex-wrap'
import './index.less'

export default {
  name: 'PBadge',
  props: {
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
    },
    height: {
      type: String,
      default: () => ''
    }
  },
  computed: {
    prefixCls: () => `${config.prefixCls}-badge`
  },
  render (h) {
    const {
      $slots,
      prefixCls,
      type,
      border,
      radiusCircle,
      height
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
              [`${prefixCls}-${type}`]: true,
              [`${prefixCls}-border`]: border,
              [`${prefixCls}-circle`]: radiusCircle
            })
          }
          style={{
            height: height || '',
            borderRadius: height ? parseFloat(height) / 2 + height.replace(/[0-9]*/g, '') : ''
          }}
          alignContent="center"
        >
          {$slots.default && $slots.default[0]}
        </FlexWrap>
      </div>
    )
  }
}
