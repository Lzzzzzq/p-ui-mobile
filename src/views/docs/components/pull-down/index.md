# 下拉刷新 PullDown

下拉后触发指定事件。

## 代码演示

```html
<p-pull-down
  :pullDown="true"
  @pullDown="handlePullDown"
  @pullStateChange="handleStateChange"
  ref="pullDown"
>
  <div v-for="item in 20" :key="item" class="item">item{{item}}</div>
</p-pull-down>
```

```js
export default {
  name: 'PullDownDemo',
  methods: {
    handlePullDown: function ({ finish }) {
      setTimeout(() => {
        this.$refs.pullDown.loadFinish()
      }, 2000)
    },
    handleStateChange: function (newState) {
      console.log(newState)
    }
  }
}
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| pullDown | 是否开启下拉刷新功能 | boolean | true |

## 事件

| 事件名称 | 说明 |
| --- | --- |
| pullDown | 下拉后触发的事件，将会传递一个对象，对象中带有 finish 事件，下拉后的异步操作执行完毕后，调用 finish 事件即可使组件恢复默认状态 |
| pullStateChange | 下拉状态发生改变时触发，0 为默认，1 为下拉超过临界位置，2 为正在加载，3 为加载完成 |

## ref 事件

| 事件名称 | 说明 |
| --- | --- |
| loadFinish | 恢复组件为默认状态，功能与 pullDown 回调中的 finish 相同 |

## slot

下拉滑出的元素可以自定义，需放在 slot 属性为 top 的元素内
