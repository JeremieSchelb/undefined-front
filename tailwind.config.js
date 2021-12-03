module.exports = {
  purge: [], //'./src/**/*.{js,jsx,ts,tsx}', './public/index.html'
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        light: {
          blue: '#094D92',
          red: '#FE5F55',
          grey: '#EEE5E9',
          yellow: '#FFBC42',
        },
        dark: {
          blue: '#0B859F',
          red: '#C53C33',
          grey: '#EEE5E9',
          yellow: '#F5A30E',
        }
      }
      }
    },
  variants: {
    extend: {
      visibility: ['focus-visible'],
    },
  },
  plugins: [],
}
