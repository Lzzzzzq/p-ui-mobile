<template>
  <i class="icon anticon" :class="{
    [`${prefixCls}`]: true,
    [type]: true
  }"></i>
</template>

<script>
import config from '../../_util/config'
import '../../_util/iconfont/iconfont.css'

export default {
  name: 'PIcon',
  props: {
    type: {
      type: String,
      default: () => ('')
    }
  },
  computed: {
    prefixCls: () => `${config.prefixCls}-icon`
  }
}
</script>

<style lang="less">
// @import '../../_util/iconfont/iconfont.css';
</style>
