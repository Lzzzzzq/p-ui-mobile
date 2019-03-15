import 'core-js/modules/es6.function.name';
import { a as config } from '../chunk-57ffa845.js';
import 'vue-runtime-helpers/dist/normalize-component.js';
import 'core-js/library/fn/object/define-property';
import { a as _defineProperty } from '../chunk-135c6975.js';
import classnames from 'classnames';
import { a as FlexWrap } from '../chunk-39915011.js';

var Component = {
  name: 'PBadge',
  props: {
    size: {
      type: String,
      default: function _default() {
        return 'normal';
      }
    },
    type: {
      type: String,
      default: function _default() {
        return 'primary';
      }
    },
    border: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    radiusCircle: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    }
  },
  computed: {
    prefixCls: function prefixCls() {
      return "".concat(config.prefixCls, "-badge");
    }
  },
  render: function render(h) {
    var _classnames2;

    var $slots = this.$slots,
        prefixCls = this.prefixCls,
        size = this.size,
        type = this.type,
        border = this.border,
        radiusCircle = this.radiusCircle;

    if (!$slots || !$slots.default || !$slots.default[0]) {
      return null;
    }

    return h("div", {
      "class": classnames(_defineProperty({}, "".concat(prefixCls, "-wrap"), true))
    }, [h(FlexWrap, {
      "class": classnames((_classnames2 = {}, _defineProperty(_classnames2, "".concat(prefixCls, "-item"), true), _defineProperty(_classnames2, "".concat(prefixCls, "-").concat(size), true), _defineProperty(_classnames2, "".concat(prefixCls, "-").concat(type), true), _defineProperty(_classnames2, "".concat(prefixCls, "-border"), border), _defineProperty(_classnames2, "".concat(prefixCls, "-circle"), radiusCircle), _classnames2)),
      "attrs": {
        "alignContent": "center"
      }
    }, [$slots.default && $slots.default[0]])]);
  }
};

var index = {
  install: function install(Vue) {
    Vue.component(Component.name, Component);
  }
};

export default index;
