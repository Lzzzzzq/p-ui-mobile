<template>
  <div :class="`${prefixCls}`" :style="{
    height: size
  }"></div>
</template>

<script>
import config from '../_util/config'

export default {
  name: 'PWhiteSpace',
  props: {
    size: {
      type: String,
      default: () => '10px'
    }
  },
  computed: {
    prefixCls: () => `${config.prefixCls}-whitespace`
  }
}
</script>
