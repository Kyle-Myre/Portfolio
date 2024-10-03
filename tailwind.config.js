/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
    extend: {},
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      plex: ["IBM Plex Mono", "monospace"],
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["lofi"],
  },
};
