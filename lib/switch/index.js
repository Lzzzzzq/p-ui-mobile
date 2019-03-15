import 'core-js/modules/es6.function.name';
import { a as config } from '../chunk-57ffa845.js';
import 'core-js/library/fn/object/define-property';
import { a as _defineProperty } from '../chunk-135c6975.js';
import classnames from 'classnames';

var Component = {
  name: 'PSwitch',
  props: {
    value: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    disabled: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    type: {
      type: String,
      default: function _default() {
        return 'primary';
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
      return "".concat(config.prefixCls, "-switch");
    }
  },
  watch: {
    value: {
      handler: function handler(newState) {
        this.active = newState;
      },
      immediate: true
    }
  },
  methods: {
    handleClick: function handleClick() {
      if (this.disabled) return;
      this.$emit('input', !this.active);
      this.$emit('change', !this.active);
      this.active = !this.active;
    }
  },
  render: function render(h) {
    var _classnames, _classnames2;

    var prefixCls = this.prefixCls,
        active = this.active,
        disabled = this.disabled,
        type = this.type,
        handleClick = this.handleClick;
    return h("div", {
      "class": classnames((_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-wrap"), true), _defineProperty(_classnames, "".concat(prefixCls, "-wrap-active"), active), _defineProperty(_classnames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classnames, "".concat(prefixCls, "-").concat(type), true), _classnames)),
      "on": {
        "click": handleClick
      }
    }, [h("div", {
      "class": classnames((_classnames2 = {}, _defineProperty(_classnames2, "".concat(prefixCls, "-item"), true), _defineProperty(_classnames2, "".concat(prefixCls, "-item-active"), active), _classnames2))
    })]);
  }
};

var index = {
  install: function install(Vue) {
    Vue.component(Component.name, Component);
  }
};

export default index;
