import Inject from './inject'
import Querystring from './querystring'
import EventTarget from './event-target'

@Inject(Querystring)
export default class Http extends EventTarget {
  constructor (querystring) {
    super()
    this.querystring = querystring
  }

  get (url, params = null) {
    const req = new XMLHttpRequest()
    req.open('GET', createUrl(this.querystring, url, params))

    return requestPromise.call(this, req).then(
      ({status, responseText}) => ({
        status,
        data: JSON.parse(responseText)
      })
    )
  }
}

function createUrl (querystring, url, params = null) {
  if (!params) return url
  return `${url}?${querystring.serialize(params)}`
}

function requestPromise (request) {
  this.dispatchEvent(event('executing'))

  return new Promise((resolve, reject) => {
    request.onreadystatechange = () => {
      const {readyState, status, responseText} = request

      if (readyState !== XMLHttpRequest.DONE) return

      if (status !== 200) reject({status, responseText})
      else resolve({status, responseText})

      this.dispatchEvent(event('executed'))
    }

    request.send()
  })
}

function event (type) {
  return new Event(type)
}
