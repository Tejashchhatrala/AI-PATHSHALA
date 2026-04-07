import React from 'react';
import { X, Check } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';
import { useScrollReveal } from './ScrollRevealContext';

interface Props {
  lang: Language;
}

export const ProblemSolution: React.FC<Props> = ({ lang }) => {
  const t = content.problem;
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

        <div className="problem-grid">
          {/* Problem Side */}
          <div className="reveal glass-card" style={{ padding: '2rem', borderColor: 'rgba(255, 59, 48, 0.15)' }} ref={revealRef}>
            <h3 className="heading-sm" style={{ color: '#ff6b6b', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <X style={{ width: 24, height: 24, color: '#ff3b30' }} />
              {lang === 'EN' ? 'Without AI Pathshala' : 'AI Pathshala વિના'}
            </h3>
            <ul className="problem-list">
              {t.problems.map((item, i) => (
                <li key={i} className="problem-item">
                  <X className="icon" style={{ width: 18, height: 18, color: '#ff3b30', flexShrink: 0 }} />
                  <span>{lang === 'EN' ? item.en : item.gu}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Side */}
          <div className="reveal glass-card" style={{ padding: '2rem', borderColor: 'rgba(48, 209, 88, 0.15)' }} ref={revealRef}>
            <h3 className="heading-sm" style={{ color: '#30d158', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Check style={{ width: 24, height: 24, color: '#30d158' }} />
              {lang === 'EN' ? t.solutionTitle.en : t.solutionTitle.gu}
            </h3>
            <ul className="solution-list">
              {t.solutions.map((item, i) => (
                <li key={i} className="solution-item">
                  <Check className="icon" style={{ width: 18, height: 18, flexShrink: 0 }} />
                  <span>{lang === 'EN' ? item.en : item.gu}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
