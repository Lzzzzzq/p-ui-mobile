import config from '../_util/config'
import classnames from 'classnames'
import throttle from 'lodash.throttle'

export default {
  name: 'PReachBottom',
  computed: {
    prefixCls: () => `${config.prefixCls}-reach-bottom`,
    loadText: function () {
      switch (this.reachState) {
        case -1:
          return '没有更多了'
        case 0:
          return '上滑加载更多'
        case 1:
          return '正在加载中'
        default:
          return ''
      }
    }
  },
  watch: {
    reachState: function (newState) {
      this.$emit('reachStateChange', newState)
    }
  },
  props: {

    /**
     * 预执行距离
     */
    preloadDistance: {
      type: Number,
      default: 0
    },

    /**
     * 是否立即执行
     */
    immediate: {
      type: Boolean,
      default: false
    }

  },
  data () {
    return {
      /**
       * 发生滚动的元素
       */
      scrollTarget: null,

      /**
       * 滑动事件
       */
      scrolEvent: null,

      /**
       * 触底状态
       */
      reachState: 0,

      /**
       * 底部元素高度
       */
      bottomDomHeight: 0,

      /**
       * 容器高低压
       */
      containerHeight: 0
    }
  },
  mounted: function () {
    this.$nextTick(this.init)
  },
  beforeDestroy: function () {
    this.removeEvent()
  },
  methods: {
    init: function () {
      this.scrollTarget = this.getScrollTarget(this.$el)
      this.bottomDomHeight = this.$refs.wrapper.getClientRects()[0]
      this.bindEvent()
      if (this.immediate) {
        this.handleScroll()
      }
    },

    /**
     * 绑定事件
     */
    bindEvent: function () {
      this.scrollEvent = throttle(this.handleScroll, 16)
      this.scrollTarget.addEventListener('scroll', this.scrollEvent)
    },

    /**
     * 移除事件
     */
    removeEvent: function () {
      this.scrollTarget.removeEventListener('scroll', this.scrollEvent)
    },

    /**
     * 滚动事件触发
     */
    handleScroll: function () {
      if (this.reachState !== 0) return
      const top = this.$refs.wrapper.getClientRects()[0].top
      // 低版本安卓下会相差1px
      if (top - 2 <= this.containerHeight + this.preloadDistance) {
        this.reachState = 1
        this.$emit('reachBottom', {
          finish: this.loadFinish
        })
      }
    },

    /**
     * 加载完毕
     */
    loadFinish: function () {
      this.reachState = 0
    },

    /**
     * 没有更多了
     */
    loadNomore: function () {
      this.reachState = -1
    },

    /**
     * 初始化加载状态
     */
    loadInit: function () {
      this.reachState = 0
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
          this.containerHeight = currentNode.offsetHeight
          return currentNode
        }
        currentNode = currentNode.parentNode
      }
      this.containerHeight = (document.documentElement || document.body).clientHeight
      return document
    }
  },
  render (h) {
    const {
      // computed
      prefixCls,
      loadText
    } = this

    return (
      <div
        class={
          classnames({
            [`${prefixCls}-wrap`]: true,
            [`${prefixCls}-default`]: !this.$slots.default
          })
        }
        ref="wrapper"
      >
        {this.$slots.bottom || loadText}
      </div>
    )
  }
}
