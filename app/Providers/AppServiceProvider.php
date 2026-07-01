<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\URL;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // Fuerza https en las URLs generadas (asset(), @vite, etc.) para evitar
        // el bloqueo de contenido mixto detras del proxy inverso de Hestia.
        // Se activa cuando APP_URL es https o cuando el entorno es production,
        // sin depender de que el proxy informe el esquema correcto. En local
        // (http://127.0.0.1) no aplica y el desarrollo por http sigue funcionando.
        if ($this->app->environment('production') || str_starts_with((string) config('app.url'), 'https://')) {
            URL::forceScheme('https');
        }
    }
}
