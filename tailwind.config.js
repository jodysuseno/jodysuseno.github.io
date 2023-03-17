/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container:{
      center:true,
      padding:'16px',
    },
    extend: {
      colors: {
        secondary : '#64748b',
        primary: '#22c55e',
      },
      screens:{
        '2xl' : '1320px;'
      },
    },
  },
  plugins: [],
}
