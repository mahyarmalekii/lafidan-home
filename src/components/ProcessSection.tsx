import { FadeIn } from './FadeIn';
import { useLanguage } from './LanguageContext';

export const ProcessSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 px-6 md:px-12 lg:px-16 bg-[#0a0a0a] relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <FadeIn delay={200}>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-20 text-center text-white">
            {t.process.title}
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-white/10" />

          {t.process.steps.map((step, idx) => (
            <div key={idx} className="relative z-10">
              <FadeIn delay={200 + (idx * 200)}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-black border border-white/20 flex items-center justify-center text-white font-mono mb-8 liquid-glass shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-medium mb-4 text-white">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
