import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomeCarousel from '../components/HomeCarousel'
import BGImg from '../assets/BGImg.png'
import Logo from '../assets/Logo.png'
import { TypingAnimation } from "../components/ui/typing-animation";
import JioTV from '../assets/JioTV.jpg'
import YuppTV from '../assets/YuppTV.png'

const Home = () => {

  return (
    <>
      <Navbar/>
      <div>
        <div
          className="grid grid-cols-2 hero min-h-screen"
          style={{ backgroundImage: `url(${BGImg})` }}
        >
          <div className='text-left text-error flex flex-col justify-center mx-16 my-8'>
            <div className='text-5xl font-bold'>
              <TypingAnimation>ATMAVANI TV</TypingAnimation>
            </div>
            <div className='text-4xl font-bold'>
              <TypingAnimation>Welcome To The World Of</TypingAnimation>
            </div>
            <div className='text-4xl font-bold'>
              <TypingAnimation>4k / HD / SD Devotional Tv Channel</TypingAnimation>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-16 my-8'>
        <h1 className='text-5xl font-bold text-left my-8'>
          Our Programs
        </h1>
        <HomeCarousel />
      </div>
      <div className='mx-16 my-8'>
        <h1 className='text-5xl font-bold text-left my-8'>
          Coming Soon...
        </h1>
        <HomeCarousel />
      </div>
      <div className='grid grid-cols-2 x-16 my-8'>
        <div className='mx-auto'>
        <h1 className='text-4xl font-bold text-left my-8'>
          Watch Anytime, Anywhere
        </h1>
        <h2 className='text-2xl font-bold text-left my-8'>STREAMING ON</h2>
        <div className='flex flex-row gap-8 my-8'>
          <img className='w-40 rounded-3xl' src={JioTV} alt="" />
          <img src={YuppTV} alt="" className='w-40 rounded-3xl'/>
        </div>
        </div>
        <img src={Logo} alt="" />
      </div>
      <Footer />
    </>
  )
}

export default Home