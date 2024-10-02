/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      theme: {
        listStyleType: {
          none: 'none',
          disc: 'disc',
          decimal: 'decimal',
          square: 'square',
          roman: 'upper-roman',
        }},
      animation: {
        float: 'float 1s ease-in-out', // Custom animation
      },
      keyframes: {
        float: {
          '0%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'gradient': 'gradient-animation 15s ease infinite', // Add your animation here
      },
      keyframes: {
        'gradient-animation': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }},
      fontFamily: {
        'home-font': 'Anton SC',
        'para-font': 'Inria Sans',
      },
    },
  },
  plugins: [],
}
