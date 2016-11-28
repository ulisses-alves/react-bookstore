const {keys} = Object

export default function querystring (hash) {
  return keys(hash)
    .map(key => `${key}=${encodeURIComponent(hash[key])}`)
    .join('&')
}
