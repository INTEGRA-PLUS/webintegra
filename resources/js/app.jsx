import './bootstrap';
import '../css/app.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

/**
 * App.jsx - Punto de entrada principal de la aplicación
 * Configura Inertia.js con React
 */

const appName = import.meta.env.VITE_APP_NAME || 'Velonet';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(
    `./Pages/${name}.jsx`,
    import.meta.glob('./Pages/**/*.jsx')
  ),
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
  progress: {
    color: '#FF6600',
  },
});
