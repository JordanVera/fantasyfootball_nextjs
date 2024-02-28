/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        slideRightToLeft: 'slideRightToLeft 40s linear infinite',
      },
      keyframes: {
        slideRightToLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      // animation: {
      //   slide: 'slide 40s linear infinite',
      // },
      // keyframes: {
      //   slide: {
      //     '0%': { transform: 'translateX(0)' },
      //     '100%': { transform: 'translateX(-100%)' },
      //   },
      // },
    },
  },
  plugins: [],
});
