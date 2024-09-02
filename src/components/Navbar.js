import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='main' >
      <ul>
        <span className='deshboard'>
          <Link className='link' to="/dashboard">Dashboard</Link>
        </span>
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
        <li>
          <Link className='link' to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
