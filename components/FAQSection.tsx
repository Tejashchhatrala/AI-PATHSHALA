import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';
import { useScrollReveal } from './ScrollRevealContext';

interface Props {
  lang: Language;
}

export const FAQSection: React.FC<Props> = ({ lang }) => {
  const t = content.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const revealRef = useScrollReveal();

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="section section-darker">
      <div className="container">
        <div className="section-header reveal" ref={revealRef}>
          <div className="section-eyebrow">{lang === 'EN' ? t.eyebrow.en : t.eyebrow.gu}</div>
          <h2 className="heading-lg section-title" style={{ whiteSpace: 'pre-line' }}>
            {lang === 'EN' ? t.title.en : t.title.gu}
          </h2>
        </div>

        <div className="faq-list reveal" ref={revealRef}>
          {t.items.map((item, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggle(i)}>
                <span>{lang === 'EN' ? item.question.en : item.question.gu}</span>
                <Plus className="faq-icon" />
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  {lang === 'EN' ? item.answer.en : item.answer.gu}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
