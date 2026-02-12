import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';

interface Props {
  lang: Language;
}

const STARS_ARRAY = [...Array(5)];

export const Testimonials: React.FC<Props> = ({ lang }) => {
  const t = content.testimonials;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-black text-brand-950 mb-6 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
             {lang === 'EN' ? t.title.en : t.title.gu}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.items.map((item, i) => (
            <div key={i} className="bg-brand-50/40 p-8 rounded-3xl border border-brand-100 shadow-lg hover:shadow-xl transition-all relative group flex flex-col h-full">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-100 group-hover:text-brand-200 transition-colors" />

              <div className="mb-6">
                 <div className="flex mb-3">
                    {STARS_ARRAY.map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-brand-400 fill-current" />
                    ))}
                 </div>
                 <p className={`text-brand-800 leading-relaxed font-medium text-lg italic ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                   "{lang === 'EN' ? item.text.en : item.text.gu}"
                 </p>
              </div>

              <div className="mt-auto pt-4 border-t border-brand-200">
                  <h4 className="font-bold text-brand-900 text-lg">{item.name}</h4>
                  <p className={`text-sm text-brand-600 font-medium ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                    {lang === 'EN' ? item.role.en : item.role.gu}
                  </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
