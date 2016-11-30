import Inject from './inject'
import Querystring from './querystring'

@Inject(Querystring)
export default class Http {
  constructor (querystring) {
    this.querystring = querystring
  }

  get (url, params = null) {
    const req = new XMLHttpRequest()
    req.open('GET', createUrl(this.querystring, url, params))

    return requestPromise(req).then(
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
  return new Promise((resolve, reject) => {
    request.onreadystatechange = () => {
      const {readyState, status, responseText} = request

      if (readyState !== XMLHttpRequest.DONE) return
      if (status !== 200) return reject({status, responseText})

      return resolve({status, responseText})
    }

    request.send()
  })
}
