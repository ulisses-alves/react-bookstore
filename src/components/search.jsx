import React, {Component, PropType} from 'react'
import {Bound} from '../util/util'

export default class Search extends Component {
  static get propTypes () {
    return {
      debounce: PropType.number,
      onChange: PropType.function,
      className: PropType.string
    }
  }

  @Bound()
  handleChange ({target: {value}}) {
    clearTimeout(this.changeTimeout)

    this.changeTimeout = setTimeout(
      () => this.props.onChange.call(this, value),
      this.props.debounce
    )
  }

  render () {
    return (
      <form className={this.props.className}>
        <div className='form-group'>
          <input type='text'
            placeholder='Search here...'
            className='form-control'
            onKeyUp={this.handleChange} />
        </div>
      </form>
    )
  }
}
