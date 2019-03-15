<template>
  <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
    <div
      :class="{
        [`${prefixCls}-wrap`]: true
      }"
      v-if="modelValue"
      @click.self="handleClickMask"
    >
      <transition
        enter-active-class="animated slideInUp faster"
        leave-active-class="animated slideOutDown faster"
      >
        <div :class="{[`${prefixCls}-container`]: true}" v-if="currentValue">
          <div :class="{[`${prefixCls}-title`]: true}" v-if="titleText">{{titleText}}</div>
          <ul :class="{[`${prefixCls}-list`]:true}">
            <li
              :class="{
                [`${prefixCls}-item`]:true
              }"
              v-for="(item,index) in actions"
              :key="index"
              @click.stop="itemClick(item,index)"
            >{{item}}</li>
          </ul>
          <div
            :class="{
              [`${prefixCls}-btn`]: true
            }"
            @click.stop="cancelAction"
            v-if="cancelText"
          >{{cancelText}}</div>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
import config from '../_util/config'

export default {
  name: 'PActionSheet',
  data () {
    return {
      modelValue: false,
      currentValue: false
    }
  },
  props: {
    value: {
      default: false
    },
    closeByTouchMask: {
      default: true
    },
    titleText: {
      type: String,
      default: '标题'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    actions: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    currentValue (val) {
      this.$emit('input', val)
    },
    value (val) {
      if (val) {
        this.modelValue = true
        window.requestAnimationFrame(() => {
          this.currentValue = true
        })
      } else {
        this.currentValue = false
        window.requestAnimationFrame(() => {
          this.modelValue = false
        })
      }
    }
  },
  computed: {
    prefixCls: () => `${config.prefixCls}-actionsheet`
  },
  methods: {
    itemClick (item, index) {
      // if (item.method && typeof item.method === 'function') {
      //     item.method(item, index)
      // }
      this.$emit('selected', item, index)
      this.currentValue = false
    },
    handleClickMask () {
      if (!this.closeByTouchMask) return
      this.currentValue = false
    },
    cancelAction () {
      this.currentValue = false
    }
  }
}
</script>
