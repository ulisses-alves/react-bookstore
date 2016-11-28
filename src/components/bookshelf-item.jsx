import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'
import styles from './bookshelf-item.styl'
import {Inject, Text} from '../util/util'

@CSSModules(styles)
export default class BookshelfItem extends Component {
  static get propTypes () {
    return {
      item: PropTypes.object
    }
  }

  @Inject(Text) get text () {}

  constructor (props) {
    super(props)
    this.title = this.text.stripRight(props.item.title, 27, '...')
    this.thumbnail = props.item.thumbnail
  }

  render () {
    return (
      <li className='col-sm-6 col-md-3' styleName='bookshelf-item'>
        <figure>
          <a className='thumbnail'>
            <div styleName='frame'>
              <img
                src={this.thumbnail}
                alt={this.title}
                className='img-responsive' />
            </div>
            <figcaption className='caption text-center'>
              {this.title}
            </figcaption>
          </a>
        </figure>
      </li>
    )
  }
}
