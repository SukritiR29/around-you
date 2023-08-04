/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#023047",
        "secondary": "#caf0f8",
        "text": "#023047",
        "baisc": "#023047"
      },

      fontFamily: {
        Roboto: ["Roboto, sans-serif"],
      },
      constainer: {
        padding: "2rem", 
        center: true,
      },

      screens: {
        sm: "640px",
        md: "780px",
      }
    },
  },
  plugins: [],

}

