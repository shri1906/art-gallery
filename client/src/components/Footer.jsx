// Footer.js
import React from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useTheme } from '../context/ThemeContext';

function Footer() {
    const {theme} = useTheme();

  return (
    <footer className={`${theme === 'dark' ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-800'} py-8 mt-16 w-full fixed bottom-0`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">&copy; {new Date().getFullYear()}  Art Gallery. All rights reserved.</p>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0">
            <a href="/privacy" className="text-sm mx-2">Privacy Policy</a>
            <a href="/terms" className="text-sm mx-2">Terms of Service</a>
            <a href="/contact" className="text-sm  mx-2">Contact Us</a>
          </nav>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="">
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="">
              <FaSquareXTwitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;