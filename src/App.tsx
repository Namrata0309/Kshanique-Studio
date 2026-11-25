import {useEffect, useState} from 'react';
import {AboutAndServices} from './components/AboutAndServices';
import {ContactFooter} from './components/ContactFooter';
import {DemosShowcase} from './components/DemosShowcase';
import {FloatingWhatsApp} from './components/FloatingWhatsApp';
import {HeroSection} from './components/HeroSection';
import {LiveDemoModal} from './components/LiveDemoModal';
import {Navbar} from './components/Navbar';
import {PricingAndWhyUs} from './components/PricingAndWhyUs';
import {ProcessTestimonialsFaq} from './components/ProcessTestimonialsFaq';
import {QuoteModal} from './components/QuoteModal';
import {DemoType} from './data/studioData';

export default function App() {
  const [activeDemo, setActiveDemo] = useState<DemoType | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash;
      if (hash === '#demo/birthday') setActiveDemo('birthday');
      else if (hash === '#demo/wedding') setActiveDemo('wedding');
      else if (hash === '#demo/engagement') setActiveDemo('engagement');
    };
    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  const handleOpenDemo = (demo: DemoType) => {
    setActiveDemo(demo);
    window.history.replaceState(null, '', `#demo/${demo}`);
  };

  const handleCloseDemo = () => {
    setActiveDemo(null);
    if (window.location.hash.startsWith('#demo/')) {
      window.history.replaceState(null, '', '#demos');
    }
  };

  const handleOpenQuote = (serviceName?: string) => {
    setPreselectedService(serviceName);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FFF9F3] text-[#292525]">
      <Navbar onOpenQuote={handleOpenQuote} />

      <main>
        <HeroSection onOpenDemo={handleOpenDemo} onOpenQuote={handleOpenQuote} />

        <AboutAndServices onOpenDemo={handleOpenDemo} onOpenQuote={handleOpenQuote} />

        <DemosShowcase onOpenDemo={handleOpenDemo} />

        <PricingAndWhyUs onOpenQuote={handleOpenQuote} />

        <ProcessTestimonialsFaq />

        <ContactFooter />
      </main>

      <FloatingWhatsApp />

      <LiveDemoModal
        activeDemo={activeDemo}
        onSelectDemo={handleOpenDemo}
        onClose={handleCloseDemo}
        onOrderSimilar={handleOpenQuote}
      />

      <QuoteModal
        isOpen={quoteModalOpen}
        preselectedService={preselectedService}
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  );
}
