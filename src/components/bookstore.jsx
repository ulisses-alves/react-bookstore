import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'
import styles from './bookstore.styl'
import {Header, Footer} from './components'

@CSSModules(styles)
export default class Bookstore extends Component {
  static get propTypes () {
    return {
      children: PropTypes.element
    }
  }

  render () {
    return (
      <div className='container' styleName='bookstore'>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
