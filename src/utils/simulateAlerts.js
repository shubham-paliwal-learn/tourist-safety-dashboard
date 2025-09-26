// src/utils/simulateAlerts.js
const alertTemplates = [
  { type: "Warning", message: "High traffic reported near Amber Fort. Expect delays." },
  { type: "Critical", message: "Emergency services responding to an incident at Hawa Mahal." },
  { type: "Info", message: "Weather advisory: High temperatures expected this afternoon." },
  { type: "Warning", message: "Geofence alert: You are approaching a restricted area." },
  { type: "Critical", message: "Theft reported in Johari Bazaar. Please be cautious." },
];

/**
 * Simulates receiving a new alert, like from a WebSocket.
 * @returns {object} - A new alert object.
 */
const generateFakeAlert = () => {
  const template = alertTemplates[Math.floor(Math.random() * alertTemplates.length)];
  return {
    id: Date.now(),
    type: template.type,
    message: template.message,
    timestamp: new Date(),
  };
};

/**
 * Starts an interval to simulate real-time alerts.
 * @param {function} addAlertCallback - The function to call with a new alert.
 * @param {number} intervalMs - The interval in milliseconds.
 * @returns {function} - A cleanup function to stop the simulation.
 */
export const startAlertSimulation = (addAlertCallback, intervalMs = 15000) => {
  // To use a real WebSocket:
  // const socket = new WebSocket('wss://api.yourservice.com/ws/alerts');
  // socket.onmessage = (event) => {
  //   const newAlert = JSON.parse(event.data);
  //   addAlertCallback(newAlert);
  // };

  const intervalId = setInterval(() => {
    addAlertCallback(generateFakeAlert());
  }, intervalMs);

  // Return a cleanup function
  return () => clearInterval(intervalId);
};