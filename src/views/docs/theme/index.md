# 定制主题

p-ui-mobile 设计规范上支持一定程度的样式定制，以满足业务和品牌上多样化的视觉需求，包括但不限于主色、圆角、边框和部分组件的视觉定制。

## 样式变量

组件库的样式使用了 Less 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。

以下是一些最常用的通用变量。

```less

// 基本单位
@hd: 1px;

// 品牌色
@brand-primary-color: #108ee9;
@brand-primary-color-tap: #0e80d2;
@brand-primary-bg: #252525;
@brand-link-color: #4691ee;
@brand-success-color: #009900;
@brand-error-color: #e93030;
@brand-warning-color: #fea31e;
@brand-disabled-color: #ccc;

// 透明度
@opacity-disabled: 0.3;

// 文本色
@text-color-base: #323232;
@text-color-sec: #666;
@text-color-ass: #999;
@text-color-tip: #ccc;
@text-color-white: #fff;
@text-color-disabled: rgba(255, 255, 255, 0.6);

// 分割线色
@line-color-deep: #cacaca;
@line-color-base: #ddd;
@line-color-light: #eee;

// 背景色
@bg-color-card: #fff;
@bg-color-global: #f5f5f5;
@bg-color-info: #999;
@bg-color-mask: rgba(0, 0, 0, 0.7);

```

样式中使用了 @hd 替代 1px，如您的项目中使用了 rem 解决方案，可将 @hd 替换为 xrem，例如：

```less
@hd: 0.01rem;
```

## 定制方式

我们使用 modifyVars 的方式来覆盖变量，**首先需要正确配置 babel-plugin-import**

### vue-cli3

```js
// vue.config.js

module.exports = {
 css: {
    loaderOptions: {
      less: {
        modifyVars: {
          '@hd': '0.01rem',
          '@brand-primary-color': 'black'
        },
        javascriptEnabled: true
      }
    }
  }
}
```

### webpack

```js
// webpack.config.js

module.exports = {
  rules: [{
    test: /\.less$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader',
    }, {
      loader: 'less-loader',
      options: {
        modifyVars: {
          '@hd': '0.01rem',
          '@brand-primary-color': 'black'
        },
        javascriptEnabled: true,
      },
    }],
  }],
}
```

### 配置 less 变量文件

根据上面两个配置方式配置好 *javascriptEnabled: true*

```less
// 本地 less 文件中

// 引入官方 less 样式文件入口
@import '~p-ui-mobile/lib/style/p-ui-mobile.less';

// 覆盖样式变量
@hd: 0.01rem;
@brand-primary-color: black;
```


