import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './bookstore.styl'
import {Header, Footer, Bookshelf} from './components'

@CSSModules(styles)
export default class Bookstore extends Component {
  render () {
    return (
      <div className='container' styleName='bookstore'>
        <Header />
        <Bookshelf />
        <Footer />
      </div>
    )
  }
}
