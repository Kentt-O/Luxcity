/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html",     
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors
        primary: "#4f46e5", 
        secondary: "#9333ea", 
      },
      fontFamily: {
        // adding custom fonts
        sans: ["Roboto", "Arial", "sans-serif"],
      },
      spacing: {
        // Custom spacing values
        128: "32rem", // Example for a large spacing value
      },
      screens: {
        // Custom breakpoints if needed
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
