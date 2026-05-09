import React from 'react';

const SkeletonCard = () => (
  <div className="glass-card p-6 h-64 animate-pulse">
    <div className="flex justify-between items-start mb-6">
      <div className="space-y-3 w-2/3">
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-full w-1/2"></div>
        <div className="h-6 bg-slate-300 dark:bg-slate-600 rounded-full w-full"></div>
      </div>
      <div className="h-10 w-10 bg-slate-200 dark:bg-slate-700 rounded-lg"></div>
    </div>
    <div className="space-y-4">
      <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-full w-3/4"></div>
      <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-full w-2/3"></div>
    </div>
    <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-700/50 flex justify-between items-center">
      <div className="h-10 w-24 bg-slate-200 dark:bg-slate-700 rounded-lg"></div>
      <div className="h-8 w-20 bg-slate-200 dark:bg-slate-700 rounded-lg"></div>
    </div>
  </div>
);

const Loader = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-6 max-w-7xl mx-auto">
      {[...Array(count)].map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
};

export default Loader;
export { SkeletonCard };
