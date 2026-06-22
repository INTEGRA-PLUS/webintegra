import { Building2, Radio } from 'lucide-react';
import { STEPS } from './quizSteps';

/**
 * Calcula la recomendación final a partir de las respuestas.
 *
 * - La UBICACIÓN define la tecnología: Fibra Óptica (FTTH) en casco urbano,
 *   Radio Enlace inalámbrico en zona rural (con techos de velocidad distintos).
 * - El resto de preguntas suman un puntaje (4 a 16) que ubica al usuario en
 *   uno de los cuatro niveles de plan.
 *
 * @param {Object} answers - mapa { [stepId]: optionIndex }
 * @returns {Object} recomendación con velocidad, plan, tecnología y beneficios.
 */
export function buildRecommendation(answers) {
  const locationStep = STEPS.find((s) => s.id === 'ubicacion');
  const locIdx = answers['ubicacion'];
  const location =
    locIdx != null ? locationStep.options[locIdx].value : 'urbano';

  // Suma de pesos de las preguntas de necesidad (la ubicación pesa 0).
  const score = STEPS.reduce((acc, step) => {
    if (step.id === 'ubicacion') return acc;
    const sel = answers[step.id];
    if (sel == null) return acc;
    return acc + step.options[sel].weight;
  }, 0);

  return location === 'rural' ? buildRural(score) : buildUrban(score);
}

function tierIndex(score) {
  if (score <= 6) return 0;
  if (score <= 10) return 1;
  if (score <= 13) return 2;
  return 3;
}

function buildUrban(score) {
  const tiers = [
    {
      speed: 200,
      planName: 'Plan Esencial Fibra',
      tagline: 'Perfecto para navegar, redes y streaming sin complicaciones.',
      perks: ['Ideal 1 a 3 personas', 'Streaming HD fluido', 'Fibra directa a casa'],
    },
    {
      speed: 400,
      planName: 'Plan Avanzado Fibra',
      tagline: 'El equilibrio ideal para familias conectadas y teletrabajo.',
      perks: ['Hasta 10 dispositivos', 'Streaming 4K sin cortes', 'Videollamadas en alta calidad'],
    },
    {
      speed: 600,
      planName: 'Plan Premium Fibra',
      tagline: 'Potencia de sobra para gaming, 4K y muchos dispositivos a la vez.',
      perks: ['Hogar inteligente', 'Gaming sin lag', 'Carga y descarga veloz'],
    },
    {
      speed: 900,
      planName: 'Plan Empresarial Fibra',
      tagline: 'Máxima velocidad y estabilidad para negocios exigentes.',
      perks: ['Conexión corporativa', 'Prioridad de red', 'Soporte preferencial 24/7'],
    },
  ];

  return {
    ...tiers[tierIndex(score)],
    technology: 'Fibra Óptica (FTTH)',
    technologyIcon: Building2,
  };
}

function buildRural(score) {
  const tiers = [
    {
      speed: 30,
      planName: 'Plan Rural Básico',
      tagline: 'Conexión estable por radio enlace para navegar y comunicarte.',
      perks: ['Cobertura donde no llega la fibra', 'Navegación y redes', 'Instalación especializada'],
    },
    {
      speed: 60,
      planName: 'Plan Rural Plus',
      tagline: 'Más potencia para varias personas y streaming en el campo.',
      perks: ['Familia conectada', 'Streaming HD', 'Antena de alto rendimiento'],
    },
    {
      speed: 120,
      planName: 'Plan Rural Pro',
      tagline: 'Radio enlace de alta capacidad para teletrabajo y multitarea.',
      perks: ['Teletrabajo estable', 'Múltiples dispositivos', 'Enlace de máxima potencia'],
    },
    {
      speed: 200,
      planName: 'Plan Rural Max',
      tagline: 'El máximo rendimiento inalámbrico para fincas y negocios rurales.',
      perks: ['Negocio rural', 'Prioridad de enlace', 'Soporte preferencial 24/7'],
    },
  ];

  return {
    ...tiers[tierIndex(score)],
    technology: 'Radio Enlace Inalámbrico',
    technologyIcon: Radio,
  };
}
