/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(0,0,0,0.7707457983193278) 0%, rgba(0,0,0,0.711922268907563) 45%, rgba(0,0,0,1) 78%)',
      },
    },
  },
  plugins: [],
}