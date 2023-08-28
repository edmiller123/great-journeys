/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "gj-green": "#205052",
        "gj-green-hover": "#2E6265",
        "gj-green-shade": "#4b7471",
        "gj-north-green": "#4eab68",
        "gj-coast-blue": "#00a4b6",
        "gj-tranz-green": "#4b7471",
        "gj-scenic-blue": "#94b2b5",
        "gj-brown": "#967957",
        "gj-cream": "#f0eeec",
      },
    },
  },
  plugins: [require("preline/plugin")],
};

