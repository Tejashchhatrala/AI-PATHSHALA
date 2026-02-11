import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Lock, ChevronDown, Radio } from 'lucide-react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

export const Hero: React.FC<Props> = ({ lang }) => {
  
  const scrollToEnroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('enroll');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-36 lg:pb-32">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
         <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-brand-100/50 rounded-full blur-[100px] opacity-60 animate-blob"></div>
         <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-[100px] opacity-60 animate-blob animation-delay-2000"></div>
         <div className="absolute bottom-[-10%] right-[20%] w-[600px] h-[600px] bg-amber-50/50 rounded-full blur-[100px] opacity-60 animate-blob animation-delay-4000"></div>
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-900/95 backdrop-blur-sm border border-slate-700 text-white shadow-xl mb-8 animate-fade-in-up cursor-default hover:scale-105 transition-transform group">
             <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs md:text-sm font-bold tracking-wide uppercase group-hover:text-brand-300 transition-colors">
              {lang === 'EN' ? 'Admissions Open for 2025' : '2025 એડમિશન શરૂ'}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[1.05] mb-8 drop-shadow-sm opacity-0 animate-fade-in-up delay-100">
            {lang === 'EN' ? (
              <>
                <span className="block text-xl md:text-3xl font-extrabold text-brand-600 mb-4 tracking-widest uppercase">Gujarat's First AI School</span>
                Stop Memorizing.<br/>
                Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600">Understanding</span>.
              </>
            ) : (
              <span className="font-gujarati leading-tight">
                <span className="block text-lg md:text-2xl font-bold text-brand-600 mb-4 tracking-wide">ગુજરાતની પ્રથમ AI સ્કૂલ</span>
                ગોખણપટ્ટી છોડો,<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600">AI સાથે ટોપર બનો</span>.
              </span>
            )}
          </h1>

          {/* Subheadline */}
          <p className="mt-8 text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium opacity-0 animate-fade-in-up delay-200">
            {lang === 'EN' ? (
              "I'm Tejas. I am launching a new program to teach you how to use AI Tools to save 2+ hours of study time every day—ethically and smartly."
            ) : (
              <span className="font-gujarati">
                હું તેજસ છું. હું એક નવો પ્રોગ્રામ લોન્ચ કરી રહ્યો છું જે તમને શીખવશે કે AI ટૂલ્સનો ઉપયોગ કરીને રોજના 2 કલાક કેવી રીતે બચાવવા અને સ્માર્ટ અભ્યાસ કેવી રીતે કરવો.
              </span>
            )}
          </p>

          {/* Buttons - CTA with Animation */}
          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center opacity-0 animate-fade-in-up delay-300">
            <div className="flex flex-col items-center gap-2 w-full sm:w-auto">
              <button 
                onClick={scrollToEnroll}
                className="group relative w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white text-xl font-bold rounded-2xl shadow-xl shadow-brand-500/40 transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-3 border-t border-brand-400 ring-4 ring-brand-100 overflow-hidden cursor-pointer"
              >
                {/* Shimmer Effect */}
                <div className="absolute top-0 left-0 -inset-full h-full w-1/2 z-[1] block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shimmer pointer-events-none" />
                
                <span className="relative z-10 flex items-center gap-3">
                  {lang === 'EN' ? 'Book Free Roadmap Call' : 'ફ્રી રોડમેપ કોલ બુક કરો'}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <span className="text-[10px] md:text-xs font-bold text-slate-500 tracking-wide uppercase flex items-center gap-1.5 opacity-80">
                 <Lock className="w-3 h-3 text-brand-500 fill-current" />
                {lang === 'EN' ? 'Limited Batch Size for Quality' : 'ગુણવત્તા માટે મર્યાદિત બેચ'}
              </span>
            </div>
          </div>

          {/* Trust Indicators */}
           <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-semibold text-slate-500 opacity-0 animate-fade-in-up delay-300">
            <div className="flex items-center gap-2 hover:text-brand-600 transition-colors">
               <Radio className="w-5 h-5 text-red-500 animate-pulse" />
               <span className="text-slate-900">Live Mentorship</span>
            </div>
            <div className="w-px h-4 bg-slate-300 hidden sm:block"></div>
            <div className="flex items-center gap-2 hover:text-brand-600 transition-colors">
              <ShieldCheck className="w-5 h-5 text-green-600" />
              <span>100% Ethical Methods</span>
            </div>
             <div className="w-px h-4 bg-slate-300 hidden sm:block"></div>
             <div className="flex items-center gap-2 hover:text-brand-600 transition-colors">
              <Zap className="w-5 h-5 text-accent-500 fill-current" />
              <span>Certified AI Expert</span>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100 inline-block hover:bg-slate-100 transition-colors animate-float">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
               {lang === 'EN' ? "We Master The Top Tools" : "અમે આ શ્રેષ્ઠ સાધનો શીખવીએ છીએ"}
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
               {['ChatGPT', 'Gemini', 'Claude', 'Perplexity', 'Gamma'].map(tool => (
                 <span key={tool} className="text-lg md:text-xl font-black text-slate-700 hover:text-brand-600 transition-colors cursor-default opacity-80 hover:opacity-100">{tool}</span>
               ))}
            </div>
          </div>

          <div className="mt-16 animate-bounce text-slate-300">
            <ChevronDown className="w-8 h-8 mx-auto" />
          </div>

        </div>
      </div>
    </div>
  );
};