/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{htm,js}"],
  theme: {
    screens: {
      'xsm': '355px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
    extend: {},
  },
  plugins: [],
}

