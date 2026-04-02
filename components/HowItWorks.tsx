import React from 'react';
import { Language } from '../types';
import { content } from '../data/content';

interface Props {
  lang: Language;
}

export const HowItWorks: React.FC<Props> = ({ lang }) => {
  const t = content.howItWorks;

  return (
    <section className="section section-dark">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-eyebrow">{lang === 'EN' ? t.eyebrow.en : t.eyebrow.gu}</div>
          <h2 className="heading-lg section-title" style={{ whiteSpace: 'pre-line' }}>
            {lang === 'EN' ? t.title.en : t.title.gu}
          </h2>
        </div>

        <div className="steps-grid stagger-children" style={{ maxWidth: '900px', margin: '0 auto' }}>
          {t.steps.map((step, i) => (
            <div key={i} className="step-card">
              <h3 className="step-title">
                {lang === 'EN' ? step.title.en : step.title.gu}
              </h3>
              <p className="step-desc">
                {lang === 'EN' ? step.description.en : step.description.gu}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
