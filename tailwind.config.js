/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}", "./src/"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
      colors: {
        background: "#000000",
        "hero-fade": "#000000",
        highlight: "#FFFFFF",
      },
      screens: {
        "2xl": "1440px",
      },
      backgroundImage: {
        herobg: "url('/src/assets/brg-bg.jpg')",
      },
    },
  },
  plugins: [],
};
