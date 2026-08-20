import { FadeIn } from './FadeIn';
import { useLanguage } from './LanguageContext';
import { ThreeCanvas } from './ThreeCanvas';

export const StorySection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="story" className="py-32 px-4 sm:px-6 md:px-12 lg:px-16 bg-black relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Narrative */}
        <div className="lg:col-span-7">
          <FadeIn delay={100}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-gray-300 mb-4">
              <span>{t.story.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-8 text-white leading-tight">
              {t.story.title}
            </h2>
          </FadeIn>
          
          <FadeIn delay={200}>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              {t.story.p1}
            </p>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6">
              {t.story.p2}
            </p>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              {t.story.p3}
            </p>
          </FadeIn>

          {/* Quick Metrics */}
          <FadeIn delay={300} className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-4">
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white font-mono">Q1–Q4</div>
              <div className="text-xs text-gray-400 font-sans mt-1">
                {language === 'de' ? 'Spachtel- & Oberflächengüte' : language === 'tr' ? 'Alçı Sıva & Yüzey Kalitesi' : 'Surface Skimming Standard'}
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white font-mono">100%</div>
              <div className="text-xs text-gray-400 font-sans mt-1">
                {language === 'de' ? 'Alles aus einer Hand' : language === 'tr' ? 'Tek Elden Teslimat' : 'Turnkey Single-Source'}
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white font-mono">TR & DE</div>
              <div className="text-xs text-gray-400 font-sans mt-1">
                {language === 'de' ? 'Direkt-Beschaffung' : language === 'tr' ? 'Doğrudan Üretici Tedariki' : 'Direct Procurement'}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right Column: 3D Interactive Architectural Visualizer */}
        <div className="lg:col-span-5">
          <FadeIn delay={200}>
            <div className="relative h-[480px] w-full rounded-3xl overflow-hidden liquid-glass border border-white/15 bg-gradient-to-br from-white/5 to-black p-8 flex flex-col justify-between group shadow-2xl">
              
              {/* Interactive 3D Three.js Canvas */}
              <ThreeCanvas />

              <div className="relative z-10 flex items-center justify-between pointer-events-none">
                <span className="text-xs font-mono text-gray-300">LH LAFIDAN 3D ARCHITECTURE</span>
                <span className="px-2.5 py-1 rounded-full bg-white/10 text-[10px] font-mono text-emerald-400 border border-white/10">INTERACTIVE 3D</span>
              </div>

              <div className="relative z-10 text-center pointer-events-none my-auto">
                <div className="text-2xl font-light tracking-widest text-white">LAFIDAN</div>
                <div className="text-[10px] font-mono text-gray-400 tracking-widest mt-1 uppercase">3D Raumkonzepte & Planung</div>
              </div>

              <div className="relative z-10 text-xs text-gray-400 font-mono border-t border-white/10 pt-4 flex justify-between pointer-events-none">
                <span>Bundesallee 187, Berlin</span>
                <span>0170 8853978</span>
              </div>

            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};
