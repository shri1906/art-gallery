import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa"; // Import icons
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`fixed top-0 left-0 w-full shadow-md z-50 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold">
          <img src="./art-logo.png" alt="Art Gallery" className="h-16" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li><Link to="/" className={`hover:text-gray-900 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Home</Link></li>
          <li><Link to="/gallery" className={`hover:text-gray-900 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Gallery</Link></li>
          <li><Link to="/about" className={`hover:text-gray-900 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>About Us</Link></li>
          <li><Link to="/contact" className={`hover:text-gray-900 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Contact Us</Link></li>
          <li>
            <button onClick={toggleTheme} className="focus:outline-none">
              {theme === 'dark' ? <FaSun size={20} className="text-yellow-400" /> : <FaMoon size={20} className="text-gray-700" />}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden focus:outline-none ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className={`md:hidden absolute top-full left-0 w-full py-4 space-y-4 text-center ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white shadow-md'}`}>
          <li><Link to="/" className={`block hover:text-gray-900 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`} onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/gallery" className={`block hover:text-gray-900 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`} onClick={() => setIsOpen(false)}>Gallery</Link></li>
          <li><Link to="/about" className={`block hover:text-gray-900 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`} onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/contact" className={`block hover:text-gray-900 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`} onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li>
            <button onClick={toggleTheme} className="focus:outline-none">
              {theme === 'dark' ? <FaSun size={20} className="text-yellow-400" /> : <FaMoon size={20} className="text-gray-700" />}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;