<template>
  <transition
    enter-active-class="animated fadeIn faster"
    leave-active-class="animated fadeOut faster"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
  >
    <div
      :class="{
        [`${prefixCls}-wrap`]: true
      }"
      v-if="wrapVisible"
      @click.self="handleClickMask"
    >
      <transition
        :enter-active-class="`animated faster ${side === 'right' ? 'slideInRight' : 'slideInLeft'}`"
        :leave-active-class="`animated faster ${side === 'right' ? 'slideOutRight' : 'slideOutLeft'}`"
      >
        <div
          :class="{
            [`${prefixCls}-item`]: true,
            [`${prefixCls}-${side}`]: true
          }"
          :style="{
            'left': side === 'right' ? distance : 0,
            'right': side === 'left' ? distance : 0
          }"
          v-if="itemVisible"
        >
          <slot></slot>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import config from '../../_util/config'

export default {
  name: 'PDrawer',
  props: {
    value: {
      type: Boolean,
      default: () => false
    },
    side: {
      type: String,
      default: () => 'left'
    },
    distance: {
      type: String,
      default: () => '30%'
    },
    closeByTouchMask: {
      type: Boolean,
      default: () => true
    }
  },
  watch: {
    value: function (newVal) {
      if (newVal) {
        this.wrapVisible = true
        window.requestAnimationFrame(() => {
          this.itemVisible = true
        })
      } else {
        this.itemVisible = false
        window.requestAnimationFrame(() => {
          this.wrapVisible = false
        })
      }
    }
  },
  computed: {
    prefixCls: () => `${config.prefixCls}-drawer`
  },
  data () {
    return {
      wrapVisible: false,
      itemVisible: false
    }
  },
  methods: {
    /**
     * 显示后
     */
    afterEnter: function () {
      this.$emit('show')
    },

    /**
     * 隐藏后
     */
    afterLeave: function () {
      this.$emit('hide')
    },

    /**
     * 点击了遮罩层
     */
    handleClickMask: function () {
      if (!this.closeByTouchMask) return
      this.$emit('input', false)
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>
