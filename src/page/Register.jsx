import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
      <Navbar/>
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md bg-base-100/10 backdrop-blur-3xl p-8 rounded-lg">
              <h1 className="mb-5 text-5xl font-bold">Register</h1>
              <form className="space-y-4">
                <div>
                  <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                  <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                  <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                  <input type="password" placeholder="Confirm Password" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
              <p className="mt-4 text-white">
                Already have an account? <Link to="/login" className="link link-primary">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Register