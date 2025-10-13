import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Enquiry = () => {
  return (
    <>
      <Navbar />

      {/* --- Enquiry Form Section --- */}
      <div className="hero min-h-screen bg-base-200 px-4 py-10">
        <div className="hero-content text-center text-neutral-content flex flex-col items-center justify-center">
          <div className="w-full max-w-lg bg-base-100/20 backdrop-blur-md p-6 sm:p-10 rounded-2xl shadow-lg">
            <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-white">Get in Touch</h1>

            <form className="space-y-5">
              {/* Name */}
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full text-gray-800"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full text-gray-800"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  placeholder="Your Message"
                  className="textarea textarea-bordered w-full h-32 text-gray-800"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button className="btn btn-primary w-full">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Enquiry
