/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#178ca4', // Pacific Teal
          dark: '#115e6e', // Navy Teal
          light: '#4fb2c3', // Light Teal
        },
        sand: {
          DEFAULT: '#f7f5f0', // Clean Linen
          dark: '#e6e2d6',
        },
        accent: {
          DEFAULT: '#ff8ba7', // Soft Pink
          pop: '#ff7f50', // Coral CTA
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
