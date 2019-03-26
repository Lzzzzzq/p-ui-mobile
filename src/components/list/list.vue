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
import Tree from '../../components/tree/index'

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
  mounted: function () {
    this.activeId = this.$route.path
  },
  methods: {
    handleNodeClick: function ({ path, id }) {
      if (path) {
        this.$router.push(path)
        this.activeId = path
      }
    }
  }
}
</script>

<style scoped lang="less">
@import '../../../components/style/index.less';

.wrap {
  flex: 0 0 260px;
  border-right: 1px solid @line-color-light;
  padding: 30px 0;
  box-sizing: border-box;
  overflow-y: hidden;
  background-color: #fff;

  &:hover {
    overflow-y: auto;
  }
}
</style>
<style lang="less">
@import '../../../components/style/index.less';

.treeNodeWrap {

  .treeNode {
    height: 40px;
    line-height: 40px;
    font-family: @font-family-base;
    font-size: @font-size-base;
    color: @text-color-sec;
    cursor: pointer;
    padding-left: 40px;
    transition: all 0.3s;

    &:after {
      transition: all 0.5s;
      content: '';
    }
  }
  .treeNodeChildWrap {

    .treeNode {
      padding-left: 56px;
    }
    .treeNodeChildWrap {

      .treeNode {
        padding-left: 72px;
      }
    }
    // padding-left: 16px;
  }
  .treeParentNode {
    color: @text-color-tip;
    cursor: auto;
  }
  .treeRootNode {
    color: @text-color-sec;
    cursor: pointer;
  }
  .treeNodeActive {
    position: relative;
    background-color: #e6f7ff;
    color: #1890ff;

    &:after {
      content: '';
      display: block;
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 3px;
      background-color: #1890ff;
    }
  }
}
</style>
