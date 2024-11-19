/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        content: {
          'fancy-red': 'var(--fancy-red)',
        },
      },
      backgroundColor: {
        'fancy-red': 'var(--fancy-red)',
      },
    },
  },
  plugins: [],
};
