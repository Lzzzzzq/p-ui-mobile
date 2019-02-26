<template>
  <div class="whiteSpaceDocsWrap">
    <Md :mdData="mdData"></Md>
    <Demo src="/demo/whiteSpace"></Demo>
  </div>
</template>

<script>
import Md from '@vc/md'
import Demo from '@vc/demo'
import mdData from './whiteSpace.md'

export default {
  name: 'WhiteSpaceDocs',
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
