import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import createHashHistory from 'history/createBrowserHistory'
import Discover from '../pages/discover'
import Login from '../pages/discover/login'
import { RouterContext } from '../store'

const history = createHashHistory()

export default () => (
  <Router>
    <RouteDom>
      <Route exact path='/' component={Discover} />
      <Route path='/login' component={Login} />
    </RouteDom>
  </Router>
)

function RouteDom ({ children }) {
  return <RouterContext.Provider value={{ history: history }}>{children}</RouterContext.Provider>
}
