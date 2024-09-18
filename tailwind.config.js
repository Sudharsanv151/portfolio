/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gradient-start': '#8E0E00',
        'gradient-end': '#1F1C18',
      },
  },
  plugins: [],
}
}