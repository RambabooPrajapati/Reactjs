import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import Notification from '../pages/Notification'
import { useDispatch } from 'react-redux'
import { reset } from '../redux/cartSlice'

const Navbar = () => {
   const dispatch = useDispatch();
const handleResetNotification = ()=>{
  dispatch(reset())
}

  return (
    <div className='main' >
      <ul>
        <span className='deshboard'>
          <Link className='link' to="/">Dashboard</Link>
        </span>
        <li>
          <Link className='link' to="/home">Home</Link>
        </li>
        <li>
          <Link className='link' to="/login">Login</Link>
        </li>
        <li>
          <Link className='link' to="/about">About</Link>
        </li>
        {/* <li>
          <Link className='link' to="/signup">Signup</Link>
        </li> */}
        <li>
          <Link className='link' to="/cart" onClick={handleResetNotification}>Cart</Link>

        </li>
        <li style={{
          position: 'relative',
          left: '-108px',
          bottom: '16px',
          backgroundColor: 'rgba(0, 0, 0, 0)', // Corrected property for background color
          color: "black",
        }}>
          <Notification />
        </li>
      </ul>
    </div>
  )
}

export default Navbar
