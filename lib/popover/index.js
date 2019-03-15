import 'core-js/modules/es6.function.name';
import { a as config } from '../chunk-57ffa845.js';
import '../chunk-ec8a4ee2.js';
import 'core-js/library/fn/object/define-property';
import { a as _defineProperty } from '../chunk-135c6975.js';
import classnames from 'classnames';
import { a as FlexWrap } from '../chunk-208314dc.js';
import 'core-js/modules/es6.regexp.match';

var Component = {
  name: 'PPopover',
  props: {
    placement: {
      type: String,
      default: function _default() {
        return 'top';
      }
    },
    value: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    }
  },
  computed: {
    prefixCls: function prefixCls() {
      return "".concat(config.prefixCls, "-popover");
    },
    wrapDir: function wrapDir() {
      var dir = 'row';

      if (this.placement.match('left')) {
        dir = 'row';
      } else if (this.placement.match('right')) {
        dir = 'row-reverse';
      } else if (this.placement.match('top')) {
        dir = 'column';
      } else if (this.placement.match('bottom')) {
        dir = 'column-reverse';
      }

      return dir;
    },
    wrapAlign: function wrapAlign() {
      var align = 'center'; // TODO
      // if (this.placement.match('left')) {
      //   align = 'center'
      // } else if (this.placement.match('right')) {
      //   align = 'center'
      // } else if (this.placement.match('top')) {
      //   align = 'end'
      // } else if (this.placement.match('bottom')) {
      //   align = 'column-reverse'
      // }

      return align;
    },
    wrapJustify: function wrapJustify() {
      var justify = 'center';

      if (this.placement.match('left')) {
        justify = 'end';
      } else if (this.placement.match('right')) {
        justify = 'end';
      } else if (this.placement.match('top')) {
        justify = 'end';
      } else if (this.placement.match('bottom')) {
        justify = 'end';
      }

      return justify;
    }
  },
  watch: {
    value: function value(newState) {
      this.visible = newState;
    }
  },
  data: function data() {
    return {
      visible: false
    };
  },
  methods: {
    show: function show() {
      this.$emit('show');
    },
    hide: function hide() {
      this.$emit('close');
    }
  },
  render: function render(h) {
    var _classnames, _classnames2;

    var $slots = this.$slots,
        prefixCls = this.prefixCls,
        placement = this.placement,
        wrapDir = this.wrapDir,
        wrapAlign = this.wrapAlign,
        wrapJustify = this.wrapJustify,
        show = this.show,
        hide = this.hide,
        visible = this.visible;
    return h("div", {
      "class": "".concat(prefixCls, "-wrap")
    }, [h("transition", {
      "attrs": {
        "enter-active-class": "animated bounceIn faster",
        "leave-active-class": "animated zoomOut faster"
      },
      "on": {
        "after-enter": show,
        "after-leave": hide
      }
    }, [visible ? h(FlexWrap, {
      "attrs": {
        "direction": wrapDir,
        "align": wrapAlign,
        "justify": wrapJustify,
        "alignContent": wrapAlign
      },
      "class": classnames((_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-item"), true), _defineProperty(_classnames, "".concat(prefixCls, "-item-").concat(placement), true), _classnames))
    }, [h("div", {
      "class": classnames((_classnames2 = {}, _defineProperty(_classnames2, "".concat(prefixCls, "-item-inner"), true), _defineProperty(_classnames2, "".concat(prefixCls, "-item-inner-").concat(placement), true), _classnames2))
    }, [$slots.popover && $slots.popover[0] || null])]) : null]), $slots.default && $slots.default[0] || null]);
  }
};

var index = {
  install: function install(Vue) {
    Vue.component(Component.name, Component);
  }
};

export default index;
