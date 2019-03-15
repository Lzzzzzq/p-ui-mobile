<template>
  <div :class="`${prefixCls}`"><slot></slot></div>
</template>

<script>
import config from '../_util/config'

export default {
  name: 'PFlexItem',
  computed: {
    prefixCls: () => `${config.prefixCls}-flex-item`
  }
}
</script>
