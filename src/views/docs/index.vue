<template>
  <div class="docsWrap">
    <Header></Header>
    <div class="docsMain">
      <List></List>
      <Intro></Intro>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docs',
  components: {
    Header: () => import('@vc/header/header'),
    List: () => import('@vc/list/list'),
    Intro: () => import('@vc/intro/intro')
  }
}
</script>

<style scoped lang="less">
.docsWrap {
  position: relative;
  min-width: 1440px;
  // margin-right: 40px;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .docsMain {
    flex: 1;
    display: flex;
    overflow: hidden;
  }
}
</style>
