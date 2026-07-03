/**
 * Datos de planes - fuente única reutilizada por la sección destacada del Home
 * (FeaturedPlans) y por la página completa de planes (/planes).
 *
 * Cada plan: { name, tagline, speed, unit, price, period, popular, features[], tech }
 */

const WHATSAPP_URL = 'https://wa.me/573214486466';
export { WHATSAPP_URL };

// 3 planes destacados que se muestran en el Home ("Planes diseñados para ti").
export const HOME_PLANS = [
  {
    name: 'Plan Esencial',
    tagline: 'Ideal para empezar',
    speed: '200',
    unit: 'MEGAS',
    price: '59.900',
    period: '/mes',
    popular: false,
    tech: 'Fibra Óptica',
    features: [
      'Fibra óptica 100%',
      'Red WiFi incluida',
      'Instalación sin costo',
      'Soporte 24/7',
    ],
  },
  {
    name: 'Plan Familiar',
    tagline: 'El preferido de los hogares',
    speed: '400',
    unit: 'MEGAS',
    price: '79.900',
    period: '/mes',
    popular: true,
    tech: 'Fibra Óptica',
    features: [
      'Todo lo del Esencial',
      'TV con DGO incluida',
      'Streaming 4K sin cortes',
      'Router de alta potencia',
    ],
  },
  {
    name: 'Plan Premium',
    tagline: 'Máximo rendimiento',
    speed: '600',
    unit: 'MEGAS',
    price: '99.900',
    period: '/mes',
    popular: false,
    tech: 'Fibra Óptica',
    features: [
      'Todo lo del Familiar',
      'Velocidad para gaming',
      'Múltiples dispositivos',
      'Prioridad de soporte',
    ],
  },
];

// Planes completos por categoría para la página /planes.
export const PLAN_GROUPS = {
  hogar: {
    label: 'Hogar',
    plans: [
      ...HOME_PLANS,
      {
        name: 'Plan Ultra',
        tagline: 'Para el hogar más exigente',
        speed: '900',
        unit: 'MEGAS',
        price: '129.900',
        period: '/mes',
        popular: false,
        tech: 'Fibra Óptica',
        features: [
          'Todo lo del Premium',
          'Hogar inteligente total',
          'Velocidad simétrica',
          'Atención preferencial',
        ],
      },
    ],
  },
  empresa: {
    label: 'Empresas',
    plans: [
      {
        name: 'Plan Pyme',
        tagline: 'Para pequeños negocios',
        speed: '300',
        unit: 'MEGAS',
        price: '149.900',
        period: '/mes',
        popular: false,
        tech: 'Fibra Simétrica',
        features: [
          'Velocidad simétrica',
          'Soporte empresarial',
          'Instalación profesional',
          'Disponibilidad 99.9%',
        ],
      },
      {
        name: 'Plan Corporativo',
        tagline: 'El más elegido por empresas',
        speed: '500',
        unit: 'MEGAS',
        price: '229.900',
        period: '/mes',
        popular: true,
        tech: 'Fibra Simétrica',
        features: [
          'Velocidad simétrica',
          'IP fija incluida',
          'Prioridad de red',
          'Soporte preferencial 24/7',
        ],
      },
      {
        name: 'Plan Dedicado',
        tagline: 'Canal dedicado de alta capacidad',
        speed: '1000',
        unit: 'MEGAS',
        price: '399.900',
        period: '/mes',
        popular: false,
        tech: 'Canal Dedicado',
        features: [
          'Canal 1:1 garantizado',
          'SLA empresarial',
          'IP fija y monitoreo',
          'Ingeniero asignado',
        ],
      },
    ],
  },
};
