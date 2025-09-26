// src/components/DigitalIDBadge.jsx
import React from 'react';
import { ShieldCheck, ShieldAlert } from 'lucide-react';

const DigitalIDBadge = ({ isVerified }) => {
  const status = isVerified 
    ? {
        text: 'Verified Digital ID',
        icon: ShieldCheck,
        bgColor: 'bg-safety-green/10',
        textColor: 'text-safety-green',
      }
    : {
        text: 'Unverified ID',
        icon: ShieldAlert,
        bgColor: 'bg-warning-amber/10',
        textColor: 'text-warning-amber',
      };
  
  const Icon = status.icon;

  return (
    <div className={`flex items-center p-3 rounded-lg ${status.bgColor}`}>
      <Icon className={`w-8 h-8 mr-4 ${status.textColor}`} />
      <div>
        <p className={`font-bold ${status.textColor}`}>{status.text}</p>
        <p className="text-xs text-text-secondary-light">Anchored on blockchain for security</p>
      </div>
    </div>
  );
};

export default DigitalIDBadge;