// src/components/FloatingSOSButton.jsx
import React from 'react';
import { Phone } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const FloatingSOSButton = () => {
  const { initiateSos, sosState } = useAppContext();

  if (sosState === 'active' || sosState === 'confirming') {
    return null; // Hide button during an active SOS flow
  }

  return (
    <button
      onClick={initiateSos}
      aria-label="Activate SOS Emergency Beacon"
      className="fixed bottom-20 md:bottom-8 right-5 z-50 flex items-center justify-center w-16 h-16 bg-danger-red text-white rounded-full shadow-2xl animate-pulse"
    >
      <Phone size={32} />
    </button>
  );
};

export default FloatingSOSButton;