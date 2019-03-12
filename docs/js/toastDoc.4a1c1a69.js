(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["toastDoc"],{"480a":function(n,t,s){"use strict";var o=function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",{staticClass:"demoWrap"},[s("div",{staticClass:"pWrap"},[n._m(0),s("div",{staticClass:"pMain"},[s("iframe",{attrs:{src:n.url,frameborder:"0"}})]),s("div",{staticClass:"pHome"})])])},a=[function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",{staticClass:"pControl"},[s("div",{staticClass:"pControlL"}),s("div",{staticClass:"pControlR"})])}],e={name:"Demo",props:{src:{type:String}},computed:{url:function(){return"//".concat(window.location.host+window.location.pathname,"#").concat(this.src)}}},r=e,i=(s("9c76"),s("2877")),c=Object(i["a"])(r,o,a,!1,null,null,null);t["a"]=c.exports},"5dd7":function(n,t,s){"use strict";s.r(t);var o=function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",[s("Md",{attrs:{mdData:n.mdData}}),s("Demo",{attrs:{src:"/demo/toast"}})],1)},a=[],e=s("4f03"),r=s("480a"),i=s("aa60"),c=s.n(i),l={components:{Md:e["a"],Demo:r["a"]},data:function(){return{mdData:c.a}}},u=l,d=s("2877"),p=Object(d["a"])(u,o,a,!1,null,null,null);t["default"]=p.exports},"83ff":function(n,t,s){},"9c76":function(n,t,s){"use strict";var o=s("83ff"),a=s.n(o);a.a},aa60:function(n,t){n.exports="# 轻提示 Toast\n\n轻提示组件，入参可为字符串或对象。\n\n## 代码演示\n\n### 类型\n\n```js\nthis.$toast.info('普通')\nthis.$toast.success('成功')\nthis.$toast.error('失败')\n```\n\n### 常用配置\n\n```js\nthis.$toast.info({\n  msg: '弹框',\n  mask: true,\n  duration: 1000,\n  top: '10px',\n  onClose: function () {\n    console.log('close')\n  }\n})\n```\n\n### 自定义内容\n\n```js\nthis.$toast.info({\n  domNode: (h) => {\n    return (\n      <p-button type=\"primary\">使用 jsx 语法</p-button>\n    )\n  },\n  jsx: true\n})\n```\n\n## API\n\n| 属性 | 说明 | 类型 | 默认值 |\n| --- | --- | --- | --- |\n| msg | 弹框文字 | string | '提示' |\n| mask | 蒙层 | boolean | false |\n| duration | 持续时间 | number | 2000 |\n| top | 距离顶部位置 | string | '38%' |\n| onClose | 关闭后回调 | function | |\n| jsx | 开启渲染 jsx | boolean | false |\n| domNode | 返回一个 jsx 对象，**注意入参 h** | jsx |\n"}}]);
//# sourceMappingURL=toastDoc.4a1c1a69.js.map