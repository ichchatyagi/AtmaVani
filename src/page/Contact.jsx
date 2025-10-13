import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaPhoneAlt } from "react-icons/fa"; 
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { BsBrowserChrome } from "react-icons/bs"
import { IoLocationSharp } from "react-icons/io5"
import { MdEmail } from "react-icons/md"

const Contact = () => {
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const fadeOutStart = 100
      const fadeOutEnd = 600

      let newOpacity = 1 - (scrollY - fadeOutStart) / (fadeOutEnd - fadeOutStart)
      newOpacity = Math.max(0, Math.min(1, newOpacity))
      setOpacity(newOpacity)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navbar />

      {/* --- Social Links Section --- */}
      <div className="px-4 md:px-8 py-10">
        <div
          id="contact"
          style={{ opacity, transition: 'opacity 0.2s ease-out' }}
          className="space-y-6"
        >
          <h1 className="text-3xl font-bold text-center text-white mb-6">Social Links</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {/* Instagram */}
            <div className="card bg-base-300 w-full sm:w-80 shadow-md hover:scale-105 transition-transform">
              <div className="flex flex-col items-center py-8 text-center">
                <a href="https://www.instagram.com/atmavanitv/" className="text-primary mb-3">
                  <FaInstagram size={44} />
                </a>
                <p className="text-gray-300 text-lg">@atmavanitv</p>
              </div>
            </div>

            {/* YouTube */}
            <div className="card bg-base-300 w-full sm:w-80 shadow-md hover:scale-105 transition-transform">
              <div className="flex flex-col items-center py-8 text-center">
                <a href="https://www.youtube.com/@AtmavaniTV" className="text-primary mb-3">
                  <FaYoutube size={44} />
                </a>
                <p className="text-gray-300 text-lg">@AtmavaniTV</p>
              </div>
            </div>

            {/* Website */}
            <div className="card bg-base-300 w-full sm:w-80 shadow-md hover:scale-105 transition-transform">
              <div className="flex flex-col items-center py-8 text-center">
                <a href="https://shubhmediaent.com/" className="text-primary mb-3">
                  <BsBrowserChrome size={44} />
                </a>
                <a href="https://shubhmediaent.com/" className="text-gray-300 text-lg">Shubh Media Entertainment</a>
                <a href="https://atmavanitv.com/" className="text-gray-300 text-lg">AtmaVani TV</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Contact Info Section --- */}
      <div className="px-4 md:px-8 py-10">
        <div
          id="contact-info"
          style={{ opacity, transition: 'opacity 0.2s ease-out' }}
          className="space-y-6"
        >
          <h1 className="text-3xl font-bold text-center text-white mb-6">Contact Information</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {/* Address */}
            <div className="card bg-base-300 w-full sm:w-80 shadow-md hover:scale-105 transition-transform">
              <div className="flex flex-col items-center py-8 text-center">
                <IoLocationSharp size={44} className="text-primary mb-3" />
                <p className="text-gray-300 text-lg px-4">
                  105 Aster Build No 5., Andheri Link Road, Oshiwara, Jogeshwari West, Mumbai 400102.
                </p>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="card bg-base-300 w-full sm:w-80 shadow-md hover:scale-105 transition-transform">
              <div className="flex flex-col items-center py-8 text-center">
                <FaPhoneAlt size={44} className="text-primary mb-3" />
                <p className="text-gray-300 text-lg">+91-9152195955</p>
                <p className="text-gray-300 text-lg">+91-8279700071</p>
                <p className="text-gray-300 text-lg">+91-9017911114</p>
              </div>
            </div>

            {/* Emails */}
            <div className="card bg-base-300 w-full sm:w-80 shadow-md hover:scale-105 transition-transform">
              <div className="flex flex-col items-center py-8 text-center">
                <MdEmail size={44} className="text-primary mb-3" />
                <p className="text-gray-300 text-lg">shubhmediaent@gmail.com</p>
                <p className="text-gray-300 text-lg">atmavanitv@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Contact Form Section --- */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md bg-base-100/10 backdrop-blur-3xl p-8 rounded-lg w-full mx-4">
            <h1 className="mb-5 text-4xl font-bold">Get in Touch</h1>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
              />
              <textarea
                placeholder="Message"
                className="textarea textarea-bordered w-full h-32"
              ></textarea>
              <button className="btn btn-primary w-full">Submit</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Contact
