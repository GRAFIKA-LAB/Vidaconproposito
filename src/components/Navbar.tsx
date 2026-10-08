import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Sparkles, HeartHandshake } from 'lucide-react';

interface NavbarProps {
  churchName: string;
  onOpenDeployGuide: () => void;
  onOpenCustomizer: () => void;
  onPlanVisit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  churchName,
  onOpenDeployGuide,
  onOpenCustomizer,
  onPlanVisit
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Horarios', href: '#horarios' },
    { label: 'Nuestra Fe', href: '#doctrina' },
    { label: 'Ministerios', href: '#ministerios' },
    { label: 'Prédicas', href: '#predicas' },
    { label: 'Oración', href: '#oracion' },
    { label: 'Visítanos', href: '#visitanos' },
    { label: 'Ofrendas', href: '#ofrendas' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800 shadow-xl'
            : 'bg-neutral-950/60 backdrop-blur-sm border-b border-neutral-800/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Zone 1: Brand Zone - Single text element wordmark */}
            <a
              href="#inicio"
              className="text-xl sm:text-2xl font-serif-display font-bold tracking-tight text-amber-100 hover:text-amber-400 transition-colors whitespace-nowrap"
            >
              {churchName}
            </a>

            {/* Zone 2: Clean text navigation links with subtle hover underlines */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-neutral-300 hover:text-amber-300 transition-colors whitespace-nowrap relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

              <button
                type="button"
                onClick={onPlanVisit}
                className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm hover:shadow-amber-500/20 transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer active:scale-95"
              >
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>Planificar Visita</span>
              </button>
            </div>

            {/* Mobile hamburger button */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                type="button"
                onClick={onOpenDeployGuide}
                className="px-2.5 py-1.5 text-xs font-medium text-amber-300 bg-amber-950/40 border border-amber-600/30 rounded-md flex items-center gap-1 cursor-pointer"
              >
                <Rocket className="w-3 h-3" />
                <span>Guía $0</span>
              </button>
              
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Abrir menú de navegación"
                className="p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-neutral-950 border-b border-neutral-800 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-neutral-800">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDeployGuide();
                }}
                className="w-full py-2.5 px-3 text-xs font-semibold text-amber-300 bg-amber-950/50 border border-amber-600/40 rounded-lg flex items-center justify-center gap-2 cursor-pointer"
            
            <nav className="flex flex-col space-y-1.5 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-neutral-300 hover:text-amber-300 hover:bg-neutral-900 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onPlanVisit();
                  }}
                  className="w-full py-3 px-4 text-sm font-bold text-neutral-950 bg-amber-400 rounded-lg text-center cursor-pointer"
                >
                  Planificar tu Visita
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
