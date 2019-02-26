<template>
  <div class="flexDocsWrap">
    <Md :mdData="mdData"></Md>
    <Demo src="/demo/flex"></Demo>
  </div>
</template>

<script>
import Md from '@vc/md'
import Demo from '@vc/demo'
import mdData from './flex.md'

export default {
  name: 'FlexDocs',
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
