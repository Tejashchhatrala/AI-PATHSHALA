import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { Brain } from 'lucide-react';
import { throttle, scrollToElement } from './utils';
import { Language } from './types';
import { LanguageToggle } from './components/LanguageToggle';
import { Hero } from './components/Hero';
import { TheRealProblem } from './components/TheRealProblem';

// Lazy load components below the fold and conditional views
const WhyUs = lazy(() => import('./components/WhyUs').then(m => ({ default: m.WhyUs })));
const Authority = lazy(() => import('./components/Authority').then(m => ({ default: m.Authority })));
const Introducing = lazy(() => import('./components/Introducing').then(m => ({ default: m.Introducing })));
const WhatChanges = lazy(() => import('./components/WhatChanges').then(m => ({ default: m.WhatChanges })));
const WhoIsThisFor = lazy(() => import('./components/WhoIsThisFor').then(m => ({ default: m.WhoIsThisFor })));
const HowItWorks = lazy(() => import('./components/HowItWorks').then(m => ({ default: m.HowItWorks })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const CTA = lazy(() => import('./components/CTA').then(m => ({ default: m.CTA })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const ExitIntentPopup = lazy(() => import('./components/ExitIntentPopup').then(m => ({ default: m.ExitIntentPopup })));
const StudentJourney = lazy(() => import('./components/StudentJourney').then(m => ({ default: m.StudentJourney })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const RefundPolicy = lazy(() => import('./components/RefundPolicy').then(m => ({ default: m.RefundPolicy })));
const TermsAndConditions = lazy(() => import('./components/TermsAndConditions').then(m => ({ default: m.TermsAndConditions })));
const ContactUsPage = lazy(() => import('./components/ContactUsPage').then(m => ({ default: m.ContactUsPage })));

type View = 'home' | 'privacy' | 'refund' | 'terms' | 'contact';

function App() {
  const [lang, setLang] = useState<Language>('GU');
  const [currentView, setCurrentView] = useState<View>('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrolled(window.scrollY > 20);
    }, 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle URL query parameters for routing
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');

    if (page === 'refund' || page === 'refund-policy') {
      setCurrentView('refund');
    } else if (page === 'terms') {
      setCurrentView('terms');
    } else if (page === 'contact') {
      setCurrentView('contact');
    } else if (page === 'privacy') {
      setCurrentView('privacy');
    }
  }, []);

  const scrollToEnroll = useCallback((e: React.MouseEvent) => {
    scrollToElement('enroll', e);
  }, []);

  const handleBack = useCallback(() => {
    setCurrentView('home');
    // Optional: Reset URL to root without reloading
    window.history.pushState({}, '', window.location.pathname);
    window.scrollTo(0, 0);
  }, []);

  const handlePrivacyClick = useCallback(() => {
    setCurrentView('privacy');
    window.scrollTo(0, 0);
  }, []);

  // Conditional Rendering for Legal/Info Pages
  if (currentView === 'privacy') {
    return (
      <Suspense fallback={null}>
        <PrivacyPolicy lang={lang} onBack={handleBack} />
      </Suspense>
    );
  }
  if (currentView === 'refund') {
    return (
      <Suspense fallback={null}>
        <RefundPolicy lang={lang} onBack={handleBack} />
      </Suspense>
    );
  }
  if (currentView === 'terms') {
    return (
      <Suspense fallback={null}>
        <TermsAndConditions lang={lang} onBack={handleBack} />
      </Suspense>
    );
  }
  if (currentView === 'contact') {
    return (
      <Suspense fallback={null}>
        <ContactUsPage lang={lang} onBack={handleBack} />
      </Suspense>
    );
  }

  return (
    <div className={`min-h-screen bg-brand-50 text-brand-950 pb-24 md:pb-0 ${lang === 'GU' ? 'font-gujarati' : 'font-sans'}`}>
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
              <Brain className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <div className="flex flex-col">
              <span className={`font-black text-lg md:text-2xl text-brand-950 leading-none tracking-tight`}>AI Pathshala</span>
              <span className="text-[10px] md:text-[11px] font-bold text-brand-600 leading-tight mt-0.5">AI-Based Study Method for Gujarati Students</span>
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
        
        {/* 2. The Real Problem (Agitation) */}
        <TheRealProblem lang={lang} />
        
        <Suspense fallback={null}>
          {/* 3. Introducing (New Mechanism) */}
          <Introducing lang={lang} />

          {/* 4. Student Journey (Timeline) */}
          <StudentJourney lang={lang} />

          {/* 5. What Changes */}
          <WhatChanges lang={lang} />

          {/* 6. Segmentation */}
          <WhoIsThisFor lang={lang} />

          {/* 7. How The System Works */}
          <HowItWorks lang={lang} />

          {/* 8. Why Parents Trust Us */}
          <WhyUs lang={lang} />

          {/* 9. Meet Your Mentor */}
          <Authority lang={lang} />

          {/* 10. Social Proof (Testimonials) */}
          <Testimonials lang={lang} />

          {/* 11. FAQ Section */}
          <FAQ lang={lang} />

          {/* 12. Final Action */}
          <CTA lang={lang} />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer lang={lang} onPrivacyClick={handlePrivacyClick} />

        {/* New Components */}
        <ExitIntentPopup lang={lang} />
      </Suspense>
      
      {/* Mobile Floating CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-md border-t border-brand-200 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] md:hidden z-40 pb-6">
        <button 
           onClick={scrollToEnroll}
           className="flex items-center justify-center w-full font-bold text-white bg-brand-600 py-3.5 rounded-xl shadow-lg shadow-brand-500/30 active:scale-95 transition-transform cursor-pointer animate-wiggle-interval"
        >
          {lang === 'EN' ? 'Book Free Call' : 'ફ્રી કોલ બુક કરો'}
        </button>
      </div>
    </div>
  );
}

export default App;