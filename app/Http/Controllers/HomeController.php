<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

/**
 * HomeController - Controlador principal de la página Home de Velonet
 * Renderiza la página de inicio usando Inertia.js
 */
class HomeController extends Controller
{
    /**
     * Mostrar la página principal (Home)
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Home');
    }

    /**
     * Mostrar la página de planes
     *
     * @return \Inertia\Response
     */
    public function planes()
    {
        return Inertia::render('Planes');
    }

    /**
     * Mostrar la página de televisión
     *
     * @return \Inertia\Response
     */
    public function television()
    {
        return Inertia::render('Television');
    }

    /**
     * Mostrar la página institucional (Nosotros)
     *
     * @return \Inertia\Response
     */
    public function nosotros()
    {
        return Inertia::render('Nosotros');
    }

    /**
     * Mostrar la página de test de velocidad
     *
     * @return \Inertia\Response
     */
    public function speedtest()
    {
        return Inertia::render('Speedtest');
    }

    /**
     * Mostrar la página de PQRS
     *
     * @return \Inertia\Response
     */
    public function pqrs()
    {
        return Inertia::render('Pqrs');
    }
}
