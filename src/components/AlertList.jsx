// src/components/AlertList.jsx
import React, { useState, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import AlertItem from './AlertItem';

const AlertList = () => {
  const { alerts } = useAppContext();
  const [filter, setFilter] = useState('All'); // All, Critical, Warning

  const filteredAlerts = useMemo(() => {
    if (filter === 'All') return alerts;
    return alerts.filter(alert => alert.type === filter);
  }, [alerts, filter]);
  
  const FilterButton = ({ value, label }) => (
    <button
      onClick={() => setFilter(value)}
      className={`px-4 py-2 text-sm font-semibold rounded-full ${
        filter === value 
          ? 'bg-primary-blue text-white' 
          : 'bg-neutral-surface-light text-text-secondary-light border'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <FilterButton value="All" label="All" />
        <FilterButton value="Critical" label="Critical" />
        <FilterButton value="Warning" label="Warning" />
      </div>
      <div className="space-y-4">
        <AnimatePresence>
          {filteredAlerts.length > 0 ? (
            filteredAlerts.map(alert => <AlertItem key={alert.id} alert={alert} />)
          ) : (
            <p className="text-center text-text-secondary-light py-8">No alerts to show.</p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AlertList;