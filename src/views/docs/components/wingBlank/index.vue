<template>
  <div class="wingBlankDocsWrap">
    <Md :mdData="mdData"></Md>
    <Demo src="/demo/wingBlank"></Demo>
  </div>
</template>

<script>
import Md from '@vc/md'
import Demo from '@vc/demo'
import mdData from './wingBlank.md'

export default {
  name: 'WingBlankDocs',
  components: {
    Md,
    Demo
  },
  data () {
    return {
      mdData
    }
  }
}
</script>
<style lang="less">
</style>
