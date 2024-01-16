// for Step component in other page
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;

module.exports = {
  darkMode: 'class',
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        gauge_fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        gauge_fill: {
          from: { 'stroke-dashoffset': '332', opacity: '0' },
          to: { opacity: '1' },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
            opacity: '0.2',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.2)',
            opacity: '0.2',
          },
          '60%': {
            transform: 'translate(-20px, 20px) scale(0.8)',
            opacity: '0.23',
          },
          '100%': {
            transform: 'translate(30px, -50px) scale(1)',
            opacity: '0.2',
          },
        },
        pop: {
          '0%': {
            opacity: '0.14',
          },
          '80%': {
            opacity: '.18',
          },
          '100%': {
            opacity: '0.14',
          },
        },
        'marquee-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-up': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        gauge_fadeIn: 'gauge_fadeIn 1s ease forwards',
        gauge_fill: 'gauge_fill 1s ease forwards',
        blob: 'blob 7s infinite',
        pop: 'pop 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee-left': 'marquee-left var(--duration, 40s) linear infinite',
        'marquee-up': 'marquee-up var(--duration, 40s) linear infinite',
      },
    },
  },
  variants: {
    scrollbar: ['dark', 'rounded'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
    require('tailwind-scrollbar'),
    require('@tailwindcss/forms'),
    require('tailwindcss-radix')(),
    // for Step component in other page
    addVariablesForColors,
    require('flowbite/plugin'),
  ],
};

// for Step component in other page
// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ':root': newVars,
  });
}
