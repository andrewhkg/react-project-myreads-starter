import React, { Component } from 'react'
import Page404 from '../public/404NotFound.png'

class ErrorPage404Name extends Component {
  render () {
    return (
        <div style={{display: 'grid', margin: 20, justifyContent: 'center', alignItems: 'center'}}>
          <img alt="Page Not Found" src={Page404} />
          <h3>Page Not found...</h3>
        </div>
    )
  }
}

export default ErrorPage404Name
