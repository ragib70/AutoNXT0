'use client';

import { CarIcon } from './icons/index';

const Header = ({ onRegisterClick }) => {
  const navLinks = ["Exhibitors", "Schedule", "Gallery", "Contact"];
  
  return (
    <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur-lg z-40">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
           <CarIcon className="w-8 h-8 text-blue-500"/>
           <span className="text-2xl font-bold text-white">AutoExpo</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors font-medium">{link}</a>
          ))}
        </nav>
        <button onClick={onRegisterClick} className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg transition-all transform hover:scale-105">
          Register
        </button>
        {/* Mobile menu button can be added here */}
      </div>
    </header>
  );
};

export default Header;
