import React from 'react';
import Navbar from '../Components/Home/Navbar';
import Footer from '../Components/Home/Footer';
import { ExternalLink, ShieldCheck, Scale, BookOpen } from 'lucide-react';

export default function Normatividad() {
  const leyes = [
    {
      title: 'Ley 679 de 2001',
      description: 'Prevención y sanción de la explotación sexual de menores.',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_0679_2001.html',
    },
    {
      title: 'Ley 1266 de 2008',
      description: 'Habeas Data financiero.',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1266_2008.html',
    },
    {
      title: 'Ley 1341 de 2009',
      description: 'Principios y organización del sector TIC.',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1341_2009.html',
    },
    {
      title: 'Ley 1480 de 2011',
      description: 'Estatuto del consumidor.',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1480_2011.html',
    },
    {
      title: 'Ley 1581 de 2012',
      description: 'Protección de datos personales.',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1581_2012.html',
    },
    {
      title: 'Ley 1978 de 2019',
      description: 'Modernización del sector TIC.',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1978_2019.html',
    },
    {
      title: 'Ley 2108 de 2021',
      description: 'Declaración de Internet como servicio público esencial.',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_2108_2021.html',
    },
    {
      title: 'Ley 2294 de 2023',
      description: 'Plan Nacional de Desarrollo 2022–2026.',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_2294_2023.html',
    },
    {
      title: 'Decreto MINTIC 1078 de 2015',
      description: 'Compilación normativa del sector TIC.',
      url: 'https://normograma.mintic.gov.co/mintic/compilacion/docs/decreto_1078_2015.htm',
    },
  ];

  const resoluciones = [
    {
      title: 'Resolución CRC 3101 de 2021',
      description: 'Regulación de comunicaciones.',
      url: 'https://www.crcom.gov.co/sites/default/files/normatividad/00003101.pdf',
    },
    {
      title: 'Resolución CRC 5050 de 2016',
      description: 'Reglamento compilatorio de la CRC.',
      url: 'https://www.crcom.gov.co/sites/default/files/normatividad/Compilada_2016_11_11.pdf',
    },
    {
      title: 'Resolución CRC 5078 de 2016',
      description: 'Condiciones del régimen de usuarios.',
      url: 'https://www.crcom.gov.co/sites/default/files/normatividad/00005078.pdf',
    },
    {
      title: 'Resolución CRC 5111 de 2016',
      description: 'Regulación de servicios de comunicaciones.',
      url: 'https://www.crcom.gov.co/sites/default/files/normatividad/00005111.pdf',
    },
    {
      title: 'Resolución CRC 5151 de 2016',
      description: 'Condiciones de prestación de servicios TIC.',
      url: 'https://www.crcom.gov.co/sites/default/files/normatividad/00005151.pdf',
    },
    {
      title: 'Resolución CRC 5161 de 2017',
      description: 'Régimen de comunicaciones unificado.',
      url: 'https://www.crcom.gov.co/sites/default/files/normatividad/00005161.pdf',
    },
    {
      title: 'Resolución CRC 5899 de 2020',
      description: 'Medidas regulatorias del sector TIC.',
      url: 'https://www.crcom.gov.co/sites/default/files/normatividad/00005899.pdf',
    },
    {
      title: 'Resolución CRC 5993 de 2020',
      description: 'Actualizaciones del régimen TIC.',
      url: 'https://www.crcom.gov.co/sites/default/files/normatividad/00005993.pdf',
    },
    {
      title: 'Resolución CRC 6242 de 2022',
      description: 'Digitalización del Régimen de Protección de Usuarios.',
      url: 'https://www.crcom.gov.co/sites/default/files/normatividad/00006242%20Digitaliza%20RPU.pdf',
    },
    {
      title: 'Resolución CRC 6522 de 2022',
      description: 'Regulación adicional en materia TIC.',
      url: 'https://www.crcom.gov.co/sites/default/files/normatividad/00006522.pdf',
    },
  ];

  const proteccionUsuarios = [
    {
      title: 'Resolución CRC 6771 de 2022',
      description: 'Actualización del régimen de usuarios.',
      url: 'https://www.crcom.gov.co/sites/default/files/normatividad/resolucion-crc-6771-de-2022.pdf',
    },
    {
      title: 'Resolución CRC 6890 de 2022',
      description: 'Medidas complementarias de regulación.',
      url: 'https://www.crcom.gov.co/sites/default/files/normatividad/Resolucion-CRC-6890-de-2022.pdf',
    },
    {
      title: 'Resolución CRC 7714 de 2025',
      description: 'Última actualización normativa CRC.',
      url: 'https://www.crcom.gov.co/sites/default/files/normatividad/00007714.pdf',
    },
    {
      title: 'Resolución CRC 7810 de 2025',
      description: 'Actualización técnica del régimen.',
      url: 'https://www.crcom.gov.co/sites/default/files/normatividad/00007810.pdf',
    },
    {
      title: 'Resolución CRC 7811 de 2025',
      description: 'Complemento regulatorio reciente.',
      url: 'https://www.crcom.gov.co/sites/default/files/normatividad/00007811.pdf',
    },
    {
      title: 'Circular única - Título III de la SIC',
      description: 'Normas de protección al consumidor y usuarios.',
      url: 'https://www.sic.gov.co/sites/default/files/normatividad/092022/T%C3%ADtulo%20III%20Versi%C3%B3n%2029-09-2022.pdf',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Usamos el mismo Navbar, para que se vea con fondo activamos isScrolled forzosamente pasandole la clase o simplemente dejamos que actue normal */}
      <div className="bg-tevesat-tertiary">
        <Navbar alwaysSolid={true} />
      </div>

      <div className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-block bg-tevesat-tertiary/5 px-4 py-1 rounded-full border border-tevesat-tertiary/10 mb-6">
            <span className="text-tevesat-tertiary font-black uppercase text-xs tracking-[0.2em]">Marco Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-tevesat-tertiary mb-6">
            Normatividad y <span className="text-tevesat-secondary">Leyes</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            Accede a las leyes, resoluciones y guías oficiales que rigen nuestros servicios. Todos los enlaces apuntan a fuentes públicas y confiables del estado colombiano.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Columna Leyes */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-tevesat-secondary/10 flex items-center justify-center text-tevesat-secondary">
                <Scale size={24} strokeWidth={2.5} />
              </div>
              <h2 className="text-2xl font-black text-tevesat-tertiary">Leyes y Decretos</h2>
            </div>
            <div className="space-y-6">
              {leyes.map((item, i) => (
                <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className="block group">
                  <h3 className="font-bold text-tevesat-tertiary group-hover:text-tevesat-secondary transition-colors mb-1 flex items-center gap-2">
                    {item.title} <ExternalLink size={14} className="opacity-50" />
                  </h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Columna Resoluciones */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-tevesat-primary/10 flex items-center justify-center text-tevesat-primary">
                <BookOpen size={24} strokeWidth={2.5} />
              </div>
              <h2 className="text-2xl font-black text-tevesat-tertiary">Resoluciones CRC</h2>
            </div>
            <div className="space-y-6">
              {resoluciones.map((item, i) => (
                <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className="block group">
                  <h3 className="font-bold text-tevesat-tertiary group-hover:text-tevesat-primary transition-colors mb-1 flex items-center gap-2">
                    {item.title} <ExternalLink size={14} className="opacity-50" />
                  </h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Columna Protección Usuarios */}
          <div className="bg-tevesat-tertiary rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                <ShieldCheck size={24} strokeWidth={2.5} />
              </div>
              <h2 className="text-2xl font-black text-white" id="proteccion-usuarios">Protección al Usuario</h2>
            </div>
            <div className="space-y-6">
              {proteccionUsuarios.map((item, i) => (
                <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className="block group">
                  <h3 className="font-bold text-white group-hover:text-tevesat-secondary transition-colors mb-1 flex items-center gap-2">
                    {item.title} <ExternalLink size={14} className="opacity-50" />
                  </h3>
                  <p className="text-sm text-white/60">{item.description}</p>
                </a>
              ))}
            </div>
            
            <div className="mt-10 p-5 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-white/80 text-sm font-medium italic">
                Para nosotros es fundamental que conozcas tus derechos y deberes como usuario de servicios de comunicaciones.
              </p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
