import {
  MonitorPlay,
  Smartphone,
  Clapperboard,
  Trophy,
  Cloud,
  Languages,
  Film,
  Baby,
  Newspaper,
  Music,
  Globe,
  Tv,
  Sparkles,
  Flag,
  Church,
  Palette,
} from 'lucide-react';

export const WHATSAPP_URL = 'https://wa.me/573142497234';

/**
 * Datos de la página de Televisión (Televisión DGO).
 * Centralizados para reutilizar entre los componentes de la página /television.
 */

// Planes de televisión.
export const TV_PLANS = [
  {
    name: 'TV Básico',
    tagline: 'Para empezar a disfrutar',
    channels: '80',
    price: '29.900',
    period: '/mes',
    popular: false,
    features: [
      'Más de 80 canales',
      'Calidad SD y HD',
      'App DGO incluida',
      'Guía de programación',
    ],
  },
  {
    name: 'TV Plus',
    tagline: 'El favorito de las familias',
    channels: '130',
    price: '44.900',
    period: '/mes',
    popular: true,
    features: [
      'Más de 130 canales',
      'Canales HD premium',
      '2 pantallas simultáneas',
      '+10.000 contenidos On-Demand',
    ],
  },
  {
    name: 'TV Premium',
    tagline: 'La experiencia completa',
    channels: '180',
    price: '69.900',
    period: '/mes',
    popular: false,
    features: [
      'Más de 180 canales',
      'Full HD y 4K',
      '4 pantallas simultáneas',
      'Grabación en la nube',
    ],
  },
];

/**
 * Información de la alianza que provee el servicio de TV (IPTV).
 */
export const TV_ALLIANCE = {
  eyebrow: 'Alianza NUPLIN & TVYMAS',
  title: 'Televisión Digital IPTV',
  description:
    'Gracias a la integración con NUPLIN a través de TVYMAS, ofrecemos un servicio de televisión interactivo de alta calidad para que disfrutes de tus canales favoritos desde cualquier dispositivo.',
};

/**
 * Paquetes de televisión IPTV con selector interactivo de WIN SPORTS.
 *
 * Cada paquete tiene `options` (adicionales de Win Sports). Al seleccionar una
 * opción, la tarjeta muestra dinámicamente su `total`. La primera opción es la
 * predeterminada (sin adicionales / valor base).
 */
export const TV_PACKAGES = [
  {
    id: 'flex',
    name: 'FLEX',
    title: 'Paquete FLEX',
    channels: '47 canales de televisión abierta y por cable',
    basePrice: '12.000',
    description:
      'Incluye canales nacionales como Caracol, RCN, Canal 1, Señal Colombia, canales internacionales y regionales para toda la familia.',
    addonQuestion: '¿Deseas agregar WIN SPORTS?',
    recommended: false,
    options: [
      { label: 'Sin Adicionales', note: 'Básico', total: '12.000' },
      { label: 'Agregar WIN SPORTS (Normal)', note: 'Costo Total', total: '18.000' },
      { label: 'Agregar WIN SPORTS+ (Premium)', note: 'Costo Total', total: '43.000' },
    ],
  },
  {
    id: 'basico',
    name: 'BÁSICO',
    title: 'Paquete BÁSICO',
    channels: '58 canales con programación completa',
    basePrice: '29.000',
    description:
      'Incluye todo el plan FLEX + AMC, Europa-Europa, Film & Arts, El Gourmet, Más Chic, Mi Gente TV, Star TV, Caracol OTT, Clan, 24 Horas y Win Sports normal.',
    addonQuestion: '¿Deseas agregar WIN SPORTS+?',
    recommended: false,
    options: [
      { label: 'Con Win Sports Incluido', note: 'Básico', total: '29.000' },
      { label: 'Agregar WIN SPORTS+ (Premium)', note: 'Costo Total', total: '57.000' },
    ],
  },
  {
    id: 'basico-plus',
    name: 'BÁSICO+',
    title: 'Paquete BÁSICO+',
    channels: '83 canales premium deportivos y de cine',
    basePrice: '44.300',
    description:
      'Incluye absolutamente todo el plan BÁSICO +7 canales ESPN (1 al 7), Disney Channel, Disney Junior, Baby TV, FX, Star Channel, Golden, Golden Edge, Cinecanal, National Geographic, Universo, Telenovelas y más.',
    addonQuestion: '¿Deseas agregar WIN SPORTS+?',
    recommended: true,
    options: [
      { label: 'Básico+ Completo Standard', note: 'Valor', total: '44.300' },
      { label: 'Agregar WIN SPORTS+ (Premium)', note: 'Costo Total', total: '73.500' },
    ],
  },
];

// Beneficios / características destacadas.
export const TV_FEATURES = [
  {
    icon: Smartphone,
    title: 'App DGO',
    text: 'Lleva tu TV en el celular, tablet o computador, donde quieras.',
  },
  {
    icon: MonitorPlay,
    title: 'Multipantalla',
    text: 'Ve contenidos en varios dispositivos al mismo tiempo.',
  },
  {
    icon: Clapperboard,
    title: 'On-Demand',
    text: 'Más de 10.000 títulos entre películas y series a tu ritmo.',
  },
  {
    icon: Trophy,
    title: 'Deportes en vivo',
    text: 'No te pierdas ni un partido con los mejores canales deportivos.',
  },
  {
    icon: Cloud,
    title: 'Grabación en la nube',
    text: 'Graba tus programas favoritos y míralos cuando quieras.',
  },
  {
    icon: Languages,
    title: 'Control parental',
    text: 'Decide qué pueden ver los más pequeños de la casa.',
  },
];

