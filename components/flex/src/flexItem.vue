<template>
  <div :class="`${prefixCls}`"><slot></slot></div>
</template>

<script>
import config from '../../_util/config'

export default {
  name: 'NumFlexItem',
  computed: {
    prefixCls: () => `${config.prefixCls}-flex-item`
  }
}
</script>

<style lang="less">
@import './index.less';
</style>
