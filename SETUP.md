# 📋 Guía de Setup - Velonet Web

## 🔧 Instalación Completa del Proyecto

### Paso 1: Instalar Dependencias PHP

```bash
cd /Users/alejandrohiguitazuleta/Sites/localhost/web-integra
composer install
```

**Nota**: Si no tienes Composer instalado:
- Descargar desde: https://getcomposer.org
- O instalar con Homebrew: `brew install composer`

---

### Paso 2: Instalar Dependencias Node.js

```bash
npm install
```

**Nota**:
- Requiere Node.js >= 18
- Instalar desde: https://nodejs.org
- O con Homebrew: `brew install node`

---

### Paso 3: Configurar Variables de Entorno

```bash
# Copiar archivo de ejemplo
cp .env.example .env

# Generar clave de aplicación
php artisan key:generate
```

**Editar `.env` si es necesario:**
```env
APP_NAME="Velonet"
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000
```

---

### Paso 4: Compilar Assets (Vite)

#### Opción A: Desarrollo (recomendado para desarrollo)

```bash
npm run dev
```

Esto inicia el servidor Vite con hot reload en `http://localhost:5173`

#### Opción B: Producción

```bash
npm run build
```

Esto genera los archivos optimizados en `/public/build`

---

### Paso 5: Iniciar Servidor Laravel

**En otra terminal/tab:**

```bash
php artisan serve
```

El servidor estará disponible en: `http://localhost:8000`

---

## ✅ Verificar que Todo Funciona

1. Abrir `http://localhost:8000` en el navegador
2. Debería ver la página Home completa de Velonet
3. Verificar que:
   - ✅ Navbar aparece sticky al scroll
   - ✅ Hero banner carga con animaciones
   - ✅ Servicios se muestran en grid
   - ✅ Planes tienen tabs interactivos
   - ✅ Formulario de contacto es funcional
   - ✅ Footer está visible

---

## 📁 Estructura de Carpetas a Tener

```
web-integra/
├── app/
│   ├── Http/
│   │   └── Controllers/
│   │       └── HomeController.php
│   └── Models/
├── bootstrap/
│   └── cache/
├── config/
│   └── app.php
├── database/
│   ├── migrations/
│   └── seeders/
├── public/
│   ├── index.php
│   └── build/          ← (generado por npm run build)
├── resources/
│   ├── css/
│   │   └── app.css
│   ├── js/
│   │   ├── Pages/
│   │   │   └── Home.jsx
│   │   ├── Components/
│   │   │   └── Home/
│   │   │       ├── Navbar.jsx
│   │   │       ├── HeroBanner.jsx
│   │   │       ├── ServicesBar.jsx
│   │   │       ├── PlansSection.jsx
│   │   │       ├── WhyVelonet.jsx
│   │   │       ├── CoverageSection.jsx
│   │   │       ├── ContactForm.jsx
│   │   │       └── Footer.jsx
│   │   ├── app.jsx
│   │   └── bootstrap.js
│   └── views/
│       └── app.blade.php
├── routes/
│   └── web.php
├── storage/
│   ├── app/
│   ├── framework/
│   └── logs/
├── .env
├── .env.example
├── .gitignore
├── composer.json
├── composer.lock
├── package.json
├── package-lock.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 🚀 Comandos Principales

### Desarrollo

```bash
# Terminal 1: Compilar assets con hot reload
npm run dev

# Terminal 2: Iniciar servidor Laravel
php artisan serve
```

### Producción

```bash
# Compilar assets optimizados
npm run build

# Iniciar servidor (en producción con Apache/Nginx)
# (Configurar según el servidor)
```

---

## 🔍 Troubleshooting

### Error: "npm: command not found"
```bash
# Instalar Node.js
brew install node

# O descargar desde: https://nodejs.org
```

### Error: "composer: command not found"
```bash
# Instalar Composer
brew install composer

# O descargar desde: https://getcomposer.org
```

### Error: "Module not found" en Vite
```bash
# Limpiar cache y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Error: "La ruta no existe"
```bash
# Asegurar que las rutas están en routes/web.php
# Verificar que el controlador existe en app/Http/Controllers

# Limpiar cache de rutas
php artisan route:clear
php artisan route:cache
```

### Error: "CSRF token mismatch"
```bash
# Verificar que el token CSRF está en app.blade.php
# <meta name="csrf-token" content="{{ csrf_token() }}">

# Limpiar cookies del navegador
```

### Puerto 8000 ya en uso
```bash
# Usar otro puerto
php artisan serve --port=8001
```

---

## 🎯 Próximos Pasos

1. **Integrar Backend**
   - Crear endpoint para el formulario de contacto
   - Guardar datos en base de datos
   - Enviar emails de notificación

2. **Agregar Funcionalidades**
   - Integración con CRM
   - Chat de soporte en vivo
   - Verificador de cobertura

3. **Optimizar Performance**
   - Lazy loading de imágenes
   - Code splitting en componentes
   - CDN para assets estáticos

4. **SEO**
   - Meta tags dinámicos
   - Sitemap
   - Google Analytics
   - Structured Data (JSON-LD)

5. **Testing**
   - Tests unitarios de componentes
   - Tests de integración
   - Tests E2E

---

## 📚 Recursos Útiles

- **Laravel**: https://laravel.com/docs
- **Inertia.js**: https://inertiajs.com
- **React**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Vite**: https://vitejs.dev
- **Lucide Icons**: https://lucide.dev

---

## 💡 Tips de Desarrollo

### Hot Reload
- Guardar cambios en componentes React automáticamente recarga el navegador
- Esto solo funciona con `npm run dev` ejecutándose

### Inspeccionar Elementos
- Press `F12` para abrir DevTools
- Usar React DevTools (extensión del navegador)
- Usar Laravel Debugbar (instalar si es necesario)

### Tailwind CSS
- Usar clases de Tailwind directamente en componentes
- No necesita crear archivos CSS separados en la mayoría de casos
- Revisar `tailwind.config.js` para colores personalizados

### Testing
- Crear pruebas en la carpeta `tests/`
- Ejecutar con: `php artisan test`

---

## 📞 Soporte

Si tienes problemas durante la instalación:

1. Verificar que PHP >= 8.3
2. Verificar que Node.js >= 18
3. Verificar que Composer está instalado
4. Revisar los logs:
   - PHP: `storage/logs/laravel.log`
   - npm: verificar terminal output

---

**¡Listo para desarrollar!** 🎉

Cualquier pregunta o problema, consultar los recursos útiles arriba.
