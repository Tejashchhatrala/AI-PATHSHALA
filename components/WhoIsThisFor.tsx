import React from 'react';
import { School, GraduationCap, Briefcase } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';

interface Props {
  lang: Language;
}

export const WhoIsThisFor: React.FC<Props> = ({ lang }) => {
  const t = content.audience;

  const icons = [
    <School className="w-8 h-8" />,
    <GraduationCap className="w-8 h-8" />,
    <Briefcase className="w-8 h-8" />
  ];

  return (
    <section className="py-24 bg-brand-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold tracking-wider uppercase text-sm bg-brand-50 px-4 py-1.5 rounded-full border border-brand-100 inline-block mb-4">
             {lang === 'EN' ? "Is This For You?" : "શું આ તમારા માટે છે?"}
          </span>
          <h2 className={`text-3xl md:text-5xl font-black text-brand-950 leading-tight ${lang === 'GU' ? 'font-gujarati' : ''}`}>
             {lang === 'EN' ? t.title.en : t.title.gu}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
           {t.segments.map((segment, index) => (
             <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-brand-200 hover:shadow-xl hover:-translate-y-2 transition-all group">
                <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mb-6 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  {icons[index]}
                </div>
                <h3 className={`text-2xl font-bold text-brand-900 mb-3 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                   {lang === 'EN' ? segment.title.en : segment.title.gu}
                </h3>
                <p className={`text-brand-700 leading-relaxed ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                   {lang === 'EN' ? segment.description.en : segment.description.gu}
                </p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
