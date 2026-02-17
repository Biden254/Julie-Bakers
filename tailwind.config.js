/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        beige: '#E8DED2',
        brown: '#3B2F2F',
        rose: '#D8A7B1',
        gold: '#C6A75E',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(59, 47, 47, 0.08)',
        'luxury': '0 8px 40px rgba(59, 47, 47, 0.12)',
      },
    },
  },
  plugins: [],
}
