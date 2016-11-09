import React, {Component} from 'react'
// import {Inject, Bound} from './util'
import Header from './header'
import Footer from './footer'
import Bookshelf from './bookshelf'

export default class Bookstore extends Component {
  render () {
    return (
      <div className='container'>
        <Header />
        <Bookshelf />
        <Footer />
      </div>
    )
  }
}
