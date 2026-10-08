import React from 'react';
import { ChurchConfig } from '../types';
import { Rocket, Sparkles, MapPin, Phone, Mail, ChevronUp } from 'lucide-react';

interface FooterProps {
  config: ChurchConfig;
  onOpenDeployGuide: () => void;
  onOpenCustomizer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onOpenDeployGuide, onOpenCustomizer }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-400 text-xs font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Wordmark & Affiliation */}
          <div className="space-y-4">
            <span className="text-xl font-serif-display font-bold text-amber-100 block">
              {config.name}
            </span>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Una iglesia cristiana comprometida con la proclamación del Evangelio de Jesucristo y el poder transformador del Espíritu Santo.
            </p>
            <div className="text-[11px] text-amber-400/90 font-medium">
              Afiliada a: {config.affiliation}
            </div>
          </div>

          {/* Col 2: Navigation Mirror */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-neutral-200 uppercase tracking-wider">
              Enlaces del Sitio
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-amber-300 transition-colors">Inicio y Bienvenida</a>
              </li>
              <li>
                <a href="#horarios" className="hover:text-amber-300 transition-colors">Horarios de Cultos</a>
              </li>
              <li>
                <a href="#doctrina" className="hover:text-amber-300 transition-colors">Nuestra Fe y Doctrinas</a>
              </li>
              <li>
                <a href="#ministerios" className="hover:text-amber-300 transition-colors">Ministerios y Niños</a>
              </li>
              <li>
                <a href="#predicas" className="hover:text-amber-300 transition-colors">Mensajes y Prédicas</a>
              </li>
              <li>
                <a href="#oracion" className="hover:text-amber-300 transition-colors">Muro de Oración</a>
              </li>
              <li>
                <a href="#visitanos" className="hover:text-amber-300 transition-colors">Planifica tu Visita</a>
              </li>
              <li>
                <a href="#ofrendas" className="hover:text-amber-300 transition-colors">Diezmos y Ofrendas</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-neutral-200 uppercase tracking-wider">
              Sede Central
            </div>
            <div className="space-y-2.5 text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{config.address}, {config.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${config.phone}`} className="hover:text-amber-300 transition-colors">
                  {config.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`mailto:${config.email}`} className="hover:text-amber-300 transition-colors">
                  {config.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Church Tools & Deployment Guide */}
          <div className="space-y-4">
            <div className="text-xs font-semibold text-neutral-200 uppercase tracking-wider">
              Gestión Web Gratuita
            </div>
            <p className="text-[11px] text-neutral-400 leading-relaxed">
              Herramientas integradas para poner este sitio a funcionar sin ningún gasto para la congregación:
            </p>

            <div className="space-y-2">
              <button
                type="button"
                onClick={onOpenDeployGuide}
                className="w-full py-2 px-3 text-xs font-semibold text-amber-300 bg-amber-950/40 hover:bg-amber-950/70 border border-amber-600/30 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Rocket className="w-3.5 h-3.5" />
                <span>Guía: Alojar Web Gratis ($0)</span>
              </button>

              <button
                type="button"
                onClick={onOpenCustomizer}
                className="w-full py-2 px-3 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Cuestionario & Personalizar</span>
              </button>
            </div>
          </div>

        </div>

        {/* Hairline divider & bottom row */}
        <div className="mt-12 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} {config.name} · Asambleas de Dios. Todos los derechos reservados.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-neutral-300 transition-colors cursor-pointer"
          >
            <span>Subir al inicio</span>
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
