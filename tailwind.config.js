/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gj-green": "#205052",
        "gj-green-hover": "#2E6265",
      }
    },
  },
  plugins: [],
}

