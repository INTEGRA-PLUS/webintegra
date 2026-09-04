import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

/**
 * Vite Configuration - Configuración del bundler
 * Define cómo se construye y sirve la aplicación
 */

// Nombre por defecto de la empresa: sin esto, los componentes que leen
// VITE_NOMBRE_EMPRESA lo compilan como undefined y el nombre sale vacío.
const NOMBRE_EMPRESA = 'Enternet Comunicaciones';

export default defineConfig(({ mode }) => ({
  plugins: [
    laravel({
      input: [
        'resources/js/app.jsx',
        'resources/css/app.css',
      ],
      refresh: true,
    }),
    react(),
  ],
  server: {
    port: 5174,
    hmr: {
      host: 'localhost',
    },
  },
  define: {
    'import.meta.env.VITE_NOMBRE_EMPRESA': JSON.stringify(
      loadEnv(mode, process.cwd(), '').VITE_NOMBRE_EMPRESA || NOMBRE_EMPRESA
    ),
  },
}));
