const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

colors.cyan['550'] = 'hsl(189, 94%, 39%)'

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        primary: colors.red,
        secondary: colors.gray,
        complementary: colors.blue,
        neutral: colors.neutral,
        theme: 'var(--theme-color)',
        dark: 'var(--dark-color)',
        light: 'var(--light-color)',
        bg: 'var(--bg-color)',
        'limey-100': 'hsl(83, 88%, 90%)',
        'limey-200': 'hsl(83, 83%, 80%)',
        'limey-300': 'hsl(83, 78%, 70%)',
        'limey-400': 'hsl(83, 73%, 60%)',
      },
      transitionTimingFunction: {
        md: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      boxShadow: {
        popup:
          '0 0 0 1px rgb(136 152 170 / 10%), 0 15px 35px 0 rgb(49 49 93 / 10%), 0 5px 15px 0 rgb(0 0 0 / 8%)',
      },
      screens: {
        xs: '440px',
        ...defaultTheme.screens,
      },
    },
  },

  plugins: [],
}

module.exports = config
