import React from 'react';
import { IoAlertCircleOutline } from 'react-icons/io5';

const ErrorMessage = ({ message, onClear }) => {
  if (!message) return null;

  return (
    <div className="max-w-3xl mx-auto mt-8 px-6">
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3 text-red-600 dark:text-red-400">
          <IoAlertCircleOutline size={24} />
          <p className="font-semibold">{message}</p>
        </div>
        <button
          onClick={onClear}
          className="text-red-400 hover:text-red-600 dark:hover:text-red-300 font-bold px-2"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;
