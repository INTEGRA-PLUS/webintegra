import { Infinity as InfinityIcon, Smartphone, BadgeCheck, MessageCircle, KeyRound, Microchip, IdCard } from 'lucide-react';

/**
 * Datos de la página de Telefonía Móvil (/movil).
 * Centralizados para reutilizar entre los componentes de la página.
 */

const WHATSAPP_NUMBER = '573162587976';

// Enlace de WhatsApp con mensaje prellenado para solicitar la portabilidad.
export const PORTABILIDAD_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hola, quiero hacer portabilidad de mi línea móvil con plan de internet ilimitado.'
)}`;

// Plan móvil. `price: null` muestra "Consulta el precio" y lleva a WhatsApp.
export const MOBILE_PLAN = {
  name: 'Móvil Ilimitado',
  tagline: 'Navega sin preocuparte por los datos',
  price: null,
  period: '/mes',
  features: [
    'Internet ilimitado',
    'Conservas tu mismo número',
    'Portabilidad sin costo',
    'Asesoría por WhatsApp',
  ],
};

// Beneficios destacados de pasarse a la línea móvil.
export const MOBILE_BENEFITS = [
  {
    icon: InfinityIcon,
    title: 'Internet ilimitado',
    text: 'Navega, usa redes sociales y ve videos sin estar pendiente de las gigas.',
  },
  {
    icon: Smartphone,
    title: 'Tu mismo número',
    text: 'Con la portabilidad te traes tu número actual; tus contactos no notan el cambio.',
  },
  {
    icon: BadgeCheck,
    title: 'Cambio sin costo',
    text: 'Hacer portabilidad numérica es gratis. Nosotros te acompañamos en todo el proceso.',
  },
];

// Pasos del proceso de portabilidad.
export const PORTABILIDAD_STEPS = [
  {
    icon: MessageCircle,
    title: 'Escríbenos',
    text: 'Contáctanos por WhatsApp con el número que quieres traer y te asesoramos.',
  },
  {
    icon: KeyRound,
    title: 'Confirma con tu NIP',
    text: 'Recibirás un SMS con un código NIP que confirma tu solicitud de portabilidad.',
  },
  {
    icon: Microchip,
    title: 'Activa tu línea',
    text: 'Recibes tu SIM y empiezas a navegar ilimitado conservando tu número.',
  },
];

// Requisitos para solicitar la portabilidad.
export const PORTABILIDAD_REQUISITOS = [
  { icon: IdCard, text: 'Documento de identidad del titular' },
  { icon: Smartphone, text: 'Ser el titular de la línea que vas a traer' },
  { icon: BadgeCheck, text: 'Tener la línea activa' },
];
