import { FadeIn } from './FadeIn';

const pillars = [
  {
    title: 'Investing',
    desc: 'Backing bold founders with early-stage capital and unwavering conviction in disruptive technologies.',
    icon: '01'
  },
  {
    title: 'Building',
    desc: 'Co-creating ventures from scratch, providing the technical and operational scaffolding to accelerate growth.',
    icon: '02'
  },
  {
    title: 'Advisory',
    desc: 'Guiding scale-ups through complex market shifts, capital allocation, and strategic milestones.',
    icon: '03'
  }
];

export const ExpertiseSection = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-16 bg-[#050505] relative z-10">
      <div className="max-w-7xl mx-auto">
        <FadeIn delay={200}>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-16 text-center">
            Our Core Pillars
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <FadeIn key={idx} delay={200 + (idx * 200)}>
              <div className="liquid-glass border border-white/10 p-8 rounded-2xl h-full flex flex-col hover:border-white/30 transition-colors cursor-pointer group">
                <span className="text-sm font-mono text-gray-500 mb-8 block group-hover:text-white transition-colors">{pillar.icon}</span>
                <h3 className="text-2xl font-medium mb-4">{pillar.title}</h3>
                <p className="text-gray-400 leading-relaxed flex-1">{pillar.desc}</p>
                <div className="mt-8 w-8 h-[1px] bg-white/20 group-hover:w-16 group-hover:bg-white transition-all duration-300" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
