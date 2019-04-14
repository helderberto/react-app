import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

const BaseTemplate = ({ title, children }) => (
  <Fragment>
    <Helmet titleTemplate={`${title} - React App`} defaultTitle="React App">
      <meta
        name="description"
        content="A easy and fastest way to start of ReactJS project with Webpack."
      />
    </Helmet>

    {children}
  </Fragment>
)

export default BaseTemplate
