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
      active: false
    }
  },
  computed: {
    prefixCls: () => `${config.prefixCls}-switch`
  },
  watch: {
    value: {
      handler: function (newState) {
        this.active = newState
      },
      immediate: true
    }
  },
  methods: {
    handleClick: function () {
      if (this.disabled) return
      this.$emit('input', !this.active)
      this.$emit('change', !this.active)
      this.active = !this.active
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
