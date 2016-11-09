import React, {Component, PropTypes} from 'react'

export default class BookshelfItem extends Component {
  static get propTypes () {
    return {
      item: PropTypes.object
    }
  }

  constructor (props) {
    super(props)
    this.title = props.item.title
    this.thumbnail = props.item.thumbnail
  }

  render () {
    return (
      <li className='col-sm-6 col-md-3'>
        <figure>
          <a href='#' className='thumbnail'>
            <div>
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
