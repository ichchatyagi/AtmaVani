import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomeCarousel from '../components/HomeCarousel'
import HomeCarouselComing from '../components/HomeCarouselComing'
import BGImg from '../assets/BGImg.png'
import Logo from '../assets/Logo.png'
import { TypingAnimation } from "../components/ui/typing-animation";
import JioTV from '../assets/JioTV.jpg'
import YuppTV from '../assets/YuppTV.png'
import TV1 from '../assets/TV1.png'
import TV2 from '../assets/TV2.jpeg'
import TV3 from '../assets/TV3.jpeg'
import TV4 from '../assets/TV4.jpeg'


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
        <HomeCarouselComing />
      </div>
      <div className='grid grid-cols-2 x-16 my-8'>
        <div className='mx-auto'>
        <h1 className='text-4xl font-bold text-left my-8'>
          Watch Anytime, Anywhere
        </h1>
        <h2 className='text-2xl font-bold text-left my-8'>STREAMING ON</h2>
        <div className='flex flex-row gap-8 my-8'>
          <img className='w-32 rounded-3xl' src={TV1} alt="" />
          <img className='w-32 rounded-3xl' src={TV2} alt="" />
          <img className='w-32 rounded-3xl' src={TV3} alt="" />
          <img className='w-32 rounded-3xl' src={TV4} alt="" />
        </div>
        <h2 className='text-2xl font-bold text-left my-8'>COMING SOON ON</h2>
        <div className='flex flex-row gap-8 my-8'>
          <img className='w-32 rounded-3xl' src={JioTV} alt="" />
          <img src={YuppTV} alt="" className='w-32 rounded-3xl'/>
        </div>
        </div>
        <img src={Logo} alt="" />
      </div>
      <Footer />
    </>
  )
}

export default Home