import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
      <Navbar />
      
      {/* HERO REGISTER SECTION */}
      <div className="hero min-h-screen bg-gray-900/40 backdrop-blur-sm px-4 sm:px-6 lg:px-16">
        <div className="hero-content flex-col">
          <div className="w-full max-w-md bg-base-100/10 backdrop-blur-3xl p-6 sm:p-8 rounded-xl shadow-lg">
            <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white">
              Register
            </h1>

            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="input input-bordered w-full sm:max-w-xs md:max-w-full" 
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="input input-bordered w-full sm:max-w-xs md:max-w-full" 
                />
              </div>
              <div>
                <input 
                  type="password" 
                  placeholder="Password" 
                  className="input input-bordered w-full sm:max-w-xs md:max-w-full" 
                />
              </div>
              <div>
                <input 
                  type="password" 
                  placeholder="Confirm Password" 
                  className="input input-bordered w-full sm:max-w-xs md:max-w-full" 
                />
              </div>
              <div className="flex justify-center">
                <button className="btn btn-primary w-full sm:w-auto">Register</button>
              </div>
            </form>

            <p className="mt-4 text-center text-white text-sm sm:text-base">
              Already have an account?{' '}
              <Link to="/login" className="link link-primary font-semibold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Register
