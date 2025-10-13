import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About1 from '../assets/About1.png'
import About2 from '../assets/About2.png'
import AboutHero from '../assets/AboutHero.png'
import Founder from '../assets/Founder.jpg'

const About = () => {

  const missionStatement = `AtmaNamaste
Our mission is to bring back the spirit of Hindu devotion for all ages—from Gen Z to seniors
over 60. We create meaningful and inspiring content that helps people feel closer to their
roots, understand the wisdom of Sanatan Dharma, and live with more peace and purpose.
Through stories, prayers, and teachings, we aim to awaken the soul and make spirituality part
of everyday life.
We are commitied to bringing families closer to faith and spirituality, nurturing a sense of
unity and shared values across generations.`;
  const visionStatement = `Our channel aspires to become the paramount devotional retreat for all ages, oﬀering a
sacred space where faith meets culture and tradition meets innovation. Our dream is to
create a peaceful and inspiring space where families come together to explore faith, learn
spiritual values, and feel connected to Hindu traditions. By blending old wisdom with new
ways of storytelling, we aim to become the most trusted devotional retreat for every
generation—from curious youth to devoted elders. By nurturing spiritual values,
strengthening family bonds, and celebrating Sanatan Dharma, we aim to be the guiding light
for millions—uniting generations in devotion, discovery, and divine experience.
Our vision is to become the paramount retreat for all ages—a trusted companion
on your spiritual journey. Whether you're seeking peace, clarity, or a deeper connection to
your roots, Atmavani TV is here to guide, uplift , and unite.
Bringing families closer to faith and spirituality.`;

  return (
    <>
      <Navbar/>
      <div>
        <div
          className="hero min-h-screen"
          style={{ backgroundImage: `url(${AboutHero})` }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md bg-base-100/40 backdrop-blur-lg p-8 rounded-lg">
              <h1 className="mb-5 text-5xl font-bold">About Us</h1>
              <p className="mb-5">Welcome to Atmavani TV—India’s leading devotional and spiritual socio-cultural channel. Our
                mission is to revive Hindu spirituality across generations, from Gen Z to seniors over 60, by
                creating content that’s meaningful, inspiring, and rooted in Sanatan Dharma.
                We oﬀer a sacred space where families come together to explore faith, learn spiritual values,
                and reconnect with their cultural heritage. Through stories, prayers, teachings, and cultural
                programs, we blend ancient wisdom with modern storytelling to make spirituality part of
                everyday life.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="hero bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={About1}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-4xl font-bold">Our Mission</h1>
              <p className="py-6">
                {missionStatement}
              </p>
              <button className="btn btn-primary">Get in Touch</button>
            </div>
          </div>
        </div>
        <div className="hero bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={About2}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-4xl font-bold">Our Vision</h1>
              <p className="py-6">
                {visionStatement}
              </p>
              <button className="btn btn-primary">Get in Touch</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 bg-base-200">
          <div className="text-left p-8">
            <h2 className='text-4xl font-bold text-left my-8'>About Our Founder</h2>
            <p className='font-bold text-xl'>Shubbh Malhotra</p>
            <p className="py-6">
              Founder & CEO, Shubbh Media Group
              Shubbh Malhotra is a visionary leader whose multifaceted journey spans fashion, media,
              spirituality, and social impact. A woman of substance and style, she proudly represents India
              as the Honorable Style Director of London Fashion Week, where she has been honored with
              prestigious awards and has graced numerous high-profile international events. Her influence
              extends beyond fashion into the realm of numerology, where she guides individuals toward
              empowered futures through the transformative power of Numeroscope .
              As the Founder and CEO of multiple pioneering ventures, Shubbh continues to redefine
              excellence across industries:
              </p>
              <ul className="list-disc list-inside">
                <li>
                  Shubbh Media Entertainment – A dynamic content powerhouse producing captivating
                and culturally resonant media.
                </li>
                <li>
                  Shubbh Media Premiere Cricket League – A unique initiative blending sports and
                entertainment to celebrate talent and teamwork.
                </li>
                <li>
                  Shubbh Astha Foundation – A heartfelt mission to uplift aspiring artists and promote
                autism awareness through inclusive fine arts programs.
                </li>
                <li>
                  Atmavani TV Channel – India’s leading devotional and spiritual socio-cultural platform,
                spreading positivity, values, and spiritual wisdom across the globe.
                </li>
              </ul>
              <p className="py-6">
              Driven by boundless creativity and unwavering dedication, Shubbh Malhotra inspires
              audiences worldwide with her commitment to innovation, empowerment, and cultural
              enrichment.
            </p>
          </div>
          <div className='mx-auto py-20'>
            <img className='h-full w-[500px] object-cover shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300' src={Founder} alt="Shubh" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About