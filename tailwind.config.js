/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.{js,jsx,ts,tsx,blade.php}",
  ],
  theme: {
    extend: {
      colors: {
        tevesat: {
          primary: '#b6c44e', // Lime Green
          secondary: '#d3821a', // Orange/Amber
          tertiary: '#114a96', // Deep Blue
          'primary-light': '#c8d46e',
          'tertiary-dark': '#0a2e5d',
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
