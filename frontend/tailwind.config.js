/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        // Editorial Operations design system's primary typeface, used
        // everywhere including the hero (which used to run a separate
        // Sora typeface before an explicit request to match the rest of
        // the site).
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
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
        // Editorial Operations tokens (from MY-DESIGN-SYSTEM/design-tokens.json).
        // Primary accent swapped again — from the reference system's coral
        // (#FF385C), briefly to a light blue, now to a bold green
        // (Tailwind Green-600) inspired by Bolt's confident use of green,
        // without copying Bolt's literal brand hex. ~3.3:1 white-text
        // contrast on solid CTA fills, in the same range as the coral.
        ed: {
          accent: '#16A34A',
          accentSoft: 'rgba(22, 163, 74, 0.08)',
          accentGlow: 'rgba(22, 163, 74, 0.25)',
          cool: '#6597FF',
          ink: '#222222',
          muted: '#717171',
          border: '#EBEBEB',
          surface: '#FFFFFF',
          surfaceRaised: '#F7F7F7',
          warm: '#F2F1EE',
          dark: '#0B0B0B',
          darkRaised: '#171717',
          success: '#34C759',
          danger: '#FF3B30',
          warning: '#FF9500',
        },
      },
      maxWidth: {
        'ed-container': '1280px',
      },
      boxShadow: {
        'ed-card': '0 2px 8px rgba(0,0,0,0.04)',
        'ed-raised': '0 2px 12px rgba(0,0,0,0.08)',
        'ed-floating': '0 8px 30px rgba(0,0,0,0.12)',
        'ed-glow': '0 8px 24px rgba(22,163,74,0.25)',
      },
      transitionTimingFunction: {
        'ed-standard': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'ed-editorial': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
