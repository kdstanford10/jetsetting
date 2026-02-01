/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: '0',
        sm: '0',
        md: '0',
        lg: '0',
        xl: '0',
        '2xl': '0',
        '3xl': '0',
      },
      colors: {
        brand: {
          DEFAULT: '#48c5bf', // SVG Wave Teal
          dark: '#1d5f5c', // Darker shade for text
          deep: '#0E4D52', // Deep luxury teal
          light: '#79ded4', // SVG Ocean Teal
        },
        sand: {
          DEFAULT: '#F9F7F2', // Lighter, cleaner sand
          dark: '#E6DCC3', // Deep styling sand
          accent: '#D4C5A9', // Metallic sand
        },
        champagne: {
          DEFAULT: '#F3E5D8',
          light: '#FDFBF7',
        },
        accent: {
          DEFAULT: '#ff959b', // SVG Pink
          pop: '#ffd951', // SVG Sun (Yellow)
          green: '#9dbd42', // SVG Palm Green
        },
        slate: '#64748B', // Keep slate for neutral text
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
