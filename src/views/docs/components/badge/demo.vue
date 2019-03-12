<template>
  <p-wing-blank>
    <p-white-space></p-white-space>
    <div>尺寸</div>
    <p-white-space></p-white-space>

    <p-badge>normal</p-badge>
    &nbsp;&nbsp;
    <p-badge size="small">small</p-badge>

    <p-white-space></p-white-space>
    <div>类型</div>
    <p-white-space></p-white-space>

    <p-badge>primary</p-badge>
    &nbsp;&nbsp;
    <p-badge type="error">error</p-badge>
    &nbsp;&nbsp;
    <p-badge type="warning">warning</p-badge>
    &nbsp;&nbsp;
    <p-badge type="success">success</p-badge>

    <p-white-space></p-white-space>
    <div>圆角</div>
    <p-white-space></p-white-space>

    <p-badge>normal</p-badge>
    &nbsp;&nbsp;
    <p-badge radiusCircle>circle</p-badge>

    <p-white-space></p-white-space>
    <div>边框</div>
    <p-white-space></p-white-space>

    <p-badge>normal</p-badge>
    &nbsp;&nbsp;
    <p-badge border>border</p-badge>

  </p-wing-blank>
</template>

<script>
export default {
  name: 'BadgeDemo'
}
</script>
