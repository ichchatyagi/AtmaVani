import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaInstagram } from "react-icons/fa6"; 
import { FaYoutube } from "react-icons/fa6"; 
import { BsBrowserChrome } from "react-icons/bs"; 
import { IoLocationSharp } from "react-icons/io5"; 
import { FaPhoneAlt } from "react-icons/fa"; 
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeOutStart = 100;
      const fadeOutEnd = 600;

      let newOpacity = 1 - (scrollY - fadeOutStart) / (fadeOutEnd - fadeOutStart);
      newOpacity = Math.max(0, Math.min(1, newOpacity));
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <div className=' p-8 sticky top-0 z-10 '>
        <div 
          className='m-8 space-y-8'
          id='contact'
          style={{ opacity, transition: 'opacity 0.2s ease-out' }}
        >
          <h1 className='text-2xl'>Social Links:</h1>
          <div className='grid grid-cols-3 gap-4'>
            <div className="card bg-base-300 w-96 shadow-sm">
              <div className="flex flex-col text-center align-middle py-8 items-center justify-center">
                <a className='mb-4 text-primary text-lg' href='https://www.instagram.com/atmavanitv/'><FaInstagram size={44} /></a>
                <p className='mb-4 text-gray-300 text-lg'>@atmavanitv</p>
              </div>
            </div>
            <div className="card bg-base-300 w-96 shadow-sm">
              <div className="flex flex-col text-center align-middle py-8 items-center justify-center">
                <a className='mb-4 text-primary text-lg' href='https://www.youtube.com/@AtmavaniTV'><FaYoutube size={44} /></a>
                <p className='mb-4 text-gray-300 text-lg'>@AtmavaniTV</p>
              </div>
            </div>
            <div className="card bg-base-300 w-96 shadow-sm">
              <div className="flex flex-col text-center align-middle py-8 items-center justify-center">
                <a className='mb-4 text-primary text-lg' href='https://shubhmediaent.com/'><BsBrowserChrome size={44} /></a>
                <a className='mb-4 text-gray-300 text-lg' href='https://shubhmediaent.com/'>Shubh Media Entertainment Pvt. Ltd.</a>
                <a className='mb-4 text-gray-300 text-lg' href='https://atmavanitv.com/'>AtmaVani TV</a>
              </div>
            </div>
          </div>
        </div>
        <div
          className='m-8 space-y-8'
          id='contact'
          style={{ opacity, transition: 'opacity 0.2s ease-out' }}
         >
          <h1 className='text-2xl'>Contacts:</h1>
          <div className='grid grid-cols-3 gap-4'>
            <div className="card bg-base-300 w-96 shadow-sm">
              <div className="flex flex-col text-center align-middle py-8 items-center justify-center">
                <IoLocationSharp className='mb-4 text-primary text-lg' size={44} />
                <p className='mb-4 text-gray-300 text-lg'>05 Aster Building No.5 Andheri Link Road, Oshiwara, Jogeshwari West</p>
              </div>
            </div>
            <div className="card bg-base-300 w-96 shadow-sm">
              <div className="flex flex-col text-center align-middle py-8 items-center justify-center">
                <FaPhoneAlt className='mb-4 text-primary text-lg' size={44} />
                <p className='mb-4 text-gray-300 text-lg'>9152195955</p>
                <p className='mb-4 text-gray-300 text-lg'>8279700071</p>
                <p className='mb-4 text-gray-300 text-lg'>9017911114</p>
              </div>
            </div>
            <div className="card bg-base-300 w-96 shadow-sm">
              <div className="flex flex-col text-center align-middle py-8 items-center justify-center">
                <MdEmail className='mb-4 text-primary text-lg' size={44} />
                <a className='mb-4 text-gray-300 text-lg'>shubhmediaent@gmail.com</a>
                <a className='mb-4 text-gray-300 text-lg'>atmavanitv@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default Contact
