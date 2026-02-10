import React from 'react';
import { Laptop, Cpu, History, ArrowBigRight } from 'lucide-react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

export const ComputerEra: React.FC<Props> = ({ lang }) => {
  return (
    <section id="history" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
           <span className="text-brand-600 font-bold tracking-wider uppercase text-sm bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
              {lang === 'EN' ? "The Reality Check" : "વાસ્તવિકતા"}
            </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-slate-900 mt-4 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
            {lang === 'EN' ? "The World Has Changed." : "દુનિયા બદલાઈ ગઈ છે."}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* 2000 Era */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden group hover:border-slate-300 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Laptop className="w-24 h-24" />
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-slate-100 p-2 rounded-lg">
                <History className="w-6 h-6 text-slate-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">The Year 2000</h3>
            </div>
            <p className={`text-slate-600 mb-6 leading-relaxed ${lang === 'GU' ? 'font-gujarati' : ''}`}>
              {lang === 'EN' 
                ? "When computers arrived, many students said 'I don't need this'. Those who ignored it struggled for years. Those who learned it became leaders."
                : "જ્યારે કમ્પ્યુટર આવ્યા, ઘણા વિદ્યાર્થીઓએ કહ્યું 'મારે આની જરૂર નથી'. જેણે અવગણના કરી તેઓ વર્ષો સુધી સંઘર્ષ કરતા રહ્યા. જે શીખ્યા તેઓ લીડર બન્યા."}
            </p>
            <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm font-medium">
              {lang === 'EN' ? "The Mistake: Ignoring Change" : "ભૂલ: બદલાવની અવગણના"}
            </div>
          </div>

          {/* AI Era */}
          <div className="bg-brand-900 p-8 rounded-2xl shadow-xl border border-brand-700 relative overflow-hidden text-white transform md:scale-105 z-10">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Cpu className="w-24 h-24" />
            </div>
            <div className="flex items-center gap-3 mb-4">
               <div className="bg-brand-700 p-2 rounded-lg">
                <ArrowBigRight className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">The AI Era (Now)</h3>
            </div>
            <p className={`text-brand-100 mb-6 leading-relaxed ${lang === 'GU' ? 'font-gujarati' : ''}`}>
              {lang === 'EN' 
                ? "Now, AI is the new computer. Top professionals already use it to finish 2 hours of work in 20 minutes. As your mentor, I want to bring this advantage to YOU."
                : "હવે AI એ નવું કમ્પ્યુટર છે. ટોપ પ્રોફેશનલ્સ તેનો ઉપયોગ કરીને 2 કલાકનું કામ 20 મિનિટમાં પૂરું કરે છે. તમારા મેન્ટર તરીકે, હું ઈચ્છું છું કે આ પાવર તમારી પાસે હોય."}
            </p>
            <div className="bg-green-500/20 text-green-100 border border-green-500/30 p-3 rounded-lg text-sm font-medium">
              {lang === 'EN' ? "My Goal: Give You This Superpower" : "મારો ઉદ્દેશ્ય: તમને આ સુપરપાવર આપવો"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};