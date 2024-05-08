/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {

    extend: {
      colors: {
        primary: 'var(--primary-background-color)',
        darkgray: 'var(--dark-gray-color)',
        gridBorderColor: 'var(--grid-border-color)'
      },
      height: {
        100: '27rem',
        112: '28rem',
        120: '30rem',
        128: '32rem',
        136: '34rem'
        // add as many as you need
      }

    }
  },
  plugins: []
};
