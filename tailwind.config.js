/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ab8f44", // gold color from website
        secondary: "#876252", // brown color from website
        dark: "#32322b", // dark color from website
        light: "#f9f9f8", // light color from website
        accent: "#55bd9f", // accent green color from website
        gray: {
          100: "#f9f9f8",
          200: "#e9e9e8",
          300: "#cacbd0",
          400: "#949591",
          500: "#6b6b68",
          600: "#4a4a48",
          700: "#32322b",
          800: "#242420",
          900: "#121210",
        }
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}
