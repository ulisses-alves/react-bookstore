import React, {Component} from 'react'
import {Link} from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './header.styl'

@CSSModules(styles)
export default class Header extends Component {
  render () {
    return (
      <header styleName='header'>
        <h1>
          <Link to='/'>React Bookstore</Link>
        </h1>
      </header>
    )
  }
}
