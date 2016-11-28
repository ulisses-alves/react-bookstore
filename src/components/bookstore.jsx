import React, {Component} from 'react'
import {Header, Footer, Bookshelf} from './components'

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
