/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito']
      },
      fontSize: {
        '2xs': ['0.6rem', { lineHeight: '0.7rem' }],
        xs: ['0.75rem', { lineHeight: '0.75rem' }],
        sm: ['0.875rem', { lineHeight: '0.875rem' }],
        base: ['1rem', { lineHeight: '1rem' }],
        lg: ['1.125rem', { lineHeight: '1.125rem' }],
        xl: ['1.25rem', { lineHeight: '1.25rem' }],
        '2xl': ['1.5rem', { lineHeight: '1.5rem' }],
        '3xl': ['1.875rem', { lineHeight: '1.875rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.25rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      colors: {
        'c-link': '#277EC3',
        'main-50': '#DFDFDF',
        'main-200': '#888888',
        'main-300': '#444444',
        'main-400': '#383838',
        'main-500': '#2C2C2C',
        'main-900': '#1E1E1E',
        'flag-500': '#0D9091',
        'accent-500': '#F2A716'
      },
    },
  },
  plugins: [],
}
