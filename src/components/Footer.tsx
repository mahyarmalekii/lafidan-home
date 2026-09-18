import { useLanguage } from './LanguageContext';

interface FooterProps {
  onOpenLegal: (tab: 'impressum' | 'privacy') => void;
}

export const Footer = ({ onOpenLegal }: FooterProps) => {
  const { t } = useLanguage();

  return (
    <footer className="py-16 px-4 sm:px-6 md:px-12 lg:px-16 bg-[#040404] relative z-10 border-t border-white/10 text-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        
        {/* Company Brand & Address */}
        <div>
          <div className="text-xl font-medium tracking-tight text-white mb-2 flex items-center gap-3">
            <img
              src="/logo-emblem.png"
              alt="Lafidan Bauunternehmen Logo"
              className="h-10 w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.25)]"
            />
            <span>Lafidan Bauunternehmen UG</span>
          </div>
          <p className="text-xs text-gray-400 font-mono leading-relaxed">
            Bundesallee 187, 10717 Berlin • Deutschland<br />
            Geschäftsführung: Fatemeh Eyvazi • St.-Nr.: 29/418/31172
          </p>
        </div>

        {/* Direct Contact & Legal Links */}
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
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => onOpenLegal('impressum')}
                className="text-gray-300 hover:text-white underline cursor-pointer transition-colors"
              >
                {t.footer.impressum}
              </button>
              <span className="text-gray-600">•</span>
              <button
                type="button"
                onClick={() => onOpenLegal('privacy')}
                className="text-gray-300 hover:text-white underline cursor-pointer transition-colors"
              >
                {t.footer.privacy}
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-400 font-mono">
          &copy; {new Date().getFullYear()} {t.footer.rights}
        </div>

      </div>
    </footer>
  );
};
