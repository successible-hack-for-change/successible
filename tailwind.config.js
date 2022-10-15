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
      lightest: '#f4f4f9',
      light: '#b8dbd9',
      mid: '#586f7c',
      dark: '#2f4550',
      darkest: '#000000',
      accent: {
        light: '#FFCAD4',
        DEFAULT: '#C1666B',
        dark: '#913B3F',
      },
    },
  },
  plugins: [],
};
