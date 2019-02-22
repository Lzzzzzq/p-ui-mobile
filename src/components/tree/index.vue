<template>
  <div class="treeWrap">
    <Tree
      rootCls="treeRootNode"
      v-for="(item, index) in data"
      :index="index"
      :key="`root-${index}`"
      :data="item"
      :onNodeClick="handleNodeClick"
      :activeCls="activeCls"
      :activeId="activeId"
    ></Tree>
  </div>
</template>

<script>
import Tree from './tree'

export default {
  name: 'TreeWrap',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    activeCls: {
      type: String,
      default: () => ''
    },
    activeId: {
      type: String,
      default: () => ''
    }
  },
  components: {
    Tree
  },
  methods: {
    handleNodeClick: function (data) {
      this.$emit('nodeClick', data)
    }
  }
}
</script>
