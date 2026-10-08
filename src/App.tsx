import React, { useState, useEffect } from 'react';
import { ChurchConfig } from './types';
import { defaultChurchConfig } from './data/initialData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { FaithDoctrines } from './components/FaithDoctrines';
import { MinistriesSection } from './components/MinistriesSection';
import { SermonsSection } from './components/SermonsSection';
import { PrayerWall } from './components/PrayerWall';
import { VisitGuide } from './components/VisitGuide';
import { GivingSection } from './components/GivingSection';
import { ContactMap } from './components/ContactMap';
import { Footer } from './components/Footer';
import { FreeDeploymentGuideModal } from './components/FreeDeploymentGuideModal';
import { ChurchCustomizerModal } from './components/ChurchCustomizerModal';
import { FloatingActionDock } from './components/FloatingActionDock';
import { Heart, MessageCircle, X } from 'lucide-react';

export default function App() {
  const [config, setConfig] = useState<ChurchConfig>(() => {
    try {
      const saved = localStorage.getItem('vida_con_proposito_config');
      return saved ? JSON.parse(saved) : defaultChurchConfig;
    } catch {
      return defaultChurchConfig;
    }
  });

  const [isDeployGuideOpen, setIsDeployGuideOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [ministryConnectNotice, setMinistryConnectNotice] = useState<string | null>(null);

  const handleSaveConfig = (newConfig: ChurchConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem('vida_con_proposito_config', JSON.stringify(newConfig));
    } catch (e) {
      console.error(e);
    }
  };

  const handleResetDefaults = () => {
    setConfig(defaultChurchConfig);
    try {
      localStorage.removeItem('vida_con_proposito_config');
    } catch (e) {
      console.error(e);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleJoinMinistry = (ministryName: string) => {
    setMinistryConnectNotice(ministryName);
    setTimeout(() => setMinistryConnectNotice(null), 5000);
  };

 

      {/* Main Navigation Bar */}
      <Navbar
        churchName={config.name}
        onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        onPlanVisit={() => scrollToSection('visitanos')}
      />

      {/* Ministry Connect Notification Banner */}
      {ministryConnectNotice && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg px-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="p-4 rounded-2xl bg-neutral-900 border border-amber-500/80 shadow-2xl flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                <Heart className="w-5 h-5 fill-amber-400" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-neutral-100 block">
                  ¡Interés en {ministryConnectNotice}!
                </span>
                <span className="text-neutral-400">
                  Escríbenos por WhatsApp o déjanos un mensaje abajo para conectarte con los líderes.
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setMinistryConnectNotice(null)}
              className="p-1 text-neutral-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Hero Section with countdown and sanctuary art */}
      <main className="flex-1">
        <Hero
          config={config}
          onPlanVisit={() => scrollToSection('visitanos')}
          onRequestPrayer={() => scrollToSection('oracion')}
        />

        {/* Horarios y Cultos */}
        <ServicesSection />

        {/* Declaración de Fe y 4 Doctrinas Cardinales */}
        <FaithDoctrines />

        {/* Ministerios Activos */}
        <MinistriesSection onJoinMinistry={handleJoinMinistry} />

        {/* Prédicas y Mensajes Recientes */}
        <SermonsSection />

        {/* Muro de Oración y Peticiones */}
        <PrayerWall config={config} />

        {/* Planifica tu Visita y Qué esperar */}
        <VisitGuide config={config} />

        {/* Diezmos, Ofrendas y Mayordomía */}
        <GivingSection config={config} />

        {/* Ubicación y Contacto */}
        <ContactMap config={config} />
      </main>

      {/* Quiet Footer */}
      <Footer
        config={config}
        onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Floating Action Dock */}
      <FloatingActionDock
        config={config}
        onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Free Deployment Guide Modal ($0 Hosting, Domain & Steps) */}
      <FreeDeploymentGuideModal
        isOpen={isDeployGuideOpen}
        onClose={() => setIsDeployGuideOpen(false)}
      />

      {/* Church Customizer & Questionnaire Modal */}
      <ChurchCustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        config={config}
        onSaveConfig={handleSaveConfig}
        onResetDefaults={handleResetDefaults}
      />

    </div>
  );
}
