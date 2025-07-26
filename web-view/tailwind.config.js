/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif']
      },
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        nlwGradient: 'linear-gradient(80deg, #8a6efb 18%, #4ade80 48%, #e7df6a 75%)',
        gameGradient: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 67.08%)",
        searchIcon: "url('/search-icon.svg')"
      }
    }
  },
  plugins: []
}