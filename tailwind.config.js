/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/background-blur.png)'
      },

      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      
      screens: {
        'md': '800px'
      },

      colors: {
        green: {
          300: '#00b37e',
          500: '#00875f',
          700: '#015f43'
        },

        blue: {
          500: '#81d8f7'
        },

        orange: {
          500: '#fba94c'
        },

        red: {
          500: '#f75a68'
        },

        gray: {
          100: '#e1e1e6',
          200: '#c4c4cc',
          300: '#8d8d99',
          500: '#323238',
          600: '#29292e',
          700: '#121214',
          900: '#09090a'
        }
      }
    },
  },
  plugins: [],
}
