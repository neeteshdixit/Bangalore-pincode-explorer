import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 mt-20 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-slate-500 dark:text-slate-400">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-lg font-bold gradient-text mb-1">Bangalore Pincode Explorer</h3>
          <p className="text-sm">Helping you find your way around the Garden City.</p>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Bangalore Pincode Explorer. Data provided by India Post.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
