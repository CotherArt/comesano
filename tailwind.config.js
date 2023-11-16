/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'text': '#f2fdf4',
        'background': '#041b08',
        'primary': '#148527',
        'secondary': '#051f09',
        'accent': '#1fd13d',
       },       
    },
    fontSize: {
      sm: '0.750rem',
      base: '1rem',
      xl: '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': '4.210rem',
    },
    fontFamily: {
      heading: 'Mochiy Pop P One',
      body: 'Mochiy Pop P One',
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
  },
  plugins: [],
};
