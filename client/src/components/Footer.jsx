import React from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

function Footer() {
    const {theme} = useTheme();

  return (
    <footer className={`${theme === 'dark' ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-800'} py-8  w-full  bottom-0`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">&copy; {new Date().getFullYear()}  Brush & Beyond | All rights reserved.</p>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0">
            <Link to="/privacy" className="text-sm mx-2">Privacy Policy</Link>
            <Link to="/terms" className="text-sm mx-2">Terms of Service</Link>
            <Link to="/contact" className="text-sm  mx-2">Contact Us</Link>
          </nav>
          <div className="flex justify-center md:justify-end space-x-4">
            <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="">
              <FaFacebook className="h-6 w-6" />
            </Link>
            <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="">
              <FaInstagram className="h-6 w-6" />
            </Link>
            <Link to="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="">
              <FaSquareXTwitter className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;