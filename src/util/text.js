export default class Text {
  stripRight (text, length, padStr = '') {
    if (text.length <= length) return text
    return text.substring(0, length) + padStr
  }
}
