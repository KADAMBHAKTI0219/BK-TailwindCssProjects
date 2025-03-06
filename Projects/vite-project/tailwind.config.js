/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'home-background': "url('https://i1.sndcdn.com/artworks-b4sHjEZY2YOFq8Oz-pRtMkg-t1080x1080.jpg')",
       }
    },
  },
  plugins: [],
} 