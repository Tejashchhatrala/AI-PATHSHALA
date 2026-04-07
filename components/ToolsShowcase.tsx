import React from 'react';
import { Language } from '../types';
import { content } from '../data/content';
import { useScrollReveal } from './ScrollRevealContext';

interface Props {
  lang: Language;
}

export const ToolsShowcase: React.FC<Props> = ({ lang }) => {
  const t = content.tools;
  const revealRef = useScrollReveal();

  return (
    <section className="section section-darker">
      <div className="container">
        <div className="section-header reveal" ref={revealRef}>
          <div className="section-eyebrow">{lang === 'EN' ? t.eyebrow.en : t.eyebrow.gu}</div>
          <h2 className="heading-lg section-title" style={{ whiteSpace: 'pre-line' }}>
            {lang === 'EN' ? t.title.en : t.title.gu}
          </h2>
          <p className="section-subtitle">
            {lang === 'EN' ? t.subtitle.en : t.subtitle.gu}
          </p>
        </div>

        <div className="tools-grid stagger-children" ref={revealRef}>
          {t.items.map((tool, i) => (
            <div key={i} className="tool-card">
              <div className="tool-icon">{tool.icon}</div>
              <div className="tool-name">{tool.name}</div>
              <div className="tool-desc">
                {lang === 'EN' ? tool.description.en : tool.description.gu}
              </div>
              {tool.free && <span className="free-badge">✓ Free to use</span>}
            </div>
          ))}
        </div>

        {/* Bonus Tools */}
        <div className="reveal" ref={revealRef} style={{ marginTop: '3rem', textAlign: 'center' }}>
          <div className="glass-card" style={{ display: 'inline-block', padding: '1.5rem 2.5rem' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-accent)', marginBottom: '0.75rem' }}>
              {lang === 'EN' ? t.bonusTitle.en : t.bonusTitle.gu}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
              {t.bonusTools.map((tool, i) => (
                <span
                  key={i}
                  style={{
                    padding: '0.375rem 0.875rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--color-border)',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    color: 'var(--color-text-secondary)'
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
