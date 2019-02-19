<template>
  <div class="wrap">
    <Tree
      :data="list"
      @nodeClick="handleNodeClick"
      activeCls="treeNodeActive"
      :activeId="activeId"
    ></Tree>
  </div>
</template>

<script>
import config from '../../config'
import Tree from '../tree/index'

export default {
  name: 'List',
  components: {
    Tree
  },
  data () {
    return {
      list: config.docList,
      activeId: ''
    }
  },
  methods: {
    handleNodeClick: function ({ path, id }) {
      if (path) {
        this.$router.push(path)
      }
      if (id) {
        console.log(id)
        this.activeId = id
      }
    }
  }
}
</script>

<style scoped lang="less">
@import '../../../components/style/common.less';

.wrap {
  flex: 0 0 260px;
  border-right: 1px solid @line-color-light;
  padding: 40px 0 0 40px;
  box-sizing: border-box;
}
</style>
<style lang="less">
@import '../../../components/style/common.less';

.treeNodeWrap {

  .treeNode {
    height: 40px;
    line-height: 40px;
    font-family: @font-family-base;
    font-size: @font-size-base;
    color: @text-color-base;
    cursor: pointer;
  }
  .treeNodeChildWrap {
    padding-left: 16px;
  }
  .treeParentNode {
    color: @text-color-sec;
    cursor: auto;
  }
  .treeRootNode {
    color: @text-color-base;
    cursor: pointer;
  }
  .treeNodeActive {
    // background-color: rgba(70, 145, 238, 0.7);
    background: linear-gradient(to right, #fff , rgba(70, 145, 238, 0.3));
  }
}
</style>
