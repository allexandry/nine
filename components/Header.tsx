import React, { useState, useEffect } from 'react';
import { Fingerprint } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg border-b border-gray-200' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <a href="#" className="flex-shrink-0 flex items-center gap-3" aria-label="Home">
            <Fingerprint size={36} />
            <div className="flex items-center">
              <div className="bg-red-600 px-2"><span className="text-3xl font-bold text-white">N</span></div>
              <div className="bg-red-800 px-2"><span className="text-3xl font-bold text-white">I</span></div>
              <div className="w-2"></div>
              <div className="bg-stone-700 px-2"><span className="text-3xl font-bold text-white">N</span></div>
              <div className="bg-black px-2"><span className="text-3xl font-bold text-white">E</span></div>
            </div>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">How It Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Pricing</a>
          </nav>
          
          <div className="hidden md:block">
             <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-5 rounded-md transition duration-300 transform hover:scale-105">
                Join / Login
             </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
                <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                </svg>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
             <div className="md:hidden pb-4">
                <nav className="flex flex-col space-y-2 mt-2">
                    <a href="#features" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors px-3 py-2 rounded-md font-medium" onClick={() => setIsMenuOpen(false)}>Features</a>
                    <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors px-3 py-2 rounded-md font-medium" onClick={() => setIsMenuOpen(false)}>How It Works</a>
                    <a href="#pricing" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors px-3 py-2 rounded-md font-medium" onClick={() => setIsMenuOpen(false)}>Pricing</a>
                    <button className="mt-2 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-5 rounded-md transition duration-300">
                         Join / Login
                    </button>
                </nav>
            </div>
        )}

      </div>
    </header>
  );
};