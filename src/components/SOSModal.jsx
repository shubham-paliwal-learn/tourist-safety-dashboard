// src/components/SOSModal.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

const SOSModal = () => {
  const { confirmSos, cancelSos } = useAppContext();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      confirmSos();
    }
  }, [countdown, confirmSos]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      {/* Fallback comment for non-JS: Use a simple modal class */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-neutral-surface-light rounded-lg shadow-xl p-6 w-full max-w-md text-center"
      >
        <h2 className="text-2xl font-bold text-danger-red">SOS CONFIRMATION</h2>
        <p className="mt-2 text-text-secondary-light">
          An emergency alert will be sent to local authorities and your emergency contacts.
        </p>
        <div className="my-6">
          <p className="text-6xl font-mono font-bold text-danger-red">{countdown}</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div className="bg-danger-red h-2.5 rounded-full animate-countdown-bar"></div>
          </div>
        </div>
        <button
          onClick={cancelSos}
          aria-label="Cancel SOS request"
          className="w-full bg-gray-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-600 transition-colors"
        >
          CANCEL
        </button>
      </motion.div>
    </div>
  );
};

export default SOSModal;