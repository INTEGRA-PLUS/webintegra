import React, { useState, useMemo } from 'react';
import AssistantHeader from './AssistantHeader';
import ProgressBar from './ProgressBar';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';
import QuizNav from './QuizNav';
import { STEPS, TOTAL_STEPS } from './data/quizSteps';
import { buildRecommendation } from './data/recommendation';

const WHATSAPP_URL = 'https://wa.me/573142497234';

/**
 * InteractiveAssistant - Asistente interactivo "¿Qué plan necesitas realmente?"
 *
 * Contenedor que maneja el estado del quiz (paso actual, respuestas, fin) y
 * delega la presentación en componentes modulares (Header, ProgressBar,
 * QuizQuestion, QuizResult, QuizNav). La configuración de pasos y la lógica de
 * recomendación viven en ./data para poder modularizar/escalar a futuro.
 *
 * Diseño en modo claro/blanco profesional jugando con el rojo del logo.
 */
export default function InteractiveAssistant() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);

  const progress = finished ? 100 : Math.round((current / TOTAL_STEPS) * 100);

  const recommendation = useMemo(
    () => (finished ? buildRecommendation(answers) : null),
    [finished, answers]
  );

  const handleSelect = (optionIndex) => {
    const step = STEPS[current];
    setAnswers((prev) => ({ ...prev, [step.id]: optionIndex }));

    // Pequeña pausa para que se vea la selección antes de avanzar.
    setTimeout(() => {
      if (current < TOTAL_STEPS - 1) {
        setCurrent((c) => c + 1);
      } else {
        setFinished(true);
      }
    }, 220);
  };

  const handleBack = () => {
    if (finished) {
      setFinished(false);
      return;
    }
    if (current > 0) setCurrent((c) => c - 1);
  };

  const handleReset = () => {
    setAnswers({});
    setCurrent(0);
    setFinished(false);
  };

  const scrollToPlans = (e) => {
    e.preventDefault();
    const plansSection = document.getElementById('planes');
    if (plansSection) plansSection.scrollIntoView({ behavior: 'smooth' });
  };

  const step = STEPS[current];

  return (
    <section className="relative overflow-hidden bg-white py-24 px-4 md:px-8">
      {/* Acentos decorativos suaves */}
      <div className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-tevesat-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-tevesat-primary/5 blur-[120px]" />
      {/* Grid sutil de fondo */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <AssistantHeader />

        {/* Tarjeta principal */}
        <div className="relative rounded-[2.5rem] border border-gray-100 bg-white p-2 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.25)]">
          <div className="rounded-[2rem] bg-gradient-to-b from-gray-50 to-white p-6 md:p-12">
            <ProgressBar
              label={finished ? 'Resultado' : `Pregunta ${current + 1} de ${TOTAL_STEPS}`}
              percent={progress}
            />

            {!finished ? (
              <QuizQuestion
                key={step.id}
                step={step}
                selectedIndex={answers[step.id]}
                onSelect={handleSelect}
              />
            ) : (
              <QuizResult
                recommendation={recommendation}
                onScrollPlans={scrollToPlans}
                whatsappUrl={WHATSAPP_URL}
              />
            )}

            <QuizNav
              onBack={handleBack}
              onReset={handleReset}
              canGoBack={finished || current > 0}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
