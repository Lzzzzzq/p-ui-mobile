<template>
  <div class="__component__DocsWrap">
    <Md :mdData="mdData"></Md>
    <Demo src="/demo/__component__"></Demo>
  </div>
</template>

<script>
import Md from '@vc/md'
import Demo from '@vc/demo'
import mdData from './__component__.md'

export default {
  name: '__component__Docs',
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
