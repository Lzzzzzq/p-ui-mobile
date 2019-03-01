<template>
  <div
    :class="{
      [`${prefixCls}-wrap`]: true
    }"
    :style="{
      'pointer-events': mask ? 'auto' : 'none',
      'padding-top': top
    }"
  >
    <transition
      name="fade"
      enter-active-class="animated bounceIn faster"
      leave-active-class="animated fadeOut faster"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
    >
      <div v-if="visible" :class="[`${prefixCls}-box`]">
        <div :class="[`${prefixCls}-icon`]" v-if="icon">
          <Icon :type="iconType"></Icon>
        </div>
        <div :class="[`${prefixCls}-text`]" v-html="msg" v-if="dangerouslyUseHTMLString"></div>
        <div :class="[`${prefixCls}-text`]" v-if="!dangerouslyUseHTMLString">{{msg}}</div>
      </div>
    </transition>
  </div>
</template>

<script>
import Icon from '../../icon'
import config from '../../_util/config'

export default {
  name: 'NToast',
  components: {
    Icon
  },
  computed: {
    prefixCls: () => `${config.prefixCls}-toast`
  },
  data () {
    return {
      msg: '提示',
      duration: 2000,
      visible: false,
      mask: false,
      icon: false,
      iconType: '',
      type: 'info',
      top: '38%',
      dangerouslyUseHTMLString: false
    }
  },
  watch: {
    type: {
      handler: function (newVal) {
        if (!newVal) return
        this.icon = false
        this.iconType = ''

        const iconType = {
          info: function () {
          },
          success: () => {
            this.icon = true
            this.iconType = 'icon-checkcircleo'
          },
          error: () => {
            this.icon = true
            this.iconType = 'icon-closecircleo'
          }
        }
        if (iconType[newVal]) iconType[newVal]()
      },
      immediate: false
    }
  },
  methods: {
    show: function () {
      this.visible = true
    },
    afterEnter: function () {
      setTimeout(() => {
        this.visible = false
      }, this.duration)
    },
    afterLeave: function () {
      this.hide()
      this.onClose()
    },
    onClose: function () {}
  }
}
</script>

<style lang='less'>
@import './toast.less';
</style>
