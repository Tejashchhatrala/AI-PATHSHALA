import React from 'react';
import { ShieldCheck, Brain, Zap, ArrowRight, Video } from 'lucide-react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

export const Solution: React.FC<Props> = ({ lang }) => {
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
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-bold mb-6 border border-brand-100 tracking-wide uppercase">
              {lang === 'EN' ? 'No Apps. No Recorded Videos.' : 'કોઈ એપ નહીં. કોઈ રેકોર્ડિંગ નહીં.'}
            </div>
            <h2 className={`text-3xl md:text-5xl font-black text-brand-950 mb-6 leading-tight ${lang === 'GU' ? 'font-gujarati' : ''}`}>
              {lang === 'EN' ? "The 30-Day Live AI Mastery" : "30 દિવસનો લાઈવ AI કોર્સ"}
            </h2>
            <p className={`text-brand-800 text-lg mb-8 leading-relaxed ${lang === 'GU' ? 'font-gujarati' : ''}`}>
              {lang === 'EN' 
                ? "This is not a 6-month boring theory class. This is a 30-day fast-track live program. I teach you directly on Zoom/Google Meet. You learn fast, you see results fast."
                : "આ 6 મહિનાનો બોરિંગ થીયરી ક્લાસ નથી. આ 30 દિવસનો ફાસ્ટ-ટ્રેક લાઈવ પ્રોગ્રામ છે. હું તમને Zoom/Google Meet પર સીધું શીખવીશ. ઝડપથી શીખો, ઝડપથી પરિણામ મેળવો."}
            </p>
            
            <div className="space-y-8">
               <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0 text-blue-600 shadow-sm">
                     <Video className="w-7 h-7" />
                  </div>
                  <div>
                     <h4 className={`font-bold text-brand-950 text-xl ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                        {lang === 'EN' ? "1. Daily Live Interaction" : "1. રોજ લાઈવ ક્લાસ"}
                     </h4>
                     <p className={`text-brand-600 mt-1 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                        {lang === 'EN' 
                           ? "Ask questions directly to Tejas Sir. No chatbots, no delayed emails. Real-time doubt solving." 
                           : "તેજસ સરને સીધા પ્રશ્નો પૂછો. કોઈ ચેટબોટ નહીં. તમારા ડાઉટનું લાઈવ સોલ્યુશન."}
                     </p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center shrink-0 text-purple-600 shadow-sm">
                     <Zap className="w-7 h-7" />
                  </div>
                  <div>
                     <h4 className={`font-bold text-brand-950 text-xl ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                        {lang === 'EN' ? "2. Concept Simplification" : "2. અઘરા વિષયો સરળ બનાવો"}
                     </h4>
                     <p className={`text-brand-600 mt-1 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                        {lang === 'EN' 
                           ? "We use AI to break down complex topics into simple Gujarati examples that you never forget." 
                           : "અમે AI નો ઉપયોગ કરીને અઘરા ટોપિકને સરળ ગુજરાતી ઉદાહરણોમાં સમજાવીએ છીએ જે તમે ક્યારેય નહીં ભૂલો."}
                     </p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center shrink-0 text-green-600 shadow-sm">
                     <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div>
                     <h4 className={`font-bold text-brand-950 text-xl ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                        {lang === 'EN' ? "3. Ethical Learning" : "3. સાચી અને નૈતિક શીખ"}
                     </h4>
                     <p className={`text-brand-600 mt-1 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                        {lang === 'EN' 
                           ? "We focus on learning, not cheating. We teach you how to use technology to build your brain." 
                           : "અમારું ફોકસ શીખવા પર છે, ચોરી પર નહીં. અમે તમને ટેકનોલોજીથી તમારું મગજ પાવરફુલ બનાવતા શીખવીએ છીએ."}
                     </p>
                  </div>
               </div>
            </div>

            <div className="mt-10">
               <button 
                  onClick={scrollToEnroll} 
                  className="group relative inline-flex items-center gap-3 text-white bg-brand-400 hover:bg-brand-500 px-10 py-5 rounded-full font-bold text-lg shadow-[0_4px_20px_rgba(255,148,148,0.4)] transition-all transform hover:-translate-y-1 hover:scale-105 overflow-hidden cursor-pointer"
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
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-600 to-purple-600 rounded-3xl blur-2xl opacity-20 transform rotate-6"></div>
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