<template>
  <a
    class="numBtnWrap"
    :class="{
      [`${type}NumBtn`]: true,
      'numBtnActive': active,
      'numBtnDisabled': disabled,
      'numBtnInline': inline,
      'numBtnSmall': size === 'small'
    }"
    @touchstart="handleTouchStart"
    @mousedown="handleTouchStart"

    @touchmove="handleMoveOut"
    @mousemove="handleMoveOut"
    @touchend="handleMoveOut"
    @mouseup="handleMoveOut"

    @click="handleClick"
  >
    <Icon v-if="icon" :type="icon" class="numBtnIcon"></Icon>
    <span class="numBtnText"><slot></slot></span>
  </a>
</template>

<script>
export default {
  name: 'NumButton',
  components: {
    Icon: () => import('../../icon')
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
    activeFeedback: {
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
  methods: {
    handleTouchStart: function () {
      if (this.active || this.disabled || !this.activeFeedback) return
      this.active = true
    },
    handleMoveOut: function () {
      if (!this.active || this.disabled || !this.activeFeedback) return
      this.active = false
    },
    handleClick: function () {
      if (this.disabled) return
      this.$emit('click')
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>
