<template>
  <p-wing-blank>
    <p-white-space></p-white-space>
    <p-flex-wrap>
      <p-flex-item><div class="flexItem">Block</div></p-flex-item>
      <p-flex-item><div class="flexItem">Block</div></p-flex-item>
      <p-flex-item><div class="flexItem">Block</div></p-flex-item>
      <p-flex-item><div class="flexItem">Block</div></p-flex-item>
    </p-flex-wrap>
    <p-flex-wrap>
      <p-flex-item><div class="flexItem">Block</div></p-flex-item>
      <p-flex-item><div class="flexItem">Block</div></p-flex-item>
      <p-flex-item><div class="flexItem">Block</div></p-flex-item>
    </p-flex-wrap>
    <p-flex-wrap>
      <p-flex-item><div class="flexItem">Block</div></p-flex-item>
    </p-flex-wrap>
    <p-white-space></p-white-space>
    <p-flex-wrap direction="column">
      <p-flex-item><div class="flexItem">Block</div></p-flex-item>
      <p-flex-item><div class="flexItem">Block</div></p-flex-item>
      <p-flex-item><div class="flexItem">Block</div></p-flex-item>
    </p-flex-wrap>
  </p-wing-blank>
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
