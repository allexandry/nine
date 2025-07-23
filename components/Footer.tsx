import React from 'react';
import { Fingerprint } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex-shrink-0 flex items-center gap-3">
            <Fingerprint size={36} />
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="bg-red-600 px-2"><span className="text-2xl font-bold text-white">N</span></div>
                <div className="bg-red-800 px-2"><span className="text-2xl font-bold text-white">I</span></div>
                <div className="w-2"></div>
                <div className="bg-stone-700 px-2"><span className="text-2xl font-bold text-white">N</span></div>
                <div className="bg-black px-2"><span className="text-2xl font-bold text-white">E</span></div>
              </div>
              <p className="mt-1 text-center text-gray-500 text-[6px] tracking-[0.2em] uppercase">Digital proved identity</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-500">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-gray-900 transition-colors">How It Works</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} NiNe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};