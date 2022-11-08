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
        dark: '#6B6B6B',
        darkest: '#212529',
      },
      lightest: '#F5EEFC',
      light: '#D5BAF3',
      mid: '#9d4edd',
      dark: '#3c096c',
      darkest: '#150029',
      accent: {
        light: '#febe86',
        DEFAULT: '#ff9100',
        dark: '#f35b04',
      },
      action: '#18AF9D',
      yellow: '#ffffe0',
      blue: '#add8e6',
    },
  },
  plugins: [],
};
