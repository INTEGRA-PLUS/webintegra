import themeColors from './resources/theme.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.{js,jsx,ts,tsx,blade.php}",
  ],
  theme: {
    extend: {
      colors: {
        tevesat: {
          // COLOR_PRINCIPAL (Rojo) - Se usa para acentos, botones y secciones destacadas
          primary: themeColors.COLOR_PRINCIPAL,
          // COLOR_SECUNDARIO (Negro/Gris) - Se usa para fondos oscuros y contrastes elegantes
          secondary: themeColors.COLOR_SECUNDARIO,
          // COLOR_TERCIARIO (Blanco) - Base para textos y fondos claros
          tertiary: themeColors.COLOR_TERCIARIO,
          
          'primary-light': themeColors.COLOR_PRINCIPAL_LIGHT,
          'tertiary-dark': themeColors.COLOR_TERCIARIO_DARK,
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
