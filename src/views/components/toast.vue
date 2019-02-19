<template>
  <div>
    <Md :mdData="mdData"></Md>
  </div>
</template>

<script>
import Md from '../../components/md'
import mdData from '../../md/toast.md'

export default {
  name: 'ToastDocs',
  components: {
    Md
  },
  data () {
    return {
      mdData
    }
  }
}
</script>

<style>

</style>
