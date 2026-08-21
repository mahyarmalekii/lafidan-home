import { useLanguage } from './LanguageContext';

interface NavbarProps {
  currentView: 'home' | 'samples';
  onNavigate: (view: 'home' | 'samples', targetId?: string) => void;
  onOpenContact: () => void;
}

export const Navbar = ({ currentView, onNavigate, onOpenContact }: NavbarProps) => {
  const { t, language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 md:px-12 lg:px-16 pt-4 pb-2 transition-all duration-300">
      <nav className="liquid-glass border border-white/10 rounded-2xl px-5 py-3 flex items-center justify-between shadow-2xl backdrop-blur-xl bg-black/60">
        
        {/* Brand / Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 text-left cursor-pointer group"
        >
          <img
            src="/logo-emblem.png"
            alt="Lafidan Bauunternehmen Logo"
            className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_12px_rgba(212,175,55,0.3)]"
          />
          <div>
            <div className="text-base sm:text-lg font-medium tracking-tight text-white flex items-center gap-1.5 leading-none">
              <span>Lafidan</span>
            </div>
            <div className="text-[10px] text-gray-400 font-mono tracking-wider hidden sm:block mt-0.5">
              BAUUNTERNEHMEN · BERLIN
            </div>
          </div>
        </button>
        
        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
          <button
            onClick={() => onNavigate('home', 'hero')}
            className={`transition-colors cursor-pointer ${currentView === 'home' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
          >
            {t.nav.home}
          </button>
          <button
            onClick={() => onNavigate('home', 'story')}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            {t.nav.story}
          </button>
          <button
            onClick={() => onNavigate('home', 'services')}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            {t.nav.services}
          </button>
          <button
            onClick={() => onNavigate('home', 'specialization')}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            {t.nav.specialization}
          </button>
          
          {/* SAMPLES HIGHLIGHT LINK */}
          <button
            onClick={() => onNavigate('samples')}
            className={`relative px-3 py-1 rounded-lg transition-all cursor-pointer font-medium ${
              currentView === 'samples'
                ? 'bg-white text-black font-semibold shadow-md'
                : 'text-white hover:bg-white/10 border border-white/20'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <span>{t.nav.samples}</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </span>
          </button>

          <button
            onClick={() => onNavigate('home', 'why-us')}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            {t.nav.whyUs}
          </button>
          <button
            onClick={() => onNavigate('home', 'contact')}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            {t.nav.contact}
          </button>
        </div>

        {/* Right Action & Language Switcher */}
        <div className="flex items-center gap-3">
          
          {/* Quick Samples button on mobile */}
          <button
            onClick={() => onNavigate(currentView === 'samples' ? 'home' : 'samples')}
            className="lg:hidden text-xs px-3 py-1.5 rounded-lg bg-white/10 text-white border border-white/15 cursor-pointer"
          >
            {currentView === 'samples' ? t.nav.home : t.nav.samples}
          </button>

          {/* Language Toggle */}
          <div className="flex bg-white/10 rounded-lg p-1 text-xs font-medium border border-white/10">
            <button 
              onClick={() => setLanguage('de')}
              className={`px-2 py-1 rounded-md transition-colors cursor-pointer ${language === 'de' ? 'bg-white text-black font-semibold' : 'text-gray-400 hover:text-white'}`}
            >
              DE
            </button>
            <button 
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded-md transition-colors cursor-pointer ${language === 'en' ? 'bg-white text-black font-semibold' : 'text-gray-400 hover:text-white'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLanguage('tr')}
              className={`px-2 py-1 rounded-md transition-colors cursor-pointer ${language === 'tr' ? 'bg-white text-black font-semibold' : 'text-gray-400 hover:text-white'}`}
            >
              TR
            </button>
          </div>
          
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl text-xs font-semibold hover:bg-gray-200 transition-colors cursor-pointer shadow-md"
          >
            <span>{t.nav.startChat}</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

      </nav>
    </div>
  );
};
