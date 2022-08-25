/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateAreas: {
        mdlayout: ["hero hero", "sidebar content"],
        smlayout: ["navbar", "content"],
      },
      gridTemplateColumns: {
        mdlayout: "300px 1fr",
        smlayout: "1fr",
      },
      gridTemplateRows: {
        mdlayout: "400px 1fr",
        smlayout: "4rem, 1fr",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        andDigi: {
          primary: "#d81f35",
          secondary: "#2897FF",
          accent: "#FF7900",
          neutral: "#ebe7e5",
          "base-100": "#2A303C",
          info: "#3ABFF8",
          success: "#5AC328",
          warning: "#FFC800",
          error: "#F87272",
          slackPurple: "#4a154b",
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/forms")({ strategy: "class" }),
    require("daisyui"),
    require("@savvywombat/tailwindcss-grid-areas"),
    require("@tailwindcss/line-clamp"),
  ],
};
