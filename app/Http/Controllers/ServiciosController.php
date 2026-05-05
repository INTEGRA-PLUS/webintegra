<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ServiciosController extends Controller
{
    public function cableado()
    {
        return Inertia::render('Services/Cableado');
    }

    public function manosRemotas()
    {
        return Inertia::render('Services/ManosRemotas');
    }

    public function ciberseguridad()
    {
        return Inertia::render('Services/Ciberseguridad');
    }

    public function redesInalambricas()
    {
        return Inertia::render('Services/RedesInalambricas');
    }

    public function energiasRenovables()
    {
        return Inertia::render('Services/EnergiasRenovables');
    }

    public function cctv()
    {
        return Inertia::render('Services/Cctv');
    }
}
