import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import Logo from '../assets/Logo.png';
import ReactPlayer from "react-player";

const Navbar = () => {
  const [showPlayer, setShowPlayer] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <nav className="bg-gray-950/40 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={Logo} alt="AtmaVani" className="w-30 sm:w-30"/>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 text-white font-medium">
            <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
            <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
            <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
            <Link to="/fpc" className="hover:text-yellow-400 transition">TV Guide</Link>
            <button className="hover:text-yellow-400 transition" onClick={() => setShowPlayer(true)}>Live TV</button>
            <a href="https://www.youtube.com/@AtmavaniTV" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition">
              Videos
            </a>
          </div>

          {/* Buttons (Desktop) */}
          <div className="hidden lg:flex space-x-4">
            <Link to="/login" className="btn bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition">
              Login
            </Link>
            <Link to="/register" className="btn bg-yellow-400 text-black hover:bg-yellow-500 transition">
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-900/95 text-white backdrop-blur-sm border-t border-gray-700">
          <div className="flex flex-col space-y-3 px-6 py-4 text-center font-medium">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link to="/fpc" onClick={() => setMenuOpen(false)}>TV Guide</Link>
            <Link to="/livetv" onClick={() => setMenuOpen(false)}>Live TV</Link>
            <a href="https://www.youtube.com/@AtmavaniTV" onClick={() => setMenuOpen(false)} target="_blank" rel="noreferrer">Videos</a>

            <div className="flex justify-center gap-4 pt-3 border-t border-gray-700">
              <Link to="/login" onClick={() => setMenuOpen(false)} className="btn bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition w-24">
                Login
              </Link>
              <Link to="/register" onClick={() => setMenuOpen(false)} className="btn bg-yellow-400 text-black hover:bg-yellow-500 transition w-24">
                Register
              </Link>
            </div>
          </div>
        </div>
      )}

    </nav>
    {showPlayer && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
          <div className="relative w-3/4 h-3/4">
            <ReactPlayer
              url="https://freshlive.in/atmavanitv/atmavanitv/index.m3u8"
              playing
              controls
              width="100%"
              height="100%"
            />
            <button
              onClick={() => setShowPlayer(false)}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
      </>
  );
};

export default Navbar;
