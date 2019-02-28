<template>
  <div class="drawerDocsWrap">
    <Md :mdData="mdData"></Md>
    <Demo src="/demo/drawer"></Demo>
  </div>
</template>

<script>
import Md from '@vc/md'
import Demo from '@vc/demo'
import mdData from './drawer.md'

export default {
  name: 'DrawerDocs',
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
