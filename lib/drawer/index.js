import 'core-js/modules/es6.function.name';
import { a as config } from '../chunk-57ffa845.js';
import { a as __vue_normalize__ } from '../chunk-ec8a4ee2.js';

//
var script = {
  name: 'PDrawer',
  props: {
    value: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    side: {
      type: String,
      default: function _default() {
        return 'left';
      }
    },
    distance: {
      type: String,
      default: function _default() {
        return '30%';
      }
    },
    closeByTouchMask: {
      type: Boolean,
      default: function _default() {
        return true;
      }
    }
  },
  watch: {
    value: function value(newVal) {
      var _this = this;

      if (newVal) {
        this.wrapVisible = true;
        window.requestAnimationFrame(function () {
          _this.itemVisible = true;
        });
      } else {
        this.itemVisible = false;
        window.requestAnimationFrame(function () {
          _this.wrapVisible = false;
        });
      }
    }
  },
  computed: {
    prefixCls: function prefixCls() {
      return "".concat(config.prefixCls, "-drawer");
    }
  },
  data: function data() {
    return {
      wrapVisible: false,
      itemVisible: false
    };
  },
  methods: {
    /**
     * 显示后
     */
    afterEnter: function afterEnter() {
      this.$emit('show');
    },

    /**
     * 隐藏后
     */
    afterLeave: function afterLeave() {
      this.$emit('hide');
    },

    /**
     * 点击了遮罩层
     */
    handleClickMask: function handleClickMask() {
      if (!this.closeByTouchMask) return;
      this.$emit('input', false);
    }
  }
};

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _obj, _obj$1;
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "transition",
    {
      attrs: {
        "enter-active-class": "animated fadeIn faster",
        "leave-active-class": "animated fadeOut faster"
      },
      on: { "after-enter": _vm.afterEnter, "after-leave": _vm.afterLeave }
    },
    [
      _vm.wrapVisible
        ? _c(
            "div",
            {
              class: ((_obj = {}),
              (_obj[_vm.prefixCls + "-wrap"] = true),
              _obj),
              on: {
                click: function($event) {
                  if ($event.target !== $event.currentTarget) {
                    return null
                  }
                  return _vm.handleClickMask($event)
                }
              }
            },
            [
              _c(
                "transition",
                {
                  attrs: {
                    "enter-active-class":
                      "animated faster " +
                      (_vm.side === "right" ? "slideInRight" : "slideInLeft"),
                    "leave-active-class":
                      "animated faster " +
                      (_vm.side === "right" ? "slideOutRight" : "slideOutLeft")
                  }
                },
                [
                  _vm.itemVisible
                    ? _c(
                        "div",
                        {
                          class: ((_obj$1 = {}),
                          (_obj$1[_vm.prefixCls + "-item"] = true),
                          (_obj$1[_vm.prefixCls + "-" + _vm.side] = true),
                          _obj$1),
                          style: {
                            left: _vm.side === "right" ? _vm.distance : 0,
                            right: _vm.side === "left" ? _vm.distance : 0
                          }
                        },
                        [_vm._t("default")],
                        2
                      )
                    : _vm._e()
                ]
              )
            ],
            1
          )
        : _vm._e()
    ]
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
