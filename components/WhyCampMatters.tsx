import React from 'react';
import { Language } from '../types';
import { whyCampMattersContent as content } from '../data/newContent';
import { TrendingUp, Globe, Clock, ShieldCheck } from 'lucide-react';

interface Props {
  lang: Language;
}

const ICONS = [
  <TrendingUp className="w-8 h-8 text-brand-600" />,
  <Globe className="w-8 h-8 text-brand-600" />,
  <Clock className="w-8 h-8 text-brand-600" />,
  <ShieldCheck className="w-8 h-8 text-brand-600" />
];

export const WhyCampMatters: React.FC<Props> = ({ lang }) => {
  return (
    <section className="py-24 bg-brand-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className={`text-3xl md:text-5xl font-black text-brand-950 leading-tight mb-6 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
            {lang === 'EN' ? content.title.en : content.title.gu}
          </h2>
          <div className="w-24 h-1 bg-brand-200 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {content.stats.map((stat, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-brand-100 shadow-sm hover:shadow-lg transition-all text-center group">
              <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-100 transition-colors">
                {ICONS[index]}
              </div>
              <div className="text-4xl font-black text-brand-600 mb-4">{stat.stat}</div>
              <p className={`text-lg font-bold text-brand-900 mb-4 leading-relaxed ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                {lang === 'EN' ? stat.text.en : stat.text.gu}
              </p>
              <p className={`text-sm text-brand-500 font-medium ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                {lang === 'EN' ? stat.source.en : stat.source.gu}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
