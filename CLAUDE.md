# 🤖 Instrucciones para Claude Code

Estas instrucciones ayudan a Claude a entender mejor este proyecto y cómo trabajar en él.

---

## 📌 Sobre el Proyecto

**Proyecto**: Velonet - Sitio web de proveedor de internet
**Stack**: Laravel 12 + Inertia.js + React 18 + Tailwind CSS
**Propósito**: Landing page moderna y responsive para Velonet
**Estado**: Completado (28/03/2025)

---

## 🎯 Convenciones del Proyecto

### Estructura de Carpetas

```
resources/
├── js/
│   ├── Pages/           ← Páginas Inertia (son React components)
│   ├── Components/
│   │   └── Home/        ← Componentes reutilizables
│   ├── app.jsx          ← Entry point
│   └── bootstrap.js     ← Configuración global
├── css/
│   └── app.css          ← Estilos globales (Tailwind)
└── views/
    └── app.blade.php    ← Template HTML (Blade)
```

### Nombres de Componentes

- Componentes: `PascalCase` (ej: `Navbar.jsx`, `ContactForm.jsx`)
- Variables: `camelCase` (ej: `navLinks`, `isMenuOpen`)
- CSS classes: Tailwind (ej: `bg-[#FF6600]`, `hover:shadow-xl`)

### Estilos

- **NO crear archivos CSS separados** para componentes
- **Usar clases de Tailwind directamente** en JSX
- **Colores personalizados**: Definir en `tailwind.config.js`
- **Estilos globales**: Agregar en `resources/css/app.css`

---

## 🎨 Paleta de Colores

Estos colores son fundamentales para el diseño:

```javascript
// Tailwind classes
text-[#FF6600]        // Naranja primario
text-[#1A1A2E]        // Azul oscuro
bg-[#FF6600]          // Fondo naranja
bg-[#1A1A2E]          // Fondo azul oscuro
hover:bg-[#E55A00]    // Naranja hover (más oscuro)
```

**Cambiar estos colores globalmente** en `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      velonet: {
        orange: '#FF6600',
        dark: '#1A1A2E',
        accent: '#E55A00',
      },
    },
  },
}
```

---

## 📱 Responsive Design

Breakpoints usados en el proyecto:

```jsx
className="
  grid-cols-1           // móvil (< 640px)
  md:grid-cols-2        // tablet (640px - 1024px)
  lg:grid-cols-4        // desktop (> 1024px)
"
```

**Siempre pensar mobile-first** al diseñar componentes.

---

## 🧩 Componentes Principales

### 8 Componentes Creados

1. **Navbar.jsx** - Navegación sticky, responsive
2. **HeroBanner.jsx** - Sección principal con animaciones
3. **ServicesBar.jsx** - Grid de 4 servicios
4. **PlansSection.jsx** - Planes con tabs (hogar/empresas/móvil)
5. **WhyVelonet.jsx** - Beneficios y estadísticas
6. **CoverageSection.jsx** - Cobertura geográfica
7. **ContactForm.jsx** - Formulario con validación
8. **Footer.jsx** - Pie de página

Todos sin props (datos hardcodeados). Los datos pueden moverse a:
- Estado del componente (`useState`)
- Props desde la página
- API/Base de datos

---

## 🔄 Cómo Editar

### Editar un Componente

1. Abrir el archivo (ej: `resources/js/Components/Home/Navbar.jsx`)
2. Hacer cambios
3. Guardar → Hot reload automático (si `npm run dev` está corriendo)

### Agregar un Componente Nuevo

```jsx
// 1. Crear archivo: resources/js/Components/Home/MiComponente.jsx
export default function MiComponente() {
  return <div>Contenido</div>;
}

// 2. Importar en Home.jsx
import MiComponente from '../Components/Home/MiComponente';

// 3. Usar en la página
<MiComponente />
```

### Cambiar Datos (Planes, Servicios, etc.)

Los datos están hardcodeados en los componentes como variables:

```javascript
// En PlansSection.jsx
const plansData = {
  hogar: [
    { nombre: 'Básico', velocidad: '30 Mbps', precio: '$49.900', ... }
  ]
};
```

Para cambiarlos:
1. Editar la variable dentro del componente
2. O mover a archivo separado y importar
3. O conectar con API/Backend

---

## 🚀 Flujo de Desarrollo

### Para Desarrollo Local

```bash
# Terminal 1: Compilar con hot reload
npm run dev

# Terminal 2: Iniciar servidor
php artisan serve
```

### Para Producción

```bash
npm run build           # Crea /public/build
# Luego deployar normalmente
```

