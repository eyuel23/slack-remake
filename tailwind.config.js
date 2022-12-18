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
        Workspace: "#3f0e40",
        text: "rgba(255, 255, 255, 0.7) ",
      },
      fontFamily: {
        Inter: "Inter",
        Lato: "Lato",
      },
    },
  },
  plugins: [],
};
