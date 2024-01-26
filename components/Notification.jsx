
import React from 'react';

const Popup = ({ onClose }) => {
  return (
    <div id="popup" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg font-semibold mb-4">The backend of the site is in development mode</p>
        <p className="mb-4">Will be back online soon...</p>
        <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center">Close</button>
      </div>
    </div>
  );
};

export default Popup;
