/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0063E5',
        'secondary': '#2D2D2D',
        'tertiary': '#3F3F3F',
        'quaternary': '#525252',
        'quinary': '#666666',
        'senary': '#797979',
    }
    },
  },
  plugins: [],
}

