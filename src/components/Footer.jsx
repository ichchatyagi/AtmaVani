import React from 'react';
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-8 px-4 md:px-10">
      <div className="flex flex-col md:flex-col items-center justify-between gap-6 text-center md:text-center">

        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row gap-3 md:gap-6">
          <Link to="/about" className="link link-hover">About</Link>
          <Link to="/contact" className="link link-hover">Contact</Link>
          <Link to="/fpc" className="link link-hover">TV Guide</Link>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-5 justify-center">
          <a href="https://www.instagram.com/atmavanitv/" target="_blank" rel="noreferrer">
            <RiInstagramFill size={24} className="hover:text-pink-500 transition-colors duration-200" />
          </a>
          <a href="https://www.youtube.com/@AtmavaniTV" target="_blank" rel="noreferrer">
            <FaYoutube size={24} className="hover:text-red-500 transition-colors duration-200" />
          </a>
        </div>

      </div>

      {/* Copyright */}
      <aside className="mt-6 text-sm text-center">
        <p>
          Copyright © {new Date().getFullYear()} — All rights reserved by <strong>AtmaVani TV</strong> | 
          Designed by <a href="https://nexstarlive.com/" className="text-blue-500 hover:underline ml-1">Nexstar</a>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
