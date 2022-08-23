/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateAreas: {
        mdlayout: ['hero hero', 'sidebar content'],
        smlayout: ['navbar', 'content'],
      },
      gridTemplateColumns: {
        mdlayout: '300px 1fr',
        smlayout: '1fr',
      },
      gridTemplateRows: {
        mdlayout: '400px 1fr',
        smlayout: '4rem, 1fr',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({ strategy: 'class' }),
    require('daisyui'),
    require('@savvywombat/tailwindcss-grid-areas'),
    require('@tailwindcss/line-clamp'),
  ],
  daisyui: {
    darkTheme: "light"
  },
};
