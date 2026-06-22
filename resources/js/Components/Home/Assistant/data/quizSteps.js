import {
  MapPin,
  Building2,
  Radio,
  Users,
  Tv,
  Gamepad2,
  Briefcase,
  Wifi,
  ShieldCheck,
  Wallet,
  Gauge,
  Building,
} from 'lucide-react';

/**
 * Configuración de pasos del Asistente Interactivo.
 *
 * Cada paso tiene un id único, ícono, encabezado y un arreglo de opciones.
 * Las opciones de "necesidad" llevan un `weight` (1 a 4) que se suma para
 * estimar la velocidad. El paso de ubicación NO suma peso: solo define la
 * tecnología (Fibra FTTH vs Radio Enlace).
 *
 * `featured: true` indica que el paso se renderiza con tarjetas grandes
 * (ícono arriba + descripción amplia), como el paso de ubicación.
 */
export const STEPS = [
  {
    id: 'ubicacion',
    icon: MapPin,
    eyebrow: 'Paso 1',
    question: '¿Dónde necesitas la instalación?',
    help: 'Esto define la mejor tecnología de conexión para tu ubicación.',
    featured: true,
    options: [
      {
        value: 'urbano',
        label: 'Casco Urbano',
        sub: 'Disponibilidad de Fibra Óptica directa a casa (FTTH) de alta velocidad.',
        weight: 0,
        icon: Building2,
      },
      {
        value: 'rural',
        label: 'Zona Rural',
        sub: 'Conexión de radio enlace inalámbrico de máxima potencia y rendimiento.',
        weight: 0,
        icon: Radio,
      },
    ],
  },
  {
    id: 'personas',
    icon: Users,
    eyebrow: 'Paso 2',
    question: '¿Cuántas personas se conectan?',
    help: 'Cuéntanos cuánta gente usa el internet en tu hogar o negocio.',
    options: [
      { value: '1-2', label: '1 a 2 personas', sub: 'Uso individual o pareja', weight: 1 },
      { value: '3-4', label: '3 a 4 personas', sub: 'Familia pequeña', weight: 2 },
      { value: '5-6', label: '5 a 6 personas', sub: 'Familia grande', weight: 3 },
      { value: '7+', label: '7 o más', sub: 'Hogar muy conectado', weight: 4 },
    ],
  },
  {
    id: 'uso',
    icon: Tv,
    eyebrow: 'Paso 3',
    question: '¿Para qué usas más el internet?',
    help: 'Elige la actividad que más realizas día a día.',
    options: [
      { value: 'redes', label: 'Redes y navegación', sub: 'Redes sociales, mensajería, web', weight: 1, icon: Wifi },
      { value: 'streaming', label: 'Streaming HD / 4K', sub: 'Netflix, YouTube, Disney+', weight: 3, icon: Tv },
      { value: 'gaming', label: 'Videojuegos online', sub: 'Consolas y juegos en línea', weight: 4, icon: Gamepad2 },
      { value: 'trabajo', label: 'Teletrabajo', sub: 'Videollamadas y nube', weight: 3, icon: Briefcase },
    ],
  },
  {
    id: 'dispositivos',
    icon: Wifi,
    eyebrow: 'Paso 4',
    question: '¿Cuántos dispositivos al tiempo?',
    help: 'Celulares, computadores, TVs, cámaras y dispositivos inteligentes.',
    options: [
      { value: 'pocos', label: 'Pocos · 1 a 5', sub: 'Lo básico conectado', weight: 1 },
      { value: 'medio', label: 'Medio · 6 a 10', sub: 'Hogar moderno', weight: 2 },
      { value: 'muchos', label: 'Muchos · 11 a 20', sub: 'Casa inteligente', weight: 3 },
      { value: 'empresa', label: 'Más de 20', sub: 'Empresa o negocio', weight: 4 },
    ],
  },
  {
    id: 'prioridad',
    icon: ShieldCheck,
    eyebrow: 'Paso 5',
    question: '¿Qué es lo más importante para ti?',
    help: 'Esto nos ayuda a afinar la recomendación final.',
    options: [
      { value: 'precio', label: 'Mejor precio', sub: 'Quiero ahorrar', weight: 1, icon: Wallet },
      { value: 'velocidad', label: 'Máxima velocidad', sub: 'Quiero lo más rápido', weight: 4, icon: Gauge },
      { value: 'estabilidad', label: 'Estabilidad total', sub: 'Sin cortes ni lag', weight: 3, icon: ShieldCheck },
      { value: 'negocio', label: 'Para mi negocio', sub: 'Conexión corporativa', weight: 4, icon: Building },
    ],
  },
];

export const TOTAL_STEPS = STEPS.length;
