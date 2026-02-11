import React, { useState } from 'react';
import { ArrowRight, Sparkles, Check, X, GraduationCap, Zap } from 'lucide-react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

type ScenarioType = 'science' | 'planning';

export const DemoSection: React.FC<Props> = ({ lang }) => {
  const [activeScenario, setActiveScenario] = useState<ScenarioType>('science');

  const scrollToEnroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('enroll');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scenarios = {
    science: {
      title: { EN: 'Explaining Concepts', GU: 'અઘરા વિષયો સમજવા' },
      icon: <Zap className="w-5 h-5" />,
      generic: {
        prompt: { EN: 'What is photosynthesis?', GU: 'પ્રકાશસંશ્લેષણ એટલે શું?' },
        answer: {
          EN: '6CO2 + 6H2O + Light Energy → C6H12O6 + 6O2. It is the process by which green plants and some other organisms use sunlight to synthesize foods...',
          GU: '6CO2 + 6H2O + સૂર્યપ્રકાશ → C6H12O6 + 6O2. આ એક રાસાયણિક પ્રક્રિયા છે જેમાં લીલી વનસ્પતિ સૂર્યપ્રકાશનો ઉપયોગ કરીને ખોરાક બનાવે છે...'
        },
        result: { EN: 'Textbook definition. Hard to visualize.', GU: 'ચોપડી જેવી વ્યાખ્યા. ગોખવી પડે.' }
      },
      tejas: {
        prompt: {
          EN: "Explain photosynthesis to a 5th grader. Use a 'Kitchen' analogy.",
          GU: "ધોરણ 5 ના વિદ્યાર્થીને 'પ્રકાશસંશ્લેષણ' સમજાવો. 'રસોડા'નું ઉદાહરણ આપો."
        },
        answer: {
          EN: "Plants cook their own food! 🍃\n\nSunlight = The Gas Stove 🔥\nWater = Ingredients 💧\nChlorophyll = The Chef 👨‍🍳\n\nJust like mom cooks, plants use sunlight to make sugar!",
          GU: "વનસ્પતિ પણ રસોઈ બનાવે છે! 🍃\n\nસૂર્યપ્રકાશ = ગેસ સ્ટવ 🔥\nપાણી = મસાલા 💧\nહરિતદ્રવ્ય = રસોઈયો 👨‍🍳\n\nજેમ મમ્મી રસોડામાં જમવાનું બનાવે, તેમ વનસ્પતિ સૂર્યપ્રકાશથી ખોરાક બનાવે છે!"
        },
        result: { EN: 'Visual & Simple. Stays in memory forever.', GU: 'એકદમ સરળ. જિંદગીભર યાદ રહી જાય.' }
      }
    },
    planning: {
      title: { EN: 'Study Planning', GU: 'સ્ટડી પ્લાનિંગ' },
      icon: <GraduationCap className="w-5 h-5" />,
      generic: {
        prompt: { EN: 'Create a study timetable.', GU: 'એક અઠવાડિયાનું ટાઈમ ટેબલ આપો.' },
        answer: {
          EN: 'Monday: Math (1hr), Science (1hr). Tuesday: English (1hr), SS (1hr)... Wednesday: Math (1hr)...',
          GU: 'સોમવાર: ગણિત (1 કલાક), વિજ્ઞાન (1 કલાક). મંગળવાર: અંગ્રેજી (1 કલાક)... બુધવાર: ગણિત (1 કલાક)...'
        },
        result: { EN: 'Generic list. Hard to follow.', GU: 'સામાન્ય લિસ્ટ. ફોલો કરવું અઘરું.' }
      },
      tejas: {
        prompt: {
          EN: "I'm in 10th grade. Weak in Math. School 8-2. Tuition 4-6. Make a plan.",
          GU: "હું ધોરણ 10માં છું. ગણિતમાં કાચો છું. સવારે 7 વાગ્યે ઉઠું છું, 8-2 સ્કૂલ, 4-6 ટ્યુશન. પ્લાન બનાવો."
        },
        answer: {
          EN: "Here is your personalized plan! 📅\n\n6:00 - 8:00 PM: Math (Focus time when fresh)\n8:30 - 9:30 PM: Science/English\nSunday: Mock Test & Revision.\n\nStick to this and you will score 90%+!",
          GU: "તારા માટે ખાસ પ્લાન! 📅\n\n6:00 - 8:00 PM: ગણિત (ફ્રેશ મૂડમાં)\n8:30 - 9:30 PM: વિજ્ઞાન/અંગ્રેજી\nરવિવાર: માત્ર રિવિઝન અને ટેસ્ટ.\n\nઆ પ્લાન ફોલો કર, 90% પાક્કા!"
        },
        result: { EN: 'Personalized & Actionable. Guarantees results.', GU: 'તમારા માટે ખાસ બનાવેલો પ્લાન. 100% રિઝલ્ટ આપે.' }
      }
    }
  };

  const currentScenario = scenarios[activeScenario];

  return (
    <section id="demo" className="py-24 bg-brand-50 text-brand-950 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob delay-100"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-brand-700 font-bold tracking-wider uppercase text-sm border border-brand-200 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full inline-block mb-4 shadow-sm">
             {lang === 'EN' ? "Experience The Difference" : "તફાવત જાતે અનુભવો"}
          </span>
          <h2 className={`text-3xl md:text-5xl font-black mb-6 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
            {lang === 'EN' ? "Generic AI vs The Tejas Method" : "સામાન્ય AI vs તેજસ મેથડ"}
          </h2>
          <p className="text-brand-800 text-lg max-w-2xl mx-auto mb-8">
            {lang === 'EN' 
              ? "See how the right prompt changes everything."
              : "જુઓ કે સાચો પ્રોમ્પ્ટ કેવી રીતે જાદુ કરે છે."}
          </p>

          {/* Scenario Selector */}
          <div className="inline-flex bg-white p-1 rounded-full border border-brand-200 shadow-sm mb-8">
            {(Object.keys(scenarios) as ScenarioType[]).map((key) => (
              <button
                key={key}
                onClick={() => setActiveScenario(key)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeScenario === key
                    ? 'bg-brand-500 text-white shadow-md transform scale-105'
                    : 'text-brand-400 hover:bg-brand-50'
                }`}
              >
                {scenarios[key].icon}
                {scenarios[key].title[lang]}
              </button>
            ))}
          </div>
        </div>

        {/* Side by Side Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">

          {/* Generic AI Card */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg flex flex-col h-full transform transition-all hover:shadow-xl group">
            <div className="bg-slate-50 p-4 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                  <span className="font-bold text-slate-500 text-xs">AI</span>
                </div>
                <span className="font-bold text-slate-600">Generic AI</span>
              </div>
              <span className="bg-slate-200 text-slate-600 text-xs font-bold px-2 py-1 rounded uppercase">
                {lang === 'EN' ? "Boring" : "કંટાળાજનક"}
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col gap-6">
              {/* User Prompt */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <span className="font-bold text-slate-500 text-xs">You</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-2xl rounded-tl-none text-slate-700 text-sm font-medium border border-slate-100 w-full">
                  "{currentScenario.generic.prompt[lang]}"
                </div>
              </div>

              {/* AI Response */}
              <div className="flex gap-3 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                   <X className="w-4 h-4 text-slate-500" />
                </div>
                <div className="bg-red-50 p-4 rounded-2xl rounded-tr-none text-slate-800 text-sm border border-red-100 w-full relative">
                  <p className="mb-2 opacity-80 font-mono text-xs leading-relaxed">
                    {currentScenario.generic.answer[lang]}
                  </p>
                  <div className="mt-3 pt-3 border-t border-red-100 flex items-start gap-2 text-red-500 text-xs font-bold">
                    <X className="w-4 h-4 shrink-0" />
                    <span>{currentScenario.generic.result[lang]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tejas Method Card */}
          <div className="bg-white rounded-3xl overflow-hidden border border-brand-200 shadow-xl flex flex-col h-full transform transition-all hover:shadow-2xl hover:-translate-y-1 relative ring-4 ring-brand-100">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-300 to-brand-500"></div>
            <div className="bg-brand-50 p-4 border-b border-brand-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-sm">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-brand-800">The Tejas Method</span>
              </div>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded uppercase flex items-center gap-1">
                <Check className="w-3 h-3" />
                {lang === 'EN' ? "Effective" : "અસરકારક"}
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col gap-6">
              {/* User Prompt */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                  <span className="font-bold text-brand-600 text-xs">You</span>
                </div>
                <div className="bg-white p-3 rounded-2xl rounded-tl-none text-brand-900 text-sm font-medium border border-brand-100 shadow-sm w-full">
                  <p className={`${lang === 'GU' ? 'font-gujarati' : ''}`}>
                    "{currentScenario.tejas.prompt[lang]}"
                  </p>
                </div>
              </div>

              {/* AI Response */}
              <div className="flex gap-3 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0 shadow-sm">
                   <Sparkles className="w-4 h-4 text-green-600" />
                </div>
                <div className="bg-green-50 p-4 rounded-2xl rounded-tr-none text-brand-900 text-sm border border-green-200 w-full shadow-sm">
                  <p className={`mb-3 whitespace-pre-line leading-relaxed ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                    {currentScenario.tejas.answer[lang]}
                  </p>
                  <div className="mt-3 pt-3 border-t border-green-200 flex items-start gap-2 text-green-700 text-xs font-bold uppercase">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>{currentScenario.tejas.result[lang]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="text-center mt-12">
           <p className={`text-xl text-brand-800 mb-6 font-medium ${lang === 'GU' ? 'font-gujarati' : ''}`}>
             {lang === 'EN' ? "Want to learn how to write prompts like this?" : "આવા પ્રોમ્પ્ટ લખતા શીખવું છે?"}
           </p>
           <button 
              onClick={scrollToEnroll}
              className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group"
           >
             {lang === 'EN' ? "Join The Masterclass" : "માસ્ટરક્લાસમાં જોડાઓ"}
             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
           </button>
        </div>
      </div>
    </section>
  );
};
