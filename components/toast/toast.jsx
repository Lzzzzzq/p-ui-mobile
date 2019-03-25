import config from '../_util/config'

export default {
  name: 'PToast',
  components: {
    Icon: () => import('../icon/icon')
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
      jsx: false,
      domNode: () => {}
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
            this.iconType = 'icon-success'
          },
          error: () => {
            this.icon = true
            this.iconType = 'icon-warning'
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
  },
  render (h) {
    const {
      iconType,
      visible,
      jsx
    } = this

    const iconShow = iconType ? (
      <div class={`${this.prefixCls}-icon`}>
        <Icon type={this.iconType}></Icon>
      </div>
    ) : null

    const toastShow = visible ? (
      <div class={`${this.prefixCls}-box`}>
        {iconShow}
        <div class={`${this.prefixCls}-text`}>
          {jsx ? this.domNode(h) : this.msg}
        </div>
      </div>
    ) : null

    return (
      <div
        class={`${this.prefixCls}-wrap`}
        style={{
          'pointer-events': this.mask ? 'auto' : 'none',
          'padding-top': this.top
        }}
      >
        <transition
          enter-active-class="animated bounceIn faster"
          leave-active-class="animated zoomOut faster"
          on-after-enter={this.afterEnter}
          on-after-leave={this.afterLeave}
        >
          {toastShow}
        </transition>
      </div>
    )
  }
}
