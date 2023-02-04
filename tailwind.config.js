/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blue: "#01192F",
        "blue-100": "#3a7ebf"
      }
    }
  },
  plugins: [require("@tailwindcss/line-clamp")]
};
