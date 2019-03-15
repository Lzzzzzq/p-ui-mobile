import 'core-js/modules/es6.function.name';
import { a as config } from '../chunk-57ffa845.js';
import __vue_normalize__ from 'vue-runtime-helpers/dist/normalize-component.js';

//
var script = {
  name: 'PWingBlank',
  props: {
    size: {
      type: String,
      default: function _default() {
        return '16px';
      }
    }
  },
  computed: {
    prefixCls: function prefixCls() {
      return "".concat(config.prefixCls, "-wingblank");
    }
  }
};

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: "" + _vm.prefixCls,
      style: {
        marginLeft: _vm.size,
        marginRight: _vm.size
      }
    },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var Component = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

var index = {
  install: function install(Vue) {
    Vue.component(Component.name, Component);
  }
};

export default index;
