import defineProperty$1 from 'core-js/library/fn/object/define-property';

var defineProperty = defineProperty$1;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

export { _defineProperty as a };
