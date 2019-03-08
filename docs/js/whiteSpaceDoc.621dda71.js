(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["whiteSpaceDoc"],{"480a":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"demoWrap"},[e("div",{staticClass:"pWrap"},[t._m(0),e("div",{staticClass:"pMain"},[e("iframe",{attrs:{src:t.url,frameborder:"0"}})]),e("div",{staticClass:"pHome"})])])},s=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"pControl"},[e("div",{staticClass:"pControlL"}),e("div",{staticClass:"pControlR"})])}],i={name:"Demo",props:{src:{type:String}},computed:{url:function(){return"//".concat(window.location.host+window.location.pathname,"#").concat(this.src)}}},c=i,p=(e("9c76"),e("2877")),o=Object(p["a"])(c,a,s,!1,null,null,null);n["a"]=o.exports},"7a24":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("Md",{attrs:{mdData:t.mdData}}),e("Demo",{attrs:{src:"/demo/whiteSpace"}})],1)},s=[],i=e("4f03"),c=e("480a"),p=e("b98e"),o=e.n(p),r={components:{Md:i["a"],Demo:c["a"]},data:function(){return{mdData:o.a}}},l=r,u=e("2877"),d=Object(u["a"])(l,a,s,!1,null,null,null);n["default"]=d.exports},"83ff":function(t,n,e){},"9c76":function(t,n,e){"use strict";var a=e("83ff"),s=e.n(a);s.a},b98e:function(t,n){t.exports="# 上下留白 WhiteSpace\n\n布局组件，用于模块间距。\n\n## 代码演示\n\n```html\n\x3c!-- *.vue --\x3e\n\n<template>\n  <p-wing-blank>\n    <p-white-space></p-white-space>\n    <p-button>默认距离 10px</p-button>\n    <p-white-space size=\"30px\"></p-white-space>\n    <p-button>自定义距离 30px</p-button>\n    <p-white-space size=\"60px\"></p-white-space>\n    <p-button>自定义距离 60px</p-button>\n  </p-wing-blank>\n</template>\n\n<script>\nexport default {\n  name: 'WhiteSpaceDemo'\n}\n<\/script>\n\n```\n\n## API\n\n| 属性 | 说明 | 类型 | 默认值 |\n| --- | --- | --- | --- |\n| size | 自定义距离 | string | '10px' |"}}]);
//# sourceMappingURL=whiteSpaceDoc.621dda71.js.map