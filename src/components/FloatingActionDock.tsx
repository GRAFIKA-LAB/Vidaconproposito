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
  );
};
