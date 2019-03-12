# flex布局 Flex

布局组件，基于 flex 布局的封装。

## 代码演示

```html
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

<p-flex-wrap direction="column">
  <p-flex-item><div class="flexItem">Block</div></p-flex-item>
  <p-flex-item><div class="flexItem">Block</div></p-flex-item>
  <p-flex-item><div class="flexItem">Block</div></p-flex-item>
</p-flex-wrap>
```

## API

### FlexWrap

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 项目定位方向，值可以为 row、row-reverse、column、column-reverse | string | 'row' |
| wrap | 子元素的换行方式，可选nowrap、wrap、wrap-reverse | string | 'nowrap' |
| justify | 子元素在主轴上的对齐方式，可选start、end、center、between、around | string | 'start' |
| align | 子元素在交叉轴上的对齐方式，可选start、center、end、baseline、stretch | string | 'center' |
| alignContent | 有多根轴线时的对齐方式，可选start、end、center、between、around、stretch | string | 'stretch' |

### FlexItem

FlexItem 组件默认加上了样式 flex:1 ,保证所有 item 平均分宽度, FlexWrap 容器的 children 不一定是 FlexItem

