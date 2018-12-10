import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Discover from '../pages/discover'

const BasicExample = () => (
  <Router>
    <Route exact path='/' component={Discover} />
  </Router>
)
export default BasicExample
