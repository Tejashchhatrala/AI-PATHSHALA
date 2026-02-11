import React from 'react';
import { School, GraduationCap, Briefcase } from 'lucide-react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

export const WhoIsThisFor: React.FC<Props> = ({ lang }) => {
  return (
    <section className="py-24 bg-brand-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-bold tracking-wider uppercase text-sm bg-purple-50 px-4 py-1.5 rounded-full border border-purple-100 inline-block mb-4">
            {lang === 'EN' ? "Is This For You?" : "શું આ તમારા માટે છે?"}
          </span>
          <h2 className={`text-3xl md:text-5xl font-black text-brand-950 leading-tight ${lang === 'GU' ? 'font-gujarati' : ''}`}>
            {lang === 'EN' ? "Perfect If You Are..." : "તમારા માટે બેસ્ટ છે જો તમે..."}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
           {/* Card 1 */}
           <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-200 hover:shadow-xl hover:-translate-y-2 transition-all group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <School className="w-8 h-8" />
              </div>
              <h3 className={`text-2xl font-bold text-brand-900 mb-3 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                {lang === 'EN' ? "School Student (9-12)" : "સ્કૂલ વિદ્યાર્થી (ધો. 9-12)"}
              </h3>
              <p className={`text-brand-700 leading-relaxed ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                {lang === 'EN' 
                  ? "Struggling with Science/Commerce concepts? Need help with homework but hate asking teachers? Use AI to explain topics instantly."
                  : "સાયન્સ/કોમર્સના વિષયો અઘરા લાગે છે? હોમવર્કમાં મદદ જોઈએ છે? AI નો ઉપયોગ કરીને કોઈ પણ ટોપિક તરત સમજો."}
              </p>
           </div>

           {/* Card 2 */}
           <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-200 hover:shadow-xl hover:-translate-y-2 transition-all group">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className={`text-2xl font-bold text-brand-900 mb-3 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                {lang === 'EN' ? "College Student" : "કોલેજ સ્ટુડન્ટ"}
              </h3>
              <p className={`text-brand-700 leading-relaxed ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                {lang === 'EN' 
                  ? "Need to finish assignments fast? Want to learn coding or skills not taught in class? AI is your internship to the real world."
                  : "એસાઈનમેન્ટ ઝડપથી પૂરા કરવા છે? કોલેજમાં નથી શીખવતા તેવી સ્કીલ શીખવી છે? AI તમારું બેસ્ટ કરિયર ગાઈડ છે."}
              </p>
           </div>

           {/* Card 3 */}
           <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-200 hover:shadow-xl hover:-translate-y-2 transition-all group">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Briefcase className="w-8 h-8" />
              </div>
              <h3 className={`text-2xl font-bold text-brand-900 mb-3 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                {lang === 'EN' ? "Competitive Aspirant" : "સ્પર્ધાત્મક પરીક્ષા"}
              </h3>
              <p className={`text-brand-700 leading-relaxed ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                {lang === 'EN' 
                  ? "Preparing for GPSC, UPSC, or Clerk exams? Use AI to summarize current affairs and create daily mock tests for free."
                  : "GPSC, UPSC કે ક્લાર્કની તૈયારી કરો છો? AI પાસે કરંટ અફેર્સના સમરી અને મોક ટેસ્ટ ફ્રીમાં બનાવો."}
              </p>
           </div>
        </div>
      </div>
    </section>
  );
};