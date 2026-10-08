import React from 'react';
import { Rocket, Sparkles, MessageCircle } from 'lucide-react';
import { ChurchConfig } from '../types';

interface FloatingActionDockProps {
  config: ChurchConfig;
  onOpenDeployGuide: () => void;
  onOpenCustomizer: () => void;
}

export const FloatingActionDock: React.FC<FloatingActionDockProps> = ({
  config,
  onOpenDeployGuide,
  onOpenCustomizer
}) => {
  return (
    <aside aria-label="Acciones rápidas" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Direct WhatsApp Quick Floating Button */}
      <a
        href={`https://wa.me/${config.whatsapp}?text=${encodeURIComponent('Paz de Cristo, me comunico a través del sitio web de Vida con Propósito.')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="w-11 h-11 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-950/50 hover:scale-105 active:scale-95 transition-all group"
        title="Escribir por WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
      </a>

      {/* Deploy and Customizer Floating Bar */}
      <div className="flex items-center gap-1.5 p-1.5 bg-neutral-900/95 backdrop-blur-md border border-neutral-700/80 rounded-2xl shadow-2xl">
        <button
          type="button"
          onClick={onOpenDeployGuide}
          className="px-3 py-2 text-xs font-semibold text-amber-300 hover:text-amber-200 bg-amber-950/60 hover:bg-amber-950/90 border border-amber-600/40 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap active:scale-95 shadow-sm"
          title="Ver cómo publicar esta web gratis sin pagar mensualidades"
        >
          <Rocket className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden sm:inline">Guía</span>
          <span>Web Gratis ($0)</span>
        </button>

        <button
          type="button"
          onClick={onOpenCustomizer}
          className="px-3 py-2 text-xs font-semibold text-neutral-200 hover:text-white bg-neutral-800 hover:bg-neutral-750 border border-neutral-700 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap active:scale-95"
          title="Personalizar los datos, pastores, horarios y dirección de la iglesia"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden sm:inline">Preguntas /</span>
          <span>Personalizar</span>
        </button>
      </div>
    </aside>
  );
};
