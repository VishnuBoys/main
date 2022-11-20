/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wide-student-bg' : "url('../src/images/wide-student-bg.jpg')",
        'class-bg': "url('../src/images/class-bg.jpg')"
      },
      colors: {
        'custom-orange' : '#ffa900', 
      },
    },
  },
  plugins: [],
}
