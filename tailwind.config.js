// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Color Theory Rationale:
        // Using a focused palette to build an intuitive visual language.
        // Blue evokes trust and security, essential for a safety app.
        // Red is universally understood for danger/SOS.
        // Green for success, Amber for caution.
        // Neutrals provide a clean backdrop, ensuring content is the hero.

        // Primary & Accents
        "primary-blue": "#1565D8", // For interactive elements, calls-to-action
        "primary-accent": "#58A6FF", // For hover states, secondary highlights

        // Semantic Colors
        "safety-green": "#16A34A", // For success messages, 'Verified' status
        "warning-amber": "#F59E0B", // For non-critical alerts, warnings
        "danger-red": "#DC2626", // For SOS buttons, critical errors, high-priority alerts

        // Surface & Text
        "neutral-bg-light": "#F8FAFC", // Light mode background
        "neutral-bg-dark": "#0F172A", // Dark mode background
        "neutral-surface-light": "#FFFFFF",
        "neutral-surface-dark": "#1E293B",
        "text-primary-light": "#0F172A",
        "text-primary-dark": "#E2E8F0",
        "text-secondary-light": "#64748B",
        "text-secondary-dark": "#94A3B8",
      },
      animation: {
        "countdown-bar": "countdown 5s linear forwards",
      },
      keyframes: {
        countdown: {
          "0%": { width: "100%" },
          "100%": { width: "0%" },
        },
      },
    },
  },
  plugins: [],
};