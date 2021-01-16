const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    screens: {
      'phone':{'max':'400px'},
      'mobile': {'max': '500px'},
      'tablet': {'max': '900px'},
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        'old': ['Old Standard TT', 'serif']
      },
      colors: {
        'accent-1': '#333',
        'shopify':'#95BF46'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
