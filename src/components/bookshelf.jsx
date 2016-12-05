import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './bookshelf.styl'
import {Inject, Bound} from '../util/util'
import {Books} from '../core/core'
import BookshelfItem from './bookshelf-item'
import Search from './search'

@CSSModules(styles)
export default class Bookshelf extends Component {
  @Inject(Books) get books () {}

  constructor (props) {
    super(props)
    this.state = {}
  }

  get content () {
    if (!this.state.books) return null

    return (
      <div>
        <Search
          debounce={300}
          onChange={this.handleSearch}
          className='col-sm-12' />
        <ul>
          {this.state.books}
        </ul>
      </div>
    )
  }

  @Bound()
  handleSearch (query) {
    this.loadBooks(query)
  }

  async loadBooks (query) {
    const books = await this.books.search(query)

    this.setState({
      books: books.map(book => <BookshelfItem key={book.id} item={book} />)
    })
  }

  componentDidMount () {
    this.loadBooks('javascript')
  }

  render () {
    return (
      <section styleName='bookshelf'>
        {this.content}
      </section>
    )
  }
}
