import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';

interface Props {
  lang: Language;
}

export const FAQ: React.FC<Props> = ({ lang }) => {
  const t = content.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-brand-50 relative overflow-hidden" id="faq">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 text-brand-700 text-sm font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </span>
          <h2 className={`text-3xl md:text-5xl font-black text-brand-950 leading-tight ${lang === 'GU' ? 'font-gujarati' : ''}`}>
             {lang === 'EN' ? t.title.en : t.title.gu}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {t.items.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-brand-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`text-lg font-bold text-brand-900 pr-4 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                  {lang === 'EN' ? item.question.en : item.question.gu}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-brand-500 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-brand-400 shrink-0" />
                )}
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-0">
                  <div className="h-px w-full bg-brand-100 mb-4"></div>
                  <p className={`text-brand-800 leading-relaxed ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                    {lang === 'EN' ? item.answer.en : item.answer.gu}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
