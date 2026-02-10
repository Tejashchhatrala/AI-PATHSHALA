import React from 'react';
import { ShieldCheck, Brain, Zap } from 'lucide-react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

export const Solution: React.FC<Props> = ({ lang }) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-bold mb-6 border border-brand-100 tracking-wide uppercase">
              {lang === 'EN' ? 'The Secret Framework' : 'મારી સિક્રેટ પદ્ધતિ'}
            </div>
            <h2 className={`text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight ${lang === 'GU' ? 'font-gujarati' : ''}`}>
              {lang === 'EN' ? "Introducing: The 'AI Mitra' System" : "પ્રસ્તુત છે: 'AI મિત્ર' સિસ્ટમ"}
            </h2>
            <p className={`text-slate-600 text-lg mb-8 leading-relaxed ${lang === 'GU' ? 'font-gujarati' : ''}`}>
              {lang === 'EN' 
                ? "99% of students use AI incorrectly. They treat it like a search engine. I have developed a proprietary 3-step system that turns AI into your personal tutor that adapts to YOUR learning style."
                : "99% વિદ્યાર્થીઓ AI નો ખોટો ઉપયોગ કરે છે. તેઓ તેને ગૂગલ સમજે છે. મેં એક એવી 3-સ્ટેપ સિસ્ટમ બનાવી છે જે AI ને તમારા પર્સનલ ટ્યુટરમાં ફેરવી નાખે છે."}
            </p>
            
            <div className="space-y-8">
               <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0 text-blue-600 shadow-sm">
                     <Brain className="w-7 h-7" />
                  </div>
                  <div>
                     <h4 className={`font-bold text-slate-900 text-xl ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                        {lang === 'EN' ? "1. Context Injection" : "1. સંદર્ભ (Context)"}
                     </h4>
                     <p className={`text-slate-500 mt-1 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                        {lang === 'EN' 
                           ? "We teach the AI your syllabus, your board style, and your language preference once. It never forgets." 
                           : "અમે AI ને તમારો સિલેબસ અને બોર્ડની સ્ટાઇલ એકવાર શીખવી દઈએ છીએ. તે ક્યારેય ભૂલતું નથી."}
                     </p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center shrink-0 text-purple-600 shadow-sm">
                     <Zap className="w-7 h-7" />
                  </div>
                  <div>
                     <h4 className={`font-bold text-slate-900 text-xl ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                        {lang === 'EN' ? "2. The Simplification Layer" : "2. સરળીકરણ (Simplification)"}
                     </h4>
                     <p className={`text-slate-500 mt-1 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                        {lang === 'EN' 
                           ? "My system forces AI to explain complex Physics or Math concepts using simple daily life examples." 
                           : "મારી સિસ્ટમ અઘરા વિષયોને રોજના જીવનના સરળ ઉદાહરણો દ્વારા સમજાવે છે."}
                     </p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center shrink-0 text-green-600 shadow-sm">
                     <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div>
                     <h4 className={`font-bold text-slate-900 text-xl ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                        {lang === 'EN' ? "3. Ethical Verification" : "3. સાચી ચકાસણી"}
                     </h4>
                     <p className={`text-slate-500 mt-1 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                        {lang === 'EN' 
                           ? "We ensure you are learning, not just copying. This method builds your brain, not just your homework." 
                           : "અમે ખાતરી કરીએ છીએ કે તમે શીખી રહ્યા છો, નકલ નથી કરી રહ્યા. આ પદ્ધતિ તમારું મગજ પાવરફુલ બનાવે છે."}
                     </p>
                  </div>
               </div>
            </div>

            <div className="mt-10">
               <a href="#enroll" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-brand-600 border border-transparent rounded-xl hover:bg-brand-700 shadow-lg shadow-brand-500/30 hover:-translate-y-1">
                  {lang === 'EN' ? "Book Free Roadmap Call" : "ફ્રી રોડમેપ કોલ બુક કરો"}
               </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="relative">
                {/* Abstract Visual Representation of the System */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-600 to-purple-600 rounded-3xl blur-2xl opacity-20 transform rotate-6"></div>
                <div className="relative bg-slate-900 rounded-3xl border border-slate-700 p-2 shadow-2xl">
                   <div className="bg-slate-800 rounded-2xl p-8 md:p-12 text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-brand-400 to-purple-500 rounded-full mx-auto flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(56,189,248,0.3)]">
                         <Brain className="w-10 h-10 text-white" />
                      </div>
                      <h3 className={`text-2xl font-bold text-white mb-4 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                         {lang === 'EN' ? "Result: Smart Retention" : "પરિણામ: યાદશક્તિમાં વધારો"}
                      </h3>
                      <p className={`text-slate-400 leading-relaxed mb-8 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                         {lang === 'EN' 
                           ? "Students using the AI Mitra system understand concepts deeper and retain them longer." 
                           : "જે વિદ્યાર્થીઓ 'AI મિત્ર' સિસ્ટમ વાપરે છે, તેઓ કોન્સેપ્ટ ઊંડાણપૂર્વક સમજે છે અને લાંબો સમય યાદ રાખે છે."}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 border-t border-slate-700 pt-6">
                         <div>
                            <div className="text-3xl font-black text-white">1/2</div>
                            <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Time Spent</div>
                         </div>
                         <div>
                            <div className="text-3xl font-black text-white">2X</div>
                            <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Recall Speed</div>
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