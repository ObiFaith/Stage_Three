/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    colors: {
      white: {
        400: '#FAFFFF',
      },
      green: {
        200: '#E9F6F5',
        400: '#20A39E',
        500: '#1A827E',
        600: '#187A77',
        800: '#0E4947',
      },
      red: {
        400: '#D75252',
        600: '#8F3737',
      }
    },
    extend: {
      fontFamily: {
        'openSans':['"Open Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}