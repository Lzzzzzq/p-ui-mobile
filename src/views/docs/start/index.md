# 快速上手

## 安装

### 使用 npm 或者 yarn 进行安装

```bash
$ npm install --save news-ui-mobile
```

```bash
& yarn add news-ui-mobile
```

## 使用

### 完整引入

需先在 babel.config.js 中添加

```javascript
module.exports = {
  sourceType: 'unambiguous'
}
```

main.js

```javascript
import Vue from 'vue'
import NewsUI from 'news-ui-mobile'
import 'news-ui-mobile/lib/news-ui-mobile.css'
import App from './App'
Vue.config.productionTip = false

Vue.use(NewsUI)

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
        'libraryName': 'news-ui-mobile',
        'libraryDirectory': 'components',
        'style': false
      }
    ]
  ]
}
```

```javascript
import Vue from 'vue'
import {Button, Modal} from 'news-ui-mobile'
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