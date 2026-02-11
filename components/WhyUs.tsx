import React from 'react';
import { ShieldCheck, Video, Award, Brain } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';

interface Props {
  lang: Language;
}

export const WhyUs: React.FC<Props> = ({ lang }) => {
  const t = content.trust;

  const icons = [
    <ShieldCheck className="w-10 h-10 text-brand-600" />,
    <Video className="w-10 h-10 text-brand-600" />,
    <Award className="w-10 h-10 text-brand-600" />,
    <Brain className="w-10 h-10 text-brand-600" />
  ];

  return (
    <section className="py-24 bg-brand-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-black text-brand-950 leading-tight ${lang === 'GU' ? 'font-gujarati' : ''}`}>
             {lang === 'EN' ? t.title.en : t.title.gu}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
           {t.points.map((point, index) => (
             <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-brand-200 text-center hover:shadow-xl hover:-translate-y-2 transition-all group">
                <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-200 transition-colors">
                   {icons[index]}
                </div>
                <h3 className={`text-xl font-bold text-brand-900 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                   {lang === 'EN' ? point.en : point.gu}
                </h3>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
