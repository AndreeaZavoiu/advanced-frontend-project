import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
      <div>
        <br></br>
        <h1>Oops! You seem to be lost.</h1>
        <br></br>
        <p>Here are some helpful links: <Link to='/'>Home</Link></p>
        
      </div>
    )
  }
export default NotFound
