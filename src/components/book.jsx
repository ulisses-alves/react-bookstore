import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'
import styles from './book.styl'
import {Inject} from '../util/util'
import {Books} from '../core/core'

@CSSModules(styles)
export default class Book extends Component {
  static get propTypes () {
    return {
      params: PropTypes.object
    }
  }

  @Inject(Books) get books () {}

  async componentDidMount () {
    const book = await this.books.get(this.props.params.id)
    this.setState(book)
  }

  render () {
    if (!this.state) return <p>Loading...</p>

    return (
      <figure className='row' styleName='book'>
        <img src={this.state.cover}
          alt='book cover'
          className='col-xs-12 col-md-6' />
        <figcaption className='col-xs-12 col-md-6'>
          <h2>{this.state.title}</h2>
          <small>By {this.state.authors.join(', ')}</small>
          <p className='text-justify'>{this.state.description}</p>
        </figcaption>
      </figure>
    )
  }
}
