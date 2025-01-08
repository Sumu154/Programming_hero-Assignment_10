/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode by class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '460px',
      },
      fontFamily: {
        'Lato': "Lato",
        'Roboto': "Roboto Slab",
      },
      colors: {
        'background': '#F4F8F8',
        'darkbackground': '#1C1C1C',
        'cardbackground': '#2A2A2A',
        'footerbackground': '#121212',
        'blue': '#1E88E5',
        'pink': '#FF4081',
        // 'middlepastel': '#79A3B1',
        // 'darkpastel': '#456268',
        // 'dark': '#000000',
        // 'white': '#FFFFFF',
        // 'pink': '#DA396E',
        'jolpai': '#B2BB1E',
        'orange': '#F08B1D',
        'redd': '#ed0707',
        'sky': '#5D87A1',
        'yellow': '#E3B430',
        'green': '#309C08',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

