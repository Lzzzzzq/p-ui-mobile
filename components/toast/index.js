import ToastComponent from './toast'

const Toast = {}

const createDom = (ToastConstructor, opt) => {
  const instance = new ToastConstructor()
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)

  instance.hide = function () {
    document.body.removeChild(instance.$el)
  }

  if (typeof opt === 'string' || typeof opt === 'number') {
    opt = { msg: opt }
  }

  for (let item in opt) {
    instance[item] = opt[item]
  }
  return instance
}

Toast.install = function (Vue) {
  const ToastConstructor = Vue.extend(ToastComponent)

  Vue.prototype.$toast = (function () {
    return {
      info: function (opt) {
        const instance = createDom(ToastConstructor, opt)
        instance.type = 'info'
        instance.show()
      },
      success: function (opt) {
        const instance = createDom(ToastConstructor, opt)
        instance.type = 'success'
        instance.show()
      },
      error: function (opt) {
        const instance = createDom(ToastConstructor, opt)
        instance.type = 'error'
        instance.show()
      }
    }
  })()
}

export default Toast
