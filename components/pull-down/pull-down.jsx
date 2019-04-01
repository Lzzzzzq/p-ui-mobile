import config from '../_util/config'
import classnames from 'classnames'

export default {
  name: 'PPullDown',
  computed: {
    prefixCls: () => `${config.prefixCls}-pull-down`,
    loadText: function () {
      switch (this.pullState) {
        case 0:
          return '下拉加载更多'
        case 1:
          return '释放加载更多'
        case 2:
          return '正在加载中'
        case 3:
          return '加载完成'
        default:
          return ''
      }
    }
  },
  props: {
    /**
     * 是否开启下拉刷新功能
     */
    pullDown: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      /**
       * 发生滚动的元素
       */
      scrollTarget: null,

      /**
       * 开始滑动时手指位置
       */
      startPos: 0,

      /**
       * 开始滑动时滚动条位置
       */
      startScrollPos: 0,

      /**
       * 手指滑动时当前位置
       */
      currentPos: 0,

      /**
       * 手指滑动时滚动条位置
       */
      currentScrollPos: 0,

      /**
       * 回弹动画
       */
      animate: false,

      /**
       * 滑动距离
       */
      translate: 0,

      /**
       * 拖动状态
       */
      pullState: 0,

      /**
       * 顶部加载元素高度
       */
      topDomHeight: 48,

      /**
       * 定时器
       */
      timer: null
    }
  },
  mounted: function () {
    this.$nextTick(() => {
      this.init()
    })
  },
  beforeDestroy: function () {
    this.removeEvent()
  },
  watch: {
    pullState: function (newState) {
      this.$emit('pullStateChange', newState)
    }
  },
  methods: {
    init: function () {
      this.scrollTarget = this.getScrollTarget(this.$el)
      this.bindEvent()
      this.topDomHeight = this.$refs.top.clientHeight
    },

    /**
     * 获取滚动的元素
     * @param {Object} element html元素
     */
    getScrollTarget (element) {
      let currentNode = element
      while (currentNode && currentNode.tagName !== 'HTML' &&
        currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
        let overflowY = document.defaultView.getComputedStyle(currentNode).overflowY
        if (overflowY === 'scroll' || overflowY === 'auto') {
          return currentNode
        }
        currentNode = currentNode.parentNode
      }
      return window
    },

    /**
     * 获取元素滚动距离
     * @param {Object} element html元素
     */
    getScrollTop (element) {
      if (element === window) {
        return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop)
      } else {
        return element.scrollTop
      }
    },

    /**
     * 绑定事件
     */
    bindEvent: function () {
      this.$el.addEventListener('touchstart', this.handleTouchStart)
      this.$el.addEventListener('touchmove', this.handleTouchMove)
      this.$el.addEventListener('touchend', this.handleTouchEnd)
    },

    /**
     * 移除绑定事件
     */
    removeEvent: function () {
      this.$el.removeEventListener('touchstart', this.handleTouchStart)
      this.$el.removeEventListener('touchmove', this.handleTouchMove)
      this.$el.removeEventListener('touchend', this.handleTouchEnd)
    },

    /**
     * 手指开始接触
     */
    handleTouchStart: function (e) {
      if (!this.pullDown) return
      let touch = e.touches[0]
      /**
       * 记录开始滑动时的位置
       */
      this.startPos = touch.clientY
      this.startScrollPos = this.getScrollTop(this.scrollTarget)
      this.animate = false
    },

    /**
     * 手指滑动
     */
    handleTouchMove: function (e) {
      /**
       * pullState = 0 默认状态
       * pullState = 1 滑动距离超过顶部加载提示
       * pullState = 2 正在加载中
       * pullState = 3 加载完成但还未恢复初始状态
       */
      if (!this.pullDown || this.pullState === 2 || this.pullState === 3) return
      let touch = e.touches[0]
      this.currentPos = touch.clientY
      this.currentScrollPos = this.getScrollTop(this.scrollTarget)
      let direction = this.currentPos - this.startPos > 0 ? 'down' : 'up'
      if (direction === 'down' && this.currentScrollPos === 0) {
        e.preventDefault()
        e.stopPropagation()
        let distance = (this.currentPos - this.startPos) / 2
        this.translate = distance
        if (distance > this.topDomHeight) {
          this.pullState = 1
        }
      }
    },

    /**
     * 手指停止接触
     */
    handleTouchEnd: function (e) {
      if (!this.pullDown || this.pullState === 2) return
      if (this.translate > 0) {
        e.preventDefault()
        e.stopPropagation()
        this.animate = true
        if (this.pullState === 1) {
          this.pullState = 2
          this.translate = this.topDomHeight
          this.$emit('pullDown', {
            finish: this.loadFinish
          })
        } else {
          this.translate = 0
        }
      }
    },

    /**
     * 加载结束
     */
    loadFinish: function () {
      this.pullState = 3
      this.translate = 0
      this.animate = true
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.transitionEnd()
      }, 400)
    },

    transitionEnd: function () {
      this.pullState = 0
      this.animate = false
      clearTimeout(this.timer)
    }
  },
  render (h) {
    const {
      // computed
      prefixCls,
      loadText,

      // data
      animate,
      translate,
      topDomHeight
    } = this

    const topDom = this.$slots.top ? (
      <div class={[`${prefixCls}-top-slot`]} ref="top" style={`top: ${-(topDomHeight)}px`}>
        {this.$slots.top}
      </div>
    ) : (
      <div class={[`${prefixCls}-top-default`]} style={`height: ${topDomHeight}px; line-height: ${topDomHeight}px; top: ${-(topDomHeight)}px`} ref="top">
        {loadText}
      </div>
    )

    return (
      <div
        class={[`${prefixCls}-wrap`]}
      >
        <div
          class={
            classnames({
              [`${prefixCls}-content`]: true,
              [`${prefixCls}-animate`]: animate
            })
          }
          style={`transform: translateY(${translate}px)`}
          ref="wrapper"
        >
          {topDom}
          {this.$slots.default || null}
        </div>
      </div>
    )
  }
}
