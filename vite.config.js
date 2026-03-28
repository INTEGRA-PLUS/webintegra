import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

/**
 * Vite Configuration - Configuración del bundler
 * Define cómo se construye y sirve la aplicación
 */

export default defineConfig({
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
});
