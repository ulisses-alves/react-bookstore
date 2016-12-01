export default class EventTarget {
  constructor () {
    this.__listeners = new Map()
  }

  addEventListener (type, callback) {
    if (!this.__listeners.has(type)) {
      this.__listeners.set(type, [])
    }

    this.__listeners.get(type).push(callback)
  }

  removeEventListener (type, callback) {
    if (!this.__listeners.has(type)) return
    const callbacks = this.__listeners.get(type).filter(cb => cb !== callback)
    this.__listeners.set(type, callbacks)
  }

  dispatchEvent (event) {
    if (!this.__listeners.has(event.type)) return
    this.__listeners.get(event.type).forEach(cb => cb.call(this, event))
  }
}
