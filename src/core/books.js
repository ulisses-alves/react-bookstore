import {Inject, Http} from '../util/util'

@Inject(Http)
export default class Books {
  constructor (http) {
    this.http = http
    this.url = 'https://www.googleapis.com/books/v1/volumes/'
  }

  getAll () {
    return this.http.get(this.url, {
      q: 'javascript',
      maxResults: 40
    })
    .then(
      ({data: {items}}) => {
        return items.map(({id, volumeInfo: {title, imageLinks}}) => ({
          id,
          title,
          thumbnail: imageLinks.thumbnail
        }))
      },
      console.error.bind(console)
    )
  }
}
