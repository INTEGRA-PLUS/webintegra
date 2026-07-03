<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ContactoController;
use App\Http\Controllers\ServiciosController;

/**
 * Web Routes - Rutas públicas de la aplicación
 */

// Ruta principal - Home
Route::get('/', [HomeController::class, 'index'])->name('home');

// Página de Planes
Route::get('/planes', [HomeController::class, 'planes'])->name('planes');

// Página de Televisión
Route::get('/television', [HomeController::class, 'television'])->name('television');

// Test de velocidad
Route::get('/speedtest', [HomeController::class, 'speedtest'])->name('speedtest');

// PQRS
Route::get('/pqrs', [HomeController::class, 'pqrs'])->name('pqrs');

// Normatividad
Route::get('/normatividad', [HomeController::class, 'normatividad'])->name('normatividad');
Route::redirect('/normativa', '/normatividad');

// Documentos
Route::get('/documentos', [HomeController::class, 'documentos'])->name('documentos');

// Rutas de API/AJAX (descomenta cuando integres el formulario)
// Route::post('/api/contacto', [ContactoController::class, 'store'])->name('contacto.store');

// Rutas de Servicios
Route::prefix('servicios')->name('servicios.')->group(function () {
    Route::get('/cableado-estructurado', [ServiciosController::class, 'cableado'])->name('cableado');
    Route::get('/manos-remotas', [ServiciosController::class, 'manosRemotas'])->name('manos-remotas');
    Route::get('/ciberseguridad', [ServiciosController::class, 'ciberseguridad'])->name('ciberseguridad');
    Route::get('/redes-inalambricas', [ServiciosController::class, 'redesInalambricas'])->name('redes-inalambricas');
    Route::get('/energias-renovables', [ServiciosController::class, 'energiasRenovables'])->name('energias-renovables');
    Route::get('/cctv', [ServiciosController::class, 'cctv'])->name('cctv');
});
