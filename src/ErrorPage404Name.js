import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Page404 from '../public/404NotFound.png'

class ErrorPage404Name extends Component {
  render () {
    return (
      <div>

          <img className='notfound' alt="Page Not Found" src={Page404} />
      
        <h3 className='notfound' style={{display: 'grid', margin: 20, justifyContent: 'center', alignItems: 'center'}}>Sorry, but the page you are looking for has not been found.</h3>
        <button className='button'>
          <Link to="/">Go to main page</Link>
        </button>
       </div>
    )
  }
}

export default ErrorPage404Name
