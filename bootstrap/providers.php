<?php

/**
 * Providers de la aplicación.
 *
 * Laravel 11+ los registra desde este archivo. Sin él, AppServiceProvider
 * no se carga y su URL::forceScheme('https') no llega a ejecutarse, con lo
 * que los assets se piden por http y el navegador los bloquea al servir
 * el sitio por https.
 */

return [
    App\Providers\AppServiceProvider::class,
];
