<template>
  <div class="buttonDocsWrap">
    <Md :mdData="mdData"></Md>
    <Demo src="/demo/button"></Demo>
  </div>
</template>

<script>
import Md from '@vc/md'
import Demo from '@vc/demo'
import mdData from './button.md'

export default {
  name: 'ButtonDocs',
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
