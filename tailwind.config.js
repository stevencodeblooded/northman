/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'court': "url('/src/assets/court-room.jpg')",
      }
    },
  },
  plugins: [],
}

