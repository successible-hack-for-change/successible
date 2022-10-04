/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      black: '#000000',
      white: '#ffffff',
      grey: {
        lighest: '#f8f9fa',
        light: '#dee2e6',
        DEFAULT: '#adb5bd',
        dark: '#495057',
        darkest: '#212529',
      },
      lightest: '#f2e9e4',
      light: '#c9ada7',
      mid: '#9a8c98',
      dark: '#4a4e69',
      darkest: '#22223b',
      accent: {
        light: '#FFCAD4',
        DEFAULT: '#C1666B',
        dark: '#913B3F',
      },
    },
  },
  plugins: [],
};
