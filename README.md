# 🌐 Velonet - Sitio Web Oficial

Página de inicio del sitio web de **Velonet**, proveedor de internet de alta velocidad en Medellín y Antioquia, desarrollada con **Laravel 12 + Inertia.js + React**.

---

## 📋 Requisitos Previos

- **PHP** >= 8.3
- **Node.js** >= 18.0
- **Composer** >= 2.0
- **npm** o **yarn**

---

## 🚀 Instalación y Setup

### 1. Clonar o descargar el proyecto

```bash
cd /Users/alejandrohiguitazuleta/Sites/localhost/web-integra
```

### 2. Instalar dependencias de PHP (Composer)

```bash
composer install
```

### 3. Instalar dependencias de Node.js

```bash
npm install
```

### 4. Configurar variables de entorno

```bash
cp .env.example .env
php artisan key:generate
```

### 5. Compilar assets (Vite)

```bash
# Desarrollo (con hot reload)
npm run dev

# Producción
npm run build
```

---

## 📁 Estructura del Proyecto

```
web-integra/
├── resources/
│   ├── js/
│   │   ├── Pages/
│   │   │   └── Home.jsx           ← Página principal
│   │   ├── Components/
│   │   │   └── Home/
│   │   │       ├── Navbar.jsx      ← Navegación sticky
│   │   │       ├── HeroBanner.jsx  ← Sección hero
│   │   │       ├── ServicesBar.jsx ← Servicios
│   │   │       ├── PlansSection.jsx ← Planes (con tabs)
│   │   │       ├── WhyVelonet.jsx  ← Beneficios
│   │   │       ├── CoverageSection.jsx ← Cobertura
│   │   │       ├── ContactForm.jsx ← Contacto
│   │   │       └── Footer.jsx      ← Pie de página
│   │   ├── app.jsx                ← Entry point
│   │   └── bootstrap.js           ← Configuración global
│   └── css/
│       └── app.css                ← Estilos globales
├── app/
│   └── Http/
│       └── Controllers/
│           └── HomeController.php  ← Controlador del home
├── routes/
│   └── web.php                    ← Rutas de la aplicación
├── config/
│   └── app.php                    ← Configuración de Laravel
├── vite.config.js                 ← Configuración de Vite
├── tailwind.config.js             ← Configuración de Tailwind CSS
├── postcss.config.js              ← Configuración de PostCSS
└── package.json                   ← Dependencias de Node.js
```

---

## 🎨 Paleta de Colores

- **Primario**: `#FF6600` (Naranja Velonet)
- **Secundario**: `#1A1A2E` (Azul oscuro)
- **Acento**: `#E55A00` (Naranja oscuro - hover)
- **Fondo claro**: `#F5F5F5`
- **Texto**: `#333333`

---

## 📱 Secciones Incluidas

### 1. **Navbar** (Sticky)
- Logo y navegación responsiva
- Hamburger menu en móvil
- Botón CTA "Contratar"
- Cambio de color al hacer scroll

### 2. **Hero Banner**
- Fondo con gradiente
- Headline y subtítulo
- Botones CTA principales
- Animaciones de entrada
- Indicador de scroll (chevron animado)

### 3. **Services Bar**
- 4 servicios principales con íconos
- Cards con hover effects
- Responsive grid

### 4. **Plans Section**
- Tabs para cambiar categoría (Hogar, Empresas, Móvil)
- Cards de planes con características
- Badge "Más Popular"
- Planes reales con precios

### 5. **Why Velonet**
- 4 beneficios principales
- Estadísticas (clientes, disponibilidad, soporte)
- Diseño con íconos

### 6. **Coverage Section**
- Fondo oscuro atractivo
- Placeholder de mapa
- Información de cobertura
- Estadísticas de cobertura

### 7. **Contact Form**
- Validación en frontend
- Campos: nombre, teléfono, email, municipio, mensaje
- Mensaje de éxito
- Manejo de estados (loading, error)

### 8. **Footer**
- 4 columnas: Logo, links, servicios, contacto
- Redes sociales (Facebook, Instagram, WhatsApp)
- Copyright y botón "Volver al inicio"
- Responsive design

---

## ⚡ Características Implementadas

✅ **Responsive Design** - Mobile first, optimizado para todos los dispositivos
✅ **Animaciones** - Fade-in, bounce, hover effects y transiciones suaves
✅ **Navbar Sticky** - Cambia de color al hacer scroll
✅ **Tabs Interactivos** - Cambio de planes (Hogar, Empresas, Móvil)
✅ **Formulario de Contacto** - Con validación y feedback
✅ **Tailwind CSS** - Utilidad-first CSS framework
✅ **Lucide React Icons** - Iconografía moderna
✅ **Inertia.js** - Integración Laravel + React

---

## 🛠️ Scripts Disponibles

```bash
# Desarrollo con hot reload
npm run dev

# Compilar para producción
npm run build

# Preview de producción
npm run preview
```

---

## 📝 Notas Importantes

- **Datos hardcodeados**: Los planes y servicios están definidos dentro de los componentes
- **Formulario**: Actualmente simula el envío. Para integrarlo con backend, crear un endpoint en Laravel
- **Imágenes**: El proyecto usa placeholders. Reemplazar con imágenes reales según necesidad
- **Estilos**: Todo con Tailwind CSS, sin CSS personalizado adicional (excepto en app.css)

---

## 🔧 Configuración de Tailwind CSS

El archivo `tailwind.config.js` incluye:
- Colores personalizados de Velonet
- Fuente Nunito como default
- Breakpoints estándar de Tailwind

---

## 📞 Contacto y Soporte

Para preguntas sobre la implementación o mejoras futuras, contactar con el equipo de desarrollo.

---

## 📄 Licencia

© 2025 Velonet Colombia. Todos los derechos reservados.

---

## 🚀 Próximos Pasos

1. **Reemplazar datos** con información real de Velonet
2. **Integrar backend** - Crear endpoints para el formulario de contacto
3. **Agregar Google Analytics** para tracking
4. **Implementar SEO** - Meta tags, sitemap, robots.txt
5. **Testing** - Agregar tests unitarios y de integración
6. **Caching** - Optimizar velocidad de carga

---

**Versión**: 1.0.0
**Última actualización**: 2025-03-27
