'use client';

import { CalendarIcon, MapPinIcon } from '../icons/index';

const HeroSection = ({ onRegisterClick }) => (
  <section id="home" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
    <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
    <video autoPlay loop muted playsInline className="absolute z-0 w-auto min-w-full min-h-full max-w-none">
        <source src="https://cdn.pixabay.com/video/2024/02/12/200276-912384794_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    <div className="relative z-20 px-4 animate-fade-in-up">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4" style={{ textShadow: '0 0 20px rgba(0,0,0,0.7)' }}>
        The Future of Motion is Here
      </h1>
      <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 mb-8" style={{ textShadow: '0 0 10px rgba(0,0,0,0.7)' }}>
        Experience the pinnacle of automotive innovation and design. Join us for the most anticipated auto event of the year.
      </p>
      <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CalendarIcon className="w-5 h-5 text-blue-400"/>
              <span className="font-semibold">November 28 - 30, 2025</span>
          </div>
           <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPinIcon className="w-5 h-5 text-blue-400"/>
              <span className="font-semibold">Christ University, Kengeri Campus</span>
          </div>
      </div>
       <button onClick={onRegisterClick} className="mt-12 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg text-lg transition-all transform hover:scale-105 shadow-2xl shadow-blue-500/30">
        Register Now
      </button>
    </div>
  </section>
);

export default HeroSection;
