import React from 'react';
import { motion } from 'framer-motion';
import { IoCopyOutline, IoStarOutline, IoStar, IoCheckmarkCircleOutline, IoLocationOutline } from 'react-icons/io5';

const ResultCard = ({ data, isFavorite, onToggleFavorite, index }) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="glass-card p-6 flex flex-col h-full group hover:border-primary-500/50 transition-colors"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
            {data.BranchType}
          </span>
          <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {data.Name}
          </h3>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onToggleFavorite(data)}
            className={`p-2 rounded-lg transition-all ${
              isFavorite
                ? 'text-yellow-500 bg-yellow-500/10'
                : 'text-slate-400 hover:text-yellow-500 hover:bg-yellow-500/10'
            }`}
          >
            {isFavorite ? <IoStar size={20} /> : <IoStarOutline size={20} />}
          </button>
        </div>
      </div>

      <div className="space-y-3 flex-grow">
        <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400">
          <IoLocationOutline className="text-primary-500 flex-shrink-0" />
          <span className="text-sm">{data.Taluk}, {data.District}, {data.State}</span>
        </div>
        <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400">
          <IoCheckmarkCircleOutline className="text-green-500 flex-shrink-0" />
          <span className="text-sm">Delivery Status: <span className={data.DeliveryStatus === 'Delivery' ? 'text-green-500 font-semibold' : 'text-amber-500 font-semibold'}>{data.DeliveryStatus}</span></span>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/50 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase text-slate-400 font-bold tracking-widest">Pincode</span>
          <span className="text-2xl font-black text-slate-800 dark:text-white">{data.Pincode}</span>
        </div>
        <button
          onClick={() => copyToClipboard(data.Pincode)}
          className="flex items-center space-x-2 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 px-3 py-2 rounded-lg transition-all"
        >
          <IoCopyOutline />
          <span>Copy</span>
        </button>
      </div>
    </motion.div>
  );
};

export default ResultCard;
