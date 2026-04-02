import React, { useEffect, useRef } from 'react';
import { Video, Globe, Smartphone, CreditCard, ChevronDown } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';
import { scrollToElement } from '../utils';

interface Props {
  lang: Language;
}

const pillIcons = [Video, Globe, CreditCard, Smartphone];

export const Hero: React.FC<Props> = ({ lang }) => {
  const t = content.hero;
  const s = content.stats;
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Stagger animation on mount
    const elements = heroRef.current?.querySelectorAll('.hero-anim');
    elements?.forEach((el, i) => {
      setTimeout(() => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'translateY(0)';
      }, 200 + i * 150);
    });
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      {/* Background */}
      <div className="hero-bg">
        <div className="hero-gradient hero-gradient-1" />
        <div className="hero-gradient hero-gradient-2" />
        <div className="hero-gradient hero-gradient-3" />
        <div className="hero-grid" />
      </div>

      <div className="hero-content">
        {/* Badge */}
        <div
          className="hero-anim"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          <span className="badge badge-live">
            <span className="pulse-dot" />
            {lang === 'EN' ? t.badge.en : t.badge.gu}
          </span>
        </div>

        {/* Headline */}
        <h1
          className="heading-xl hero-anim"
          style={{
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            marginTop: '2rem',
            whiteSpace: 'pre-line'
          }}
        >
          {lang === 'EN' ? t.headline.en : t.headline.gu}
        </h1>

        {/* Subline — pricing */}
        <p
          className="hero-anim gradient-text"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            fontSize: 'clamp(1.25rem, 3vw, 2rem)',
            fontWeight: 700,
            fontFamily: 'var(--font-heading)',
            marginTop: '1.5rem',
            letterSpacing: '-0.01em'
          }}
        >
          {lang === 'EN' ? t.subline.en : t.subline.gu}
        </p>

        {/* Description */}
        <p
          className="hero-anim text-lg"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            color: 'var(--color-text-secondary)',
            maxWidth: '600px',
            margin: '1.5rem auto 0'
          }}
        >
          {lang === 'EN' ? t.description.en : t.description.gu}
        </p>

        {/* Pills */}
        <div
          className="hero-pills hero-anim"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {t.pills.map((pill, i) => {
            const Icon = pillIcons[i] || Globe;
            return (
              <div key={i} className="hero-pill">
                <Icon />
                {lang === 'EN' ? pill.en : pill.gu}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className="hero-cta-group hero-anim"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <button
            onClick={(e) => scrollToElement('enroll', e)}
            className="btn btn-whatsapp btn-shimmer"
          >
            {lang === 'EN' ? t.cta.en : t.cta.gu}
          </button>
        </div>

        {/* Stats */}
        <div
          className="stats-row hero-anim"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {s.items.map((stat, i) => (
            <div key={i} className="stat-card">
              <div className="stat-number gradient-text">{stat.number}</div>
              <div className="stat-label">{lang === 'EN' ? stat.label.en : stat.label.gu}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <span>{lang === 'EN' ? 'Scroll to explore' : 'નીચે સ્ક્રોલ કરો'}</span>
        <ChevronDown style={{ width: 20, height: 20 }} />
      </div>
    </section>
  );
};
