import React from 'react';

const Rules = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="relative w-full max-w-md p-6 bg-white rounded-md">
        <h2 className="text-xl font-bold mb-4">Rules and Regulations</h2>
        <p>Need to follow these rules</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={onClose}
        >
          I accept
        </button>
      </div>
    </div>
  );
};

export default Rules;