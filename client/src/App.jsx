import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SearchSection from './components/SearchSection';
import ResultCard from './components/ResultCard';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import Footer from './components/Footer';
import { getPincodeDetails, getAreaDetails } from './services/api';
import { IoTrashOutline, IoTimeOutline, IoHeartOutline, IoChevronForward } from 'react-icons/io5';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('searchHistory');
    return saved ? JSON.parse(saved) : [];
  });
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleSearch = async (type, query) => {
    setIsLoading(true);
    setError(null);
    setResults([]);

    try {
      let data;
      if (type === 'pincode') {
        data = await getPincodeDetails(query);
      } else {
        data = await getAreaDetails(query);
      }

      setResults(data.data);
      
      // Update history
      const newHistoryItem = { type, query, timestamp: new Date().toISOString() };
      setHistory(prev => [newHistoryItem, ...prev.filter(h => h.query !== query)].slice(0, 5));
    } catch (err) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleFavorite = (item) => {
    setFavorites(prev => {
      const exists = prev.find(f => f.Name === item.Name && f.Pincode === item.Pincode);
      if (exists) {
        return prev.filter(f => !(f.Name === item.Name && f.Pincode === item.Pincode));
      } else {
        return [...prev, item];
      }
    });
  };

  const clearHistory = () => setHistory([]);

  return (
    <div className="min-h-screen">
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      
      <main className="pb-20">
        <SearchSection onSearch={handleSearch} isLoading={isLoading} />
        
        <ErrorMessage message={error} onClear={() => setError(null)} />

        {/* Quick Access Tabs (History & Favorites) */}
        {!results.length && !isLoading && !error && (
          <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* History Section */}
            <div className="glass-card p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-2 text-slate-800 dark:text-white">
                  <IoTimeOutline size={22} className="text-primary-500" />
                  <h2 className="text-xl font-bold">Recent Searches</h2>
                </div>
                {history.length > 0 && (
                  <button onClick={clearHistory} className="text-slate-400 hover:text-red-500 transition-colors">
                    <IoTrashOutline size={20} />
                  </button>
                )}
              </div>
              {history.length > 0 ? (
                <div className="space-y-3">
                  {history.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSearch(item.type, item.query)}
                      className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all group"
                    >
                      <div className="flex items-center space-x-3">
                        <span className={`text-[10px] px-2 py-1 rounded-md font-bold uppercase ${item.type === 'pincode' ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40' : 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40'}`}>
                          {item.type}
                        </span>
                        <span className="font-semibold text-slate-700 dark:text-slate-300">{item.query}</span>
                      </div>
                      <IoChevronForward className="text-slate-300 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-slate-400 text-center py-10 italic">No recent searches yet.</p>
              )}
            </div>

            {/* Favorites Section */}
            <div className="glass-card p-6">
              <div className="flex items-center space-x-2 text-slate-800 dark:text-white mb-6">
                <IoHeartOutline size={22} className="text-red-500" />
                <h2 className="text-xl font-bold">Favorites</h2>
              </div>
              {favorites.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {favorites.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-slate-800 dark:text-white text-sm truncate pr-2">{item.Name}</h4>
                        <button onClick={() => toggleFavorite(item)} className="text-red-500"><IoHeartOutline size={16} /></button>
                      </div>
                      <p className="text-2xl font-black text-primary-600 dark:text-primary-400">{item.Pincode}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-400 text-center py-10 italic">Save your frequent locations here.</p>
              )}
            </div>
          </div>
        )}

        {/* Results Grid */}
        {isLoading ? (
          <Loader count={6} />
        ) : results.length > 0 ? (
          <div className="max-w-7xl mx-auto px-6 mt-12">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Search Results</h2>
                <p className="text-slate-500 dark:text-slate-400">Found {results.length} locations matching your query.</p>
              </div>
              <button onClick={() => setResults([])} className="btn-primary py-2 px-4 text-xs">Clear All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((item, index) => (
                <ResultCard
                  key={`${item.Name}-${item.Pincode}-${index}`}
                  data={item}
                  index={index}
                  isFavorite={favorites.some(f => f.Name === item.Name && f.Pincode === item.Pincode)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          </div>
        ) : null}
      </main>

      <Footer />
    </div>
  );
}

export default App;
