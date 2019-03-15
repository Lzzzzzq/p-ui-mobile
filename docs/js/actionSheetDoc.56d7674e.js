(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["actionSheetDoc"],{"480a":function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"demoWrap"},[e("div",{staticClass:"pWrap"},[n._m(0),e("div",{staticClass:"pMain"},[e("iframe",{attrs:{src:n.url,frameborder:"0"}})]),e("div",{staticClass:"pHome"})])])},s=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"pControl"},[e("div",{staticClass:"pControlL"}),e("div",{staticClass:"pControlR"})])}],i={name:"Demo",props:{src:{type:String}},computed:{url:function(){return"//".concat(window.location.host+window.location.pathname,"#").concat(this.src)}}},c=i,o=(e("9c76"),e("2877")),l=Object(o["a"])(c,a,s,!1,null,null,null);t["a"]=l.exports},5704:function(n,t){n.exports="# 操作表 ActionSheet\n\n操作表，从屏幕下方移入。\n\n## 代码演示\n\n```html\n\n<p-action-sheet v-model=\"sheetVisible\" :actions=\"actions\" :cancelText=\"cancelText\" @selected=\"handelSelect\"></p-action-sheet>\n\n<script>\nexport default {\n  data () {\n    return {\n      actions: ['拍照', '从相册中选择', '从网页中选择'],\n      sheetVisible: false,\n      cancelText: '取消'\n    }\n  },\n  methods: {\n    actionSheetInit () {\n      this.sheetVisible = true\n      this.cancelText = '取消'\n    },\n    nocancelAction () {\n      this.sheetVisible = true\n      this.cancelText = ''\n    },\n    handelSelect (item, index) {\n      this.$toast.info('item:' + item + '===index:' + index)\n    }\n  }\n}\n<\/script>\n\n```\n\n## API\n\n| 属性 | 说明 | 类型 | 默认值 |\n| - | - | - | - |\n| v-model | 是否打开操作表 | boolean | false |\n| actions | actions 属性绑定一个操作数组 | array | ['拍照','从相册中选择','从网页中选择'] |\n| cancelText | 底部取消按钮文案 | string  | 取消 |\n| titleText | 顶部标题文案 | string  | 标题 |\n| closeByTouchMask | 点击蒙层关闭 actionsheet | boolean | true |\n"},"83ff":function(n,t,e){},"9c76":function(n,t,e){"use strict";var a=e("83ff"),s=e.n(a);s.a},f500:function(n,t,e){"use strict";e.r(t);var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("Md",{attrs:{mdData:n.mdData}}),e("Demo",{attrs:{src:"/demo/actionsheet"}})],1)},s=[],i=e("4f03"),c=e("480a"),o=e("5704"),l=e.n(o),r={components:{Md:i["a"],Demo:c["a"]},data:function(){return{mdData:l.a}}},u=r,d=e("2877"),h=Object(d["a"])(u,a,s,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=actionSheetDoc.56d7674e.js.map