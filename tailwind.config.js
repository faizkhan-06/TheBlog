/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins "],
        SFProDisplay: ["SF Pro Display"],
      },
      boxShadow: {
        "light-on-dark": "0 4px 6px rgba(255, 255, 255, 0.1)", // Lighter shadow for dark backgrounds
        "soft-light-on-dark": "0 2px 4px rgba(255, 255, 255, 0.05)",
      },
    },
  },
  plugins: [],
};
