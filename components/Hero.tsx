import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Lock, Radio, ChevronDown } from 'lucide-react';
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
    <div className="relative bg-brand-50 pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">
      
      {/* --- GRID BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
         {/* Grid Pattern - Light Mode */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#FFD1D1_1px,transparent_1px),linear-gradient(to_bottom,#FFD1D1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-30"></div>
         
         {/* Moving Beam Effect - Soft Pink */}
         <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-brand-200 opacity-50 blur-[100px]"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-50 z-0 pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-200 text-brand-900 shadow-sm mb-8 animate-fade-in-up hover:scale-105 transition-transform cursor-default">
             <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-brand-700">
              {lang === 'EN' ? 'Admissions Open: March 2026 Batch' : 'એડમિશન શરૂ: માર્ચ 2026 બેચ'}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-brand-950 tracking-tight leading-[1.1] mb-8 opacity-0 animate-fade-in-up delay-100">
            {lang === 'EN' ? (
              <>
                <span className="block text-lg md:text-2xl font-extrabold text-brand-600 mb-4 tracking-[0.2em] uppercase font-sans">30-Day Live AI Masterclass</span>
                Stop Memorizing.<br/>
                Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-brand-400 to-brand-500 animate-shimmer bg-[length:200%_100%]">Understanding</span>.
              </>
            ) : (
              <span className="font-gujarati leading-tight">
                <span className="block text-lg md:text-2xl font-bold text-brand-600 mb-4 tracking-wide">ગુજરાતની પ્રથમ AI સ્કૂલ</span>
                ગોખણપટ્ટી છોડો,<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-brand-400 to-brand-500 animate-shimmer bg-[length:200%_100%]">AI સાથે ટોપર બનો</span>.
              </span>
            )}
          </h1>

          {/* Subheadline */}
          <p className="mt-8 text-lg md:text-2xl text-brand-800/80 max-w-3xl mx-auto leading-relaxed font-medium opacity-0 animate-fade-in-up delay-200">
            {lang === 'EN' ? (
              "A 30-Day Live Program via Zoom. See results from Week 1. I teach you how to use AI for better marks, better logic, and a better future."
            ) : (
              <span className="font-gujarati">
                ઝૂમ પર 30 દિવસનો લાઈવ કોર્સ. પહેલા અઠવાડિયાથી જ રિઝલ્ટ જુઓ. હું તમને શીખવીશ કે AI નો ઉપયોગ કરીને સારા માર્ક્સ અને ઉજ્જવળ ભવિષ્ય કેવી રીતે બનાવવું.
              </span>
            )}
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 animate-fade-in-up delay-300">
            <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
              <button 
                onClick={scrollToEnroll}
                className="group relative w-full sm:w-auto px-10 py-5 bg-brand-400 text-white text-xl font-bold rounded-full shadow-[0_4px_20px_rgba(255,148,148,0.4)] transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-3 overflow-hidden cursor-pointer hover:bg-brand-500"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {lang === 'EN' ? 'Book Free Roadmap Call' : 'ફ્રી રોડમેપ કોલ બુક કરો'}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <span className="text-[10px] md:text-xs font-bold text-brand-700 tracking-wide uppercase flex items-center gap-1.5 opacity-80">
                 <Lock className="w-3 h-3 text-brand-500 fill-current" />
                {lang === 'EN' ? 'Limited Batch Size' : 'ગુણવત્તા માટે મર્યાદિત બેચ'}
              </span>
            </div>
          </div>

          {/* Trust Indicators */}
           <div className="mt-20 pt-8 border-t border-brand-200 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-semibold text-brand-800 opacity-0 animate-fade-in-up delay-300">
            <div className="flex items-center gap-2 hover:text-brand-600 transition-colors">
               <Radio className="w-5 h-5 text-red-500 animate-pulse" />
               <span>Live on Zoom</span>
            </div>
            <div className="w-px h-4 bg-brand-200 hidden sm:block"></div>
            <div className="flex items-center gap-2 hover:text-brand-600 transition-colors">
              <ShieldCheck className="w-5 h-5 text-green-600" />
              <span>For All Fields (Arts/Com/Sci)</span>
            </div>
             <div className="w-px h-4 bg-brand-200 hidden sm:block"></div>
             <div className="flex items-center gap-2 hover:text-brand-600 transition-colors">
              <Zap className="w-5 h-5 text-yellow-500 fill-current" />
              <span>Certified Expert Tejas Sir</span>
            </div>
          </div>

          {/* Floating Tool Badges (Decorative) */}
          <div className="hidden lg:block absolute top-1/2 left-10 -translate-y-1/2 animate-float opacity-80 hover:opacity-100 transition-opacity duration-500">
             <div className="bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-brand-200 text-brand-900 font-mono text-sm rotate-[-6deg] shadow-lg">
                &gt; Learning_Logic...
             </div>
          </div>
          <div className="hidden lg:block absolute top-1/3 right-10 -translate-y-1/2 animate-float opacity-80 hover:opacity-100 transition-opacity duration-500 delay-300">
             <div className="bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-brand-200 text-brand-900 font-mono text-sm rotate-[6deg] shadow-lg">
                &gt; Solving_Doubts...
             </div>
          </div>
          
        </div>
      </div>
      
      {/* Bottom Fade to blend with next section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-50 to-transparent"></div>
    </div>
  );
};