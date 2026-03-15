/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  safelist: [
    // Background colors (animated active bar)
    "bg-cyan-400",
    "bg-purple-400",
    "bg-emerald-400",
    "bg-orange-400",

    // Text colors (icons + headings)
    "text-cyan-400",
    "text-purple-400",
    "text-emerald-400",
    "text-orange-400",
  ],

  theme: {
    extend: {
      fontFamily: {
        // Primary
        sans: ["Helvetica", "Arial", "sans-serif"],

        // Handwriting / decorative
        handwriting: ['"Oleo Script"', "cursive"],
        satisfy: ["Satisfy", "cursive"],
        oleo: ['"Oleo Script"', "cursive"],
        outfit: ["Outfit", "sans-serif"],
      },

      animation: {
        marquee: "marquee 25s linear infinite",
        "marquee-alt": "marquee-alt 25s linear infinite",
        "spin-slow": "spin 40s linear infinite",
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-alt": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
    },
  },

  plugins: [],
};
