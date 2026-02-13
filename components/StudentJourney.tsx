import React from 'react';
import { Rocket, Brain, RefreshCw, GraduationCap, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';

interface Props {
  lang: Language;
}

const ICONS = [
  <Rocket className="w-8 h-8 text-white" />,
  <Brain className="w-8 h-8 text-white" />,
  <RefreshCw className="w-8 h-8 text-white" />,
  <GraduationCap className="w-8 h-8 text-white" />
];

const COLORS = [
  "bg-brand-500",
  "bg-brand-500",
  "bg-brand-500",
  "bg-brand-500"
];

const LIGHT_COLORS = [
  "bg-brand-50 border-brand-100",
  "bg-brand-50 border-brand-100",
  "bg-brand-50 border-brand-100",
  "bg-brand-50 border-brand-100"
];

export const StudentJourney: React.FC<Props> = ({ lang }) => {
  const t = content.journey;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-black text-brand-950 mt-6 mb-6 leading-tight ${lang === 'GU' ? 'font-gujarati' : ''}`}>
             {lang === 'EN' ? t.title.en : t.title.gu}
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {t.weeks.map((week, idx) => (
             <div key={idx} className={`relative p-6 rounded-2xl border transition-all hover:-translate-y-2 hover:shadow-lg ${LIGHT_COLORS[idx]}`}>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-md mb-6 ${COLORS[idx]}`}>
                   {ICONS[idx]}
                </div>

                <h3 className={`text-xl font-bold text-brand-900 mb-4 h-14 flex items-center ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                   {lang === 'EN' ? week.title.en : week.title.gu}
                </h3>

                <ul className="space-y-3">
                   {week.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                         <CheckCircle className={`w-5 h-5 shrink-0 mt-0.5 ${COLORS[idx].replace('bg-', 'text-')}`} />
                         <span className={`text-sm font-medium text-brand-800 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                            {lang === 'EN' ? item.en : item.gu}
                         </span>
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
