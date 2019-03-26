# 触底加载 ReachBottom

将组件置于列表底部，触底后触发指定事件。

## 代码演示

```html
<template>
  <div class="wrap">
    <div v-for="item in listNum" :key="item" class="item">item{{item}}</div>
    <p-reach-bottom
      @reachBottom="handleLoadMore"
      ref="loadmore"
      :preloadDistance="0"
      @reachStateChange="handleChangeState"
      immediate
    ></p-reach-bottom>
  </div>
</template>
```

```js
export default {
  data () {
    return {
      listNum: 20
    }
  },
  methods: {
    handleLoadMore: function ({ finish }) {
      setTimeout(() => {
        // 通知组件加载完成
        this.$refs.loadmore.loadFinish()

        // 模拟增加内容
        this.listNum += 20

        // 模拟加载完全部
        if (this.listNum === 60) {
          this.$refs.loadmore.loadNomore()
        }
      }, 1000)
    },
    handleChangeState: function (newState) {
      console.log(newState)
    }
  }
}
```


## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| preloadDistance | 预加载距离 | number | 0 |
| immediate | 是否插入页面时直接判断是否触底 | boolean | false |

## 事件

| 事件名称 | 说明 |
| --- | --- |
| reachBottom | 触底后触发的事件，将会传递一个对象，对象中带有 finish 事件，触底后的异步操作执行完毕后，调用 finish 事件即可使组件恢复默认状态 |
| reachStateChange | 触底状态发生改变时触发，0 为默认，1 为正在加载，-1 为没有更多 |

## ref 事件

| 事件名称 | 说明 |
| --- | --- |
| loadFinish | 恢复组件为默认状态，功能与 reachBottom 回调中的 finish 相同 |
| loadNomore | 通知组件没有更多了 |
| loadInit | loadNomore 后，调用该方法恢复默认状态 |

## slot

上拉显示的元素可以自定义，需放在 slot 属性为 bottom 的元素内
