import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import BaseTemplate from '_templates/base'
import HomePage from '_pages/home'
import NotFoundPage from '_pages/not-found'

const Routes = () => (
  <Router component={BaseTemplate}>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
)

export default Routes
