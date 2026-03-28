/**
 * bootstrap.js - Inicialización de la aplicación
 * Configura axios y otras librerías globales
 */

import axios from 'axios';

// Configurar token CSRF para todas las requests POST, PUT, DELETE, PATCH
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Obtener el token CSRF del meta tag
const token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#protecting-spa-applications');
}