---

## 🔌 Integración con Backend

### Formulario de Contacto

Actualmente: Simula el envío (sin API real)

Para conectar con backend:
1. Ver archivo `INTEGRATION.md`
2. Crear endpoint en `routes/web.php` o `api.php`
3. Actualizar `handleSubmit()` en `ContactForm.jsx`
4. Usar `window.axios.post(url, data)`

### Base de Datos

Si necesitas guardar datos:
1. Crear migración: `php artisan make:model Contacto -m`
2. Crear modelo en `app/Models/`
3. Crear controlador: `php artisan make:controller ContactoController`

---

## 📚 Archivos de Referencia

Cuando necesites información, consulta:

| Necesito | Ver Archivo |
|----------|-------------|
| Instalar proyecto | QUICK_START.md |
| Instalación detallada | SETUP.md |
| Cómo funciona cada componente | COMPONENTS.md |
| Conectar con backend | INTEGRATION.md |
| Estructura del proyecto | PROJECT_TREE.txt |
| Estado actual | STATUS.md |

---

## 🎭 Decisiones de Diseño

### Por qué esta arquitectura

- **Componentes pequeños**: Cada uno hace una cosa bien
- **Sin props**: Mantiene simplicidad (para un landing page)
- **Datos hardcodeados**: Rápido de personalizar
- **Tailwind CSS**: No necesita CSS separado
- **Lucide Icons**: Iconografía consistente y light

### Cambiar estas decisiones

Si necesitas:
- **Componentes dinámicos**: Agregar props
- **Datos en BD**: Crear models + migraciones
- **API**: Crear endpoints y conectar con axios
- **Más estilos**: Agregar clases en `app.css`

---

## 🔒 Seguridad

- **CSRF**: Habilitado por defecto en Laravel
- **Validación**: Frontend en componentes, backend en controladores
- **Rate Limiting**: Agregar si es necesario (ver INTEGRATION.md)

---

## 🧪 Testing

Actualmente no hay tests. Si quieres agregar:

```bash
npm install --save-dev vitest @testing-library/react
```

Crear archivos `.test.jsx` junto a los componentes.

---

## 📝 Patrón de Commits

Cuando el usuario pida cambios, los commits deberían ser:

```
feat: agregar nueva sección
fix: corregir responsive en navbar
docs: actualizar README
style: cambiar colores primarios
refactor: mejorar estructura de componentes
```

---

## 🎓 Tips para Trabajar Mejor

### Hot Reload
- Si cambias React, se recarga automáticamente ✨
- Si cambias Tailwind, se recompila automáticamente
- Si cambias blade/backend, recarga manual (F5)

### Debugging
- Abre DevTools (F12) para ver errores
- Usa React DevTools (extensión del navegador)
- Busca logs en la terminal

### Performance
- Tailwind genera CSS automáticamente (no hay CSS sin usar)
- Componentes son funcionales (sin clases)
- Inertia.js maneja el enrutamiento

---

## 🚫 Evitar

- ❌ Crear archivos CSS sin usar Tailwind
- ❌ Props innecesarios en componentes landing
- ❌ Hardcodear valores que deben ser configurables
- ❌ Dejar comentarios TODO sin resolver
- ❌ Código duplicado (refactorizar si es necesario)

---

## ✅ Hacer

- ✅ Usar clases de Tailwind directamente
- ✅ Mantener componentes simples y enfocados
- ✅ Comentar código complejo
- ✅ Probar responsividad en móvil y desktop
- ✅ Seguir convenciones de nombres

---

## 🔍 Antes de Proponer Cambios

Preguntar:
1. ¿Es un cambio solicitado por el usuario?
2. ¿Mantiene la simplicidad del proyecto?
3. ¿Es fácil de revertir?
4. ¿Afecta a otros componentes?

---

## 📞 Comunicación

Cuando hagas cambios:
1. **Explica qué cambias** (brevemente)
2. **Muestra dónde** (ruta del archivo)
3. **Por qué** (mejora UX, corrige bug, etc.)
4. **Verifica** que compile sin errores

---

## 🎉 Objetivo del Proyecto

Este es un **landing page profesional** para Velonet:
- ✅ Moderno y responsive
- ✅ Fácil de personalizar
- ✅ Listo para producción
- ✅ Bien documentado

Mantener esta calidad en futuros cambios.

---

**Versión**: 1.0.0
**Última actualización**: 28 de Marzo, 2025
**Autor**: Claude (Anthropic)

¡Listo para trabajar en el proyecto! 🚀
