import React, { useState } from 'react';
import { ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

export const DemoSection: React.FC<Props> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'bad' | 'good'>('bad');

  return (
    <section id="demo" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-brand-400 font-bold tracking-wider uppercase text-sm border border-brand-800 px-4 py-1.5 rounded-full inline-block mb-4">
             {lang === 'EN' ? "See The Magic" : "જાદુ જુઓ"}
          </span>
          <h2 className={`text-3xl md:text-5xl font-black mb-6 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
            {lang === 'EN' ? "One Prompt Can Change Your Grades" : "એક પ્રોમ્પ્ટ તમારા માર્ક્સ બદલી શકે છે"}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {lang === 'EN' 
              ? "Most students ask ChatGPT boring questions and get boring answers. I teach you the 'Tejas Method' of prompting." 
              : "મોટાભાગના વિદ્યાર્થીઓ ChatGPT ને કંટાળાજનક પ્રશ્નો પૂછે છે અને કંટાળાજનક જવાબો મેળવે છે. હું તમને 'તેજસ મેથડ' શીખવીશ."}
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
           <div className="flex border-b border-slate-700">
             <button 
               onClick={() => setActiveTab('bad')}
               className={`flex-1 py-4 text-center font-bold text-lg transition-colors ${activeTab === 'bad' ? 'bg-slate-700 text-red-400' : 'text-slate-500 hover:text-slate-300'}`}
             >
               {lang === 'EN' ? "❌ The Average Student Way" : "❌ સામાન્ય વિદ્યાર્થીની રીત"}
             </button>
             <button 
               onClick={() => setActiveTab('good')}
               className={`flex-1 py-4 text-center font-bold text-lg transition-colors ${activeTab === 'good' ? 'bg-brand-900/50 text-green-400' : 'text-slate-500 hover:text-slate-300'}`}
             >
               {lang === 'EN' ? "✅ The AI Pathshala Way" : "✅ AI પાઠશાળાની રીત"}
             </button>
           </div>

           <div className="p-8 min-h-[400px]">
             {activeTab === 'bad' ? (
                <div className="space-y-6 animate-fade-in">
                   <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center shrink-0">
                         <span className="font-bold">You</span>
                      </div>
                      <div className="bg-slate-700 p-4 rounded-2xl rounded-tl-none max-w-2xl">
                        <p className={`text-lg ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                           {lang === 'EN' ? "Explain Photosynthesis." : "ફોટોસિન્થેસિસ સમજાવો."}
                        </p>
                      </div>
                   </div>

                   <div className="flex gap-4 items-start flex-row-reverse">
                      <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center shrink-0">
                         <span className="font-bold">AI</span>
                      </div>
                      <div className="bg-red-900/20 border border-red-500/30 p-4 rounded-2xl rounded-tr-none max-w-2xl">
                        <p className="text-slate-300 text-sm leading-relaxed font-mono">
                           Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods from carbon dioxide and water. Photosynthesis in plants generally involves the green pigment chlorophyll and generates oxygen as a byproduct.
                        </p>
                        <p className="text-red-400 text-xs mt-3 font-bold uppercase">
                           {lang === 'EN' ? "Result: Too technical, boring, hard to memorize." : "પરિણામ: બહુ ટેકનિકલ, કંટાળાજનક, યાદ રાખવું અઘરું."}
                        </p>
                      </div>
                   </div>
                </div>
             ) : (
                <div className="space-y-6 animate-fade-in">
                   <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center shrink-0">
                         <span className="font-bold">You</span>
                      </div>
                      <div className="bg-slate-700 p-4 rounded-2xl rounded-tl-none max-w-3xl">
                        <div className="text-xs text-brand-400 mb-1 uppercase font-bold tracking-wider">The "AI Mitra" Prompt</div>
                        <p className={`text-lg font-medium ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                           {lang === 'EN' 
                             ? "Act as a strict but funny Gujarati tuition teacher. Explain 'Photosynthesis' to me using an example of making 'Undhiyu' in a kitchen. Use Hinglish + Gujarati mix. Keep it simple." 
                             : "એક રમુજી ગુજરાતી ટ્યુશન શિક્ષક તરીકે વર્તો. મને 'ઉંધિયું' બનાવવાના ઉદાહરણ સાથે 'ફોટોસિન્થેસિસ' સમજાવો. હિંગ્લિશ + ગુજરાતી મિક્સ વાપરો. એકદમ સરળ રાખો."}
                        </p>
                      </div>
                   </div>

                   <div className="flex gap-4 items-start flex-row-reverse">
                      <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                         <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div className="bg-green-900/20 border border-green-500/30 p-4 rounded-2xl rounded-tr-none max-w-3xl">
                        <p className={`text-white text-lg leading-relaxed ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                           "બેટા સાંભળ! જેમ મમ્મી રસોડામાં ગેસ (Sunlight) વાપરીને શાક (Water+CO2) માંથી ઉંધિયું (Glucose/Food) બનાવે છે ને, બસ ઝાડ-પાન પણ એવું જ કરે! <br/><br/>
                           રસોડું = પાંદડું (Leaf)<br/>
                           ગેસ = સૂર્યપ્રકાશ (Sunlight)<br/>
                           મસાલો = ક્લોરોફિલ (Chlorophyll)<br/><br/>
                           અને હા, જેમ રસોઈ વખતે સુગંધ (Oxygen) બહાર આવે, એમ ઝાડ પણ ઓક્સિજન બહાર કાઢે! બોલ હવે ભૂલાશે?"
                        </p>
                        <p className="text-green-400 text-xs mt-3 font-bold uppercase flex items-center gap-2">
                           <MessageSquare className="w-4 h-4" />
                           {lang === 'EN' ? "Result: Instant understanding, memorable, exam-ready." : "પરિણામ: તરત સમજાઈ ગયું, યાદ રહી ગયું, પરીક્ષા માટે તૈયાર."}
                        </p>
                      </div>
                   </div>
                </div>
             )}
           </div>
        </div>

        <div className="text-center mt-10">
           <p className={`text-xl text-slate-300 mb-6 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
             {lang === 'EN' ? "I have 500+ such prompts ready for you." : "મારી પાસે આવા 500+ તૈયાર પ્રોમ્પ્ટ છે તમારા માટે."}
           </p>
           {/* Redirects to Form now */}
           <a href="#enroll" className="inline-flex items-center gap-2 text-brand-400 font-bold hover:text-brand-300 transition-colors border-b-2 border-brand-400 pb-1">
             {lang === 'EN' ? "Get The Prompt Library (Via Call)" : "પ્રોમ્પ્ટ લાઈબ્રેરી મેળવો (કોલ પર)"}
             <ArrowRight className="w-5 h-5" />
           </a>
        </div>
      </div>
    </section>
  );
};