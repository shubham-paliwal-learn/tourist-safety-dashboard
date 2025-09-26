// src/utils/formatTime.js
/**
 * Formats a timestamp into a relative time string (e.g., "5 minutes ago").
 * @param {Date} date - The date object to format.
 * @returns {string} - The formatted relative time string.
 */
export const formatRelativeTime = (date) => {
  const now = new Date();
  const seconds = Math.round((now - date) / 1000);

  if (seconds < 5) {
    return "just now";
  } else if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else {
    const days = Math.floor(seconds / 86400);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  }
};