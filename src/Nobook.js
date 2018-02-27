import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nobook extends Component {
  render () {
    return (
      <div>
      <h1>No books found, sorry.</h1>
      <button className='button_back'>
        <Link to="/">Go to main page</Link>
      </button>
      </div>
    )
  }
}

export default Nobook
