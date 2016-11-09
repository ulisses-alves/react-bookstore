const {defineProperty} = Object

function boundMethod (target, key, {value: fn, configurable, enumerable}) {
  return {
    configurable,
    enumerable,
    get () {
      const boundFn = fn.bind(this)

      defineProperty(this, key, {
        configurable: true,
        writable: true,
        enumerable: false,
        value: boundFn
      })

      return boundFn
    },
    set (value) {
      defineProperty(this, key, {
        configurable: true,
        writable: true,
        enumerable: true,
        value
      })
    }
  }
}

export default function Bound () {
  return boundMethod
}
