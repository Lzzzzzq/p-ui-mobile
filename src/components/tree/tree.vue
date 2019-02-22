<template>
  <div class="treeNodeWrap">
    <div
      class="treeNode"
      :class="{
        'treeParentNode': !!data.child,
        [rootCls]: true,
        [activeCls]: activeId && activeId === data.id
      }"
      :nodeId="nodeId"
      @click="handleClickNode(data)"
    >{{data.name}}</div>
    <div class="treeNodeChildWrap" v-if="data.child">
      <Tree
        v-for="(item, childIndex) in data.child"
        :key="`node-${childIndex}`"
        :data="item"
        :onNodeClick="onNodeClick"
        :index="childIndex"
        :parentNodeId="nodeId"
        :activeCls="activeCls"
        :activeId="activeId"
      ></Tree>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tree',
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    onNodeClick: {
      type: Function
    },
    rootCls: {
      type: String,
      default: () => ''
    },
    activeCls: {
      type: String,
      default: () => ''
    },
    index: {
      type: Number
    },
    parentNodeId: {
      type: String
    },
    activeId: {
      type: String
    }
  },
  computed: {
    nodeId: function () {
      return this.parentNodeId ? this.parentNodeId + `-${this.index}` : `node-${this.index}`
    }
  },
  methods: {
    handleClickNode: function (data) {
      this.onNodeClick(data)
    }
  }
}
</script>

<style>

</style>
