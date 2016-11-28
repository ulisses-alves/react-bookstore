import React, {Component} from 'react'
import {Inject, Bound} from '../util/util'
import {Books} from '../core/core'
import {BookshelfItem} from './components'

export default class Bookshelf extends Component {
  @Inject(Books) get books () {}

  constructor (props) {
    super(props)

    this.state = {
      books: []
    }

    this.loadBooks()
  }

  loadBooks () {
    this.books.getAll().then(books => this.setState({
      books: books.map(book => <BookshelfItem key={book.id} item={book} />)
    }))
  }

  @Bound()
  handleClick () {
    console.log(this)
  }

  render () {
    return (
      <ul className='row'>
        {this.state.books}
      </ul>
    )
  }
}
