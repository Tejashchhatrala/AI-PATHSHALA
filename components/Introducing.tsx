import React from 'react';
import { User, RefreshCw, FileText, Zap, ArrowRight, Brain, Calendar } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';

interface Props {
  lang: Language;
}

const ICONS = [
  <User className="w-7 h-7" />,
  <RefreshCw className="w-7 h-7" />,
  <FileText className="w-7 h-7" />,
  <Zap className="w-7 h-7" />,
  <Calendar className="w-7 h-7" />
];

export const Introducing: React.FC<Props> = ({ lang }) => {
  const t = content.introduction;

  const scrollToEnroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('enroll');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className={`text-3xl md:text-5xl font-black text-brand-950 mb-4 leading-tight ${lang === 'GU' ? 'font-gujarati' : ''}`}>
              {lang === 'EN' ? t.title.en : t.title.gu}
            </h2>
            <h3 className={`text-xl md:text-2xl font-bold text-brand-600 mb-6 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
               {lang === 'EN' ? t.subtitle.en : t.subtitle.gu}
            </h3>

            <p className={`text-brand-800 text-lg mb-8 leading-relaxed font-semibold ${lang === 'GU' ? 'font-gujarati' : ''}`}>
              {lang === 'EN' ? t.description.en : t.description.gu}
            </p>

            <div className="space-y-6">
               {t.features.map((feature, index) => (
                 <div key={index} className="flex gap-4 items-center p-4 bg-brand-50 rounded-2xl border border-brand-100 hover:border-brand-300 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 text-brand-600 shadow-sm">
                       {ICONS[index]}
                    </div>
                    <div>
                       <h4 className={`font-bold text-brand-900 text-lg ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                          {lang === 'EN' ? feature.en : feature.gu}
                       </h4>
                    </div>
                 </div>
               ))}
            </div>

            <div className="mt-10">
               <button
                  onClick={scrollToEnroll}
                  className="group relative inline-flex items-center gap-3 text-white bg-brand-600 hover:bg-brand-700 px-10 py-5 rounded-full font-bold text-lg shadow-[0_4px_20px_rgba(224,96,96,0.4)] transition-all transform hover:-translate-y-1 hover:scale-105 overflow-hidden cursor-pointer"
               >
                  <span className="relative z-10 flex items-center gap-2">
                     {lang === 'EN' ? "Book Free Roadmap Call" : "ફ્રી રોડમેપ કોલ બુક કરો"}
                     <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
               </button>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative">
                {/* Abstract Visual Representation of the System */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-600 to-brand-400 rounded-3xl blur-2xl opacity-20 transform rotate-6"></div>
                <div className="relative bg-brand-950 rounded-3xl border border-brand-800 p-2 shadow-2xl">
                   <div className="bg-brand-900 rounded-2xl p-8 md:p-12 text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-brand-400 to-brand-600 rounded-full mx-auto flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,148,148,0.3)]">
                         <Brain className="w-10 h-10 text-white" />
                      </div>
                      <h3 className={`text-2xl font-bold text-white mb-4 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                         {lang === 'EN' ? "Result: Smart Retention" : "પરિણામ: યાદશક્તિમાં વધારો"}
                      </h3>
                      <p className={`text-brand-200 leading-relaxed mb-8 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                         {lang === 'EN'
                           ? "Students in our 30-day program understand concepts deeper and retain them longer."
                           : "અમારા 30 દિવસના પ્રોગ્રામમાં વિદ્યાર્થીઓ કોન્સેપ્ટ ઊંડાણપૂર્વક સમજે છે અને લાંબો સમય યાદ રાખે છે."}
                      </p>

                      <div className="grid grid-cols-2 gap-4 border-t border-brand-800 pt-6">
                         <div>
                            <div className="text-3xl font-black text-white">30</div>
                            <div className="text-xs text-brand-300 uppercase font-bold tracking-wider">Days Course</div>
                         </div>
                         <div>
                            <div className="text-3xl font-black text-white">Live</div>
                            <div className="text-xs text-brand-300 uppercase font-bold tracking-wider">With Tejas Sir</div>
                         </div>
                      </div>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
