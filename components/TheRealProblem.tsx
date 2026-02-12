import React from 'react';
import { Clock, HelpCircle, AlertTriangle } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';

interface Props {
  lang: Language;
}

export const TheRealProblem: React.FC<Props> = ({ lang }) => {
  const t = content.problem;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
           <h2 className={`text-3xl md:text-5xl font-black text-brand-950 leading-tight mb-6 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
            {lang === 'EN' ? t.title.en : t.title.gu}
          </h2>
          <div className="w-24 h-1 bg-brand-200 mx-auto mb-8"></div>

          <h3 className={`text-2xl md:text-3xl font-bold text-brand-800 mb-6 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
             {lang === 'EN' ? t.subtitle.en : t.subtitle.gu}
          </h3>

          <p className={`text-xl text-brand-600 leading-relaxed mb-12 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
             {lang === 'EN' ? t.description.en : t.description.gu}
          </p>

          {/* The Equation */}
          <div className="bg-brand-50 p-6 md:p-8 rounded-2xl border border-brand-200 inline-block mb-12">
              <span className={`text-xl md:text-2xl font-black text-brand-900 ${lang === 'GU' ? 'font-gujarati' : 'font-mono'}`}>
                 {lang === 'EN' ? t.equation.en : t.equation.gu}
              </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
           {/* Pain 1 */}
           <div className="bg-white p-8 rounded-3xl border border-brand-100 shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-14 h-14 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Clock className="w-7 h-7 text-brand-600" />
              </div>
              <p className={`text-lg font-bold text-brand-900 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                 {lang === 'EN' ? t.points[0].en : t.points[0].gu}
              </p>
           </div>

           {/* Pain 2 */}
           <div className="bg-white p-8 rounded-3xl border border-brand-100 shadow-sm hover:shadow-md transition-all text-center">
               <div className="w-14 h-14 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
                 <AlertTriangle className="w-7 h-7 text-brand-600" />
              </div>
              <p className={`text-lg font-bold text-brand-900 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                 {lang === 'EN' ? t.points[1].en : t.points[1].gu}
              </p>
           </div>

           {/* Pain 3 */}
           <div className="bg-white p-8 rounded-3xl border border-brand-100 shadow-sm hover:shadow-md transition-all text-center">
               <div className="w-14 h-14 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
                 <HelpCircle className="w-7 h-7 text-brand-600" />
              </div>
              <p className={`text-lg font-bold text-brand-900 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                 {lang === 'EN' ? t.points[2].en : t.points[2].gu}
              </p>
           </div>
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
           <p className={`text-xl md:text-2xl font-bold text-brand-900 italic ${lang === 'GU' ? 'font-gujarati' : ''}`}>
              {lang === 'EN' ? t.conclusion.en : t.conclusion.gu}
           </p>
        </div>
      </div>
    </section>
  );
};
