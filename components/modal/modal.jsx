import config from '../_util/config'
import FlexWrap from '../flex/flex-wrap'
import FlexItem from '../flex/flex-item'

const Modal = {
  name: 'PModal',
  data () {
    return {
      wrapVisible: false,
      boxVisible: false
    }
  },
  computed: {
    prefixCls: () => `${config.prefixCls}-modal`
  },
  mounted: function () {
  },
  methods: {
    show: function () {
      this.wrapVisible = true
      window.requestAnimationFrame(() => {
        this.boxVisible = true
      })
    },

    hide: function () {
      this.boxVisible = false
      window.requestAnimationFrame(() => {
        this.wrapVisible = false
      })
    },

    handleClickMask: function (e) {
      if (e.currentTarget === e.target && this.closeByTouchMask) {
        this.hide()
      }
    }
  },
  render (h) {
    const {
      handleClickMask,
      onOpen,
      onClose,
      wrapVisible,
      prefixCls,
      title,
      message,
      boxVisible,
      type,
      onOk,
      onCancel,
      hide,
      jsx,
      domNode,
      cancelText,
      okText
    } = this

    const box = boxVisible ? (
      <div class={`${prefixCls}-box`}>
        {
          title ? (
            <div class={`${prefixCls}-title`}>
              {title}
            </div>
          ) : null
        }
        <div class={`${prefixCls}-message`}>
          {jsx ? domNode(h) : message}
        </div>
        <FlexWrap class={`${prefixCls}-control`}>
          {type === 'confirm' ? (
            <FlexItem class={`${prefixCls}-control-btn ${prefixCls}-control-cancel`} nativeOn-click={async () => {
              try {
                await onCancel()
              } catch (e) {} finally {
                hide()
              }
            }}>
              {cancelText}
            </FlexItem>
          ) : null}
          <FlexItem class={`${prefixCls}-control-btn ${prefixCls}-control-ok`} nativeOn-click={async () => {
            try {
              await onOk()
            } catch (e) {} finally {
              hide()
            }
          }}>
            {okText}
          </FlexItem>
        </FlexWrap>
      </div>
    ) : null

    const mask = wrapVisible ? (
      <div class={`${prefixCls}-wrap`} on-click={handleClickMask}>
        <transition
          enter-active-class="animated bounceIn faster"
          leave-active-class="animated zoomOut faster"
        >
          {box}
        </transition>
      </div>
    ) : null

    return (
      <transition
        enter-active-class="animated fadeIn fastest"
        leave-active-class="animated fadeOut fastest"
        on-after-enter={onOpen}
        on-after-leave={onClose}
      >
        {mask}
      </transition>
    )
  }
}

export default Modal
