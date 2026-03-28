# ⚡ Quick Start - Velonet Web

**5 minutos para tener el proyecto corriendo**

---

## 📝 Pre-requisitos

```bash
# Verificar que tienes todo instalado
php --version          # >= 8.3
node --version         # >= 18
composer --version     # >= 2.0
```

Si falta algo, instala desde:
- PHP: https://www.php.net
- Node: https://nodejs.org
- Composer: https://getcomposer.org

---

## 🚀 Instalación (5 pasos)

### Paso 1: Acceder al proyecto

```bash
cd /Users/alejandrohiguitazuleta/Sites/localhost/web-integra
```

### Paso 2: Instalar dependencias

```bash
npm install        # Instala React, Tailwind, etc.
composer install   # Instala Laravel
```

### Paso 3: Configurar entorno

```bash
cp .env.example .env
php artisan key:generate
```

### Paso 4: Terminal 1 - Compilar assets

```bash
npm run dev
```

Espera hasta ver:
```
  VITE v5.x.x ready in xxx ms
  ➜  Local:   http://localhost:5173
```

### Paso 5: Terminal 2 - Iniciar Laravel

```bash
php artisan serve
```

Debería ver:
```
Local:   http://localhost:8000
```

---

## ✅ Verificar que funciona

Abre `http://localhost:8000` en el navegador.

Deberías ver:
- ✅ Navbar con logo Velonet
- ✅ Hero banner principal
- ✅ Sección de servicios
- ✅ Planes de internet
- ✅ Beneficios
- ✅ Cobertura
- ✅ Formulario de contacto
- ✅ Footer

**Si todo funciona → ¡Listo! 🎉**

---

## 🔧 Editar el Proyecto

### Cambiar un componente

```jsx
// En resources/js/Components/Home/Navbar.jsx
const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  // Edita aquí
];
```

Guarda el archivo → Automáticamente se recarga en el navegador ✨

### Cambiar colores

```javascript
// En tailwind.config.js
colors: {
  velonet: {
    orange: '#FF6600',  // Cambiar aquí
    dark: '#1A1A2E',
  },
}
```

### Agregar un componente nuevo

```jsx
// 1. Crear archivo: resources/js/Components/Home/MiComponente.jsx
export default function MiComponente() {
  return <div>Mi contenido</div>;
}

// 2. Importar en Home.jsx
import MiComponente from '../Components/Home/MiComponente';

// 3. Agregar a la página
<MiComponente />
```

---

## 📁 Archivos Clave

| Archivo | Propósito |
|---------|-----------|
| `resources/js/Pages/Home.jsx` | Página principal |
| `resources/js/Components/Home/*.jsx` | Componentes (8) |
| `routes/web.php` | Rutas |
| `app/Http/Controllers/HomeController.php` | Controlador |
| `resources/css/app.css` | Estilos globales |
| `tailwind.config.js` | Configuración de colores |

---

## 🎯 Tareas Comunes

### Cambiar el headline del hero

```jsx
// En HeroBanner.jsx
<h1 className="...">
  Tu nuevo headline aquí
</h1>
```

### Agregar un plan nuevo

```javascript
// En PlansSection.jsx
const plansData = {
  hogar: [
    { nombre: 'Mi Plan', velocidad: '50 Mbps', precio: '$99.900', features: [...] },
    // Agregar aquí
  ]
}
```

### Cambiar el color del botón

```jsx
className="bg-[#FF6600] hover:bg-[#E55A00]"
// Cambiar a tu color aquí
```

### Añadir un link en el navbar

```javascript
const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Mi Link', href: '#mi-seccion' },  // Aquí
];
```

---

## 🐛 Problemas Comunes

### "npm: command not found"
```bash
# Instalar Node.js
brew install node
```

### "Port 8000 already in use"
```bash
# Usar otro puerto
php artisan serve --port=8001
```

### "Module not found"
```bash
# Limpiar e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Cambios no se reflejan
```bash
# Reiniciar los servidores
# Terminal 1: Presionar Ctrl+C, luego: npm run dev
# Terminal 2: Presionar Ctrl+C, luego: php artisan serve
```

---

## 📦 Compilar para Producción

```bash
npm run build
```

Esto crea la carpeta `public/build/` con todos los archivos optimizados.

---

## 📚 Documentación Completa

- **README.md** - Overview general
- **SETUP.md** - Instalación detallada
- **COMPONENTS.md** - Referencia de componentes
- **INTEGRATION.md** - Conectar formulario con backend
- **STATUS.md** - Estado del proyecto

---

## 💡 Consejos

1. **Hot Reload**: Los cambios se reflejan automáticamente (magia ✨)
2. **DevTools**: Abre F12 para inspeccionar elementos
3. **Tailwind**: Usa clases directamente, no CSS separado
4. **Icons**: Busca más en https://lucide.dev

---

## 🎉 ¡Listo!

Ya tienes la página de Velonet corriendo localmente.

**Próximos pasos:**
1. Personaliza con tus datos
2. Conecta el formulario con tu backend (ver INTEGRATION.md)
3. Agrega más funcionalidades
4. Deploya a producción

---

**¿Necesitas ayuda?** Lee la documentación incluida o revisa los archivos del proyecto.

¡Feliz desarrollo! 🚀
