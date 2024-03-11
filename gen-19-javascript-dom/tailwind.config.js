/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","*.{html,js}" ],
  theme: {
    extend: {
      colors:{
        tema: '#fdf8f3',
        tema2: '#9a8c7a',
        tema3: '#e5ded6'
      },
      fontFamily: {
        grotesk: "ClashGrotesk-Regular",
      },
    },
  },
  plugins: [],
}

