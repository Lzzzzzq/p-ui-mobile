<template>
  <div>
    <Md :mdData="mdData"></Md>
    <Demo src="/demo/toast"></Demo>
  </div>
</template>

<script>
import Md from '@vc/md'
import Demo from '@vc/demo'
import mdData from './toast.md'

export default {
  name: 'ToastDocs',
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
