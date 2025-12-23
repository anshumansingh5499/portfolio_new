/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Using a common system font, but you can add a custom one like 'Inter' or 'Poppins'
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      fontFamily: {
        handwriting: ["'Patrick Hand'", "cursive"],
      },
      fontFamily: {
      handwriting: ["Gloria Hallelujah", "cursive"],
    },
    fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        satisfy: ['Satisfy', 'cursive'],
    },
    fontFamily: {
        oleo: ['"Oleo Script"', 'cursive'],
      },
      fontFamily: {
        handwriting: ['"Oleo Script"', "cursive"],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'marquee-alt': 'marquee-alt 25s linear infinite',
        'spin-slow': 'spin 40s linear infinite', // Slower spin for background elements
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-alt': {
          '0%': { transform: 'translateX(-100%)' }, // Start from negative to create opposite direction effect
          '100%': { transform: 'translateX(0%)' },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}