import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';

/**
 * Faq - Sección de Preguntas Frecuentes con acordeón interactivo.
 * Tema claro/blanco. Datos por defecto pensados para un ISP (internet/TV).
 */

const DEFAULT_FAQS = [
  {
    q: '¿Cómo sé si tengo cobertura en mi zona?',
    a: 'Es muy fácil: déjanos tu dirección en el formulario de cobertura o escríbenos por WhatsApp y verificamos al instante la disponibilidad de fibra óptica o radio enlace en tu sector.',
  },
  {
    q: '¿La instalación tiene algún costo?',
    a: 'No. La instalación y activación de tu servicio es totalmente gratis en las zonas con cobertura. Sin costos ocultos ni sorpresas.',
  },
  {
    q: '¿Cuánto tarda la instalación?',
    a: 'En la mayoría de los casos instalamos en menos de 48 horas hábiles luego de confirmar la cobertura en tu dirección.',
  },
  {
    q: '¿Tienen permanencia o cláusulas?',
    a: 'Nuestros planes son flexibles: puedes cambiar de plan cuando lo necesites contactando a soporte, sin penalidades por permanencia.',
  },
  {
    q: '¿Puedo combinar Internet y Televisión?',
    a: 'Sí. Puedes armar el paquete perfecto sumando Internet de fibra óptica y nuestros planes de Televisión Digital IPTV, y ahorrar al combinarlos.',
  },
  {
    q: '¿Qué pasa si presento una falla en el servicio?',
    a: 'Contamos con soporte humano 24/7. Repórtanos la novedad por WhatsApp o nuestra línea y un técnico te ayudará lo antes posible.',
  },
];

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-black text-tevesat-tertiary-dark">{faq.q}</span>
        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-tevesat-primary/10 text-tevesat-primary">
          {isOpen ? <Minus size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-sm font-medium leading-relaxed text-gray-500 animate-[fadeIn_0.3s_ease]">
          {faq.a}
        </div>
      )}
    </div>
  );
}

export default function Faq({ faqs = DEFAULT_FAQS }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-gray-50 px-4 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-tevesat-primary/5 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Encabezado */}
        <div className="mb-14 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-tevesat-primary/20 bg-white px-5 py-2 shadow-sm">
            <HelpCircle size={16} className="text-tevesat-primary" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-tevesat-primary">
              Preguntas Frecuentes
            </span>
          </div>
          <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-tevesat-tertiary-dark md:text-5xl">
            Resolvemos tus <span className="italic text-tevesat-primary">dudas</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg font-medium leading-relaxed text-gray-500">
            Todo lo que necesitas saber antes de conectarte con nosotros.
          </p>
        </div>

        {/* Acordeón */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FaqItem
              key={faq.q}
              faq={faq}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>

        {/* CTA de ayuda */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-sm font-bold text-gray-500">¿Aún tienes preguntas?</p>
          <a
            href="https://wa.me/573214486466"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-tevesat-primary px-8 py-4 font-black uppercase tracking-widest text-white shadow-xl shadow-tevesat-primary/30 transition-all duration-300 hover:scale-105 hover:bg-tevesat-primary-light active:scale-95"
          >
            <MessageCircle size={20} />
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
