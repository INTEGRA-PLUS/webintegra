import { Battery, Zap, Sun, Lightbulb, Droplet, Gauge, Leaf, TreePine, Wind } from 'lucide-react';

export const WHATSAPP_URL = 'https://wa.me/573334010174';

/**
 * Datos de la página de Energías Renovables.
 * Paleta natural (verdes/esmeralda) enfocada en sostenibilidad.
 */

export const ENERGIA_SERVICES = [
  {
    title: 'Baterías de Todo Tipo',
    description:
      'Suministro de baterías especializadas de ciclo profundo, AGM, Gel y Litio para sistemas de respaldo y energía solar.',
    icon: Battery,
  },
  {
    title: 'Sistemas de Respaldo',
    description:
      'Instalación y mantenimiento preventivo de sistemas de energía ininterrumpida (UPS) y bancos de baterías corporativos.',
    icon: Zap,
  },
  {
    title: 'Paneles Solares',
    description:
      'Suministro de paneles fotovoltaicos de todas las capacidades y marcas líderes, diseñados para máxima captura energética.',
    icon: Sun,
  },
  {
    title: 'Iluminación DC',
    description:
      'Sistemas de iluminación eficientes alimentados por corriente continua, ideales para proyectos sostenibles y remotos.',
    icon: Lightbulb,
  },
  {
    title: 'Bombeo de Agua DC',
    description:
      'Soluciones de bombeo solar para agricultura e industria, optimizando el uso de recursos hídricos con energía limpia.',
    icon: Droplet,
  },
  {
    title: 'Sistemas Respaldo 1K-8K',
    description:
      'Configuración de sistemas de respaldo DC de alta capacidad (1K a 8K) para infraestructuras críticas y telecomunicaciones.',
    icon: Gauge,
  },
];

// Métricas de impacto ambiental (impactantes para el medio ambiente).
export const ENERGIA_IMPACT = [
  { icon: Leaf, value: '−2.5', unit: 'Ton CO₂', label: 'Reducidas al año' },
  { icon: TreePine, value: '+120', unit: 'Árboles', label: 'Equivalente plantado' },
  { icon: Sun, value: '100%', unit: 'Limpia', label: 'Energía renovable' },
  { icon: Wind, value: '24/7', unit: 'Autonomía', label: 'Energía continua' },
];