/**
 * Parrilla oficial de canales (80 canales).
 * Cada canal: { name, category }
 * La `category` coincide con las etiquetas de CHANNEL_CATEGORIES para poder
 * filtrar desde el buscador interactivo.
 */
export const CHANNELS = [
  { name: '¡Hola! TV', category: 'Variedades' },
  { name: '24 Horas', category: 'Noticias' },
  { name: 'A3 Series', category: 'Cine & Series' },
  { name: 'AMC', category: 'Cine & Series' },
  { name: 'Baby TV', category: 'Infantil' },
  { name: 'Banda MAX', category: 'Música' },
  { name: 'Bit Me', category: 'Variedades' },
  { name: 'Canal 1', category: 'Nacionales' },
  { name: 'Canal 13', category: 'Nacionales' },
  { name: 'Canal Capital', category: 'Nacionales' },
  { name: 'Canal de las Estrellas', category: 'Cine & Series' },
  { name: 'Canal TRO', category: 'Nacionales' },
  { name: 'Caracol', category: 'Nacionales' },
  { name: 'Caracol OTT', category: 'Nacionales' },
  { name: 'Cine Latino', category: 'Cine & Series' },
  { name: 'Cinecanal', category: 'Cine & Series' },
  { name: 'City TV', category: 'Nacionales' },
  { name: 'Clan', category: 'Infantil' },
  { name: 'Cristovisión', category: 'Religión' },
  { name: 'Curiosity', category: 'Documentales' },
  { name: 'De Película', category: 'Cine & Series' },
  { name: 'DHE', category: 'Cine & Series' },
  { name: 'Disney Channel', category: 'Infantil' },
  { name: 'Disney Junior', category: 'Infantil' },
  { name: 'Distrito Comedia', category: 'Cine & Series' },
  { name: 'DW', category: 'Noticias' },
  { name: 'El Gourmet', category: 'Variedades' },
  { name: 'El Tiempo', category: 'Noticias' },
  { name: 'ESPN', category: 'Deportes' },
  { name: 'ESPN 2', category: 'Deportes' },
  { name: 'ESPN 3', category: 'Deportes' },
  { name: 'ESPN 4', category: 'Deportes' },
  { name: 'ESPN 5', category: 'Deportes' },
  { name: 'ESPN 6', category: 'Deportes' },
  { name: 'ESPN 7', category: 'Deportes' },
  { name: 'Euronews', category: 'Noticias' },
  { name: 'Europa-Europa', category: 'Cine & Series' },
  { name: 'EWTN', category: 'Religión' },
  { name: 'Film & Arts', category: 'Culturales' },
  { name: 'France 24', category: 'Noticias' },
  { name: 'FX', category: 'Cine & Series' },
  { name: 'Golden', category: 'Cine & Series' },
  { name: 'Golden Edge', category: 'Cine & Series' },
  { name: 'Hogar TV', category: 'Variedades' },
  { name: 'Kanal D', category: 'Variedades' },
  { name: 'Love Nature', category: 'Documentales' },
  { name: 'Más Chic', category: 'Variedades' },
  { name: 'Mi Gente TV', category: 'Música' },
  { name: 'Multicinema', category: 'Cine & Series' },
  { name: 'Multipremier', category: 'Cine & Series' },
  { name: 'National Geographic', category: 'Documentales' },
  { name: 'Novelísima', category: 'Variedades' },
  { name: 'NTN24', category: 'Noticias' },
  { name: 'Pasiones', category: 'Variedades' },
  { name: 'Plim Plim', category: 'Infantil' },
  { name: 'Ranchenato', category: 'Música' },
  { name: 'RCN', category: 'Nacionales' },
  { name: 'RCN Novelas', category: 'Variedades' },
  { name: 'Rumba TV', category: 'Música' },
  { name: 'Señal Colombia', category: 'Nacionales' },
  { name: 'Star Channel', category: 'Cine & Series' },
  { name: 'Star TV', category: 'Variedades' },
  { name: 'Sun Channel', category: 'Documentales' },
  { name: 'Tele Hit', category: 'Música' },
  { name: 'Teleantioquia', category: 'Nacionales' },
  { name: 'Telecafé', category: 'Nacionales' },
  { name: 'Telecaribe', category: 'Nacionales' },
  { name: 'Teleislas', category: 'Nacionales' },
  { name: 'Telemedellín', category: 'Nacionales' },
  { name: 'Telenostalgia', category: 'Música' },
  { name: 'Telenovelas', category: 'Variedades' },
  { name: 'Telepacífico', category: 'Nacionales' },
  { name: 'TeleVID', category: 'Religión' },
  { name: 'TV Agro', category: 'Documentales' },
  { name: 'TVE', category: 'Nacionales' },
  { name: 'Univision', category: 'Nacionales' },
  { name: 'Venevisión', category: 'Variedades' },
  { name: 'Veplus TV', category: 'Variedades' },
  { name: 'Win Sports', category: 'Deportes' },
  { name: 'Zoom', category: 'Culturales' },
];

// Categorías de canales (coinciden con las categorías de CHANNELS).
export const CHANNEL_CATEGORIES = [
  { icon: Flag, label: 'Nacionales' },
  { icon: Film, label: 'Cine & Series' },
  { icon: Sparkles, label: 'Variedades' },
  { icon: Newspaper, label: 'Noticias' },
  { icon: Trophy, label: 'Deportes' },
  { icon: Baby, label: 'Infantil' },
  { icon: Music, label: 'Música' },
  { icon: Globe, label: 'Documentales' },
  { icon: Church, label: 'Religión' },
  { icon: Palette, label: 'Culturales' },
];
