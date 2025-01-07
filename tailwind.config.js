/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 90s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      fontFamily: {
        coolvetica: ['Coolvetica', 'sans-serif'],
        labelle: ['LaBelleAurore', 'cursive'],
      },
    },
  },
  plugins: [],
}

