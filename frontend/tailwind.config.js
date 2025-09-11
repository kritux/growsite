/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores de marca Growth Bizon
        'bizon-white': '#FDFEFF',
        'bizon-dark-blue': '#031636',
        'bizon-blue': '#0295FD',
        'bizon-light-blue': '#FDFEFF',
        'bizon-accent': '#422C1F',
        'bizon-gray': '#6B7280',
        'bizon-light-gray': '#F3F4F6',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'grow': 'grow 0.5s ease-out',
      },
      keyframes: {
        grow: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
