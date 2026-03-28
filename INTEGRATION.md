# 🔗 Guía de Integración - Formulario de Contacto

## 📋 Integración del Formulario de Contacto con Backend

El componente `ContactForm.jsx` está preparado para funcionar con un backend. Esta guía muestra cómo integrarlo completamente.

---

## 1️⃣ Paso 1: Descomentar la Ruta en `routes/web.php`

```php
// En routes/web.php
Route::post('/api/contacto', [ContactoController::class, 'store'])->name('contacto.store');
```

---

## 2️⃣ Paso 2: Actualizar el Componente `ContactForm.jsx`

Reemplaza la función `handleSubmit` con esta versión:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');

  if (!validateForm()) {
    return;
  }

  setLoading(true);

  try {
    // Hacer POST a la API
    const response = await window.axios.post('/api/contacto', formData);

    // Resetear formulario
    setFormData({
      nombre: '',
      telefono: '',
      email: '',
      municipio: '',
      mensaje: '',
    });

    setSubmitted(true);

    // Ocultar mensaje de éxito después de 5 segundos
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  } catch (err) {
    setError(err.response?.data?.message || 'Error al enviar el formulario. Intenta nuevamente.');
  } finally {
    setLoading(false);
  }
};
```

---

## 3️⃣ Paso 3: Crear Tabla en Base de Datos (Opcional)

Si quieres guardar los contactos:

```bash
php artisan make:model Contacto -m
```

En el archivo de migración generado (`database/migrations/...create_contactos_table.php`):

```php
Schema::create('contactos', function (Blueprint $table) {
    $table->id();
    $table->string('nombre');
    $table->string('telefono');
    $table->string('email');
    $table->string('municipio');
    $table->text('mensaje');
    $table->timestamps();
});
```

Ejecutar:

```bash
php artisan migrate
```

---

## 4️⃣ Paso 4: Crear Modelo (Opcional)

```php
// app/Models/Contacto.php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contacto extends Model
{
    protected $fillable = [
        'nombre',
        'telefono',
        'email',
        'municipio',
        'mensaje',
    ];
}
```

---

## 5️⃣ Paso 5: Completar el Controlador

En `app/Http/Controllers/ContactoController.php`:

```php
<?php

namespace App\Http\Controllers;

use App\Models\Contacto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactoController extends Controller
{
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

        try {
            // Guardar en base de datos
            Contacto::create($validated);

            // Enviar email (opcional)
            // Mail::send('emails.contacto', $validated, function($message) {
            //     $message->to('info@velonet.co')
            //             ->subject('Nuevo Contacto - Velonet');
            // });

            return response()->json([
                'success' => true,
                'message' => 'Mensaje recibido correctamente. Nos contactaremos pronto.',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al procesar tu solicitud. Intenta nuevamente.',
            ], 500);
        }
    }
}
```

---

## 6️⃣ Paso 6: (Opcional) Enviar Email

Crear una clase Mailable:

```bash
php artisan make:mail ContactoMail
```

En `app/Mail/ContactoMail.php`:

```php
<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactoMail extends Mailable
{
    use Queueable, SerializesModels;

    public $contacto;

    public function __construct($contacto)
    {
        $this->contacto = $contacto;
    }

    public function build()
    {
        return $this->subject('Nuevo Contacto - Velonet')
                    ->view('emails.contacto');
    }
}
```

Crear vista en `resources/views/emails/contacto.blade.php`:

```blade
<h2>Nuevo Contacto</h2>
<p><strong>Nombre:</strong> {{ $contacto['nombre'] }}</p>
<p><strong>Teléfono:</strong> {{ $contacto['telefono'] }}</p>
<p><strong>Email:</strong> {{ $contacto['email'] }}</p>
<p><strong>Municipio:</strong> {{ $contacto['municipio'] }}</p>
<p><strong>Mensaje:</strong></p>
<p>{{ $contacto['mensaje'] }}</p>
```

---

## 🧪 Testing Local

1. Descomenta la ruta en `routes/web.php`
2. Crea la migración y ejecuta `php artisan migrate`
3. Inicia el servidor: `php artisan serve`
4. Prueba el formulario en `http://localhost:8000`
5. Verifica que los datos se guarden en la BD: `SELECT * FROM contactos;`

---

## 🔒 Seguridad

### Validación en Backend ✅
Ya está implementada en el controlador

### Rate Limiting (Opcional)

```php
// En routes/web.php
Route::post('/api/contacto', [ContactoController::class, 'store'])
    ->middleware('throttle:5,1')
    ->name('contacto.store');
```

Esto limita a 5 requests por minuto.

### CSRF Protection ✅
Ya está configurado por defecto en Laravel

---

## 📧 Configuración de Email

En `.env`:

```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=tu_username
MAIL_PASSWORD=tu_password
MAIL_FROM_ADDRESS="noreply@velonet.co"
MAIL_FROM_NAME="${APP_NAME}"
```

---

## 🚀 Deployment

Cuando despliegues a producción:

1. Asegurar variables de entorno en `.env`
2. Ejecutar migraciones: `php artisan migrate --force`
3. Compilar assets: `npm run build`
4. Limpiar cache: `php artisan config:cache`

---

## 📞 Webhook (Opcional)

Para integrar con servicios terceros:

```php
// Ejemplo: Integración con Zapier o Make.com
Http::post('https://hooks.zapier.com/hooks/...', $validated);
```

---

## ✅ Checklist de Integración

- [ ] Descomenta la ruta en `routes/web.php`
- [ ] Crea la migración de la tabla `contactos`
- [ ] Ejecuta la migración
- [ ] Actualiza el componente `ContactForm.jsx`
- [ ] Prueba el formulario localmente
- [ ] Configura email (opcional)
- [ ] Agrega rate limiting (opcional)
- [ ] Prueba en producción

---

¡Listo para recibir contactos! 🎉
