import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Enquiry = () => {
  return (
    <>
      <Navbar/>
      <div>
        <div>
        <div id='form' className="hero min-h-screen">
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md bg-base-100/10 backdrop-blur-3xl p-8 rounded-lg">
              <h1 className="mb-5 text-5xl font-bold">Get in Touch</h1>
              <form className="space-y-4">
                <div>
                  <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                  <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                  <textarea placeholder="Message" className="textarea textarea-bordered w-full max-w-xs"></textarea>
                </div>
                <div>
                  <button className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  )
}

export default Enquiry