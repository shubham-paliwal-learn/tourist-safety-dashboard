// src/context/AppContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { startAlertSimulation } from '../utils/simulateAlerts';
import { generateFakeTxHash } from '../utils/fakeBlockchain';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

// Mock user data
const mockUser = {
  name: "Alex Doe",
  nationality: "Canadian",
  isVerified: true,
  emergencyContacts: [
    { name: "Jane Doe (Spouse)", phone: "+1-555-123-4567" },
    { name: "Canadian Embassy", phone: "+91-11-4178-2000" },
  ],
};

export const AppProvider = ({ children }) => {
  const [user] = useState(mockUser);
  const [alerts, setAlerts] = useState([]);
  const [sosState, setSosState] = useState('idle'); // idle -> confirming -> active -> resolved
  const [sosDetails, setSosDetails] = useState(null);

  // Simulate receiving real-time alerts
  useEffect(() => {
    const addAlert = (newAlert) => {
      setAlerts((prevAlerts) => [newAlert, ...prevAlerts]);
    };
    const stopSimulation = startAlertSimulation(addAlert);
    return stopSimulation; // Cleanup on unmount
  }, []);
  
  const initiateSos = () => {
    setSosState('confirming');
  };

  const confirmSos = () => {
    // API Call: POST /api/v1/sos
    // const response = await fetch('/api/v1/sos', { method: 'POST', ... });
    const txHash = generateFakeTxHash('SOS_ACTIVATION');
    setSosState('active');
    setSosDetails({
      responder: { name: "Ravi Sharma", eta: "5 mins" },
      txHash,
    });
  };

  const cancelSos = () => {
    setSosState('idle');
    setSosDetails(null);
  };
  
  const resolveSos = () => {
    setSosState('resolved');
    // After a delay, reset to idle
    setTimeout(() => {
      setSosState('idle');
      setSosDetails(null);
    }, 4000);
  };

  const addIncidentReport = (report) => {
    // API Call: POST /api/v1/incidents
    const txHash = generateFakeTxHash(JSON.stringify(report));
    
    // API Call: POST /api/v1/blockchain/anchor
    console.log("Anchoring incident report to blockchain with hash:", txHash);

    // Create an alert from the report
    const newAlert = {
      id: Date.now(),
      type: 'Info',
      message: `New incident reported: ${report.type} at your location.`,
      timestamp: new Date(),
      txHash,
    };
    setAlerts(prev => [newAlert, ...prev]);
    return txHash; // Return hash for confirmation UI
  };


  const value = {
    user,
    alerts,
    sosState,
    sosDetails,
    initiateSos,
    confirmSos,
    cancelSos,
    resolveSos,
    addIncidentReport,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};