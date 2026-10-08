import React, { useState } from 'react';
import { Sparkles, Users, HeartHandshake, Smile, ShieldCheck, Car, HelpCircle, CheckCircle2 } from 'lucide-react';
import { ChurchConfig } from '../types';

interface VisitGuideProps {
  config: ChurchConfig;
}

export const VisitGuide: React.FC<VisitGuideProps> = ({ config }) => {
  const [visitorName, setVisitorName] = useState('');
  const [visitorEmail, setVisitorEmail] = useState('');
  const [visitorDate, setVisitorDate] = useState('Próximo Domingo 10:00 AM');
  const [hasKids, setHasKids] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorName) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setVisitorName('');
      setVisitorEmail('');
    }, 4500);
  };

  const visitFaqs = [
    {
      q: "¿Cómo debo vestir?",
      a: "¡Ven tal como te sientas más cómodo! En nuestra iglesia verás personas vestidas con ropa casual (jeans, camisas) y otras un poco más formales. Lo verdaderamente importante es tu corazón, no tu atuendo.",
      icon: Smile
    },
    {
      q: "¿Hay lugar para mis hijos?",
      a: "¡Absolutamente! Nuestro ministerio infantil 'Semillas del Reino' ofrece clases bíblicas dinámicas, manualidades y merienda en un entorno seguro y divertido mientras los padres disfrutan del culto principal.",
      icon: Users
    },
    {
      q: "¿Qué sucede durante el culto?",
      a: "Nuestros servicios duran aproximadamente 90 minutos. Iniciamos con un tiempo inspirador de alabanza y adoración musical, seguido por una oración comunitaria y un mensaje bíblico práctico y edificante.",
      icon: Sparkles
    },
    {
      q: "¿Tendré que pararme o hablar en público?",
      a: "No, en absoluto. Eres nuestro invitado de honor. No te pondremos en una situación incómoda ni te obligaremos a presentarte en público si no lo deseas.",
      icon: HeartHandshake
    }
  ];

  return (
    <section id="visitanos" className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Tu Primera Vez con Nosotros
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-neutral-100 text-balance">
            Planifica tu Visita
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-body">
            Sabemos que visitar una iglesia por primera vez puede generar preguntas. Nuestro equipo de anfitriones está listo para hacerte sentir en casa desde el primer minuto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* FAQs Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {visitFaqs.map((faq, idx) => {
              const Icon = faq.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3"
                >
                  <div className="p-2.5 w-fit rounded-xl bg-neutral-950 border border-neutral-800 text-amber-400">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-serif-display font-bold text-neutral-100">
                    {faq.q}
                  </h3>

                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              );
            })}

            {/* Parking & Welcome Banner */}
            <div className="sm:col-span-2 p-5 rounded-2xl bg-neutral-900/30 border border-neutral-800 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-amber-400 shrink-0">
                <Car className="w-5 h-5" />
              </div>
              <div className="text-xs text-neutral-300">
                <span className="font-semibold text-neutral-100 block">Estacionamiento Cómodo y Seguro</span>
                Disponemos de aparcamiento gratuito para miembros y visitantes con equipo de bienvenida para orientarte en la entrada.
              </div>
            </div>
          </div>

          {/* Interactive Pre-Registration Form (5 cols) */}
          <div className="lg:col-span-5 bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 sm:p-7 space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Queremos Conocerte</span>
              </div>
              <h3 className="text-xl font-serif-display font-bold text-neutral-100 mt-1">
                Avísanos que vendrás
              </h3>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                Déjanos saber qué domingo nos acompañas y prepararemos un paquete de bienvenida especial para ti y tu familia.
              </p>
            </div>

            {submitted ? (
              <div className="p-5 rounded-xl bg-emerald-950/50 border border-emerald-500/50 text-emerald-200 text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-emerald-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>¡Te estaremos esperando con alegría!</span>
                </div>
                <p>
                  Nuestro equipo de ujieres tendrá tu detalle de bienvenida listo en la mesa de anfitriones a tu llegada este {visitorDate}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    required
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    placeholder="Ej. Andrés Hernández"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 focus:border-amber-400 focus:outline-none text-xs text-neutral-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Teléfono o WhatsApp (opcional)
                  </label>
                  <input
                    type="text"
                    value={visitorEmail}
                    onChange={(e) => setVisitorEmail(e.target.value)}
                    placeholder="Para enviarte la ubicación exacta"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 focus:border-amber-400 focus:outline-none text-xs text-neutral-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    ¿Qué reunión te gustaría visitar?
                  </label>
                  <select
                    value={visitorDate}
                    onChange={(e) => setVisitorDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 focus:border-amber-400 focus:outline-none text-xs text-neutral-200 cursor-pointer"
                  >
                    <option value="Domingo 10:00 AM">Domingo 10:00 AM (Celebración Principal)</option>
                    <option value="Domingo 6:00 PM">Domingo 6:00 PM (Culto Vespertino)</option>
                    <option value="Miércoles 7:30 PM">Miércoles 7:30 PM (Noche de Oración y Palabra)</option>
                    <option value="Sábado 6:30 PM">Sábado 6:30 PM (Culto de Jóvenes)</option>
                  </select>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="hasKidsCheck"
                    checked={hasKids}
                    onChange={(e) => setHasKids(e.target.checked)}
                    className="rounded bg-neutral-950 border-neutral-700 text-amber-500 focus:ring-0 w-4 h-4 cursor-pointer"
                  />
                  <label htmlFor="hasKidsCheck" className="text-xs text-neutral-300 cursor-pointer">
                    Vengo con niños (para reservar espacio en Semillas del Reino)
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer shadow-sm"
                >
                  Confirmar mi Asistencia
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
