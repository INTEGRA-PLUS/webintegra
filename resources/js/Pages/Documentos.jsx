import React from 'react';
import { Head } from '@inertiajs/react';
import { FileText, Download, ExternalLink, Clock, Landmark } from 'lucide-react';
import Navbar from '../Components/Home/Navbar';
import Footer from '../Components/Home/Footer';

/**
 * Documentos Page - Documentos regulatorios y formatos de la empresa (/documentos).
 * Los documentos de la empresa sin archivo (href: null) se muestran como
 * "Próximamente": subir el PDF a public/docs/ y poner la ruta en href.
 */
export default function Documentos() {
  const companyDocs = [
    { title: 'Contrato único de prestación de servicios', href: 'https://usc1.contabostorage.com/ec0270e0cc0b4fc6bf9c10fa0d981689:integra/smtelecomunicaciones/adjuntos/CONTRATO%20DIGITAL%20SM.pdf' },
    { title: 'Contrato único convergente de servicios fijos y móviles (pospago)', href: '/docs/contrato-unico-convergente-pospago.pdf' },
    { title: 'Carta de suspensión de contrato de servicios de internet', href: 'https://usc1.contabostorage.com/ec0270e0cc0b4fc6bf9c10fa0d981689:integra/smtelecomunicaciones/adjuntos/CARTA%20DE%20SUSPENSION%20DEL%20CONTRATO.pdf' },
    { title: 'Formato de cesión de derechos', href: 'https://usc1.contabostorage.com/ec0270e0cc0b4fc6bf9c10fa0d981689:integra/smtelecomunicaciones/adjuntos/formato-cesion-de-derechos.pdf' },
    { title: 'Formato de autorización de propietario', href: '/docs/formato-autorizacion-propietario.docx' },
    { title: 'Formato de solicitud de ampliación o cambio de plan', href: 'https://usc1.contabostorage.com/ec0270e0cc0b4fc6bf9c10fa0d981689:integra/smtelecomunicaciones/adjuntos/Formato_Cambio_de_Plan_SM_Telecomunicaciones.pdf' },
    { title: 'Procedimiento de solicitudes y PQRS', href: 'https://usc1.contabostorage.com/ec0270e0cc0b4fc6bf9c10fa0d981689:integra/smtelecomunicaciones/adjuntos/FORMATO%20DE%20PETICIONES.pdf' },
    { title: 'Política de neutralidad en internet', href: 'https://usc1.contabostorage.com/ec0270e0cc0b4fc6bf9c10fa0d981689:integra/smtelecomunicaciones/adjuntos/POLITICA%20DE%20NEUTRALIDAD%20EN%20LA%20RED%20DE%20SM%20OPTIAL%20FIBER%20S.pdf' },
    { title: 'Autorización para el tratamiento de datos personales', href: 'https://usc1.contabostorage.com/ec0270e0cc0b4fc6bf9c10fa0d981689:integra/smtelecomunicaciones/adjuntos/FORMATO%20AUTORIZACION%20DE%20DATOS.pdf' },
    { title: 'Política de facturación, recaudo, suspensión y reconexión del servicio', href: 'https://usc1.contabostorage.com/ec0270e0cc0b4fc6bf9c10fa0d981689:integra/smtelecomunicaciones/adjuntos/politica-facturacion-recaudo-suspension.pdf' },
    { title: 'Política de protección de datos personales', href: 'https://usc1.contabostorage.com/ec0270e0cc0b4fc6bf9c10fa0d981689:integra/smtelecomunicaciones/adjuntos/POL%C3%8DTICA%20DE%20PROTECCI%C3%93N%20Y%20TRATAMIENTO%20DE%20DATOS%20PERSONALES.pdf' },
    { title: 'Guía de acuerdo de nivel de servicio (SLA)', href: '/docs/guia-acuerdo-nivel-servicio-sla.pdf' },
    { title: 'Protocolo de seguridad de la información', href: 'https://usc1.contabostorage.com/ec0270e0cc0b4fc6bf9c10fa0d981689:integra/smtelecomunicaciones/adjuntos/PROTOCOLO%20DE%20SEGURIDAD%20DE%20INFORMACI%C3%93N.pdf' },
    { title: 'Sistema de políticas y gestión de seguridad de la información', href: 'https://usc1.contabostorage.com/ec0270e0cc0b4fc6bf9c10fa0d981689:integra/smtelecomunicaciones/adjuntos/SISTEMA%20DE%20POL%C3%8DTICAS%20Y%20GESTI%C3%93N%20DE%20SEGURIDAD%20DE%20LA%20INFORMACI%C3%93N%20RESOLUCI%C3%93N%20CRC%205050%20DE%202016%20Y%20RESOLUCI%C3%93N%20CRC%205569%20DE%202018.pdf' },
    { title: 'Acciones para la gestión de tráfico del usuario', href: 'https://usc1.contabostorage.com/ec0270e0cc0b4fc6bf9c10fa0d981689:integra/smtelecomunicaciones/adjuntos/ACCIONES%20PARA%20LA%20GESTI%C3%93N%20DE%20TRAFICO%20DEL%20USUARIO.pdf' },
    { title: 'Guía de seguridad en la red para usuarios', href: 'https://usc1.contabostorage.com/ec0270e0cc0b4fc6bf9c10fa0d981689:integra/smtelecomunicaciones/adjuntos/SEGURIDAD%20EN%20LA%20RED.pdf' },
    { title: 'Control parental', href: 'https://usc1.contabostorage.com/ec0270e0cc0b4fc6bf9c10fa0d981689:integra/smtelecomunicaciones/adjuntos/CONTROL%20PARENTAL.pdf' },
    { title: 'Sistema de políticas y gestión de seguridad de la red', href: '/docs/sistema-politicas-seguridad-red.pdf' },
    { title: 'Condiciones de calidad del servicio de internet', href: 'https://usc1.contabostorage.com/ec0270e0cc0b4fc6bf9c10fa0d981689:integra/smtelecomunicaciones/adjuntos/CONDICIONES%20DE%20CALIDAD%20DE%20LOS%20SERVICIOS%20OFRECIDOS%20POR%20SM%20OPTICAL%20FIBER%20S.pdf' },
  ];

  const laws = [
    {
      title: 'Ley 679 de 2001',
      description: 'Estatuto para prevenir y contrarrestar la explotación, la pornografía y el turismo sexual con menores de edad.',
      href: 'https://normograma.mintic.gov.co/mintic/compilacion/docs/pdf/ley_0679_2001.pdf',
    },
    {
      title: 'Ley 1341 de 2009',
      description: 'Marco general del sector de Tecnologías de la Información y las Comunicaciones en Colombia.',
      href: 'https://www.mintic.gov.co/portal/715/articles-6398_Ley_1341_2009.pdf',
    },
    {
      title: 'Resolución 3066 de 2011',
      description: 'Régimen integral de protección de los derechos de los usuarios de los servicios de comunicaciones.',
      href: 'https://www.sic.gov.co/sites/default/files/normatividad/00003066.pdf',
    },
    {
      title: 'Resolución 3067 de 2011',
      description: 'Condiciones de calidad para la prestación de los servicios de telecomunicaciones.',
      href: 'https://normograma.mintic.gov.co/mintic/compilacion/docs/pdf/resolucion_crc_3067_2011.pdf',
    },
    {
      title: 'Resolución CRC 5151 de 2017',
      description: 'Régimen de protección de los derechos de los usuarios de servicios de comunicaciones.',
      href: 'https://www.crcom.gov.co/sites/default/files/normatividad/00005151.pdf',
    },
    {
      title: 'Ley 2108 de 2021',
      description: 'Ley de internet como servicio público esencial y universal.',
      href: 'https://normograma.mintic.gov.co/mintic/compilacion/docs/pdf/ley_2108_2021.pdf',
    },
    {
      title: 'Compilación normativa del Sector TIC',
      description: 'Normograma completo del Ministerio de Tecnologías de la Información y las Comunicaciones.',
      href: 'https://normograma.mintic.gov.co/mintic/compilacion/compilacion_normativa_sector_tic.html',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head title="Documentos" />
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
            <FileText size={16} className="text-tevesat-primary" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-tevesat-primary">
              Centro de Documentación
            </span>
          </div>
          <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-tevesat-tertiary-dark md:text-6xl">
            <span className="italic text-tevesat-primary">Documentos</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg font-medium leading-relaxed text-gray-500">
            Contratos, formatos, políticas y la normativa TIC que rige la prestación
            de nuestros servicios.
          </p>
        </div>
      </section>

      {/* Documentos y formatos de la empresa */}
      <section className="bg-white px-4 pb-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black uppercase tracking-tight text-tevesat-tertiary-dark md:text-4xl">
              Documentos y <span className="italic text-tevesat-primary">Formatos</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {companyDocs.map((doc) => (
              <div
                key={doc.title}
                className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.25)]"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-tevesat-primary/5 text-tevesat-primary">
                  <FileText size={20} strokeWidth={2.4} />
                </div>
                <p className="flex-1 text-sm font-bold leading-snug text-tevesat-tertiary-dark">
                  {doc.title}
                </p>
                {doc.href ? (
                  <a
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-tevesat-primary text-white shadow-lg shadow-tevesat-primary/20 transition-all duration-300 hover:scale-110 hover:bg-tevesat-primary-light"
                    title="Descargar"
                  >
                    <Download size={17} strokeWidth={2.4} />
                  </a>
                ) : (
                  <span
                    className="flex h-10 flex-shrink-0 items-center gap-1.5 rounded-xl border border-gray-200 bg-gray-50 px-3 text-[9px] font-black uppercase tracking-widest text-gray-400"
                    title="Documento en actualización"
                  >
                    <Clock size={13} />
                    Próximamente
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leyes y normativa TIC */}
      <section className="border-t border-gray-100 bg-gray-50 px-4 py-20 md:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-tevesat-primary/20 bg-tevesat-primary/5 px-5 py-2">
              <Landmark size={16} className="text-tevesat-primary" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-tevesat-primary">
                Marco Legal
              </span>
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-tevesat-tertiary-dark md:text-4xl">
              Leyes y <span className="italic text-tevesat-primary">Normativa TIC</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-gray-500">
              Normativa colombiana que regula el sector de las telecomunicaciones,
              con enlaces de descarga a las fuentes oficiales.
            </p>
          </div>

          <div className="space-y-5">
            {laws.map((law) => (
              <div
                key={law.title}
                className="flex flex-col gap-5 rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_-30px_rgba(0,0,0,0.3)] md:flex-row md:items-center"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-black uppercase tracking-tight text-tevesat-tertiary-dark">
                    {law.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-gray-500">
                    {law.description}
                  </p>
                </div>
                <a
                  href={law.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-2xl bg-tevesat-primary px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-white shadow-lg shadow-tevesat-primary/20 transition-all duration-300 hover:scale-105 hover:bg-tevesat-primary-light"
                >
                  Descargar
                  <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
