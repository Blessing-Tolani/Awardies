const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    screens: {
       'tablet': {'max': '900px'},
       'medium':{'max':'600px'},
       'mobile': {'max': '500px'},
      'phone':{'max':'400px'},
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        'old': ['Old Standard TT', 'serif'],
        'sofia':['Sofia', 'cursive']
      },
      colors: {
        'accent-1': '#333',
        'shopify':'#17e9e0'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
