/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-background-color)',
        darkgray: 'var(--dark-gray-color)',
        gridBorderColor: 'var(--grid-border-color)',
        'custom-gray': '#0e0d0d',
        'light-gray': '#adadad'
      },
      height: {
        100: '27rem',
        112: '28rem',
        120: '30rem',
        128: '32rem',
        136: '34rem'
        // add as many as you need
      },
      borderWidth: {
        0.5: '0.5px'
      }
    }
  },
  plugins: []
};
