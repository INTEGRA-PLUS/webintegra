<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ContactoController;

/**
 * Web Routes - Rutas públicas de la aplicación
 */

// Ruta principal - Home
Route::get('/', [HomeController::class, 'index'])->name('home');

// Rutas de API/AJAX (descomenta cuando integres el formulario)
// Route::post('/api/contacto', [ContactoController::class, 'store'])->name('contacto.store');

// Otras rutas pueden agregarse aquí
// Route::get('/planes', [PlansController::class, 'index'])->name('planes');
// Route::get('/quienes-somos', [AboutController::class, 'index'])->name('about');
