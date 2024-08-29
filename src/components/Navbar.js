import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='main' >
      <ul>
        <li>
          <Link className='link' to="/">Home</Link>
        </li>
        <li>
          <Link className='link' to="/login">Login</Link>
        </li>
        <li>
          <Link className='link' to="/about">About</Link>
        </li>
        <li>
          <Link className='link' to="/signup">Signup</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
