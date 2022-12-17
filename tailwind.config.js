/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slack: "#4a154c",
        Navigation: "#301134",
        search: "#5e3f5f",
      },
      fontFamily: {
        Inter: "Inter",
        Lato: "Lato",
      },
    },
  },
  plugins: [],
};
