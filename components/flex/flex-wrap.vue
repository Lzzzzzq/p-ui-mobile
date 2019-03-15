<template>
  <div
    :class="{
      [`${prefixCls}`]: true,
      [`${prefixCls}-dir-${direction}`]: direction,
      [`${prefixCls}-${wrap}`]: wrap,
      [`${prefixCls}-justify-${justify}`]: justify,
      [`${prefixCls}-align-${align}`]: align,
      [`${prefixCls}-align-content-${alignContent}`]: alignContent
    }"
  ><slot></slot></div>
</template>

<script>
import config from '../_util/config'

export default {
  name: 'PFlexWrap',
  props: {
    direction: {
      type: String,
      default: () => ''
    },
    wrap: {
      type: String,
      default: () => ''
    },
    justify: {
      type: String,
      default: () => ''
    },
    align: {
      type: String,
      default: () => ''
    },
    alignContent: {
      type: String,
      default: () => ''
    }
  },
  computed: {
    prefixCls: () => `${config.prefixCls}-flex-wrap`
  }
}
</script>
