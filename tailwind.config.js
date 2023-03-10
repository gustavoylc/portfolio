// const { fontFamily } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
      gridTemplateColumns: {
        15: 'repeat(auto-fit, minmax(300px, 1fr))',
      },
      screens: {
        xsm: '320px',
        // => @media (min-width: 320px) { ... }
        short: { raw: '(min-height: 100px)' },
        // => @media (min-height: 100px) { ... }
        tall: { raw: '(min-height: 450px)' },
        // => @media (min-height: 450px) { ... }
        xsdevice: { raw: '(min-width: 320px) and (max-width: 480px)' },
      },
    },
  },
  plugins: [
    // eslint-disable-next-line func-names
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme('fontSize.5xl') },
        h2: { fontSize: theme('fontSize.4xl') },
        h3: { fontSize: theme('fontSize.3xl') },
        h4: { fontSize: theme('fontSize.2xl') },
        h5: { fontSize: theme('fontSize.xl') },
        h6: { fontSize: theme('fontSize.lg') },
      });
    }),
  ],
};
