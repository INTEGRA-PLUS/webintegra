# 🧩 Documentación de Componentes

## 📑 Índice de Componentes

1. [Navbar](#navbar)
2. [HeroBanner](#herobanner)
3. [ServicesBar](#servicesbar)
4. [PlansSection](#planssection)
5. [WhyVelonet](#whyvelonet)
6. [CoverageSection](#coveragesection)
7. [ContactForm](#contactform)
8. [Footer](#footer)
9. [Home (Page)](#home-page)

---

## Navbar

**Ubicación**: `resources/js/Components/Home/Navbar.jsx`

**Descripción**: Barra de navegación sticky con menu responsivo.

### Características

- ✅ Sticky position con cambio de color al scroll
- ✅ Hamburger menu en mobile (< 768px)
- ✅ Links de navegación internos
- ✅ Botón CTA "Contratar"
- ✅ Logo clickeable que va al home

### Props

Este componente no acepta props. Los datos están hardcodeados.

### Ejemplo de Uso

```jsx
import Navbar from '../Components/Home/Navbar';

<Navbar />
```

### Personalización

Para cambiar los links de navegación, edita el array `navLinks` dentro del componente:

```javascript
const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Planes', href: '#planes' },
  // Agregar más links aquí
];
```

### Estilos Personalizables

- Color primario: `#FF6600` (buscar en el código)
- Color hover: `#E55A00`
- Altura: `h-16` (64px)
- Font: Nunito (via Tailwind)

---

## HeroBanner

**Ubicación**: `resources/js/Components/Home/HeroBanner.jsx`

**Descripción**: Sección principal con headline, subtítulo y CTAs.

### Características

- ✅ Fondo con gradiente azul oscuro
- ✅ Elementos animados (blobs)
- ✅ Animations fade-in en headline y botones
- ✅ Indicator de scroll (chevron animado)
- ✅ Wave/Curve SVG en la parte inferior
- ✅ Altura de pantalla completa (h-screen)

### Props

Este componente no acepta props.

### Ejemplo de Uso

```jsx
import HeroBanner from '../Components/Home/HeroBanner';

<HeroBanner />
```

### Personalización

**Cambiar Headline**:
```jsx
<h1 className="...">
  Tu nuevo headline aquí
  <span className="block text-[#FF6600]">Segunda línea</span>
</h1>
```

**Cambiar Subtítulo**:
```jsx
<p className="...">Tu nuevo subtítulo</p>
```

**Cambiar Botones**:
```jsx
<button className="...">Nuevo Texto</button>
```

---

## ServicesBar

**Ubicación**: `resources/js/Components/Home/ServicesBar.jsx`

**Descripción**: Grid de 4 servicios principales con iconos.

### Características

- ✅ Grid responsive (1 col mobile, 2 tablet, 4 desktop)
- ✅ Iconos de Lucide React
- ✅ Hover effects (shadow, translate)
- ✅ Cards con sombra
- ✅ Fondo blanco

### Props

Este componente no acepta props.

### Ejemplo de Uso

```jsx
import ServicesBar from '../Components/Home/ServicesBar';

<ServicesBar />
```

### Personalización

Para cambiar servicios, edita el array `services`:

```javascript
const services = [
  {
    icon: Wifi, // De lucide-react
    title: 'Internet Hogar',
    description: 'Conexión rápida y confiable',
  },
  // Más servicios...
];
```

**Iconos disponibles de Lucide:**
- `Wifi` - Señal WiFi
- `Tv` - Televisión
- `Smartphone` - Móvil
- `Camera` - Cámara
- Más en https://lucide.dev

---

## PlansSection

**Ubicación**: `resources/js/Components/Home/PlansSection.jsx`

**Descripción**: Sección de planes con tabs (Hogar, Empresas, Móvil).

### Características

- ✅ Tabs interactivos
- ✅ Grid responsive (1 col mobile, 3+ desktop)
- ✅ Cards con hover effects
- ✅ Badge "Más Popular"
- ✅ Checks verdes para features
- ✅ Validación de datos

### Props

Este componente no acepta props. Usa React hooks (`useState`) internamente.

### Estado Interno

```javascript
const [activeTab, setActiveTab] = useState('hogar');
```

### Ejemplo de Uso

```jsx
import PlansSection from '../Components/Home/PlansSection';

<PlansSection />
```

### Personalización

**Cambiar datos de planes**:

```javascript
const plansData = {
  hogar: [
    {
      nombre: 'Básico',
      velocidad: '30 Mbps',
      precio: '$49.900',
      features: ['WiFi incluido', '...'],
    },
    // Más planes...
  ],
  empresas: [...],
  movil: [...],
};
```

**Cambiar nombre de tabs**:

```jsx
{['hogar', 'empresas', 'movil'].map((tab) => (
  // Cambiar los labels aquí
))}
```

---

## WhyVelonet

**Ubicación**: `resources/js/Components/Home/WhyVelonet.jsx`

**Descripción**: Sección de beneficios con 4 cards y estadísticas.

### Características

- ✅ Grid de 4 beneficios
- ✅ Iconos con fondo naranja
- ✅ Sección adicional con estadísticas
- ✅ Hover effects
- ✅ Fondo gris claro

### Props

Este componente no acepta props.

### Ejemplo de Uso

```jsx
import WhyVelonet from '../Components/Home/WhyVelonet';

<WhyVelonet />
```

### Personalización

**Cambiar beneficios**:

```javascript
const benefits = [
  {
    icon: Zap,
    title: 'Velocidad Garantizada',
    description: '...',
  },
  // Más beneficios...
];
```

**Cambiar estadísticas**:

```jsx
<div>
  <p className="text-4xl font-bold text-[#FF6600]">+50.000</p>
  <p className="text-gray-600">Clientes satisfechos</p>
</div>
```

---

## CoverageSection

**Ubicación**: `resources/js/Components/Home/CoverageSection.jsx`

**Descripción**: Sección de cobertura con mapa placeholder y estadísticas.

### Características

- ✅ Fondo azul oscuro con texto blanco
- ✅ Grid 2 columnas (layout + contenido)
- ✅ Placeholder de mapa interactivo
- ✅ Cards de cobertura
- ✅ Indicador de cobertura
- ✅ Botón CTA

### Props

Este componente no acepta props.

### Ejemplo de Uso

```jsx
import CoverageSection from '../Components/Home/CoverageSection';

<CoverageSection />
```

### Personalización

**Reemplazar placeholder de mapa**:

```jsx
<div className="bg-gray-300 rounded-lg overflow-hidden h-96">
  {/* Aquí puedes agregar una librería como Leaflet o Google Maps */}
  <MapComponent />
</div>
```

**Cambiar áreas de cobertura**:

```jsx
<div className="flex items-start gap-3">
  <div className="w-5 h-5 bg-[#FF6600] rounded-full"></div>
  <div>
    <p className="font-semibold">Tu zona aquí</p>
    <p className="text-gray-300 text-sm">Descripción de cobertura</p>
  </div>
</div>
```

---

## ContactForm

**Ubicación**: `resources/js/Components/Home/ContactForm.jsx`

**Descripción**: Formulario de contacto con validación y manejo de estado.

### Características

- ✅ Validación en frontend (campos requeridos)
- ✅ Manejo de estado (loading, error, success)
- ✅ Mensaje de éxito animado
- ✅ Campos: nombre, teléfono, email, municipio, mensaje
- ✅ Responsive design
- ✅ Deshabilitación de botón en envío

### Props

Este componente no acepta props. Usa `useState` internamente.

### Estado Interno

```javascript
const [formData, setFormData] = useState({...});
const [submitted, setSubmitted] = useState(false);
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');
```

### Ejemplo de Uso

```jsx
import ContactForm from '../Components/Home/ContactForm';

<ContactForm />
```

### Personalización

**Agregar campos**:

```javascript
const [formData, setFormData] = useState({
  nombre: '',
  asunto: '', // Nuevo campo
  // Más campos...
});
```

**Cambiar validación**:

```javascript
const validateForm = () => {
  if (!formData.asunto.trim()) {
    setError('El asunto es requerido');
    return false;
  }
  // Más validaciones...
};
```

**Integrar con API**:

Ver el archivo `INTEGRATION.md` para instrucciones completas.

---

## Footer

**Ubicación**: `resources/js/Components/Home/Footer.jsx`

**Descripción**: Pie de página con 4 columnas, redes sociales y copyright.

### Características

- ✅ 4 columnas: Logo, links, servicios, contacto
- ✅ Redes sociales (Facebook, Instagram, WhatsApp)
- ✅ Links a secciones
- ✅ Información de contacto (dirección, teléfono, email)
- ✅ Botón "Volver al inicio"
- ✅ Copyright dinámico (año actual)
- ✅ Fondo azul oscuro

### Props

Este componente no acepta props.

### Ejemplo de Uso

```jsx
import Footer from '../Components/Home/Footer';

<Footer />
```

### Personalización

**Cambiar links rápidos**:

```jsx
<ul className="space-y-2">
  <li>
    <a href="#nuevo-link">Mi Link</a>
  </li>
</ul>
```

**Cambiar redes sociales**:

```jsx
<a href="https://tiktok.com/velonet">
  <TikTok size={20} />
</a>
```

**Cambiar información de contacto**:

```jsx
<div className="flex items-start gap-2">
  <Phone size={18} />
  <a href="tel:+57...">Nuevo teléfono</a>
</div>
```

---

## Home (Page)

**Ubicación**: `resources/js/Pages/Home.jsx`

**Descripción**: Página principal que agrupa todos los componentes.

### Características

- ✅ Combina todos los componentes en orden lógico
- ✅ Layout limpio y simple
- ✅ Sin lógica compleja
- ✅ Fácil de mantener

### Props

Este componente no acepta props (es una Inertia Page).

### Ejemplo de Uso

```jsx
// Automático a través de Inertia.js
// No necesita ser importado manualmente
```

### Orden de Componentes

```jsx
<div>
  <Navbar />           {/* 1. Navbar sticky */}
  <HeroBanner />       {/* 2. Sección principal */}
  <ServicesBar />      {/* 3. Servicios */}
  <PlansSection />     {/* 4. Planes */}
  <WhyVelonet />       {/* 5. Beneficios */}
  <CoverageSection />  {/* 6. Cobertura */}
  <ContactForm />      {/* 7. Contacto */}
  <Footer />           {/* 8. Footer */}
</div>
```

### Personalización

Para cambiar el orden, simplemente reordena los componentes. Para agregar secciones nuevas:

```jsx
import NuevoComponente from '../Components/Home/NuevoComponente';

<NuevoComponente />
```

---

## 🎨 Colores Globales

Todos los componentes usan estos colores:

```css
/* Tailwind Classes */
text-[#FF6600]      /* Naranja primario */
text-[#1A1A2E]      /* Azul oscuro */
bg-[#FF6600]        /* Fondo naranja */
bg-[#1A1A2E]        /* Fondo azul oscuro */
hover:bg-[#E55A00]  /* Naranja hover */
```

Para personalizar globalmente, edita `tailwind.config.js`:

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

## 📱 Breakpoints Responsivos

Tailwind CSS breakpoints usados:

- `sm`: 640px (móviles grandes)
- `md`: 768px (tablets)
- `lg`: 1024px (desktops)
- `xl`: 1280px (desktops grandes)

Ejemplo de uso:

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  {/* 1 columna en móvil, 2 en tablet, 4 en desktop */}
</div>
```

---

## 🚀 Tips para Desarrollo

1. **Hot Reload**: Los cambios en componentes se reflejan automáticamente con `npm run dev`
2. **DevTools**: Usar React DevTools para inspeccionar componentes
3. **Tailwind**: Usar clases directamente, sin CSS separado
4. **Icons**: Buscar en https://lucide.dev para más iconos
5. **Testing**: Crear pruebas en `tests/` para componentes complejos

---

## 📚 Recursos

- [Tailwind CSS Docs](https://tailwindcss.com)
- [React Docs](https://react.dev)
- [Lucide Icons](https://lucide.dev)
- [Inertia.js](https://inertiajs.com)

---

¡Listo para personalizar! 🎉
