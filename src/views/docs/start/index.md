# 快速上手

## 安装

### 使用 npm 或者 yarn 进行安装

```bash
$ npm install --save p-ui-mobile
```

```bash
& yarn add p-ui-mobile
```

## 使用

### 完整引入

需先在 babel.config.js 中添加

```javascript
module.exports = {
  sourceType: 'unambiguous'
}
```

如需动画效果，需先安装 animate.css

```bash
yarn add animate.css
```

main.js

```javascript
import Vue from 'vue'
import animate from 'animate.css'
import PUI from 'p-ui-mobile'
import 'p-ui-mobile/lib/p-ui-mobile.css'
import App from './App'
Vue.config.productionTip = false

Vue.use(PUI)
Vue.use(animate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
```

### 按需引入（暂未支持）

需安装 babel-plugin-import

```bash
npm install --save-dev babel-plugin-import
```

在 babel.config.js 中添加

```javascript
module.exports = {
  plugins: [
    [
      'import', {
        'libraryName': 'p-ui-mobile',
        'libraryDirectory': 'components',
        'style': false
      }
    ]
  ]
}
```

```javascript
import Vue from 'vue'
import {Button, Modal} from 'p-ui-mobile'
import App from './App'
Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Modal)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
```