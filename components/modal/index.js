import ModalComponent from './src/index.jsx'

const Modal = {}

const defaultData = {
  title: '',
  message: '',
  type: 'basic',
  cancelText: '取消',
  okText: '确定',
  jsx: false,
  closeByTouchMask: true,
  domNode: () => null,
  onOk: () => {},
  onCancel: () => {},
  onOpen: () => {},
  onClose: () => {}
}

const createDom = (ModalConstructor, opt) => {
  const instance = new ModalConstructor()

  const instanceData = Object.assign({}, defaultData, opt)

  for (let item in instanceData) {
    instance[item] = instanceData[item]
  }

  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)

  instance.remove = function () {
    document.body.removeChild(instance.$el)
  }
  return instance
}

Modal.install = function (Vue) {
  const ModalConstructor = Vue.extend(ModalComponent)

  Vue.prototype.$modal = (function () {
    return {
      basic: function (opt) {
        const instance = createDom(ModalConstructor, opt)
        instance.type = 'basic'
        instance.show()
      },
      confirm: function (opt) {
        const instance = createDom(ModalConstructor, opt)
        instance.type = 'confirm'
        instance.show()
      }
    }
  })()
}

export default Modal
