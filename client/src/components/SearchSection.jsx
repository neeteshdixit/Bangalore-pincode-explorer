import React, { useState } from 'react';
import { IoSearch, IoLocation, IoPin } from 'react-icons/io5';

const SearchSection = ({ onSearch, isLoading }) => {
  const [searchType, setSearchType] = useState('pincode'); // 'pincode' or 'area'
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(searchType, query.trim());
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-32 px-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white mb-4 leading-tight">
          Find any Pincode in <span className="gradient-text">Bangalore</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          Search by area name or pincode to get instant postal details.
        </p>
      </div>

      <div className="glass-card p-2 mb-8 flex space-x-1">
        <button
          onClick={() => setSearchType('pincode')}
          className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl transition-all ${
            searchType === 'pincode'
              ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/40'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
          }`}
        >
          <IoPin />
          <span className="font-semibold">By Pincode</span>
        </button>
        <button
          onClick={() => setSearchType('area')}
          className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl transition-all ${
            searchType === 'area'
              ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/40'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
          }`}
        >
          <IoLocation />
          <span className="font-semibold">By Area Name</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="relative group">
        <input
          type={searchType === 'pincode' ? 'number' : 'text'}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={
            searchType === 'pincode'
              ? 'Enter 6-digit pincode (e.g. 560001)'
              : 'Enter area name (e.g. Indiranagar)'
          }
          className="w-full glass-input py-5 pl-14 pr-32 text-lg text-slate-800 dark:text-white"
        />
        <IoSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-500 transition-colors" size={24} />
        
        <button
          type="submit"
          disabled={isLoading}
          className="absolute right-3 top-1/2 -translate-y-1/2 btn-primary py-2 px-8 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </form>
    </div>
  );
};

export default SearchSection;
