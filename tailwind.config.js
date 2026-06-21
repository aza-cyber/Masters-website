/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        black: '#0A0A0A',
        charcoal: '#1C1C1C',
        stone: '#9A9590',
        cream: '#F0EDE8',
        amber: '#C8A96E',
        white: '#FAFAF8',
      },
    },
  },
  plugins: [],
}

