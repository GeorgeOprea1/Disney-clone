/** @type {import('tailwindcss').Config} */

import tailwindcssNoScrollbar from "tailwindcss-no-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssNoScrollbar],
};
