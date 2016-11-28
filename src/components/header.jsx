import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './header.styl'

@CSSModules(styles)
export default class Header extends Component {
  render () {
    return (
      <header styleName='header'>
        <h1>React Bookstore</h1>
      </header>
    )
  }
}
