import {
  Target,
  Eye,
  Rocket,
  HeartHandshake,
  ShieldCheck,
  MapPin,
  Headphones,
  Sparkles,
} from 'lucide-react';

export const WHATSAPP_URL = 'https://wa.me/573334010174';

/**
 * Datos de la página institucional "Nosotros" (REINTECH S.A.S).
 * Centralizados para reutilizar entre los componentes de /nosotros.
 */

// Párrafo de historia / trayectoria.
export const STORY_PARAGRAPHS = [
  'Nacimos con un propósito claro: acercar la mejor tecnología de conectividad a los hogares y empresas de Colombia. Lo que empezó como un equipo apasionado por las redes, hoy es una compañía con infraestructura de fibra óptica de última generación.',
  'Invertimos en red propia, monitoreo permanente y un equipo humano cercano para que cada cliente disfrute de una conexión estable, veloz y respaldada las 24 horas del día.',
];

// Indicadores destacados (banda de estadísticas).
export const STATS = [
  { value: '+50K', label: 'Usuarios activos' },
  { value: '99.9%', label: 'Disponibilidad real' },
  { value: '100%', label: 'Fibra óptica' },
  { value: '24/7', label: 'Soporte humano' },
];

// Misión y Visión.
export const MISSION_VISION = [
  {
    icon: Target,
    tag: 'Nuestra Misión',
    title: 'Conectar a las personas con lo que importa',
    text: 'Brindar servicios de internet y tecnología de alta fidelidad, con infraestructura confiable y atención cercana, que impulsen el desarrollo de las familias y empresas que confían en nosotros.',
  },
  {
    icon: Eye,
    tag: 'Nuestra Visión',
    title: 'Ser el aliado tecnológico líder de la región',
    text: 'Ser reconocidos como el proveedor de conectividad y soluciones tecnológicas más confiable, expandiendo nuestra cobertura y elevando siempre el estándar de calidad y experiencia del cliente.',
  },
];

// Valores corporativos.
export const VALUES = [
  {
    icon: Rocket,
    title: 'Innovación',
    text: 'Adoptamos la mejor tecnología para mantenerte siempre a la vanguardia.',
  },
  {
    icon: HeartHandshake,
    title: 'Cercanía',
    text: 'Un trato humano y honesto en cada interacción con nuestros clientes.',
  },
  {
    icon: ShieldCheck,
    title: 'Confiabilidad',
    text: 'Una red estable y segura en la que puedes confiar todos los días.',
  },
  {
    icon: MapPin,
    title: 'Cobertura',
    text: 'Llevamos conectividad de calidad cada vez a más rincones del país.',
  },
  {
    icon: Headphones,
    title: 'Soporte real',
    text: 'Personas dispuestas a ayudarte, disponibles 24/7 cuando lo necesites.',
  },
  {
    icon: Sparkles,
    title: 'Excelencia',
    text: 'Buscamos superar tus expectativas en cada servicio que ofrecemos.',
  },
];
