import React, { useState, useEffect, useCallback, useRef, lazy, Suspense } from 'react';
import { Brain } from 'lucide-react';
import { throttle, scrollToElement } from './utils';
import { Language } from './types';
import { content } from './data/content';
import { SCROLL_THRESHOLD } from './constants';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';

// Lazy load below-the-fold components
const Curriculum = lazy(() => import('./components/Curriculum').then(m => ({ default: m.Curriculum })));
const ToolsShowcase = lazy(() => import('./components/ToolsShowcase').then(m => ({ default: m.ToolsShowcase })));
const HowItWorks = lazy(() => import('./components/HowItWorks').then(m => ({ default: m.HowItWorks })));
const Authority = lazy(() => import('./components/Authority').then(m => ({ default: m.Authority })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const FAQSection = lazy(() => import('./components/FAQSection').then(m => ({ default: m.FAQSection })));
const CTA = lazy(() => import('./components/CTA').then(m => ({ default: m.CTA })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

// Legal pages
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const RefundPolicy = lazy(() => import('./components/RefundPolicy').then(m => ({ default: m.RefundPolicy })));
const TermsAndConditions = lazy(() => import('./components/TermsAndConditions').then(m => ({ default: m.TermsAndConditions })));
const ContactUsPage = lazy(() => import('./components/ContactUsPage').then(m => ({ default: m.ContactUsPage })));

type View = 'home' | 'privacy' | 'refund' | 'terms' | 'contact';

function App() {
  const [lang, setLang] = useState<Language>('EN');
  const [currentView, setCurrentView] = useState<View>('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    }, 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal, .stagger-children').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentView]);

  // URL-based routing
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');
    if (page === 'refund' || page === 'refund-policy') setCurrentView('refund');
    else if (page === 'terms') setCurrentView('terms');
    else if (page === 'contact') setCurrentView('contact');
    else if (page === 'privacy') setCurrentView('privacy');
  }, []);

  const scrollToEnroll = useCallback((e?: React.MouseEvent) => {
    scrollToElement('enroll', e);
  }, []);

  const handleBack = useCallback(() => {
    setCurrentView('home');
    window.history.pushState({}, '', window.location.pathname);
    window.scrollTo(0, 0);
  }, []);

  const handlePrivacyClick = useCallback(() => {
    setCurrentView('privacy');
    window.scrollTo(0, 0);
  }, []);

  const handleRefundClick = useCallback(() => {
    setCurrentView('refund');
    window.scrollTo(0, 0);
  }, []);

  const handleTermsClick = useCallback(() => {
    setCurrentView('terms');
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = useCallback(() => {
    setCurrentView('contact');
    window.scrollTo(0, 0);
  }, []);

  // Legal pages
  if (currentView === 'privacy') return <Suspense fallback={null}><PrivacyPolicy lang={lang} onBack={handleBack} /></Suspense>;
  if (currentView === 'refund') return <Suspense fallback={null}><RefundPolicy lang={lang} onBack={handleBack} /></Suspense>;
  if (currentView === 'terms') return <Suspense fallback={null}><TermsAndConditions lang={lang} onBack={handleBack} /></Suspense>;
  if (currentView === 'contact') return <Suspense fallback={null}><ContactUsPage lang={lang} onBack={handleBack} /></Suspense>;

  const t = content.nav;

  return (
    <div className={lang === 'GU' ? 'font-gujarati' : ''}>
      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="container">
          <div className="nav-inner">
            <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="nav-logo-icon">
                <Brain style={{ width: 22, height: 22 }} />
              </div>
              <div>
                <div className="nav-logo-text">AI Pathshala</div>
                <div className="nav-logo-subtitle">
                  {lang === 'EN' ? t.subtitle.en : t.subtitle.gu}
                </div>
              </div>
            </div>

            <div className="nav-actions">
              {/* Language Toggle */}
              <div className="lang-toggle">
                <button
                  className={lang === 'EN' ? 'active' : ''}
                  onClick={() => setLang('EN')}
                >
                  EN
                </button>
                <button
                  className={lang === 'GU' ? 'active' : ''}
                  onClick={() => setLang('GU')}
                >
                  ગુ
                </button>
              </div>

              {/* Desktop CTA */}
              <button
                onClick={scrollToEnroll}
                className="btn btn-primary nav-cta-desktop"
                style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
              >
                {lang === 'EN' ? t.cta.en : t.cta.gu}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero lang={lang} />
        <ProblemSolution lang={lang} />

        <Suspense fallback={null}>
          <Curriculum lang={lang} />
          <ToolsShowcase lang={lang} />
          <HowItWorks lang={lang} />
          <Authority lang={lang} />
          <Testimonials lang={lang} />
          <FAQSection lang={lang} />
          <CTA lang={lang} />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer
          lang={lang}
          onPrivacyClick={handlePrivacyClick}
          onRefundClick={handleRefundClick}
          onTermsClick={handleTermsClick}
          onContactClick={handleContactClick}
        />
      </Suspense>

      {/* Mobile Floating CTA */}
      <div className="mobile-cta">
        <button onClick={scrollToEnroll} className="btn btn-whatsapp btn-shimmer">
          {lang === 'EN' ? content.cta.buttonText.en : content.cta.buttonText.gu}
        </button>
      </div>
    </div>
  );
}

export default App;