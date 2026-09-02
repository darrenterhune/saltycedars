/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./css/**/*.css', './**/*.html', './javascript/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'lexend-deca': ['Lexend Deca', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
