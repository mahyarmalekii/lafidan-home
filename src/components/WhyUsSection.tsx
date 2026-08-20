import { FadeIn } from './FadeIn';
import { useLanguage } from './LanguageContext';

export const WhyUsSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="why-us" className="py-32 px-4 sm:px-6 md:px-12 lg:px-16 bg-[#060606] relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn delay={100}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-gray-300 mb-4">
              <span>{language === 'de' ? 'QUALITÄT & ZUVERLÄSSIGKEIT' : language === 'tr' ? 'KALİTE & GÜVENİLİRLİK' : 'QUALITY & RELIABILITY'}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-4">
              {t.whyUs.title}
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              {t.whyUs.subtitle}
            </p>
          </FadeIn>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {t.whyUs.pillars.map((pillar, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div className="liquid-glass border border-white/10 rounded-3xl p-8 h-full bg-black/40 hover:border-white/25 transition-all group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center font-mono text-sm text-white group-hover:bg-white group-hover:text-black transition-colors">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-medium text-white">{pillar.title}</h3>
                </div>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Target Clients Banner */}
        <FadeIn delay={200}>
          <div className="liquid-glass border border-white/10 rounded-3xl p-8 sm:p-12 bg-black/50">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-2">
                {language === 'de' ? 'PARTNERSCHAFT AUF AUGENHÖHE' : language === 'tr' ? 'GÜVENİLİR İŞ ORTAKLIĞI' : 'TRUSTED PARTNERSHIP'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-white mb-3">
                {t.clients.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                {t.clients.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {t.clients.list.map((clientGroup, cIdx) => (
                <div
                  key={cIdx}
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-center text-xs sm:text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {clientGroup}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};
