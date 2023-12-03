/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}" //busca de forma recursiva  los .js y .jsx para agregar tailwind.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

