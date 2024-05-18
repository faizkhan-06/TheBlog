/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins "],
        SFProDisplay: ["SF Pro Display"],
      },
      backgroundImage: {
        "bg-cosmic":
          "url(assets/images/cosmic-background-with-colorful-laser-lights.jpg)",
      },
    },
  },
  plugins: [],
};
