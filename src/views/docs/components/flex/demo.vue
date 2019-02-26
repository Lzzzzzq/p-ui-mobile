<template>
  <NumWingBlank>
    <NumWhiteSpace></NumWhiteSpace>
    <NumFlexWrap>
      <NumFlexItem><div class="flexItem">Block</div></NumFlexItem>
      <NumFlexItem><div class="flexItem">Block</div></NumFlexItem>
      <NumFlexItem><div class="flexItem">Block</div></NumFlexItem>
      <NumFlexItem><div class="flexItem">Block</div></NumFlexItem>
    </NumFlexWrap>
    <NumFlexWrap>
      <NumFlexItem><div class="flexItem">Block</div></NumFlexItem>
      <NumFlexItem><div class="flexItem">Block</div></NumFlexItem>
      <NumFlexItem><div class="flexItem">Block</div></NumFlexItem>
    </NumFlexWrap>
    <NumFlexWrap>
      <NumFlexItem><div class="flexItem">Block</div></NumFlexItem>
    </NumFlexWrap>
    <NumWhiteSpace></NumWhiteSpace>
    <NumFlexWrap direction="column">
      <NumFlexItem><div class="flexItem">Block</div></NumFlexItem>
      <NumFlexItem><div class="flexItem">Block</div></NumFlexItem>
      <NumFlexItem><div class="flexItem">Block</div></NumFlexItem>
    </NumFlexWrap>
  </NumWingBlank>
</template>

<script>
export default {
  name: 'WhiteSpaceDemo'
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
