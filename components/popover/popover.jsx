import classnames from 'classnames'
import config from '../_util/config'
import FlexWrap from '../flex/flex-wrap'

export default {
  name: 'PPopover',
  props: {
    placement: {
      type: String,
      default: () => 'top'
    },
    value: {
      type: Boolean,
      default: () => false
    }
  },
  computed: {
    prefixCls: () => `${config.prefixCls}-popover`,

    wrapDir: function () {
      let dir = 'row'
      if (this.placement.match('left')) {
        dir = 'row'
      } else if (this.placement.match('right')) {
        dir = 'row-reverse'
      } else if (this.placement.match('top')) {
        dir = 'column'
      } else if (this.placement.match('bottom')) {
        dir = 'column-reverse'
      }

      return dir
    },
    wrapAlign: function () {
      let align = 'center'
      // TODO
      // if (this.placement.match('left')) {
      //   align = 'center'
      // } else if (this.placement.match('right')) {
      //   align = 'center'
      // } else if (this.placement.match('top')) {
      //   align = 'end'
      // } else if (this.placement.match('bottom')) {
      //   align = 'column-reverse'
      // }

      return align
    },
    wrapJustify: function () {
      let justify = 'center'
      if (this.placement.match('left')) {
        justify = 'end'
      } else if (this.placement.match('right')) {
        justify = 'end'
      } else if (this.placement.match('top')) {
        justify = 'end'
      } else if (this.placement.match('bottom')) {
        justify = 'end'
      }

      return justify
    }
  },
  watch: {
    value: function (newState) {
      this.visible = newState
    }
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    show: function () {
      this.$emit('show')
    },
    hide: function () {
      this.$emit('close')
    }
  },
  render (h) {
    const {
      $slots,
      prefixCls,
      placement,
      wrapDir,
      wrapAlign,
      wrapJustify,
      show,
      hide,
      visible
    } = this

    return (
      <div class={`${prefixCls}-wrap`}>
        <transition
          enter-active-class={`animated bounceIn faster`}
          leave-active-class="animated zoomOut faster"
          on-after-enter={show}
          on-after-leave={hide}
        >
          {visible ? (
            <FlexWrap
              direction={wrapDir}
              align={wrapAlign}
              justify={wrapJustify}
              alignContent={wrapAlign}
              class={
                classnames({
                  [`${prefixCls}-item`]: true,
                  [`${prefixCls}-item-${placement}`]: true
                })
              }
            >
              <div class={
                classnames({
                  [`${prefixCls}-item-inner`]: true,
                  [`${prefixCls}-item-inner-${placement}`]: true
                })
              }>
                {($slots.popover && $slots.popover[0]) || null}
              </div>
            </FlexWrap>
          ) : null}
        </transition>
        {($slots.default && $slots.default[0]) || null}
      </div>
    )
  }
}
