import React from 'react';
import { IoLocationSharp, IoMoon, IoSunny } from 'react-icons/io5';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center glass-card px-6 py-3">
        <div className="flex items-center space-x-2">
          <div className="bg-primary-600 p-2 rounded-lg text-white shadow-lg shadow-primary-500/30">
            <IoLocationSharp size={24} />
          </div>
          <span className="text-xl font-bold gradient-text hidden sm:block">
            Bangalore Pincode Explorer
          </span>
          <span className="text-xl font-bold gradient-text sm:hidden">
            BPE
          </span>
        </div>

        <button
          onClick={toggleDarkMode}
          className="p-3 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-yellow-400 transition-all hover:scale-110 active:scale-95"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <IoSunny size={20} /> : <IoMoon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
