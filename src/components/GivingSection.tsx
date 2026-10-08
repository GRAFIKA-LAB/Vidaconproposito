import React, { useState } from 'react';
import { Heart, Copy, Check, ShieldCheck, Landmark, Smartphone, FileText } from 'lucide-react';
import { ChurchConfig } from '../types';

interface GivingSectionProps {
  config: ChurchConfig;
}

export const GivingSection: React.FC<GivingSectionProps> = ({ config }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="ofrendas" className="py-20 bg-neutral-900/50 border-t border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Mayordomía y Generosidad
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-neutral-100 text-balance">
            Diezmos, Ofrendas y Misiones
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-body">
            "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre." (2 Corintios 9:7)
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Stewardship Principles (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800 space-y-4">
              <h3 className="text-xl font-serif-display font-bold text-neutral-100">
                Transparencia y Destino de los Fondos
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Cada aporte voluntario sostiene el avance del Evangelio y el cuidado integral de nuestra comunidad:
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-200 block">Acción Social y Comedor</span>
                    <span className="text-neutral-400">Canastas básicas y ayuda para familias vulnerables del vecindario.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-200 block">Sostén Misionero</span>
                    <span className="text-neutral-400">Apoyo a misioneros nacionales e internacionales de las Asambleas de Dios.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-200 block">Ministerios y Niños</span>
                    <span className="text-neutral-400">Material pedagógico bíblico, campamentos juveniles y actividades infantiles.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-200 block">Mantenimiento del Templo</span>
                    <span className="text-neutral-400">Servicios básicos, equipos de transmisión, sonido y adecuación de aulas.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-4 rounded-xl bg-amber-950/20 border border-amber-800/40 text-xs text-amber-200/90">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>La iglesia rinde informes financieros periódicos ante la Asamblea congregacional.</span>
            </div>
          </div>

          {/* Account Details & Methods (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Bank Transfer Box */}
            <div className="p-6 rounded-2xl bg-neutral-950/90 border border-neutral-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-amber-400">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-serif-display font-bold text-neutral-100">
                    Transferencia Bancaria Directa
                  </h4>
                  <div className="text-xs text-neutral-400">
                    {config.donationMethods.bankName}
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800/90 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] text-neutral-400 block">Titular de la Cuenta:</span>
                    <span className="text-xs font-semibold text-neutral-200">{config.donationMethods.accountName}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(config.donationMethods.accountName, 'titular')}
                    className="p-1.5 text-neutral-400 hover:text-white rounded-md hover:bg-neutral-800 transition-colors cursor-pointer shrink-0"
                    title="Copiar titular"
                  >
                    {copiedField === 'titular' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800/90 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] text-neutral-400 block">Número de Cuenta / Interbancaria:</span>
                    <span className="text-xs font-mono font-semibold text-amber-300">{config.donationMethods.accountNumber}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(config.donationMethods.accountNumber, 'cuenta')}
                    className="p-1.5 text-neutral-400 hover:text-white rounded-md hover:bg-neutral-800 transition-colors cursor-pointer shrink-0"
                    title="Copiar número de cuenta"
                  >
                    {copiedField === 'cuenta' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800/90 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] text-neutral-400 block">Clave / IBAN / Rut:</span>
                    <span className="text-xs font-mono font-semibold text-neutral-200">{config.donationMethods.routingOrIban}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(config.donationMethods.routingOrIban, 'iban')}
                    className="p-1.5 text-neutral-400 hover:text-white rounded-md hover:bg-neutral-800 transition-colors cursor-pointer shrink-0"
                    title="Copiar código"
                  >
                    {copiedField === 'iban' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Electronic / Mobile Pay Box (Zelle / Bizum / Móvil) */}
            <div className="p-6 rounded-2xl bg-neutral-950/90 border border-neutral-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-amber-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-serif-display font-bold text-neutral-100">
                    Pago Móvil, Zelle o Bizum
                  </h4>
                  <div className="text-xs text-neutral-400">
                    Rápido, directo y sin comisiones intermedias
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800/90 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] text-neutral-400 block">Correo o Teléfono Registrado:</span>
                  <span className="text-xs font-mono font-bold text-amber-300">{config.donationMethods.zelleOrBizum}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(config.donationMethods.zelleOrBizum, 'zelle')}
                  className="p-1.5 text-neutral-400 hover:text-white rounded-md hover:bg-neutral-800 transition-colors cursor-pointer shrink-0"
                  title="Copiar datos"
                >
                  {copiedField === 'zelle' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <p className="text-[11px] text-neutral-400 italic">
                * {config.donationMethods.notes}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
