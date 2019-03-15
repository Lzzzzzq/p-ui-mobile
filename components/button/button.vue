<template>
  <a
    :class="{
      [`${prefixCls}-wrap`]: true,
      [`${prefixCls}-${type}`]: true,
      [`${prefixCls}-active`]: active,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-inline`]: inline,
      [`${prefixCls}-${size}`]: true,
    }"

    @touchstart="handleTouchStart"
    @mousedown="handleTouchStart"

    @touchmove="handleMoveOut"
    @mousemove="handleMoveOut"

    @touchend="handleMoveOut"
    @mouseup="handleMoveOut"

    @click="handleClick"
  >
    <Icon
      v-if="icon"
      :type="icon"
      :class="{
        [`${prefixCls}-icon`]: true
      }"
    ></Icon>
    <span
      v-if="type !== 'icon'"
      :class="{
        [`${prefixCls}-text`]: true
      }"
    ><slot></slot></span>
  </a>
</template>

<script>
import config from '../_util/config'
import Icon from '../icon/icon'

export default {
  name: 'PButton',
  components: {
    Icon
  },
  props: {
    type: {
      type: String,
      default: () => 'default'
    },
    disabled: {
      type: Boolean,
      default: () => false
    },
    inline: {
      type: Boolean,
      default: () => false
    },
    size: {
      type: String,
      default: () => 'normal'
    },
    activeStyle: {
      type: Boolean,
      default: () => true
    },
    icon: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      active: false
    }
  },
  computed: {
    prefixCls: () => `${config.prefixCls}-btn`
  },
  methods: {
    handleTouchStart: function () {
      if (this.active || this.disabled || !this.activeStyle) return
      this.active = true
    },
    handleMoveOut: function () {
      if (!this.active || this.disabled || !this.activeStyle) return
      this.active = false
    },
    handleClick: function () {
      if (this.disabled) return
      this.$emit('click')
    }
  }
}
</script>
