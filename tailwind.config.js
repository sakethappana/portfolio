/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#020617",
        primary: "#00f5d4",
        secondary: "#7c3aed",
      },
    },
  },
  plugins: [],
};