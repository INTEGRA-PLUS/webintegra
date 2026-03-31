import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    municipio: '',
    mensaje: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.nombre.trim()) {
      setError('El nombre es requerido');
      return false;
    }
    if (!formData.telefono.trim()) {
      setError('El teléfono es requerido');
      return false;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('El correo es requerido y debe ser válido');
      return false;
    }
    if (!formData.municipio.trim()) {
      setError('El barrio o municipio es requerido');
      return false;
    }
    if (!formData.mensaje.trim()) {
      setError('El mensaje es requerido');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Simular envío al servidor
      // En un proyecto real, aquí harías una llamada a tu API de Laravel
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Resetear formulario
      setFormData({
        nombre: '',
        telefono: '',
        email: '',
        municipio: '',
        mensaje: '',
      });

      setSubmitted(true);

      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('Error al enviar el formulario. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-16 md:py-24 px-4 md:px-8 bg-tevesat-tertiary-dark relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tevesat-primary/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Title & Info */}
          <div className="lg:w-2/5 text-center lg:text-left">
            <div className="inline-block bg-tevesat-primary/10 px-4 py-1 rounded-full border border-tevesat-primary/20 mb-6 font-black uppercase text-xs tracking-widest text-tevesat-primary">
              Contacto Directo
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tighter italic">
              ¿LISTO PARA <br />
              <span className="text-tevesat-primary">CONECTARTE?</span>
            </h2>
            <p className="text-white/60 text-lg font-medium max-w-md mx-auto lg:mx-0 border-l-4 border-tevesat-primary/50 pl-6 italic">
              Déjanos tus datos y un experto te llamará en menos de <span className="text-tevesat-primary font-black">10 minutos</span> para darte la mejor oferta.
            </p>
          </div>

          {/* Right Side: Compressed Form */}
          <div className="lg:w-3/5 w-full">
            <div className="bg-tevesat-secondary/40 backdrop-blur-xl rounded-[3rem] shadow-2xl border border-white/5 p-8 md:p-10 relative overflow-hidden">
              {/* Form Accent */}
              <div className="absolute top-0 left-0 w-2 h-full bg-tevesat-primary"></div>

              {submitted ? (
                <div className="py-12 text-center animate-fadeIn">
                  <div className="w-20 h-20 bg-tevesat-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-tevesat-primary" size={40} />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">¡LISTO!</h3>
                  <p className="text-white/40 font-medium">Pronto un asesor te contactará.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded-lg text-sm font-bold animate-shake">
                      ⚠️ {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Nombre</label>
                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-tevesat-primary/30 focus:border-tevesat-primary text-white font-bold transition-all text-sm placeholder-white/20"
                        placeholder="Alejandro R."
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Teléfono</label>
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-tevesat-primary/30 focus:border-tevesat-primary text-white font-bold transition-all text-sm placeholder-white/20"
                        placeholder="300..."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-tevesat-primary/30 focus:border-tevesat-primary text-white font-bold transition-all text-sm placeholder-white/20"
                        placeholder="email@tevesat.co"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Municipio</label>
                      <input
                        type="text"
                        name="municipio"
                        value={formData.municipio}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-tevesat-primary/30 focus:border-tevesat-primary text-white font-bold transition-all text-sm placeholder-white/20"
                        placeholder="Antioquia"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Mensaje</label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows="2"
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-tevesat-primary/30 focus:border-tevesat-primary text-white font-bold transition-all text-sm resize-none placeholder-white/20"
                      placeholder="Me interesan los 1000 Megas..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-tevesat-primary text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-tevesat-secondary transition-all duration-300 shadow-xl shadow-tevesat-primary/20 disabled:opacity-50"
                  >
                    {loading ? 'ENVIANDO...' : 'SOLICITAR ASESORÍA'}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake { animation: shake 0.2s ease-in-out 0s 2; }
      `}</style>
    </section>
  );
}
