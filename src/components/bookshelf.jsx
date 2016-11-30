import React, {Component} from 'react'
import {Inject} from '../util/util'
import {Books} from '../core/core'
import {BookshelfItem} from './components'

export default class Bookshelf extends Component {
  @Inject(Books) get books () {}

  constructor (props) {
    super(props)
    this.state = {}
  }

  async componentDidMount () {
    const books = await this.books.getAll()

    this.setState({
      books: books.map(book => <BookshelfItem key={book.id} item={book} />)
    })
  }

  render () {
    if (!this.state.books) return <p>Loading...</p>

    return (
      <ul className='row'>
        {this.state.books}
      </ul>
    )
  }
}
