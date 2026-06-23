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
        // el bloqueo de contenido mixto en producción. Se omite en local para no
        // romper el desarrollo por http (http://127.0.0.1:8003).
        if ($this->app->environment('production')) {
            URL::forceScheme('https');
        }
    }
}
