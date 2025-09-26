// src/components/LiveSOSView.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle, Radio } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const LiveSOSView = () => {
  const { sosDetails, resolveSos, sosState } = useAppContext();

  if (!sosDetails) return null;
  
  const isResolved = sosState === 'resolved';

  return (
    <div className="fixed inset-0 bg-neutral-bg-dark text-white flex flex-col items-center justify-center z-50 p-4 text-center">
      {/* Fallback comment: Use CSS classes for transitions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg"
      >
        {isResolved ? (
          <CheckCircle className="mx-auto text-safety-green mb-4" size={64} />
        ) : (
          <Radio className="mx-auto text-danger-red animate-pulse mb-4" size={64} />
        )}

        <h1 className="text-3xl font-bold mb-2">
          {isResolved ? 'SOS Resolved' : 'SOS ACTIVATED'}
        </h1>
        <p className="text-neutral-300 mb-6">
          {isResolved ? 'The incident has been marked as resolved.' : 'Your location is being shared with emergency services.'}
        </p>

        {!isResolved && (
            <div className="bg-neutral-surface-dark p-6 rounded-lg mb-6">
              <h2 className="text-xl font-semibold">Responder En Route</h2>
              <p className="text-primary-accent text-3xl my-2">{sosDetails.responder.name}</p>
              <p className="text-2xl">ETA: <span className="font-bold">{sosDetails.responder.eta}</span></p>
            </div>
        )}

        <div className="text-xs text-neutral-400 break-all p-4 bg-black bg-opacity-20 rounded-lg">
          <p className="font-semibold mb-1 flex items-center justify-center">
            <ShieldCheck size={16} className="mr-2 text-safety-green" />
            Blockchain Log (Immutable Record)
          </p>
          <p className="font-mono">{sosDetails.txHash}</p>
        </div>
        
        {!isResolved && (
          <button
            onClick={resolveSos}
            className="mt-8 bg-safety-green text-white font-bold py-3 px-8 rounded-lg"
          >
            Mark as Resolved
          </button>
        )}
      </motion.div>
    </div>
  );
};

export default LiveSOSView;