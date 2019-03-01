<template>
  <n-wing-blank>
    <n-white-space></n-white-space>
    <n-flex-wrap>
      <n-flex-item><div class="flexItem">Block</div></n-flex-item>
      <n-flex-item><div class="flexItem">Block</div></n-flex-item>
      <n-flex-item><div class="flexItem">Block</div></n-flex-item>
      <n-flex-item><div class="flexItem">Block</div></n-flex-item>
    </n-flex-wrap>
    <n-flex-wrap>
      <n-flex-item><div class="flexItem">Block</div></n-flex-item>
      <n-flex-item><div class="flexItem">Block</div></n-flex-item>
      <n-flex-item><div class="flexItem">Block</div></n-flex-item>
    </n-flex-wrap>
    <n-flex-wrap>
      <n-flex-item><div class="flexItem">Block</div></n-flex-item>
    </n-flex-wrap>
    <n-white-space></n-white-space>
    <n-flex-wrap direction="column">
      <n-flex-item><div class="flexItem">Block</div></n-flex-item>
      <n-flex-item><div class="flexItem">Block</div></n-flex-item>
      <n-flex-item><div class="flexItem">Block</div></n-flex-item>
    </n-flex-wrap>
  </n-wing-blank>
</template>

<script>
export default {
  name: 'FlexDemo'
}
</script>

<style>
.flexItem {
  /* width: 100%; */
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: lightgray;
  border-radius: 4px;
  margin: 2px 10px;
  padding: 0 4px;
}
</style>
