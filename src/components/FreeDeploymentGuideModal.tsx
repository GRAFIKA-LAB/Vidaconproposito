import React, { useState } from 'react';
import { X, Rocket, Globe, Shield, Terminal, Copy, Check, ExternalLink, HelpCircle, HeartHandshake, Video, MessageSquare, Gift } from 'lucide-react';

interface FreeDeploymentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreeDeploymentGuideModal: React.FC<FreeDeploymentGuideModalProps> = ({
  isOpen,
  onClose
}) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'pasos' | 'plataformas' | 'herramientas' | 'dominio'>('pasos');

  if (!isOpen) return null;

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5">
      <div className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-neutral-800 flex items-center justify-between bg-neutral-950/60">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Rocket className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-serif-display font-bold text-neutral-100">
                Guía Completa: Cómo Publicar esta Web 100% GRATIS
              </h2>
              <p className="text-xs text-neutral-400">
                Pasos sencillos, plataformas sin costo mensual y recursos gratuitos para la Iglesia
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-neutral-800/80 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('pasos')}
            className={`pb-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'pasos'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            1. Pasos Rápidos (3 Pasos)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('plataformas')}
            className={`pb-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'plataformas'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            2. Servidores Gratuitos
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('dominio')}
            className={`pb-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'dominio'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            3. Dominio Web Gratis
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('herramientas')}
            className={`pb-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'herramientas'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            4. Herramientas Gratis para la Iglesia
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-neutral-300 font-body">
          
          {/* TAB 1: PASOS RAPIDOS */}
          {activeTab === 'pasos' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs leading-relaxed">
                <span className="font-bold block text-amber-300 mb-1">¡No necesitas pagar mensualidades de hosting ni desarrolladores costosos!</span>
                Esta página web está construida con React + Vite. Eso significa que genera archivos HTML, CSS y JavaScript estáticos de altísima velocidad que pueden hospedarse en los mejores servidores del mundo sin pagar ni un solo dólar.
              </div>

              {/* Step 1 */}
              <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-amber-400 text-neutral-950 font-bold flex items-center justify-center shrink-0">
                    1
                  </div>
                  <h3 className="text-sm font-bold text-neutral-100">
                    Descargar o Subir el Código a GitHub (Gratis)
                  </h3>
                </div>
                <p className="text-neutral-400 pl-10">
                  Crea una cuenta gratuita en <strong className="text-neutral-200">GitHub.com</strong>. Crea un nuevo repositorio (ej. <code className="text-amber-300 bg-neutral-900 px-1 py-0.5 rounded">iglesia-vida-con-proposito</code>) y sube este proyecto.
                </p>
                <div className="pl-10">
                  <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between font-mono text-[11px] text-amber-300">
                    <span>git init && git add . && git commit -m "Web Iglesia Vida con Propósito"</span>
                    <button
                      type="button"
                      onClick={() => handleCopy('git init && git add . && git commit -m "Web Iglesia Vida con Propósito"', 'git')}
                      className="p-1 hover:text-white"
                      title="Copiar comando"
                    >
                      {copiedCode === 'git' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-amber-400 text-neutral-950 font-bold flex items-center justify-center shrink-0">
                    2
                  </div>
                  <h3 className="text-sm font-bold text-neutral-100">
                    Conectar con Vercel o Netlify (El hosting más fácil)
                  </h3>
                </div>
                <p className="text-neutral-400 pl-10">
                  1. Ve a <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline">Vercel.com</a> y regístrate gratis con tu cuenta de GitHub.<br />
                  2. Haz clic en <strong>"Add New Project"</strong> y selecciona tu repositorio.<br />
                  3. Vercel detectará automáticamente que es un proyecto <em>Vite React</em>. Haz clic en <strong>"Deploy"</strong>.
                </p>
                <div className="pl-10 p-3 rounded-lg bg-emerald-950/30 border border-emerald-600/30 text-emerald-300 text-[11px]">
                  ¡En menos de 60 segundos la página estará viva en internet con certificado de seguridad SSL (candadito verde https://) gratis para siempre!
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-amber-400 text-neutral-950 font-bold flex items-center justify-center shrink-0">
                    3
                  </div>
                  <h3 className="text-sm font-bold text-neutral-100">
                    Compartir el enlace con la Congregación
                  </h3>
                </div>
                <p className="text-neutral-400 pl-10">
                  Vercel te dará una dirección gratuita como <code className="text-amber-300 bg-neutral-900 px-1.5 py-0.5 rounded">vidaconproposito.vercel.app</code>. Puedes compartirla en los boletines dominicales, WhatsApp de la iglesia y redes sociales inmediatamente.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: PLATAFORMAS GRATUITAS */}
          {activeTab === 'plataformas' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-neutral-100 text-sm">Vercel (Recomendado #1)</span>
                  <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded">100% Gratis</span>
                </div>
                <p className="text-neutral-400 text-[11px] leading-relaxed">
                  La plataforma más rápida del mundo para aplicaciones React. Incluye 100 GB de ancho de banda mensual (más que suficiente para miles de visitas diarias), certificado HTTPS y despliegue automático con cada cambio.
                </p>
                <div className="pt-2 text-neutral-400 text-[11px]">
                  Web: <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline">vercel.com</a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-neutral-100 text-sm">Netlify</span>
                  <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded">100% Gratis</span>
                </div>
                <p className="text-neutral-400 text-[11px] leading-relaxed">
                  Excelente alternativa. Incluso te permite arrastrar la carpeta <code className="text-amber-300">dist</code> compilada directamente con el ratón sin necesidad de usar comandos de consola.
                </p>
                <div className="pt-2 text-neutral-400 text-[11px]">
                  Web: <a href="https://netlify.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline">netlify.com</a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-neutral-100 text-sm">Cloudflare Pages</span>
                  <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded">Sin Límites</span>
                </div>
                <p className="text-neutral-400 text-[11px] leading-relaxed">
                  Ofrece ancho de banda ilimitado y protección contra caídas de red. Ideal si la iglesia transmite eventos masivos o conferencias distritales de las Asambleas de Dios.
                </p>
                <div className="pt-2 text-neutral-400 text-[11px]">
                  Web: <a href="https://pages.cloudflare.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline">pages.cloudflare.com</a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-neutral-100 text-sm">GitHub Pages</span>
                  <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded">100% Gratis</span>
                </div>
                <p className="text-neutral-400 text-[11px] leading-relaxed">
                  Hospedaje directo desde el repositorio oficial de GitHub de la iglesia bajo la dirección <code className="text-amber-300">tuiglesia.github.io</code>.
                </p>
                <div className="pt-2 text-neutral-400 text-[11px]">
                  Web: <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline">pages.github.com</a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: DOMINIO WEB */}
          {activeTab === 'dominio' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
                <h4 className="text-sm font-bold text-amber-300">Opción A: Subdominio 100% Gratuito de por Vida</h4>
                <p className="text-neutral-300 leading-relaxed text-xs">
                  Tanto Vercel como Netlify te regalan un subdominio gratis con certificado SSL:
                </p>
                <ul className="list-disc list-inside text-neutral-400 space-y-1">
                  <li><code className="text-amber-300">https://vidaconproposito.vercel.app</code></li>
                  <li><code className="text-amber-300">https://vidaconproposito-ad.netlify.app</code></li>
                </ul>
                <p className="text-[11px] text-neutral-500">
                  Costo: $0. No caduca nunca y no requiere tarjeta de crédito.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
                <h4 className="text-sm font-bold text-neutral-100">Opción B: Dominio Propio Personalizado (ej. .org o .com)</h4>
                <p className="text-neutral-300 leading-relaxed text-xs">
                  Si la junta de la iglesia decide comprar un dominio formal como <code className="text-amber-300">vidaconproposito.org</code>:
                </p>
                <ul className="list-disc list-inside text-neutral-400 space-y-1 text-xs">
                  <li>Solo pagas el registro del nombre (aproximadamente $8 a $10 al año).</li>
                  <li>Los mejores y más económicos sin cobros ocultos: <strong>Cloudflare Registrar</strong>, <strong>Namecheap</strong> o <strong>Porkbun</strong>.</li>
                  <li>El hosting en Vercel sigue siendo <strong>100% GRATIS</strong>; solo conectas el dominio en 2 clics.</li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 4: HERRAMIENTAS GRATIS PARA IGLESIAS */}
          {activeTab === 'herramientas' && (
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-red-950/40 text-red-400 shrink-0">
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-200">YouTube Live & Facebook Live (Gratis sin límite)</h4>
                  <p className="text-neutral-400 text-[11px] mt-0.5">
                    Permite transmitir el culto en vivo todos los domingos en alta definición sin pagar servidores de streaming. Luego puedes incrustar el video directamente en la sección "Prédicas" de esta web.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-950/40 text-emerald-400 shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-200">Formspree o EmailJS para Peticiones de Oración</h4>
                  <p className="text-neutral-400 text-[11px] mt-0.5">
                    Envía hasta 50 mensajes y peticiones de oración mensuales gratis directamente al correo de la secretaría de la iglesia sin necesidad de base de datos propia.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-950/40 text-amber-400 shrink-0">
                  <Gift className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-200">Canva para Iglesias y ONGs (Canva Pro Gratis)</h4>
                  <p className="text-neutral-400 text-[11px] mt-0.5">
                    Canva ofrece su versión Pro de forma 100% gratuita para organizaciones e iglesias sin fines de lucro registradas, ideal para diseñar banners de cultos y redes sociales.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-sky-950/40 text-sky-400 shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-200">Google for Nonprofits (Google para Organizaciones)</h4>
                  <p className="text-neutral-400 text-[11px] mt-0.5">
                    Otorga correos de Google Workspace institucionales gratuitos (@tuiglesia.org), Google Drive para documentos pastorales y hasta $10,000/mes en Google Ad Grants para que personas que busquen una iglesia en tu ciudad te encuentren en Google.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-neutral-800 bg-neutral-950/80 flex items-center justify-between">
          <span className="text-[11px] text-neutral-400">
            ¿Deseas personalizar los datos de la iglesia antes de publicar?
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
          >
            Entendido, Cerrar Guía
          </button>
        </div>

      </div>
    </div>
  );
};
