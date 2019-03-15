<template>
  <div :class="`${prefixCls}`" :style="{
    marginLeft: size,
    marginRight: size
  }">
    <slot></slot>
  </div>
</template>

<script>
import config from '../_util/config'

export default {
  name: 'PWingBlank',
  props: {
    size: {
      type: String,
      default: () => '16px'
    }
  },
  computed: {
    prefixCls: () => `${config.prefixCls}-wingblank`
  }
}
</script>
