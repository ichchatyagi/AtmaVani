import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About1 from '../assets/About1.png'
import About2 from '../assets/About2.png'
import AboutHero from '../assets/AboutHero.png'

const About = () => {

  const missionStatement = `AtmaNamaste
Our mission is to bring back the spirit of Hindu devo on for all ages—from Gen Z to seniors
over 60. We create meaningful and inspiring content that helps people feel closer to their
roots, understand the wisdom of Sanatan Dharma, and live with more peace and purpose.
Through stories, prayers, and teachings, we aim to awaken the soul and make spirituality part
of everyday life.
We are commi ed to bringing families closer to faith and spirituality, nurturing a sense of
unity and shared values across genera ons.`;
  const visionStatement = `Our channel aspires to become the paramount devotional retreat for all ages, oﬀering a
sacred space where faith meets culture and tradi on meets innova on. Our dream is to
create a peaceful and inspiring space where families come together to explore faith, learn
spiritual values, and feel connected to Hindu tradi ons. By blending old wisdom with new
ways of storytelling, we aim to become the most trusted devo onal retreat for every
genera on—from curious youth to devoted elders. By nurturing spiritual values,
strengthening family bonds, and celebra ng Sanatan Dharma, we aim to be the guiding light
for millions—uni ng genera ons in devo on, discovery, and divine experience.
Our vision is to become the paramount devo onal retreat for all ages—a trusted companion
on your spiritual journey. Whether you're seeking peace, clarity, or a deeper connec on to
your roots, Atmavani TV is here to guide, upli , and unite.
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
              <p className="mb-5">Welcome to Atmavani TV—India’s leading devo onal and spiritual socio-cultural channel. Our
mission is to revive Hindu spirituality across genera ons, from Gen Z to seniors over 60, by
crea ng content that’s meaningful, inspiring, and rooted in Sanatan Dharma.
We oﬀer a sacred space where families come together to explore faith, learn spiritual values,
and reconnect with their cultural heritage. Through stories, prayers, teachings, and cultural
programs, we blend ancient wisdom with modern storytelling to make spirituality part of
everyday life.</p>
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
              Shubbh Malhotra is a visionary leader whose mul faceted journey spans fashion, media,
              spirituality, and social impact. A woman of substance and style, she proudly represents India
              as the Honorable Style Director of London Fashion Week, where she has been honored with
              pres gious awards and has graced numerous high-profile interna onal events. Her influence
              extends beyond fashion into the realm of numerology, where she guides individuals toward
              empowered futures through the transforma ve power of Numeroscope .
              As the Founder and CEO of mul ple pioneering ventures, Shubbh con nues to redefine
              excellence across industries:
              </p>
              <ul className="list-disc list-inside">
                <li>
                  Shubbh Media Entertainment – A dynamic content powerhouse producing cap va ng
                and culturally resonant media.
                </li>
                <li>
                  Shubbh Media Premiere Cricket League – A unique ini a ve blending sports and
                entertainment to celebrate talent and teamwork.
                </li>
                <li>
                  Shubbh Astha Founda on – A hear elt mission to upli aspiring ar sts and promote
                au sm awareness through inclusive fine arts programs.
                </li>
                <li>
                  Atmavani TV Channel – India’s leading devo onal and spiritual socio-cultural pla orm,
                spreading posi vity, values, and spiritual wisdom across the globe.
                </li>
              </ul>
              <p className="py-6">
              Driven by boundless crea vity and unwavering dedica on, Shubbh Malhotra inspires
              audiences worldwide with her commitment to innova on, empowerment, and cultural
              enrichment.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About