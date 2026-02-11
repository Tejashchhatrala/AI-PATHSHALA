import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { LanguageToggle } from './components/LanguageToggle';
import { Hero } from './components/Hero';
import { ComputerEra } from './components/ComputerEra';
import { PainPoints } from './components/PainPoints';
import { WhyUs } from './components/WhyUs';
import { Authority } from './components/Authority';
import { Solution } from './components/Solution';
import { DemoSection } from './components/DemoSection';
import { WhoIsThisFor } from './components/WhoIsThisFor';
import { Curriculum } from './components/Curriculum';
import { TheStack } from './components/TheStack';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ExitIntentPopup } from './components/ExitIntentPopup';

function App() {
  const [lang, setLang] = useState<Language>('GU');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToEnroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('enroll');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-brand-50 text-brand-950 ${lang === 'GU' ? 'font-gujarati' : 'font-sans'}`}>
      {/* Navigation / Header */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-lg border-brand-100 shadow-sm py-3' 
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-brand-400 to-brand-500 rounded-xl flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-[0_4px_15px_rgba(255,148,148,0.4)] transform group-hover:scale-105 transition-transform duration-300">
              S
            </div>
            <div className="flex flex-col">
              <span className={`font-black text-lg md:text-2xl text-brand-950 leading-none tracking-tight`}>SarvottamAI</span>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-brand-600 font-bold">By Tejas Chhatrala</span>
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-6">
             {/* Simple CTA in Nav */}
             <button 
                onClick={scrollToEnroll}
                className="hidden md:flex items-center gap-2 text-sm font-bold text-brand-900 bg-white hover:bg-brand-50 border border-brand-100 px-6 py-2.5 rounded-full transition-all shadow-sm hover:-translate-y-0.5 transform active:scale-95 cursor-pointer"
             >
               {lang === 'EN' ? 'Book Free Call' : 'ફ્રી કોલ બુક કરો'}
             </button>
             <LanguageToggle lang={lang} setLang={setLang} />
          </div>
        </div>
      </nav>

      {/* Main Content Sections - Strict Sales Funnel Flow */}
      <main>
        {/* 1. Hook & Promise (Cream & Salmon Hero) */}
        <Hero lang={lang} />
        
        {/* 2. The Context (Why Now?) */}
        <ComputerEra lang={lang} />
        
        {/* 3. The Pain (Agitation) */}
        <PainPoints lang={lang} />
        
        {/* 4. The Solution (New Mechanism) */}
        <Solution lang={lang} />

        {/* 5. The Proof (Demo) */}
        <DemoSection lang={lang} />
        
        {/* 6. Segmentation */}
        <WhoIsThisFor lang={lang} />

        {/* 7. Differentiation (Why Us) */}
        <WhyUs lang={lang} />
        
        {/* 8. Authority (Trust) */}
        <Authority lang={lang} />
        
        {/* 9. The Plan (Timeline) */}
        <Curriculum lang={lang} />

        {/* 10. The Offer Stack (Value Build up) */}
        <TheStack lang={lang} />

        {/* 11. Social Proof (Testimonials) */}
        <Testimonials lang={lang} />
        
        {/* 12. Objection Handling */}
        <FAQ lang={lang} />
        
        {/* 13. Final Action */}
        <CTA lang={lang} />
      </main>

      <Footer lang={lang} />
      
      {/* New Components */}
      <ExitIntentPopup lang={lang} />
      
      {/* Mobile Floating CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-md border-t border-brand-200 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] md:hidden z-40 pb-6">
        <button 
           onClick={scrollToEnroll}
           className="flex items-center justify-center w-full font-bold text-white bg-green-600 py-3.5 rounded-xl shadow-lg shadow-green-500/30 active:scale-95 transition-transform cursor-pointer"
        >
          {lang === 'EN' ? 'Book Free Call' : 'ફ્રી કોલ બુક કરો'}
        </button>
      </div>
    </div>
  );
}

export default App;