const metadata = new WeakMap()
const instances = new WeakMap()

export default function Inject (...ctors) {
  return (target, key, descriptor) => {
    if (key) return decorateProperty(ctors[0], target, key, descriptor)
    return decorateClass(ctors, target)
  }
}

function decorateProperty (Class, target, key, {configurable, enumerable}) {
  return {
    configurable,
    enumerable,
    value: getInstanceOf(Class)
  }
}

function decorateClass (ctors, target) {
  metadata.set(target, ctors)
  return target
}

function getInstanceOf (Ctor) {
  if (instances.has(Ctor)) return instances.get(Ctor)

  const args = (metadata.get(Ctor) || []).map(getInstanceOf)
  const value = new Ctor(...args)
  instances.set(Ctor, value)

  return value
}
