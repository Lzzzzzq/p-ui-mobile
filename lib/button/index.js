import 'core-js/modules/es6.function.name';
import { a as config } from '../chunk-57ffa845.js';
import __vue_normalize__ from 'vue-runtime-helpers/dist/normalize-component.js';
import 'core-js/library/fn/object/define-property';
import '../chunk-135c6975.js';
import 'core-js/library/fn/object/get-own-property-descriptor';
import { a as Icon } from '../chunk-73276018.js';
import 'core-js/library/fn/object/get-own-property-symbols';
import 'core-js/library/fn/object/keys';

//
var script = {
  name: 'PButton',
  components: {
    Icon: Icon
  },
  props: {
    type: {
      type: String,
      default: function _default() {
        return 'default';
      }
    },
    disabled: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    inline: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    size: {
      type: String,
      default: function _default() {
        return 'normal';
      }
    },
    activeStyle: {
      type: Boolean,
      default: function _default() {
        return true;
      }
    },
    icon: {
      type: String,
      default: function _default() {
        return '';
      }
    }
  },
  data: function data() {
    return {
      active: false
    };
  },
  computed: {
    prefixCls: function prefixCls() {
      return "".concat(config.prefixCls, "-btn");
    }
  },
  methods: {
    handleTouchStart: function handleTouchStart() {
      if (this.active || this.disabled || !this.activeStyle) return;
      this.active = true;
    },
    handleMoveOut: function handleMoveOut() {
      if (!this.active || this.disabled || !this.activeStyle) return;
      this.active = false;
    },
    handleClick: function handleClick() {
      if (this.disabled) return;
      this.$emit('click');
    }
  }
};

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _obj, _obj$1, _obj$2;
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "a",
    {
      class: ((_obj = {}),
      (_obj[_vm.prefixCls + "-wrap"] = true),
      (_obj[_vm.prefixCls + "-" + _vm.type] = true),
      (_obj[_vm.prefixCls + "-active"] = _vm.active),
      (_obj[_vm.prefixCls + "-disabled"] = _vm.disabled),
      (_obj[_vm.prefixCls + "-inline"] = _vm.inline),
      (_obj[_vm.prefixCls + "-" + _vm.size] = true),
      _obj),
      on: {
        touchstart: _vm.handleTouchStart,
        mousedown: _vm.handleTouchStart,
        touchmove: _vm.handleMoveOut,
        mousemove: _vm.handleMoveOut,
        touchend: _vm.handleMoveOut,
        mouseup: _vm.handleMoveOut,
        click: _vm.handleClick
      }
    },
    [
      _vm.icon
        ? _c("Icon", {
            class: ((_obj$1 = {}),
            (_obj$1[_vm.prefixCls + "-icon"] = true),
            _obj$1),
            attrs: { type: _vm.icon }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.type !== "icon"
        ? _c(
            "span",
            {
              class: ((_obj$2 = {}),
              (_obj$2[_vm.prefixCls + "-text"] = true),
              _obj$2)
            },
            [_vm._t("default")],
            2
          )
        : _vm._e()
    ],
    1
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
