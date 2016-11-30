import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import {Bookstore, Bookshelf, Book} from './components/components'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Bookstore}>
      <IndexRoute component={Bookshelf} />
      <Route path='/book/:id' component={Book} />
    </Route>
  </Router>,
  document.querySelector('main')
)
