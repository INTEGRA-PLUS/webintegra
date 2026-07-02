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
 * Parrilla oficial de canales (81 canales) — Alianza NUPLIN & TVYMAS.
 *
 * Cada canal: { name, slug, category, flex, basico, basicoPlus }
 *  - `slug`        ubica su logo en /images/channels/<slug>.png (con fallback).
 *  - `category`    coincide con las etiquetas del buscador para poder filtrar.
 *  - flex/basico/basicoPlus indican en qué paquete(s) está incluido el canal.
 */
export const CHANNELS = [
  { name: '24 Horas', slug: '24-horas', category: 'Noticias', flex: false, basico: true, basicoPlus: true },
  { name: 'A3 Series', slug: 'a3-series', category: 'Cine & Series', flex: true, basico: true, basicoPlus: true },
  { name: 'AMC', slug: 'amc', category: 'Cine & Series', flex: false, basico: true, basicoPlus: true },
  { name: 'Baby TV', slug: 'baby-tv', category: 'Infantil', flex: false, basico: false, basicoPlus: true },
  { name: 'Banda MAX', slug: 'banda-max', category: 'Música', flex: false, basico: false, basicoPlus: true },
  { name: 'Bit Me', slug: 'bit-me', category: 'Variedades', flex: false, basico: false, basicoPlus: true },
  { name: 'Canal 1', slug: 'canal-1', category: 'Nacionales', flex: true, basico: true, basicoPlus: true },
  { name: 'Canal 13', slug: 'canal-13', category: 'Nacionales', flex: true, basico: true, basicoPlus: true },
  { name: 'Canal Capital', slug: 'canal-capital', category: 'Nacionales', flex: true, basico: true, basicoPlus: true },
  { name: 'Canal TRO', slug: 'canal-tro', category: 'Nacionales', flex: true, basico: true, basicoPlus: true },
  { name: 'Canal de las Estrellas', slug: 'canal-de-las-estrellas', category: 'Cine & Series', flex: false, basico: false, basicoPlus: true },
  { name: 'Caracol OTT', slug: 'caracol-ott', category: 'Nacionales', flex: false, basico: true, basicoPlus: true },
  { name: 'Caracol', slug: 'caracol', category: 'Nacionales', flex: true, basico: true, basicoPlus: true },
  { name: 'Cine Latino', slug: 'cine-latino', category: 'Cine & Series', flex: true, basico: true, basicoPlus: true },
  { name: 'Cinecanal', slug: 'cinecanal', category: 'Cine & Series', flex: false, basico: false, basicoPlus: true },
  { name: 'City TV', slug: 'city-tv', category: 'Nacionales', flex: true, basico: true, basicoPlus: true },
  { name: 'Clan', slug: 'clan', category: 'Infantil', flex: false, basico: true, basicoPlus: true },
  { name: 'Cristovisión', slug: 'cristovision', category: 'Religión', flex: true, basico: true, basicoPlus: true },
  { name: 'Curiosity', slug: 'curiosity', category: 'Documentales', flex: true, basico: true, basicoPlus: true },
  { name: 'DHE', slug: 'dhe', category: 'Cine & Series', flex: true, basico: true, basicoPlus: true },
  { name: 'DW', slug: 'dw', category: 'Noticias', flex: true, basico: true, basicoPlus: true },
  { name: 'De Película', slug: 'de-pelicula', category: 'Cine & Series', flex: false, basico: false, basicoPlus: true },
  { name: 'Disney Channel', slug: 'disney-channel', category: 'Infantil', flex: false, basico: false, basicoPlus: true },
  { name: 'Disney Junior', slug: 'disney-junior', category: 'Infantil', flex: false, basico: false, basicoPlus: true },
  { name: 'Distrito Comedia', slug: 'distrito-comedia', category: 'Cine & Series', flex: false, basico: false, basicoPlus: true },
  { name: 'ESPN 2', slug: 'espn-2', category: 'Deportes', flex: false, basico: false, basicoPlus: true },
  { name: 'ESPN 3', slug: 'espn-3', category: 'Deportes', flex: false, basico: false, basicoPlus: true },
  { name: 'ESPN 4', slug: 'espn-4', category: 'Deportes', flex: false, basico: false, basicoPlus: true },
  { name: 'ESPN 5', slug: 'espn-5', category: 'Deportes', flex: false, basico: false, basicoPlus: true },
  { name: 'ESPN 6', slug: 'espn-6', category: 'Deportes', flex: false, basico: false, basicoPlus: true },
  { name: 'ESPN 7', slug: 'espn-7', category: 'Deportes', flex: false, basico: false, basicoPlus: true },
  { name: 'ESPN', slug: 'espn', category: 'Deportes', flex: false, basico: false, basicoPlus: true },
  { name: 'EWTN', slug: 'ewtn', category: 'Religión', flex: true, basico: true, basicoPlus: true },
  { name: 'El Gourmet', slug: 'el-gourmet', category: 'Variedades', flex: false, basico: true, basicoPlus: true },
  { name: 'El Tiempo', slug: 'el-tiempo', category: 'Noticias', flex: true, basico: true, basicoPlus: true },
  { name: 'Euronews', slug: 'euronews', category: 'Noticias', flex: true, basico: true, basicoPlus: true },
  { name: 'Europa-Europa', slug: 'europa-europa', category: 'Cine & Series', flex: false, basico: true, basicoPlus: true },
  { name: 'FX', slug: 'fx', category: 'Cine & Series', flex: false, basico: false, basicoPlus: true },
  { name: 'Film & Arts', slug: 'film-arts', category: 'Culturales', flex: false, basico: true, basicoPlus: true },
  { name: 'France 24', slug: 'france-24', category: 'Noticias', flex: true, basico: true, basicoPlus: true },
  { name: 'Golden Edge', slug: 'golden-edge', category: 'Cine & Series', flex: false, basico: false, basicoPlus: true },
  { name: 'Golden', slug: 'golden', category: 'Cine & Series', flex: false, basico: false, basicoPlus: true },
  { name: 'Hogar TV', slug: 'hogar-tv', category: 'Variedades', flex: true, basico: true, basicoPlus: true },
  { name: 'Kanal D', slug: 'kanal-d', category: 'Variedades', flex: true, basico: true, basicoPlus: true },
  { name: 'Love Nature', slug: 'love-nature', category: 'Documentales', flex: true, basico: true, basicoPlus: true },
  { name: 'Mi Gente TV', slug: 'mi-gente-tv', category: 'Música', flex: false, basico: true, basicoPlus: true },
  { name: 'Multicinema', slug: 'multicinema', category: 'Cine & Series', flex: true, basico: true, basicoPlus: true },
  { name: 'Multipremier', slug: 'multipremier', category: 'Cine & Series', flex: true, basico: true, basicoPlus: true },
  { name: 'Más Chic', slug: 'mas-chic', category: 'Variedades', flex: false, basico: true, basicoPlus: true },
  { name: 'NTN24', slug: 'ntn24', category: 'Noticias', flex: true, basico: true, basicoPlus: true },
  { name: 'National Geographic', slug: 'national-geographic', category: 'Documentales', flex: false, basico: false, basicoPlus: true },
  { name: 'Novelísima', slug: 'novelisima', category: 'Variedades', flex: true, basico: true, basicoPlus: true },
  { name: 'Pasiones', slug: 'pasiones', category: 'Variedades', flex: true, basico: true, basicoPlus: true },
  { name: 'Plim Plim', slug: 'plim-plim', category: 'Infantil', flex: true, basico: true, basicoPlus: true },
  { name: 'RCN Novelas', slug: 'rcn-novelas', category: 'Variedades', flex: true, basico: true, basicoPlus: true },
  { name: 'RCN', slug: 'rcn', category: 'Nacionales', flex: true, basico: true, basicoPlus: true },
  { name: 'Ranchenato', slug: 'ranchenato', category: 'Música', flex: true, basico: true, basicoPlus: true },
  { name: 'Rumba TV', slug: 'rumba-tv', category: 'Música', flex: true, basico: true, basicoPlus: true },
  { name: 'Señal Colombia', slug: 'senal-colombia', category: 'Nacionales', flex: true, basico: true, basicoPlus: true },
  { name: 'Star Channel', slug: 'star-channel', category: 'Cine & Series', flex: false, basico: false, basicoPlus: true },
  { name: 'Star TV', slug: 'star-tv', category: 'Variedades', flex: false, basico: true, basicoPlus: true },
  { name: 'Sun Channel', slug: 'sun-channel', category: 'Documentales', flex: true, basico: true, basicoPlus: true },
  { name: 'TV Agro', slug: 'tv-agro', category: 'Documentales', flex: true, basico: true, basicoPlus: true },
  { name: 'TVE', slug: 'tve', category: 'Nacionales', flex: false, basico: false, basicoPlus: true },
  { name: 'Tele Hit', slug: 'tele-hit', category: 'Música', flex: false, basico: false, basicoPlus: true },
  { name: 'TeleVID', slug: 'televid', category: 'Religión', flex: true, basico: true, basicoPlus: true },
  { name: 'Teleantioquia', slug: 'teleantioquia', category: 'Nacionales', flex: true, basico: true, basicoPlus: true },
  { name: 'Telecafé', slug: 'telecafe', category: 'Nacionales', flex: true, basico: true, basicoPlus: true },
  { name: 'Telecaribe', slug: 'telecaribe', category: 'Nacionales', flex: true, basico: true, basicoPlus: true },
  { name: 'Teleislas', slug: 'teleislas', category: 'Nacionales', flex: true, basico: true, basicoPlus: true },
  { name: 'Telemedellín', slug: 'telemedellin', category: 'Nacionales', flex: true, basico: true, basicoPlus: true },
  { name: 'Telenostalgia', slug: 'telenostalgia', category: 'Música', flex: true, basico: true, basicoPlus: true },
  { name: 'Telenovelas', slug: 'telenovelas', category: 'Variedades', flex: false, basico: false, basicoPlus: true },
  { name: 'Telepacífico', slug: 'telepacifico', category: 'Nacionales', flex: true, basico: true, basicoPlus: true },
  { name: 'Univision', slug: 'univision', category: 'Nacionales', flex: false, basico: false, basicoPlus: true },
  { name: 'Venevisión', slug: 'venevision', category: 'Variedades', flex: true, basico: true, basicoPlus: true },
  { name: 'Veplus TV', slug: 'veplus-tv', category: 'Variedades', flex: true, basico: true, basicoPlus: true },
  { name: 'WIN+', slug: 'win-plus', category: 'Adicionales', flex: true, basico: true, basicoPlus: true },
  { name: 'Win Sports', slug: 'win-sports', category: 'Deportes', flex: false, basico: true, basicoPlus: true },
  { name: 'Zoom', slug: 'zoom', category: 'Culturales', flex: true, basico: true, basicoPlus: true },
  { name: '¡Hola! TV', slug: 'hola-tv', category: 'Variedades', flex: true, basico: true, basicoPlus: true },
];

