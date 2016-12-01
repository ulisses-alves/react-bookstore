import React, {Component} from 'react'
import {Link} from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './header.styl'
import {Inject, Http} from '../util/util'
import Loading from './loading'

@CSSModules(styles)
export default class Header extends Component {
 @Inject(Http) get http () {}

  constructor (props) {
    super(props)
    this.state = {loading: false}
  }

  componentDidMount () {
    this.http.addEventListener('executing', () =>
      this.setState({loading: true}))

    this.http.addEventListener('executed', () =>
      this.setState({loading: false}))
  }

  render () {
    return (
      <header styleName='header'>
        <h1>
          <Link to='/'>React Bookstore</Link>
        </h1>
        <Loading show={this.state.loading} />
      </header>
    )
  }
}
