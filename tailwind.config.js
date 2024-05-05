/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "blue-remax": "#044995",
        "blue-warm": "#245EC2",
        "blue-soft": "#A4D7F4",
        "red-remax": "#E11C2C",
        "blue-remax-2": "#007DC3",
        tersier: "#F6F7F9",
        base: "##6694C4",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("daisyui")],
  daisyui: {
    themes: false,
    darkTheme: "white",
  },
};
