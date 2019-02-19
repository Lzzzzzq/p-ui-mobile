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
    Header: () => import('../components/docs/header'),
    List: () => import('../components/docs/list'),
    Intro: () => import('../components/docs/intro')
  }
}
</script>

<style scoped lang="less">
.docsWrap {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .docsMain {
    flex: 1;
    display: flex;
  }
}
</style>
