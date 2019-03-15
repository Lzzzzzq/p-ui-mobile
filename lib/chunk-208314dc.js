import { a as config } from './chunk-57ffa845.js';
import { a as __vue_normalize__ } from './chunk-ec8a4ee2.js';

//
var script = {
  name: 'PFlexWrap',
  props: {
    direction: {
      type: String,
      default: function _default() {
        return '';
      }
    },
    wrap: {
      type: String,
      default: function _default() {
        return '';
      }
    },
    justify: {
      type: String,
      default: function _default() {
        return '';
      }
    },
    align: {
      type: String,
      default: function _default() {
        return '';
      }
    },
    alignContent: {
      type: String,
      default: function _default() {
        return '';
      }
    }
  },
  computed: {
    prefixCls: function prefixCls() {
      return "".concat(config.prefixCls, "-flex-wrap");
    }
  }
};

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _obj;
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: ((_obj = {}),
      (_obj["" + _vm.prefixCls] = true),
      (_obj[_vm.prefixCls + "-dir-" + _vm.direction] = _vm.direction),
      (_obj[_vm.prefixCls + "-" + _vm.wrap] = _vm.wrap),
      (_obj[_vm.prefixCls + "-justify-" + _vm.justify] = _vm.justify),
      (_obj[_vm.prefixCls + "-align-" + _vm.align] = _vm.align),
      (_obj[_vm.prefixCls + "-align-content-" + _vm.alignContent] =
        _vm.alignContent),
      _obj)
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
  

  
  var FlexWrap = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

export { FlexWrap as a };
