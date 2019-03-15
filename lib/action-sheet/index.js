import 'core-js/modules/es6.function.name';
import 'core-js/modules/es6.array.iterator';
import 'core-js/modules/es6.promise';
import 'core-js/modules/es6.object.assign';
import 'core-js/modules/es7.promise.finally';
import { a as config } from '../chunk-57ffa845.js';
import __vue_normalize__ from 'vue-runtime-helpers/dist/normalize-component.js';

//
var script = {
  name: 'PActionSheet',
  data: function data() {
    return {
      modelValue: false,
      currentValue: false
    };
  },
  props: {
    value: {
      default: false
    },
    closeByTouchMask: {
      default: true
    },
    titleText: {
      type: String,
      default: '标题'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    actions: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  watch: {
    currentValue: function currentValue(val) {
      this.$emit('input', val);
    },
    value: function value(val) {
      var _this = this;

      if (val) {
        this.modelValue = true;
        window.requestAnimationFrame(function () {
          _this.currentValue = true;
        });
      } else {
        this.currentValue = false;
        window.requestAnimationFrame(function () {
          _this.modelValue = false;
        });
      }
    }
  },
  computed: {
    prefixCls: function prefixCls() {
      return "".concat(config.prefixCls, "-actionsheet");
    }
  },
  methods: {
    itemClick: function itemClick(item, index) {
      // if (item.method && typeof item.method === 'function') {
      //     item.method(item, index)
      // }
      this.$emit('selected', item, index);
      this.currentValue = false;
    },
    handleClickMask: function handleClickMask() {
      if (!this.closeByTouchMask) return;
      this.currentValue = false;
    },
    cancelAction: function cancelAction() {
      this.currentValue = false;
    }
  }
};

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _obj, _obj$1, _obj$2, _obj$3, _obj$4;
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "transition",
    {
      attrs: {
        "enter-active-class": "animated fadeIn faster",
        "leave-active-class": "animated fadeOut faster"
      }
    },
    [
      _vm.modelValue
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
                    "enter-active-class": "animated slideInUp faster",
                    "leave-active-class": "animated slideOutDown faster"
                  }
                },
                [
                  _vm.currentValue
                    ? _c(
                        "div",
                        {
                          class: ((_obj$1 = {}),
                          (_obj$1[_vm.prefixCls + "-container"] = true),
                          _obj$1)
                        },
                        [
                          _vm.titleText
                            ? _c(
                                "div",
                                {
                                  class: ((_obj$2 = {}),
                                  (_obj$2[_vm.prefixCls + "-title"] = true),
                                  _obj$2)
                                },
                                [_vm._v(_vm._s(_vm.titleText))]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "ul",
                            {
                              class: ((_obj$3 = {}),
                              (_obj$3[_vm.prefixCls + "-list"] = true),
                              _obj$3)
                            },
                            _vm._l(_vm.actions, function(item, index) {
                              var _obj;
                              return _c(
                                "li",
                                {
                                  key: index,
                                  class: ((_obj = {}),
                                  (_obj[_vm.prefixCls + "-item"] = true),
                                  _obj),
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation();
                                      return _vm.itemClick(item, index)
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(item))]
                              )
                            }),
                            0
                          ),
                          _vm._v(" "),
                          _vm.cancelText
                            ? _c(
                                "div",
                                {
                                  class: ((_obj$4 = {}),
                                  (_obj$4[_vm.prefixCls + "-btn"] = true),
                                  _obj$4),
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation();
                                      return _vm.cancelAction($event)
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(_vm.cancelText))]
                              )
                            : _vm._e()
                        ]
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
