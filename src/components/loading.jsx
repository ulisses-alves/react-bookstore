import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'
import styles from './loading.styl'

@CSSModules(styles)
export default class Loading extends Component {
  static get propTypes () {
    return {
      show: PropTypes.bool
    }
  }

  get iconStyleName () {
    return this.props.show ? null : 'hidden'
  }

  render () {
    return (
      <div styleName='loading'>
        <i className='fa fa-cog' styleName={this.iconStyleName} />
      </div>
    )
  }
}
