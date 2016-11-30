const {keys} = Object

export default class Querystring {
  serialize (hash) {
    return keys(hash)
      .map(key => `${key}=${encodeURIComponent(hash[key])}`)
      .join('&')
  }
}
