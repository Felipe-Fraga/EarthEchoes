/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        'dark': '#001C30',
        'blue': '#176B87',
        'light': '#176B87'
      }
    },
  },
  plugins: [],
}

