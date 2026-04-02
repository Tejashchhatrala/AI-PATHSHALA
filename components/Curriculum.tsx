import React from 'react';
import { Language } from '../types';
import { content } from '../data/content';

interface Props {
  lang: Language;
}

export const Curriculum: React.FC<Props> = ({ lang }) => {
  const t = content.curriculum;

  return (
    <section className="section section-dark">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-eyebrow">{lang === 'EN' ? t.eyebrow.en : t.eyebrow.gu}</div>
          <h2 className="heading-lg section-title" style={{ whiteSpace: 'pre-line' }}>
            {lang === 'EN' ? t.title.en : t.title.gu}
          </h2>
          <p className="section-subtitle">
            {lang === 'EN' ? t.subtitle.en : t.subtitle.gu}
          </p>
        </div>

        <div className="curriculum-grid stagger-children">
          {t.weeks.map((week, i) => (
            <div key={i} className="week-card">
              <div className="week-number">
                {lang === 'EN' ? `Week ${week.week}` : `સપ્તાહ ${week.week}`}
              </div>
              <h3 className="week-title">
                {lang === 'EN' ? week.title.en : week.title.gu}
              </h3>
              <ul className="week-items">
                {week.items.map((item, j) => (
                  <li key={j} className="week-item">
                    {lang === 'EN' ? item.en : item.gu}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
