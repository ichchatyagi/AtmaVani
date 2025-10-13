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
      <Navbar />

      {/* HERO SECTION */}
      <div
        className="hero min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${BGImg})` }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center text-center lg:text-left text-error px-6 sm:px-10 lg:px-16 py-12">
          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold space-y-3">
              <TypingAnimation>ATMAVANI TV</TypingAnimation>
              <TypingAnimation>    Welcome To The World Of</TypingAnimation>
              <TypingAnimation>      4K / HD / SD Devotional TV Channel</TypingAnimation>
            </div>
          </div>
        </div>
      </div>

      {/* OUR PROGRAMS */}
      <div className="px-6 sm:px-10 lg:px-16 my-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-left mb-8">
          Our Programs
        </h1>
        <HomeCarousel />
      </div>

      {/* COMING SOON */}
      <div className="px-6 sm:px-10 lg:px-16 my-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-left mb-8">
          Coming Soon...
        </h1>
        <HomeCarouselComing />
      </div>

      {/* WATCH ANYTIME SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-6 sm:px-10 lg:px-16 my-10">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            Watch Anytime, Anywhere
          </h1>

          <h2 className="text-2xl font-semibold mb-4">STREAMING ON</h2>
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
            <img className="w-28 sm:w-32 rounded-2xl" src={TV1} alt="TV1" />
            <img className="w-28 sm:w-32 rounded-2xl" src={TV2} alt="TV2" />
            <img className="w-28 sm:w-32 rounded-2xl" src={TV3} alt="TV3" />
            <img className="w-28 sm:w-32 rounded-2xl" src={TV4} alt="TV4" />
          </div>

          <h2 className="text-2xl font-semibold mb-4">COMING SOON ON</h2>
          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
            <img className="w-28 sm:w-32 rounded-2xl" src={JioTV} alt="JioTV" />
            <img className="w-28 sm:w-32 rounded-2xl" src={YuppTV} alt="YuppTV" />
          </div>
        </div>

        {/* LOGO IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img src={Logo} alt="Atmavani Logo" className="w-64 sm:w-80 object-contain" />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home
