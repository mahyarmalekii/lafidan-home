import { useState } from 'react';
import { useLanguage } from './LanguageContext';

export const Footer = () => {
  const { t, language } = useLanguage();
  const [showImpressum, setShowImpressum] = useState(false);

  return (
    <>
      <footer className="py-16 px-4 sm:px-6 md:px-12 lg:px-16 bg-[#040404] relative z-10 border-t border-white/10 text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          
          {/* Company Brand & Address */}
          <div>
            <div className="text-xl font-medium tracking-tight text-white mb-2 flex items-center gap-3">
              <img
                src="/logo-emblem.png"
                alt="LH Lafidan Home Logo"
                className="h-8 w-auto object-contain"
              />
              <span>LH Lafidan Home UG</span>
            </div>
            <p className="text-xs text-gray-400 font-mono leading-relaxed">
              Bundesallee 187, 10717 Berlin • Deutschland<br />
              Geschäftsführung: Fatemeh Eyvazi • St.-Nr.: 29/418/31172
            </p>
          </div>

          {/* Direct Contact */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 text-sm">
            <div>
              <div className="text-xs font-mono text-gray-500 uppercase mb-1">Telefon</div>
              <a href="tel:+491708853978" className="text-white hover:underline font-mono">
                0170 8853978
              </a>
            </div>
            <div>
              <div className="text-xs font-mono text-gray-500 uppercase mb-1">E-Mail</div>
              <a href="mailto:Lafidanug@gmail.com" className="text-white hover:underline font-mono">
                Lafidanug@gmail.com
              </a>
            </div>
            <div>
              <div className="text-xs font-mono text-gray-500 uppercase mb-1">Rechtliches</div>
              <button
                onClick={() => setShowImpressum(true)}
                className="text-gray-300 hover:text-white underline cursor-pointer"
              >
                {t.footer.impressum}
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-xs text-gray-400 font-mono">
            &copy; {new Date().getFullYear()} {t.footer.rights}
          </div>

        </div>
      </footer>

      {/* Impressum Modal */}
      {showImpressum && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto liquid-glass border border-white/20 rounded-3xl p-8 bg-[#0a0a0a] text-white shadow-2xl">
            
            <button
              onClick={() => setShowImpressum(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white hover:text-black text-white transition-colors cursor-pointer"
            >
              ✕
            </button>

            <h3 className="text-2xl font-light mb-6">
              {language === 'de' ? 'Impressum & Rechtliche Angaben' : language === 'tr' ? 'Künye & Yasal Bilgiler' : 'Imprint & Legal Information'}
            </h3>

            <div className="space-y-4 text-sm text-gray-300 leading-relaxed font-sans">
              <div>
                <h4 className="font-semibold text-white">Angaben gemäß § 5 TMG</h4>
                <p>
                  LH Lafidan Home UG (haftungsbeschränkt)<br />
                  Bundesallee 187<br />
                  10717 Berlin<br />
                  Deutschland
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white">{language === 'tr' ? 'Temsilci' : language === 'de' ? 'Vertreten durch' : 'Represented by'}</h4>
                <p>Fatemeh Eyvazi</p>
              </div>

              <div>
                <h4 className="font-semibold text-white">{language === 'tr' ? 'İletişim' : language === 'de' ? 'Kontakt' : 'Contact'}</h4>
                <p>
                  Telefon: 0170 8853978<br />
                  E-Mail: Lafidanug@gmail.com
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white">{language === 'tr' ? 'Vergi Numarası' : language === 'de' ? 'Steuernummer' : 'Tax Number'}</h4>
                <p>29/418/31172</p>
              </div>

              <div>
                <h4 className="font-semibold text-white">{language === 'tr' ? 'Faaliyet Alanı' : language === 'de' ? 'Unternehmensgegenstand' : 'Business Scope'}</h4>
                <p>
                  Bau, Innenausbau, Spachtelarbeiten Q1–Q4, Malerarbeiten, Fliesen- und Natursteinarbeiten, Trockenbau, Sanierung und Modernisierung, Architektur- und Innenarchitekturplanung, Möbelbeschaffung und Montage.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white">{language === 'tr' ? 'Yasal Sorumluluk' : language === 'de' ? 'Haftung für Inhalte' : 'Liability for Content'}</h4>
                <p className="text-xs text-gray-400">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-right">
              <button
                onClick={() => setShowImpressum(false)}
                className="px-6 py-2 bg-white text-black rounded-xl text-xs font-semibold hover:bg-gray-200 cursor-pointer"
              >
                {language === 'de' ? 'Schließen' : language === 'tr' ? 'Kapat' : 'Close'}
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
