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
}
