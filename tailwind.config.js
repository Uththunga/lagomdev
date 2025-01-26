/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'fade-in-delay': 'fade-in 0.8s ease-out 0.2s forwards',
        'fade-in-delay-2': 'fade-in 0.8s ease-out 0.4s forwards',
      },
    },
  },
  plugins: [],
};