import { useState, useEffect } from 'react';
import { AnimatedHeading } from './components/AnimatedHeading';
import { FadeIn } from './components/FadeIn';
import { Navbar } from './components/Navbar';
import { StorySection } from './components/StorySection';
import { ServicesSection } from './components/ServicesSection';
import { SpecializationSection } from './components/SpecializationSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ProcessSection } from './components/ProcessSection';
import { PortfolioSection } from './components/PortfolioSection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { ContactModal } from './components/ContactModal';
import { SamplesPage } from './components/SamplesPage';
import { Footer } from './components/Footer';
import { LanguageProvider, useLanguage } from './components/LanguageContext';

function AppContent() {
  const { t } = useLanguage();
  const [currentView, setCurrentView] = useState<'home' | 'samples'>('home');
  const [initialProjectId, setInitialProjectId] = useState<string | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'samples' || hash.startsWith('samples/')) {
        setCurrentView('samples');
        const proj = hash.split('/')[1];
        if (proj) setInitialProjectId(proj);
      } else {
        setCurrentView('home');
        if (hash) {
          setTimeout(() => {
            const el = document.getElementById(hash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view: 'home' | 'samples', targetId?: string) => {
    setCurrentView(view);
    if (view === 'samples') {
      window.location.hash = 'samples';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (targetId) {
        window.location.hash = targetId;
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.location.hash = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleOpenSamplesWithProject = (projectId?: string) => {
    if (projectId) {
      setInitialProjectId(projectId);
      window.location.hash = `samples/${projectId}`;
    } else {
      window.location.hash = 'samples';
    }
    setCurrentView('samples');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      
      {/* Sticky Top Navigation */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      {/* Main View Router */}
      {currentView === 'samples' ? (
        <SamplesPage
          initialProjectId={initialProjectId}
          onNavigateHome={() => handleNavigate('home')}
          onRequestContact={() => setIsContactModalOpen(true)}
        />
      ) : (
        <main>
          {/* Hero Section */}
          <div id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
            {/* Background Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0"
            >
              <source
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
                type="video/mp4"
              />
            </video>

            {/* Hero Content Overlay */}
            <div className="relative z-10 flex flex-col flex-1 px-6 md:px-12 lg:px-16 justify-end pb-12 lg:pb-16 pt-32 max-w-7xl mx-auto w-full">
              <div className="lg:grid lg:grid-cols-2 lg:items-end w-full">
                
                {/* Left Column */}
                <div className="mb-8 lg:mb-0">
                  <AnimatedHeading 
                    text={t.hero.heading}
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4"
                    style={{ letterSpacing: '-0.04em' }}
                  />
                  
                  <FadeIn delay={800} duration={1000}>
                    <p className="text-base md:text-lg text-gray-300 mb-5 max-w-2xl">
                      {t.hero.subheading}
                    </p>
                  </FadeIn>

                  <FadeIn delay={1200} duration={1000} className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => setIsContactModalOpen(true)}
                      className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      {t.hero.startChat}
                    </button>
                    <button 
                      onClick={() => handleOpenSamplesWithProject()}
                      className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors cursor-pointer"
                    >
                      {t.hero.exploreNow}
                    </button>
                  </FadeIn>
                </div>

                {/* Right Column */}
                <div className="flex items-end justify-start lg:justify-end">
                  <FadeIn delay={1400} duration={1000}>
                    <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                      <p className="text-lg md:text-xl lg:text-2xl font-light">
                        {t.hero.tag}
                      </p>
                    </div>
                  </FadeIn>
                </div>

              </div>
            </div>
          </div>

          {/* Detailed Landing Page Sections */}
          <StorySection />
          <ServicesSection onExploreSamples={() => handleOpenSamplesWithProject()} />
          <SpecializationSection />
          <PortfolioSection onOpenSamples={(pId) => handleOpenSamplesWithProject(pId)} />
          <WhyUsSection />
          <ProcessSection />
          <CtaSection />
          <ContactSection />
        </main>
      )}

      {/* Footer */}
      <Footer />

      {/* Global Quick Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
