import React from 'react';
import { CreditCard, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { PAYMENT_URL } from '../Plans/data/plans';

/**
 * PayBillBanner - Franja destacada de pago de factura en línea en el Home.
 * Lleva al portal de pagos externo (OnePay) en una pestaña nueva.
 */
export default function PayBillBanner() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-tevesat-tertiary-dark px-8 py-10 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.5)] md:px-14">
          {/* Resplandor decorativo */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-tevesat-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-16 h-64 w-64 rounded-full bg-tevesat-primary/20 blur-3xl" />

          <div className="relative flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
            <div className="flex flex-col items-center gap-5 md:flex-row">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-tevesat-primary shadow-xl shadow-tevesat-primary/40">
                <CreditCard size={30} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
                  ¿Ya llegó tu factura?
                </h2>
                <p className="mt-1 text-sm font-medium text-gray-400">
                  Págala en línea en segundos, sin filas y desde cualquier dispositivo.
                </p>
                <div className="mt-3 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-gray-400">
                    <ShieldCheck size={14} className="text-tevesat-primary" /> Pago seguro
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-gray-400">
                    <Zap size={14} className="text-tevesat-primary" /> PSE y tarjetas
                  </span>
                </div>
              </div>
            </div>

            <a
              href={PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-shrink-0 items-center gap-3 rounded-2xl bg-tevesat-primary px-10 py-5 text-xs font-black uppercase tracking-widest text-white shadow-xl shadow-tevesat-primary/40 transition-all duration-300 hover:bg-tevesat-primary-light hover:scale-105"
            >
              Pagar Factura
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
