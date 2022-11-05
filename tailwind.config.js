import plugin from 'tailwindcss/plugin'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  darkMode: 'class',
  important: true,
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './index.html'
  ],
  theme: {
    screens: {
      ['sm']: '640px',
      ['md']: '768px',
      ['lg']: '1024px',
      ['xl']: '1280px',
      ['2xl']: '1536px'
    },
    extend: {
      fontFamily: {
        sans: ['"Quicksand"', ...defaultTheme.fontFamily.sans],
        quicksand: ['"Quicksand"', ...defaultTheme.fontFamily.sans],
        akshar: ['"Akshar"', ...defaultTheme.fontFamily.sans],
        "bebas-neue": ['"Bebas Neue"', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('not-last', '&:not(:last-child)')
    })
  ]
}

