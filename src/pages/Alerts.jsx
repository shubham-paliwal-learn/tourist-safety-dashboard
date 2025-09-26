// src/pages/Alerts.jsx
import React from 'react';
import AlertList from '../components/AlertList';

const Alerts = () => {
  return (
    <div className="p-4 md:p-6">
      <h2 className="text-2xl font-bold mb-4">Safety Alerts</h2>
      <AlertList />
    </div>
  );
};

export default Alerts;