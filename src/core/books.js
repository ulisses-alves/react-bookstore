import {Inject, Http} from '../util/util'

@Inject(Http)
export default class Books {
  constructor (http) {
    this.http = http
    this.url = 'https://www.googleapis.com/books/v1/volumes/'
  }

  async get (id) {
    try {
      const {data} = await this.http.get(this.url + id)
      return book(data)
    } catch (err) {
      console.error(err)
    }
  }

  async search (query) {
    try {
      const {data: {items}} = await this.http.get(this.url, {
        q: query,
        maxResults: 40
      })

      return items.map(book)
    } catch (err) {
      console.error(err)
    }
  }
}

function book ({id, volumeInfo}) {
  const {title, description, authors, imageLinks} = volumeInfo
  const {thumbnail, large, medium, small} = imageLinks

  return {
    id,
    title,
    description,
    authors,
    thumbnail,
    cover: large || medium || small || thumbnail
  }
}
