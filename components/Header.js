'use client';

import { useState } from 'react';
import { CarIcon, MenuIcon, XIcon } from './icons/index';

const Header = ({ onRegisterClick }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navLinks = ["Exhibitors", "Schedule", "Gallery", "Contact"];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur-lg z-40">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
           <CarIcon className="w-8 h-8 text-blue-500"/>
           <span className="text-2xl font-bold text-white">AutoNXT</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors font-medium">{link}</a>
          ))}
        </nav>
        <button onClick={onRegisterClick} className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg transition-all transform hover:scale-105">
          Register
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
            <button onClick={() => setMenuOpen(!isMenuOpen)} className="text-white">
                {isMenuOpen ? <XIcon className="w-6 h-6"/> : <MenuIcon className="w-6 h-6"/>}
            </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-lg">
              <nav className="flex flex-col items-center space-y-4 py-4">
                  {navLinks.map(link => (
                      <a key={link} href={`#${link.toLowerCase()}`} onClick={handleLinkClick} className="text-gray-300 hover:text-white transition-colors font-medium text-lg">{link}</a>
                  ))}
                  <button onClick={() => { onRegisterClick(); handleLinkClick(); }} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-lg transition-all">
                    Register
                  </button>
              </nav>
          </div>
      )}
    </header>
  );
};

export default Header;
