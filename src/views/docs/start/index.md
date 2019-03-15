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

如需动画效果，需先安装 animate.css

```bash
yarn add animate.css
```

### 完整引入

main.js

```javascript
import Vue from 'vue'
import App from './App'

import animate from 'animate.css'
import PUI from 'p-ui-mobile'
import 'p-ui-mobile/lib/style.css'

Vue.config.productionTip = false

Vue.use(animate)
Vue.use(PUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
```

### 按需引入

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
        'style': true
      }
    ]
  ]
}
```

main.js

**注意：需要使用的组件都需要引入，否则可能出现样式错误的情况，如 button 和 toast 组件中，可能使用了 icon**

```javascript
import Vue from 'vue'
import App from './App'

import {Button, Modal, Icon} from 'p-ui-mobile'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Modal)
Vue.use(Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
```
