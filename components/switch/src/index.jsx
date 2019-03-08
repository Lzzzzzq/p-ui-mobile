import config from '../../_util/config'
import classnames from 'classnames'
import './index.less'

export default {
  name: 'PSwitch',
  props: {
    value: {
      type: Boolean,
      default: () => false
    },
    disabled: {
      type: Boolean,
      default: () => false
    },
    type: {
      type: String,
      default: () => 'primary'
    }
  },
  data () {
    return {
    }
  },
  computed: {
    prefixCls: () => `${config.prefixCls}-switch`,
    active: function () {
      return this.value
    }
  },
  methods: {
    handleClick: function () {
      if (this.disabled) return
      this.$emit('input', !this.value)
      this.$emit('change', !this.value)
    }
  },
  render (h) {
    const {
      prefixCls,
      active,
      disabled,
      type,
      handleClick
    } = this

    return (
      <div
        class={
          classnames({
            [`${prefixCls}-wrap`]: true,
            [`${prefixCls}-wrap-active`]: active,
            [`${prefixCls}-disabled`]: disabled,
            [`${prefixCls}-${type}`]: true
          })
        }
        on-click={handleClick}
      >
        <div class={
          classnames({
            [`${prefixCls}-item`]: true,
            [`${prefixCls}-item-active`]: active
          })
        }>

        </div>
      </div>
    )
  }
}
