import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import BaseTemplate from '_templates/base'
import HomePage from '_pages/home'
import NotFoundPage from '_pages/not-found'

const Routes = () => (
  <Router component={BaseTemplate}>
    <Route exact path="/" component={HomePage} />
    <Route path="/404" component={NotFoundPage} />
  </Router>
)

export default Routes
