// src/utils/fakeBlockchain.js
/**
 * Generates a fake blockchain transaction hash.
 * @param {string} data - Optional data to include in the hash seed.
 * @returns {string} - A 66-character hex string prefixed with '0x'.
 */
export const generateFakeTxHash = (data = "") => {
  const seed = data + Date.now() + Math.random();
  let hash = "0x";
  for (let i = 0; i < 64; i++) {
    hash += Math.floor(Math.random() * 16).toString(16);
  }
  return hash;
};