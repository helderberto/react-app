import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'

const renderApp = Component =>
  render(
    <BrowserRouter>
      <Component />
    </BrowserRouter>,
    document.getElementById('root')
  )

renderApp(Routes)

if (module.hot) {
  module.hot.accept('./routes', () => renderApp(Routes))
}
