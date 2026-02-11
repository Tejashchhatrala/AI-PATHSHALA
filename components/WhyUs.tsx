import React from 'react';
import { Check, Zap, Globe, Heart } from 'lucide-react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

export const WhyUs: React.FC<Props> = ({ lang }) => {
  return (
    <section id="why-us" className="py-24 bg-brand-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side: The Narrative */}
          <div className="lg:w-1/2">
            <span className="text-brand-600 font-bold tracking-wider uppercase text-sm bg-white px-3 py-1 rounded-full border border-brand-200 shadow-sm">
              {lang === 'EN' ? "My Personal Promise" : "મારું વ્યક્તિગત વચન"}
            </span>
            
            <h2 className={`text-4xl md:text-5xl font-extrabold text-brand-950 mt-6 mb-8 leading-tight ${lang === 'GU' ? 'font-gujarati' : ''}`}>
              {lang === 'EN' 
                ? "I Will Give You One Simple System." 
                : "હું તમને એક સરળ 'સિસ્ટમ' આપીશ."}
            </h2>

            <div className="space-y-6 text-lg text-brand-800 leading-relaxed">
              <p className={`${lang === 'GU' ? 'font-gujarati' : ''}`}>
                {lang === 'EN'
                  ? "You don't need to be a tech genius. I have stripped away all the complex jargon."
                  : "તમારે ટેકનિકલ જીનિયસ બનવાની જરૂર નથી. મેં બધી અઘરી વાતો કાઢી નાખી છે."}
              </p>
              <p className={`font-semibold text-brand-900 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                {lang === 'EN'
                  ? "My system works on ANY mobile phone. It works for ANY stream (Science, Commerce, Arts)."
                  : "મારી સિસ્ટમ કોઈપણ મોબાઈલ પર ચાલે છે. અને તે કોઈપણ પ્રવાહ (સાયન્સ, કોમર્સ, આર્ટસ) માટે કામ કરે છે."}
              </p>
              <p className={`${lang === 'GU' ? 'font-gujarati' : ''}`}>
                {lang === 'EN'
                  ? "I promise you this: If you follow my 30-day roadmap, you will never feel 'dumb' or 'confused' in your studies again."
                  : "હું તમને વચન આપું છું: જો તમે મારો 30-દિવસનો રોડમેપ ફોલો કરશો, તો તમને અભ્યાસમાં ક્યારેય ફરીથી 'મૂંઝવણ' નહીં થાય."}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { en: "Study Companion, Not Cheating", gu: "સાથી, ચીટિંગ નહીં" },
                { en: "Works on Any Mobile", gu: "કોઈપણ મોબાઈલ પર ચાલે" },
                { en: "Exam-Oriented Results", gu: "પરીક્ષાલક્ષી પરિણામ" },
                { en: "Lifetime Access", gu: "લાઈફટાઈમ એક્સેસ" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-brand-200 shadow-sm hover:border-brand-400 hover:shadow-md transition-all cursor-default">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className={`font-medium text-brand-800 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                    {lang === 'EN' ? item.en : item.gu}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: The Visual Differentiator */}
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
            <div className="relative bg-brand-400 rounded-3xl p-8 md:p-12 shadow-2xl shadow-brand-200/50 text-white overflow-hidden transform hover:scale-[1.01] transition-transform duration-500 cursor-default">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-300 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-50 -ml-20 -mb-20"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 text-center border-b border-white/20 pb-4">
                  {lang === 'EN' ? "Traditional Tuition vs. Tejas's AI Method" : "સામાન્ય ટ્યુશન vs તેજસની AI મેથડ"}
                </h3>

                <div className="space-y-6">
                  {/* Row 1 */}
                  <div className="flex justify-between items-center group p-3 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="w-[45%] text-right text-brand-50 text-sm md:text-base pr-4 border-r border-white/20 group-hover:text-white transition-colors">
                      {lang === 'EN' ? "Generic Lectures" : "સામાન્ય લેક્ચર"}
                    </div>
                    <div className="w-[10%] flex justify-center">
                      <Zap className="w-6 h-6 text-yellow-200 group-hover:scale-125 transition-transform" />
                    </div>
                    <div className="w-[45%] text-left font-bold text-white text-sm md:text-base pl-4 border-l border-white/20 group-hover:text-yellow-100 transition-colors">
                      {lang === 'EN' ? "Personalized Doubts" : "પર્સનલ ડાઉટ સોલ્યુશન"}
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="flex justify-between items-center group p-3 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="w-[45%] text-right text-brand-50 text-sm md:text-base pr-4 border-r border-white/20 group-hover:text-white transition-colors">
                      {lang === 'EN' ? "Confusing English" : "અઘરું અંગ્રેજી"}
                    </div>
                    <div className="w-[10%] flex justify-center">
                      <Globe className="w-6 h-6 text-blue-100 group-hover:scale-125 transition-transform" />
                    </div>
                    <div className="w-[45%] text-left font-bold text-white text-sm md:text-base pl-4 border-l border-white/20 group-hover:text-blue-50 transition-colors">
                      {lang === 'EN' ? "Simple Gujarati" : "સરળ ગુજરાતી સમજૂતી"}
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="flex justify-between items-center group p-3 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="w-[45%] text-right text-brand-50 text-sm md:text-base pr-4 border-r border-white/20 group-hover:text-white transition-colors">
                      {lang === 'EN' ? "Rote Memorization" : "ગોખણપટ્ટી"}
                    </div>
                    <div className="w-[10%] flex justify-center">
                      <Heart className="w-6 h-6 text-red-200 group-hover:scale-125 transition-transform" />
                    </div>
                    <div className="w-[45%] text-left font-bold text-white text-sm md:text-base pl-4 border-l border-white/20 group-hover:text-red-100 transition-colors">
                      {lang === 'EN' ? "Conceptual Mastery" : "કોન્સેપ્ટ પર પકડ"}
                    </div>
                  </div>
                </div>

                <div className="mt-10 bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center hover:bg-white/30 transition-colors">
                  <p className="text-white/90 text-sm mb-2">
                    {lang === 'EN' ? "My Result For You" : "તમારા માટે મારું પરિણામ"}
                  </p>
                  <p className="font-bold text-lg md:text-xl italic text-white">
                    {lang === 'EN' 
                      ? "\"Less Stress. More Confidence. Higher Marks.\"" 
                      : "\"ઓછું ટેન્શન. વધુ આત્મવિશ્વાસ. વધુ માર્ક્સ.\""}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};