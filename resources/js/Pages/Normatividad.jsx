import React from 'react';
import { Head } from '@inertiajs/react';
import { Scale, ExternalLink } from 'lucide-react';
import Navbar from '../Components/Home/Navbar';
import Footer from '../Components/Home/Footer';

/**
 * Normatividad Page - Información regulatoria del sector TIC (/normatividad).
 * Campañas del MinTIC, reporte de incidentes COLCERT, denuncias MASI
 * y entidades de regulación y control.
 */
export default function Normatividad() {
  const cards = [
    {
      image: '/images/normatividad/internet-sano.jpg',
      title: 'Internet',
      subtitle: 'Sano',
      href: 'https://www.enticconfio.gov.co/',
      cta: 'Conoce la campaña',
      text: 'La campaña de Internet Sano es la campaña del Ministerio de Comunicaciones por medio de la cual se pretende generar opinión y conocimiento en torno al tema de la explotación infantil en Internet, destacando mensajes de prevención, de denuncia, informativos e institucionales. Esta campaña busca que todos los colombianos comprendan y asimilen lo que significa la prevención de la pornografía infantil y juvenil en Internet.',
    },
    {
      image: '/images/normatividad/colcert.png',
      title: 'ColCERT',
      subtitle: 'Reporte de Incidentes',
      href: 'https://www.colcert.gov.co/800/w3-article-198656.html#formulario_i__form_ReporteIncidentes_1',
      cta: 'Reportar incidente',
      text: 'A través de la Política Nacional de Confianza y Seguridad Digital – CONPES 3995, se busca establecer medidas para desarrollar la confianza digital a través de la mejora de la seguridad digital, de manera que Colombia sea una sociedad incluyente y competitiva en el futuro digital mediante el fortalecimiento de capacidades y la actualización del marco de gobernanza en seguridad digital.',
    },
    {
      image: '/images/normatividad/denuncias-masi.jpg',
      title: 'Denuncias MASI',
      subtitle: 'Denuncie aquí',
      href: 'https://www.mintic.gov.co/portal/inicio/Atencion-y-Servicio-a-la-Ciudadania/Informes-de-PQRSD/125804:Registro-PQRSD',
      cta: 'Denunciar',
      text: 'Denuncie aquí los contenidos en internet con abuso sexual de niños y adolescentes. El Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC) es responsable de la inspección y control del Sector TIC, según la Ley 1341 de 2009 y la Ley 1978 de 2019. La Dirección de Vigilancia, Inspección y Control del MinTIC verifica el cumplimiento de obligaciones entre Proveedores de Redes y Servicios de Telecomunicaciones (PRST).',
    },
  ];

  const entities = [
    { image: '/images/normatividad/logo-mintic.png', alt: 'MinTIC - Vive Digital Colombia', href: 'https://www.mintic.gov.co/portal/inicio/' },
    { image: '/images/normatividad/logo-crc.png', alt: 'Comisión de Regulación de Comunicaciones', href: 'https://crcom.gov.co/es' },
    { image: '/images/normatividad/logo-sic.png', alt: 'Superintendencia de Industria y Comercio', href: 'https://sedeelectronica.sic.gov.co/' },
    { image: '/images/normatividad/logo-ane.jpg', alt: 'Agencia Nacional del Espectro', href: 'https://www.ane.gov.co/SitePages/inicio.aspx' },
    { image: '/images/normatividad/logo-entic-confio.jpg', alt: 'En TIC Confío - Te Protejo Colombia', href: 'https://teprotejocolombia.org/' },
    { image: '/images/normatividad/logo-denuncia-masi.jpg', alt: 'Actúa contra la explotación sexual infantil', href: 'https://www.mintic.gov.co/portal/inicio/Atencion-y-Servicio-a-la-Ciudadania/Informes-de-PQRSD/125804:Registro-PQRSD' },
    { image: '/images/normatividad/logo-colcert.png', alt: 'ColCERT', href: 'https://www.colcert.gov.co/800/w3-channel.html' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head title="Normatividad" />
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
            <Scale size={16} className="text-tevesat-primary-deep" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-tevesat-primary-deep">
              Marco Regulatorio
            </span>
          </div>
          <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-tevesat-tertiary-dark md:text-6xl">
            <span className="italic text-tevesat-primary-deep">Normatividad</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg font-medium leading-relaxed text-gray-500">
            Campañas, canales de denuncia y entidades de regulación y control del
            sector TIC en Colombia.
          </p>
        </div>
      </section>

      {/* Tarjetas informativas */}
      <section className="bg-white px-4 pb-24 md:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_30px_70px_-30px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="h-56 overflow-hidden bg-gray-50">
                <img
                  src={card.image}
                  alt={`${card.title} ${card.subtitle}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h2 className="text-2xl font-black uppercase tracking-tight text-tevesat-tertiary-dark">
                  {card.title}
                </h2>
                <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-tevesat-primary-deep">
                  {card.subtitle}
                </p>
                <p className="flex-1 text-justify text-sm font-medium leading-relaxed text-gray-500">
                  {card.text}
                </p>
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-tevesat-primary py-4 text-xs font-black uppercase tracking-[0.2em] text-tevesat-tertiary-dark shadow-lg shadow-tevesat-primary/20 transition-all duration-300 hover:scale-105 hover:bg-tevesat-primary-light"
                >
                  {card.cta}
                  <ExternalLink size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Entidades de regulación y control */}
      <section className="border-t border-gray-100 bg-gray-50 px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-black uppercase tracking-tight text-tevesat-tertiary-dark md:text-4xl">
              Entidades de <span className="italic text-tevesat-primary-deep">Regulación y Control</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-gray-500">
              Organismos que vigilan, regulan y protegen a los usuarios del sector TIC.
            </p>
          </div>

          <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-4">
            {entities.map((entity) => (
              <a
                key={entity.alt}
                href={entity.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-40 items-center justify-center rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_-30px_rgba(0,0,0,0.25)]"
              >
                <img
                  src={entity.image}
                  alt={entity.alt}
                  title={entity.alt}
                  className="max-h-full max-w-full object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