// Categorías de canales (coinciden con las categorías de CHANNELS). Usadas por
// el buscador interactivo como filtros rápidos.
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

/**
 * Paquetes del folleto (parrilla oficial). Cada uno filtra los CHANNELS por su
 * bandera y muestra su conteo y color de acento.
 */
export const FLYER_PACKAGES = [
  { title: 'PAQUETE FLEX', flag: 'flex', count: 47, badge: 'text-cyan-400' },
  { title: 'PAQUETE BÁSICO', flag: 'basico', count: 58, badge: 'text-emerald-400' },
  { title: 'PAQUETE BÁSICO +', flag: 'basicoPlus', count: 83, badge: 'text-blue-400', featured: true },
];

/**
 * Agrupación de categorías dentro del folleto. Cada grupo reúne una o varias
 * categorías bajo una etiqueta común (igual que la parrilla oficial de TVYMAS).
 */
export const FLYER_GROUPS = [
  { label: 'Películas y series', match: ['Cine & Series'] },
  { label: 'Infantiles', match: ['Infantil'] },
  { label: 'Deportes', match: ['Deportes'] },
  { label: 'Documental', match: ['Documentales'] },
  { label: 'Nacionales', match: ['Nacionales', 'Culturales'] },
  { label: 'Internacionales', match: ['Noticias'] },
  { label: 'Variedades', match: ['Variedades'] },
  { label: 'Música y Shows', match: ['Música', 'Religión'] },
  { label: 'Adicionales', match: ['Adicionales'] },
];

/**
 * Gradiente de respaldo por categoría para las baldosas de logo cuando el canal
 * no tiene imagen en /images/channels/. Coincide con la parrilla oficial.
 */
export const CATEGORY_GRADIENTS = {
  Deportes: 'from-orange-500 to-red-500',
  'Cine & Series': 'from-purple-600 to-indigo-600',
  Noticias: 'from-blue-600 to-slate-800',
  Infantil: 'from-yellow-400 to-orange-500',
  Religión: 'from-teal-500 to-emerald-600',
  Música: 'from-pink-500 to-purple-500',
  default: 'from-blue-600 to-cyan-600',
};

/**
 * Devuelve los grupos de categorías (con sus canales ordenados) para el paquete
 * indicado por su bandera: 'flex' | 'basico' | 'basicoPlus'.
 */
export function groupChannelsForPackage(flag) {
  const included = CHANNELS.filter((ch) => ch[flag]);
  return FLYER_GROUPS.map((group) => ({
    label: group.label,
    items: included
      .filter((ch) => group.match.includes(ch.category))
      .sort((a, b) => a.name.localeCompare(b.name)),
  })).filter((group) => group.items.length > 0);
}
