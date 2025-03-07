// Popup.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Popup = ({ message, isVisible, onClose }) => {
  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-2">
          <div className="bg-black rounded-lg border-2 border-grey shadow-lg p-6 max-w-sm">
            <div className='flex justify-center'>
            <FontAwesomeIcon className='h-16 text-green' icon={faCircleCheck} />
            </div>
            <p className="mt-2 text-white text-center">{message}</p>
            <div className='flex justify-center'>
            <button
              className="mt-4 px-6 py-2 bg-primary text-white rounded hover:bg-green-600 transition"
              onClick={onClose}
            >
              Close
            </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
