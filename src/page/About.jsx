import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About1 from '../assets/About1.png';
import About2 from '../assets/About2.png';
import AboutHero from '../assets/AboutHero.png';
import Founder from '../assets/Founder.jpg';
import { Link } from 'react-router-dom';

const About = () => {
  const missionStatement = `AtmaNamaste
Our mission is to bring back the spirit of Hindu devotion for all ages—from Gen Z to seniors
over 60. We create meaningful and inspiring content that helps people feel closer to their
roots, understand the wisdom of Sanatan Dharma, and live with more peace and purpose.
Through stories, prayers, and teachings, we aim to awaken the soul and make spirituality part
of everyday life.
We are committed to bringing families closer to faith and spirituality, nurturing a sense of
unity and shared values across generations.`;

  const visionStatement = `Our channel aspires to become the paramount devotional retreat for all ages, offering a
sacred space where faith meets culture and tradition meets innovation. Our dream is to
create a peaceful and inspiring space where families come together to explore faith, learn
spiritual values, and feel connected to Hindu traditions. By blending old wisdom with new
ways of storytelling, we aim to become the most trusted devotional retreat for every
generation—from curious youth to devoted elders. By nurturing spiritual values,
strengthening family bonds, and celebrating Sanatan Dharma, we aim to be the guiding light
for millions—uniting generations in devotion, discovery, and divine experience.`;

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="hero min-h-[70vh] bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${AboutHero})` }}
      >
        <div className="absolute inset-0"></div>
        <div className="relative z-10 max-w-2xl bg-white/20 backdrop-blur-md p-6 sm:p-8 rounded-lg text-black">
          <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Welcome to <strong>Atmavani TV</strong> — India’s leading devotional and spiritual
            socio-cultural channel. Our mission is to revive Hindu spirituality across generations,
            from Gen Z to seniors over 60, by creating content that’s meaningful, inspiring, and rooted
            in <strong>Sanatan Dharma</strong>. We offer a sacred space where families come together to
            explore faith, learn spiritual values, and reconnect with their cultural heritage.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-base-200 py-10 px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <img
            src={About1}
            alt="Our Mission"
            className="w-full sm:w-2/3 lg:w-1/2 rounded-lg shadow-2xl object-cover"
          />
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Our Mission</h2>
            <p className="text-whitetext-sm sm:text-base md:text-lg leading-relaxed mb-6">
              {missionStatement}
            </p>
            <Link to="/contact">
              <button className="btn btn-primary">Get in Touch</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-base-200 py-10 px-4 sm:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Our Vision</h2>
            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-6">
              {visionStatement}
            </p>
            <Link to="/contact">
              <button className="btn btn-primary">Get in Touch</button>
            </Link>
          </div>
          <img
            src={About2}
            alt="Our Vision"
            className="w-full sm:w-2/3 lg:w-1/2 rounded-lg shadow-2xl object-cover"
          />
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-base-200 py-12 px-4 sm:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Founder Text */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">About Our Founder</h2>
            <p className="font-semibold text-lg text-white">Shubbh Malhotra</p>
            <p className="italic text-white mb-4">Founder & CEO, Shubbh Media Group</p>
            <p className="text-white text-sm sm:text-base leading-relaxed mb-4">
              Shubbh Malhotra is a visionary leader whose multifaceted journey spans fashion, media,
              spirituality, and social impact. A woman of substance and style, she proudly represents India
              as the Honorable Style Director of London Fashion Week. Beyond fashion, she is a renowned
              numerologist who empowers individuals through the art of Numeroscope.
            </p>

            <ul className="list-disc list-inside text-white space-y-2 text-sm sm:text-base mb-6">
              <li>Shubbh Media Entertainment – Producing culturally rich and inspiring media content.</li>
              <li>Shubbh Media Premiere Cricket League – Celebrating sportsmanship and creativity.</li>
              <li>Shubbh Astha Foundation – Promoting autism awareness and inclusive fine arts programs.</li>
              <li>Atmavani TV Channel – A devotional platform spreading positivity and wisdom worldwide.</li>
            </ul>

            <p className="text-white text-sm sm:text-base leading-relaxed">
              Driven by boundless creativity and unwavering dedication, Shubbh Malhotra inspires audiences
              globally through innovation, empowerment, and cultural enrichment.
            </p>
          </div>

          {/* Founder Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={Founder}
              alt="Shubbh Malhotra"
              className="w-72 sm:w-96 md:w-[400px] lg:w-[450px] rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 object-cover"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
