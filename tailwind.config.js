/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#48c5bf', // SVG Wave Teal
          dark: '#1d5f5c', // Darker shade for text
          light: '#79ded4', // SVG Ocean Teal
        },
        sand: {
          DEFAULT: '#f7f5f0', // Keep clean linen for main backgrounds
          dark: '#fee3a8', // SVG Sand (Golden)
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
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
