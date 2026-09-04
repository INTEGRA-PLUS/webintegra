import React, { useState } from 'react';
import { MessageSquareWarning, FileText, AlertCircle, Lightbulb, CheckCircle, Send } from 'lucide-react';

/**
 * PqrsForm - Formulario interactivo de PQRS (Peticiones, Quejas, Reclamos y
 * Sugerencias). Validación en cliente y estado de éxito (envío simulado).
 */

const TYPES = [
  { value: 'peticion', label: 'Petición', icon: FileText },
  { value: 'queja', label: 'Queja', icon: MessageSquareWarning },
  { value: 'reclamo', label: 'Reclamo', icon: AlertCircle },
  { value: 'sugerencia', label: 'Sugerencia', icon: Lightbulb },
];

export default function PqrsForm() {
  const [form, setForm] = useState({
    tipo: 'peticion',
    nombre: '',
    documento: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.nombre.trim()) return 'El nombre es requerido';
    if (!form.documento.trim()) return 'El número de documento es requerido';
    if (!form.email.trim() || !form.email.includes('@')) return 'Ingresa un correo válido';
    if (!form.telefono.trim()) return 'El teléfono es requerido';
    if (!form.asunto.trim()) return 'El asunto es requerido';
    if (!form.mensaje.trim()) return 'Cuéntanos tu solicitud en el mensaje';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setError('');
    setLoading(true);
    try {
      // Envío simulado (conectar a backend cuando esté disponible).
      await new Promise((r) => setTimeout(r, 1000));
      setSubmitted(true);
    } catch {
      setError('No pudimos enviar tu solicitud. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-bold text-tevesat-tertiary-dark placeholder-gray-400 transition-all focus:border-tevesat-primary focus:outline-none focus:ring-2 focus:ring-tevesat-primary/20';
  const labelClass = 'mb-1.5 block text-[10px] font-black uppercase tracking-widest text-gray-400';

  if (submitted) {
    return (
      <div className="rounded-[2.5rem] border border-gray-100 bg-white p-12 text-center shadow-[0_40px_90px_-30px_rgba(0,0,0,0.25)]">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-tevesat-primary/10">
          <CheckCircle size={40} className="text-tevesat-primary-deep" />
        </div>
        <h3 className="text-2xl font-black uppercase tracking-tight text-tevesat-tertiary-dark">
          ¡Solicitud recibida!
        </h3>
        <p className="mx-auto mt-3 max-w-md font-medium text-gray-500">
          Hemos registrado tu {TYPES.find((t) => t.value === form.tipo)?.label.toLowerCase()}. Te
          responderemos a tu correo dentro de los términos de ley.
        </p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white p-8 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.25)] md:p-10">
      <div className="absolute left-0 top-0 h-full w-2 bg-tevesat-primary" />

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="rounded-xl border-l-4 border-tevesat-primary bg-tevesat-primary/5 px-4 py-3 text-sm font-bold text-tevesat-primary-deep">
            ⚠️ {error}
          </div>
        )}

        {/* Tipo de solicitud */}
        <div>
          <label className={labelClass}>Tipo de solicitud</label>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {TYPES.map((t) => {
              const active = form.tipo === t.value;
              return (
                <button
                  key={t.value}
                  type="button"
                  onClick={() => setForm((prev) => ({ ...prev, tipo: t.value }))}
                  className={`flex flex-col items-center gap-2 rounded-2xl border-2 p-4 transition-all duration-300 ${
                    active
                      ? 'border-tevesat-primary bg-tevesat-primary/5'
                      : 'border-gray-100 bg-white hover:border-tevesat-primary/40'
                  }`}
                >
                  <t.icon
                    size={22}
                    className={active ? 'text-tevesat-primary-deep' : 'text-gray-400'}
                    strokeWidth={2.4}
                  />
                  <span
                    className={`text-xs font-black uppercase tracking-wider ${
                      active ? 'text-tevesat-primary-deep' : 'text-gray-500'
                    }`}
                  >
                    {t.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className={labelClass}>Nombre completo</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Alejandro Rodríguez"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Número de documento</label>
            <input
              type="text"
              name="documento"
              value={form.documento}
              onChange={handleChange}
              placeholder="C.C. 1234567890"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className={labelClass}>Correo electrónico</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="correo@ejemplo.com"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Teléfono</label>
            <input
              type="tel"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              placeholder="300 000 0000"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>Asunto</label>
          <input
            type="text"
            name="asunto"
            value={form.asunto}
            onChange={handleChange}
            placeholder="Resumen breve de tu solicitud"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Mensaje</label>
          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            rows="4"
            placeholder="Describe con detalle tu petición, queja, reclamo o sugerencia..."
            className={`${inputClass} resize-none`}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-tevesat-primary py-5 text-xs font-black uppercase tracking-[0.2em] text-tevesat-tertiary-dark shadow-xl shadow-tevesat-primary/30 transition-all duration-300 hover:bg-tevesat-primary-light disabled:opacity-50"
        >
          {loading ? 'Enviando...' : 'Enviar solicitud'}
          {!loading && <Send size={16} />}
        </button>

        <p className="text-center text-[11px] font-medium text-gray-400">
          Responderemos tu solicitud dentro de los términos establecidos por la ley.
        </p>
      </form>
    </div>
  );
}
