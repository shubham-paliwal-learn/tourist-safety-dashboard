// src/components/AlertItem.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, AlertTriangle, Info } from 'lucide-react';
import { formatRelativeTime } from '../utils/formatTime';

const alertConfig = {
  Critical: {
    icon: ShieldAlert,
    color: 'text-danger-red',
    bgColor: 'bg-danger-red/10',
    borderColor: 'border-danger-red',
  },
  Warning: {
    icon: AlertTriangle,
    color: 'text-warning-amber',
    bgColor: 'bg-warning-amber/10',
    borderColor: 'border-warning-amber',
  },
  Info: {
    icon: Info,
    color: 'text-primary-blue',
    bgColor: 'bg-primary-blue/10',
    borderColor: 'border-primary-blue',
  },
};

const AlertItem = ({ alert }) => {
  const config = alertConfig[alert.type] || alertConfig.Info;
  const Icon = config.icon;

  return (
    // Fallback: use simple CSS transitions
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className={`flex items-start p-4 rounded-lg border-l-4 ${config.bgColor} ${config.borderColor}`}
    >
      <Icon className={`w-6 h-6 mr-4 flex-shrink-0 ${config.color}`} />
      <div className="flex-grow">
        <p className="font-semibold text-text-primary-light">{alert.type} Alert</p>
        <p className="text-text-secondary-light text-sm">{alert.message}</p>
        <p className="text-xs text-gray-400 mt-2">{formatRelativeTime(alert.timestamp)}</p>
      </div>
    </motion.div>
  );
};

export default AlertItem;