import { a as config } from '../chunk-57ffa845.js';
import 'core-js/library/fn/object/define-property';
import '../chunk-135c6975.js';
import 'core-js/library/fn/object/get-own-property-descriptor';
import { a as Icon } from '../chunk-73276018.js';
import 'core-js/library/fn/object/get-own-property-symbols';
import 'core-js/library/fn/object/keys';

var ToastComponent = {
  name: 'PToast',
  components: {
    Icon: Icon
  },
  computed: {
    prefixCls: function prefixCls() {
      return "".concat(config.prefixCls, "-toast");
    }
  },
  data: function data() {
    return {
      msg: '提示',
      duration: 2000,
      visible: false,
      mask: false,
      icon: false,
      iconType: '',
      type: 'info',
      top: '38%',
      jsx: false,
      domNode: function domNode() {}
    };
  },
  watch: {
    type: {
      handler: function handler(newVal) {
        var _this = this;

        if (!newVal) return;
        this.icon = false;
        this.iconType = '';
        var iconType = {
          info: function info() {},
          success: function success() {
            _this.icon = true;
            _this.iconType = 'icon-success';
          },
          error: function error() {
            _this.icon = true;
            _this.iconType = 'icon-warning';
          }
        };
        if (iconType[newVal]) iconType[newVal]();
      },
      immediate: false
    }
  },
  methods: {
    show: function show() {
      this.visible = true;
    },
    afterEnter: function afterEnter() {
      var _this2 = this;

      setTimeout(function () {
        _this2.visible = false;
      }, this.duration);
    },
    afterLeave: function afterLeave() {
      this.hide();
      this.onClose();
    },
    onClose: function onClose() {}
  },
  render: function render(h) {
    var iconType = this.iconType,
        visible = this.visible,
        jsx = this.jsx;
    var iconShow = iconType ? h("div", {
      "class": "".concat(this.prefixCls, "-icon")
    }, [h(Icon, {
      "attrs": {
        "type": this.iconType
      }
    })]) : null;
    var toastShow = visible ? h("div", {
      "class": "".concat(this.prefixCls, "-box")
    }, [iconShow, h("div", {
      "class": "".concat(this.prefixCls, "-text")
    }, [jsx ? this.domNode(h) : this.msg])]) : null;
    return h("div", {
      "class": "".concat(this.prefixCls, "-wrap"),
      "style": {
        'pointer-events': this.mask ? 'auto' : 'none',
        'padding-top': this.top
      }
    }, [h("transition", {
      "attrs": {
        "enter-active-class": "animated bounceIn faster",
        "leave-active-class": "animated zoomOut faster"
      },
      "on": {
        "after-enter": this.afterEnter,
        "after-leave": this.afterLeave
      }
    }, [toastShow])]);
  }
};

var Toast = {};

var createDom = function createDom(ToastConstructor, opt) {
  var instance = new ToastConstructor();
  instance.$mount(document.createElement('div'));
  document.body.appendChild(instance.$el);

  instance.hide = function () {
    document.body.removeChild(instance.$el);
  };

  if (typeof opt === 'string' || typeof opt === 'number') {
    opt = {
      msg: opt
    };
  }

  for (var item in opt) {
    instance[item] = opt[item];
  }

  return instance;
};

Toast.install = function (Vue) {
  var ToastConstructor = Vue.extend(ToastComponent);

  Vue.prototype.$toast = function () {
    return {
      info: function info(opt) {
        var instance = createDom(ToastConstructor, opt);
        instance.type = 'info';
        instance.show();
      },
      success: function success(opt) {
        var instance = createDom(ToastConstructor, opt);
        instance.type = 'success';
        instance.show();
      },
      error: function error(opt) {
        var instance = createDom(ToastConstructor, opt);
        instance.type = 'error';
        instance.show();
      }
    };
  }();
};

export default Toast;
