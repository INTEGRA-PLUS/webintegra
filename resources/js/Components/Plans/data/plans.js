/**
 * Datos de planes - fuente única reutilizada por la sección destacada del Home
 * (FeaturedPlans) y por la página completa de planes (/planes).
 *
 * Cada plan: { name, tagline, speed, unit, price, period, popular, features[], tech }
 * Los planes hogar además incluyen: { tv, addons[] } (TV incluida y servicios como WIN+ / Disney+).
 */

const WHATSAPP_URL = 'https://wa.me/573334010174';
export { WHATSAPP_URL };

const PAYMENT_URL = 'https://pagos.onepay.la/reintechsas';
export { PAYMENT_URL };

// Planes hogar completos (6, según portafolio oficial).
const HOGAR_PLANS = [
  {
    name: 'Plan Hogar',
    tagline: 'Ideal para parejas y hogares pequeños',
    speed: '100',
    unit: 'MEGAS',
    tv: 'TV Básico',
    price: '60.000',
    period: '/mes',
    popular: false,
    tech: 'Fibra Óptica',
    addons: [],
    features: [
      '58 canales de TV',
      '5 perfiles',
      'Red WiFi incluida',
      'Soporte 24/7',
    ],
  },
  {
    name: 'Plan Familiar',
    tagline: 'Ideal para familias conectadas',
    speed: '200',
    unit: 'MEGAS',
    tv: 'TV Básico',
    price: '80.000',
    period: '/mes',
    popular: true,
    tech: 'Fibra Óptica',
    addons: [],
    features: [
      '58 canales de TV',
      '5 perfiles',
      'Red WiFi incluida',
      'Soporte 24/7',
    ],
  },
  {
    name: 'Plan Deportivo',
    tagline: 'Ideal para amantes del deporte',
    speed: '300',
    unit: 'MEGAS',
    tv: 'TV Flex',
    price: '100.000',
    period: '/mes',
    popular: false,
    tech: 'Fibra Óptica',
    addons: ['WIN+'],
    features: [
      '47 canales de TV',
      '5 perfiles',
      'WIN+ incluido',
      'Soporte 24/7',
    ],
  },
  {
    name: 'Plan Entretenimiento',
    tagline: 'Ideal para disfrutar en familia',
    speed: '400',
    unit: 'MEGAS',
    tv: 'TV Básico',
    price: '130.000',
    period: '/mes',
    popular: false,
    tech: 'Fibra Óptica',
    addons: ['WIN+', 'Disney+'],
    features: [
      '58 canales de TV',
      '5 perfiles',
      'WIN+ incluido',
      'Disney+ incluido',
    ],
  },
  {
    name: 'Plan Gamer',
    tagline: 'Ideal para gaming y streaming',
    speed: '500',
    unit: 'MEGAS',
    tv: 'TV Básico+',
    price: '180.000',
    period: '/mes',
    popular: false,
    tech: 'Fibra Óptica',
    addons: ['WIN+'],
    features: [
      '84 canales de TV',
      '5 perfiles',
      'WIN+ incluido',
      'Soporte 24/7',
    ],
  },
  {
    name: 'Plan Ultra',
    tagline: 'Máxima velocidad y entretenimiento',
    speed: '700',
    unit: 'MEGAS',
    tv: 'TV Básico+',
    price: '230.000',
    period: '/mes',
    popular: false,
    tech: 'Fibra Óptica',
    addons: ['WIN+', 'Disney+'],
    features: [
      '84 canales de TV',
      '5 perfiles',
      'WIN+ incluido',
      'Disney+ incluido',
    ],
  },
];

// 3 planes destacados que se muestran en el Home ("Planes diseñados para ti").
export const HOME_PLANS = ['Plan Hogar', 'Plan Familiar', 'Plan Ultra'].map(
  (name) => HOGAR_PLANS.find((plan) => plan.name === name)
);

// Planes completos por categoría para la página /planes.
export const PLAN_GROUPS = {
  hogar: {
    label: 'Hogar',
    plans: HOGAR_PLANS,
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
