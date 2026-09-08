/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
      colors: {
        // Kept for the locked hero (halide-topo-hero.jsx references op-navy
        // directly) — do not remove or repurpose these.
        op: {
          warm: '#FFF5F5',
          lavender: '#E6E6FA',
          peach: '#FFDAB9',
          pink: '#FFB7B2',
          cream: '#FFFDD0',
          blue: '#E0F7FA',
          navy: '#1A1A2E',
          slate: '#4A4A6A',
        },
        // Urban Uplift Initiative brand palette — derived from the
        // organization's own navy/blue emblem, with a warm gold accent for
        // hope/dignity and a cream editorial background.
        uui: {
          navy: '#122A4E',
          blue: '#2F5C8A',
          sky: '#7FADD9',
          gold: '#C99A3B',
          cream: '#FAF6EE',
          charcoal: '#1E2430',
          slate: '#5B6472',
        },
      },
    },
  },
  plugins: [],
};
