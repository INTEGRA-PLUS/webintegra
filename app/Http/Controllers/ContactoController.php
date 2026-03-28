<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

/**
 * ContactoController - Controlador para manejar formularios de contacto
 *
 * Este es un ejemplo de cómo integrar el formulario de contacto del frontend
 * con el backend de Laravel.
 */
class ContactoController extends Controller
{
    /**
     * Guardar mensaje de contacto
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        // Validar datos
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'telefono' => 'required|string|max:20',
            'email' => 'required|email|max:255',
            'municipio' => 'required|string|max:255',
            'mensaje' => 'required|string|max:1000',
        ]);

        // Aquí puedes:
        // 1. Guardar en base de datos
        // 2. Enviar email
        // 3. Integrar con CRM
        // 4. Guardar en terceros

        // Ejemplo: Guardar en base de datos (si creas la tabla)
        // Contacto::create($validated);

        // Ejemplo: Enviar email
        // Mail::send('emails.contacto', $validated, function($message) {
        //     $message->to('info@velonet.co')
        //             ->subject('Nuevo Contacto - Velonet');
        // });

        return response()->json([
            'success' => true,
            'message' => 'Mensaje recibido correctamente. Nos contactaremos pronto.',
        ]);
    }
}
