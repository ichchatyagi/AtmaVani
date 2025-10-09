import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'

const Navbar = () => {
  return (
      <div class="navbar bg-gray-950/40 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div class="navbar-start">
          <img className='w-40' src={Logo} alt="AtmaVani" />
        </div>
        <ul class="navbar-center text-white lg:flex menu menu-horizontal bg-base-200 rounded-box">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/fpc'>FPC</Link></li>
          <li><Link to='/enquiry'>Get in touch</Link></li>
        </ul>
        <div class="navbar-end">
          <div className='flex flex-row gap-4'>
                <Link to='/login' className='btn '>Login</Link>
                <Link to='/register' className='btn btn-primary'>Register</Link>
            </div>
        </div>
      </div>
  )
}

export default Navbar