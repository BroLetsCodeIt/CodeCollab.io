/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        'custom-polygon': 'polygon(0 0, 100% 0%, 100% 100%, 49% 49%)',
      },
    },
  },
  plugins: [
   
    function ({ addUtilities }) {
      const newUtilities = {
        '.clip-custom-polygon': {
          clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 49% 49%)',
        },
      };
      addUtilities(newUtilities);
    },
  ],
}

