import React, { useState } from 'react';
import { ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

export const DemoSection: React.FC<Props> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'bad' | 'good'>('bad');

  const scrollToEnroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('enroll');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="demo" className="py-24 bg-brand-100 text-brand-950 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-brand-700 font-bold tracking-wider uppercase text-sm border border-brand-300 bg-white px-4 py-1.5 rounded-full inline-block mb-4 shadow-sm">
             {lang === 'EN' ? "See The Magic" : "જાદુ જુઓ"}
          </span>
          <h2 className={`text-3xl md:text-5xl font-black mb-6 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
            {lang === 'EN' ? "One Prompt Can Change Your Understanding" : "એક પ્રોમ્પ્ટ તમારી સમજણ બદલી શકે છે"}
          </h2>
          <p className="text-brand-800 text-lg max-w-2xl mx-auto">
            {lang === 'EN' 
              ? "Most students ask ChatGPT boring questions. I teach you the 'Tejas Method' to get crystal clear answers." 
              : "મોટાભાગના વિદ્યાર્થીઓ AI ને કંટાળાજનક પ્રશ્નો પૂછે છે. હું તમને 'તેજસ મેથડ' શીખવીશ જેનાથી કોઈ પણ વિષય પાણી જેવો સરળ લાગશે."}
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden border border-brand-200 shadow-xl">
           <div className="flex border-b border-brand-100">
             <button 
               onClick={() => setActiveTab('bad')}
               className={`flex-1 py-4 text-center font-bold text-lg transition-colors ${activeTab === 'bad' ? 'bg-brand-50 text-red-500' : 'text-brand-300 hover:text-brand-500'}`}
             >
               {lang === 'EN' ? "❌ The Boring Way" : "❌ સામાન્ય રીત"}
             </button>
             <button 
               onClick={() => setActiveTab('good')}
               className={`flex-1 py-4 text-center font-bold text-lg transition-colors ${activeTab === 'good' ? 'bg-brand-50 text-green-600' : 'text-brand-300 hover:text-brand-500'}`}
             >
               {lang === 'EN' ? "✅ The AI Pathshala Way" : "✅ AI પાઠશાળાની રીત"}
             </button>
           </div>

           <div className="p-8 min-h-[400px] bg-brand-50/50">
             {activeTab === 'bad' ? (
                <div className="space-y-6 animate-fade-in">
                   <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-brand-200 flex items-center justify-center shrink-0">
                         <span className="font-bold text-brand-800">You</span>
                      </div>
                      <div className="bg-white border border-brand-200 p-4 rounded-2xl rounded-tl-none max-w-2xl shadow-sm">
                        <p className={`text-lg text-brand-900 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                           {lang === 'EN' ? "What is Compound Interest?" : "ચક્રવૃદ્ધિ વ્યાજ એટલે શું?"}
                        </p>
                      </div>
                   </div>

                   <div className="flex gap-4 items-start flex-row-reverse">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                         <span className="font-bold text-red-500">AI</span>
                      </div>
                      <div className="bg-red-50 border border-red-100 p-4 rounded-2xl rounded-tr-none max-w-2xl">
                        <p className="text-brand-800 text-sm leading-relaxed font-mono">
                           Compound interest is the interest on a loan or deposit calculated based on both the initial principal and the accumulated interest from previous periods. Formula: A = P(1 + r/n)^(nt).
                        </p>
                        <p className="text-red-500 text-xs mt-3 font-bold uppercase">
                           {lang === 'EN' ? "Result: Textbook definition. Hard to visualize." : "પરિણામ: ચોપડી જેવી વ્યાખ્યા. સમજવી અઘરી."}
                        </p>
                      </div>
                   </div>
                </div>
             ) : (
                <div className="space-y-6 animate-fade-in">
                   <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-brand-200 flex items-center justify-center shrink-0">
                         <span className="font-bold text-brand-800">You</span>
                      </div>
                      <div className="bg-white border border-brand-200 p-4 rounded-2xl rounded-tl-none max-w-3xl shadow-sm">
                        <div className="text-xs text-brand-400 mb-1 uppercase font-bold tracking-wider">The "Tejas Method" Prompt</div>
                        <p className={`text-lg font-medium text-brand-900 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                           {lang === 'EN' 
                             ? "Explain 'Compound Interest' to a 15-year-old using a real-life example of saving pocket money. Explain the difference between Simple vs Compound Interest in simple Gujarati." 
                             : "એક 15 વર્ષના વિદ્યાર્થીને 'ચક્રવૃદ્ધિ વ્યાજ' સમજાવો. પોકેટ મની બચાવવાના ઉદાહરણનો ઉપયોગ કરો અને સાદા વ્યાજ vs ચક્રવૃદ્ધિ વ્યાજ વચ્ચેનો તફાવત સરળ ગુજરાતીમાં કહો."}
                        </p>
                      </div>
                   </div>

                   <div className="flex gap-4 items-start flex-row-reverse">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                         <Sparkles className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="bg-green-50 border border-green-200 p-4 rounded-2xl rounded-tr-none max-w-3xl">
                        <p className={`text-brand-900 text-lg leading-relaxed ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                           "ધારો કે તું 1000 રૂપિયા જમા કરે છે.<br/><br/>
                           સાદું વ્યાજ: દર વર્ષે તને 100 રૂપિયા મળે. 10 વર્ષ પછી 2000 રૂપિયા થાય.<br/>
                           ચક્રવૃદ્ધિ વ્યાજ (Compound): તને વ્યાજનું પણ વ્યાજ મળે! પહેલા વર્ષે 100, બીજા વર્ષે 110, ત્રીજા વર્ષે 121...<br/><br/>
                           આને કહેવાય 'પાવર ઓફ કમ્પાઉન્ડિંગ'. આલ્બર્ટ આઈન્સ્ટાઈન આને દુનિયાની આઠમી અજાયબી કહેતા હતા!"
                        </p>
                        <p className="text-green-600 text-xs mt-3 font-bold uppercase flex items-center gap-2">
                           <MessageSquare className="w-4 h-4" />
                           {lang === 'EN' ? "Result: Relatable concept. Practical knowledge." : "પરિણામ: જીવન સાથે જોડાયેલું ઉદાહરણ. પ્રેક્ટિકલ જ્ઞાન."}
                        </p>
                      </div>
                   </div>
                </div>
             )}
           </div>
        </div>

        <div className="text-center mt-10">
           <p className={`text-xl text-brand-800 mb-6 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
             {lang === 'EN' ? "Join the live class to master this skill." : "આ કળા શીખવા માટે લાઈવ ક્લાસમાં જોડાઓ."}
           </p>
           {/* Redirects to Form now */}
           <button 
              onClick={scrollToEnroll}
              className="inline-flex items-center gap-2 text-brand-600 font-bold hover:text-brand-800 transition-colors border-b-2 border-brand-400 pb-1 hover:-translate-y-1 cursor-pointer"
           >
             {lang === 'EN' ? "Get The Prompt Library (Via Call)" : "પ્રોમ્પ્ટ લાઈબ્રેરી મેળવો (કોલ પર)"}
             <ArrowRight className="w-5 h-5" />
           </button>
        </div>
      </div>
    </section>
  );
};