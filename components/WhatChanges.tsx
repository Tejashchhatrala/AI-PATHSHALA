import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';

interface Props {
  lang: Language;
}

export const WhatChanges: React.FC<Props> = ({ lang }) => {
  const t = content.changes;

  return (
    <section className="py-20 bg-brand-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-5xl font-black text-brand-950 text-center mb-12 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
             {lang === 'EN' ? t.title.en : t.title.gu}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {t.items.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-brand-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                 <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                 </div>
                 <span className={`text-xl font-bold text-brand-900 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                    {lang === 'EN' ? item.en : item.gu}
                 </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
