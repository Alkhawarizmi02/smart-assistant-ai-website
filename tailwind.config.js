/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#042028',
        secondary: '#7ED6DF',
        accent: '#F1F5F9',
        featureCardBg: '#153E44',
        pricingBg: '#0B0F13',
        planBg: '#1E2226',
        testimonialBg: '#d9ebed',
      },
      keyframes: {
        upDown: {
          '0%, 100%': {transform: 'translateY(0px)'},
          '50%': {transform: 'translateY(12px)'}
        },
        downUp: {
          '0%, 100%': {transform: 'translateY(0px)'},
          '50%': {transform: 'translateY(-12px)'}
        }
      },
      animation: {
        upDown: 'upDown 4s ease-in-out infinite',
        downUp: 'downUp 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
