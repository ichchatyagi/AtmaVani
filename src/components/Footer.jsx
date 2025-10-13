import React from 'react'
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer class="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav class="grid grid-flow-col gap-4">
        <Link to='/about' class="link link-hover">About</Link>
        <Link to='/contact' class="link link-hover">Contact</Link>
        <Link to='/fpc' class="link link-hover">TV Guide</Link>
      </nav>
      <nav>
        <div class="grid grid-flow-col gap-4">
         <a href="https://www.instagram.com/atmavanitv/">
          <RiInstagramFill size={24} />
         </a>
         <a href="https://www.youtube.com/@AtmavaniTV">
          <FaYoutube size={24} />
         </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by AtmaVani TV | Designed By <a href="https://nexstarlive.com/">Nexstar</a></p>
      </aside>
  </footer>
  )
}

export default Footer