/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.{js,jsx,ts,tsx,blade.php}",
  ],
  theme: {
    extend: {
      colors: {
        velonet: {
          orange: '#FFAA00',
          purple: '#4B2C6F',
          'purple-light': '#592582',
          dark: '#1A1A2E',
          accent: '#FF8533',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      animation: {
        bounce: 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
}
