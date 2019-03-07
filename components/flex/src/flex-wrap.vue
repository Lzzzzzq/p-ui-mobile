<template>
  <div
    :class="{
      [`${prefixCls}`]: true,
      [`${prefixCls}-dir-${direction}`]: true,
      [`${prefixCls}-${wrap}`]: true,
      [`${prefixCls}-justify-${justify}`]: true,
      [`${prefixCls}-align-${align}`]: true,
      [`${prefixCls}-align-content-${alignContent}`]: true
    }"
  ><slot></slot></div>
</template>

<script>
import config from '../../_util/config'

export default {
  name: 'PFlexWrap',
  props: {
    direction: {
      type: String,
      default: () => 'row'
    },
    wrap: {
      type: String,
      default: () => 'nowrap'
    },
    justify: {
      type: String,
      default: () => 'start'
    },
    align: {
      type: String,
      default: () => 'center'
    },
    alignContent: {
      type: String,
      default: () => 'stretch'
    }
  },
  computed: {
    prefixCls: () => `${config.prefixCls}-flex-wrap`
  }
}
</script>

<style lang="less">
@import './index.less';
</style>
