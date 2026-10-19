import React from 'react';
import { Head } from '@inertiajs/react';
import { MessageSquareWarning, Clock, ShieldCheck } from 'lucide-react';
import Navbar from '../Components/Home/Navbar';
import Footer from '../Components/Home/Footer';
import PqrsForm from '../Components/Pqrs/PqrsForm';

/**
 * PQRS Page - Peticiones, Quejas, Reclamos y Sugerencias (/pqrs).
 */
export default function Pqrs() {
  const notes = [
    { icon: Clock, title: 'Respuesta oportuna', text: 'Atendemos tu solicitud dentro de los términos de ley.' },
    { icon: ShieldCheck, title: 'Datos protegidos', text: 'Tu información se trata con total confidencialidad.' },
    { icon: MessageSquareWarning, title: 'Seguimiento', text: 'Te notificamos por correo el estado de tu caso.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head title="PQRS" />
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
            <MessageSquareWarning size={16} className="text-tevesat-primary-deep" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-tevesat-primary-deep">
              Atención al Cliente
            </span>
          </div>
          <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-tevesat-tertiary-dark md:text-6xl">
            <span className="italic text-tevesat-primary-deep">PQRS</span>
          </h1>
          <p className="mx-auto mt-3 text-sm font-black uppercase tracking-[0.2em] text-gray-400">
            Peticiones · Quejas · Reclamos · Sugerencias
          </p>
          <p className="mx-auto mt-5 max-w-xl text-lg font-medium leading-relaxed text-gray-500">
            Tu opinión nos ayuda a mejorar. Cuéntanos tu solicitud y la atenderemos con la
            atención que mereces.
          </p>
        </div>
      </section>

      {/* Formulario + notas */}
      <section className="bg-white px-4 pb-24 md:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Notas laterales */}
          <div className="space-y-6 lg:pt-4">
            {notes.map((note) => (
              <div
                key={note.title}
                className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-tevesat-primary/5 text-tevesat-primary-deep">
                  <note.icon size={20} strokeWidth={2.4} />
                </div>
                <div>
                  <h3 className="text-sm font-black text-tevesat-tertiary-dark">{note.title}</h3>
                  <p className="mt-0.5 text-xs font-medium text-gray-500">{note.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Formulario */}
          <div className="lg:col-span-2">
            <PqrsForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
