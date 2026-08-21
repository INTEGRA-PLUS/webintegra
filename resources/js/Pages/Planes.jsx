import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import { Wifi, ShieldCheck, Headphones, Zap, Plus, Minus } from 'lucide-react';
import Navbar from '../Components/Home/Navbar';
import Footer from '../Components/Home/Footer';
import PlanCard from '../Components/Plans/PlanCard';
import { PLAN_GROUPS, WHATSAPP_URL } from '../Components/Plans/data/plans';

const INCLUDED = [
  { icon: Wifi, title: 'Fibra Óptica', text: 'Conexión 100% fibra hasta tu casa.' },
  { icon: ShieldCheck, title: 'Instalación gratis', text: 'Sin costos ocultos de activación.' },
  { icon: Headphones, title: 'Soporte 24/7', text: 'Atención humana cuando la necesites.' },
  { icon: Zap, title: 'Sin cláusulas', text: 'Permanencia flexible, tú decides.' },
];

const FAQS = [
  {
    q: '¿La instalación tiene algún costo?',
    a: 'No. La instalación y activación de tu servicio de fibra óptica es totalmente gratis en zonas con cobertura.',
  },
  {
    q: '¿Cuánto tarda la instalación?',
    a: 'En la mayoría de los casos instalamos en menos de 48 horas hábiles después de verificar la cobertura en tu dirección.',
  },
  {
    q: '¿Puedo cambiar de plan más adelante?',
    a: 'Claro. Puedes subir o bajar de plan cuando quieras contactando a nuestro equipo de soporte, sin penalidades.',
  },
  {
    q: '¿Qué pasa si no hay fibra en mi zona?',
    a: 'Contamos con planes de radio enlace inalámbrico de alto rendimiento para zonas rurales donde la fibra aún no llega.',
  },
];

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
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

export default function Planes() {
  const [activeTab, setActiveTab] = useState('hogar');
  const [openFaq, setOpenFaq] = useState(0);

  const tabs = Object.keys(PLAN_GROUPS);
  const activePlans = PLAN_GROUPS[activeTab].plans;

  return (
    <div className="min-h-screen bg-white">
      <Head title="Planes" />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-white px-4 pt-40 pb-16 md:px-8">
        <div className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-tevesat-primary/10 blur-[130px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)',
            backgroundSize: '34px 34px',
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-tevesat-primary/20 bg-tevesat-primary/5 px-5 py-2">
            <Zap size={16} className="text-tevesat-primary" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-tevesat-primary">
              Nuestros Planes
            </span>
          </div>
          <h1 className="text-5xl font-black leading-[1.02] tracking-tight text-tevesat-tertiary-dark md:text-7xl">
            Planes diseñados <span className="text-tevesat-primary italic">para ti</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg font-medium leading-relaxed text-gray-500">
            Velocidad de fibra óptica, instalación sin costo y soporte que nunca te deja solo.
            Encuentra el plan perfecto para tu hogar o tu empresa.
          </p>
        </div>
      </section>

      {/* Tabs + grid de planes */}
      <section className="relative bg-white px-4 pb-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Tabs */}
          <div className="mb-14 flex justify-center">
            <div className="inline-flex gap-1 rounded-2xl border border-gray-100 bg-gray-50 p-1.5">
              {tabs.map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveTab(key)}
                  className={`rounded-xl px-8 py-3 text-sm font-black uppercase tracking-widest transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-tevesat-primary text-white shadow-lg shadow-tevesat-primary/30'
                      : 'text-gray-500 hover:text-tevesat-primary'
                  }`}
                >
                  {PLAN_GROUPS[key].label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid: 4 columnas cuando el grupo tiene 4 planes (Empresas), 3 en el resto */}
          <div
            className={`grid grid-cols-1 gap-8 sm:grid-cols-2 lg:items-center ${
              activePlans.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
            }`}
          >
            {activePlans.map((plan) => (
              <PlanCard key={`${activeTab}-${plan.name}`} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Todo incluye */}
      <section className="bg-gray-50 px-4 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-black tracking-tight text-tevesat-tertiary-dark md:text-4xl">
              Todos los planes <span className="text-tevesat-primary italic">incluyen</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {INCLUDED.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-[0_30px_70px_-30px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-tevesat-primary text-white shadow-lg shadow-tevesat-primary/20">
                  <item.icon size={28} strokeWidth={2.4} />
                </div>
                <h3 className="mb-2 text-lg font-black text-tevesat-tertiary-dark">{item.title}</h3>
                <p className="text-sm font-medium text-gray-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-4 py-24 md:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-tevesat-primary">
              Preguntas Frecuentes
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-tevesat-tertiary-dark md:text-4xl">
              Resolvemos tus dudas
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <FaqItem
                key={faq.q}
                faq={faq}
                isOpen={openFaq === idx}
                onToggle={() => setOpenFaq(openFaq === idx ? -1 : idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-white px-4 pb-24 md:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-tevesat-primary to-tevesat-primary-light p-10 text-center shadow-[0_40px_90px_-30px_rgba(236,50,55,0.5)] md:p-16">
            <div className="pointer-events-none absolute -top-1/2 -left-1/2 h-full w-full rounded-full bg-white/10 blur-[100px]" />
            <div className="relative z-10">
              <h2 className="text-3xl font-black leading-tight tracking-tight text-white md:text-4xl">
                ¿No sabes cuál elegir?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg font-medium text-white/90">
                Cuéntanos qué necesitas y un asesor te ayudará a encontrar el plan ideal en minutos.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-10 py-5 font-black uppercase tracking-widest text-tevesat-primary shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Hablar con un asesor
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
