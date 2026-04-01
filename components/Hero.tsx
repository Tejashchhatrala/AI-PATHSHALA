import React, { useState } from 'react';
import { MessageCircle, ShieldCheck, BookOpen, Users, IndianRupee, Play, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';
import { scrollToElement } from '../utils';

interface Props {
  lang: Language;
}

export const Hero: React.FC<Props> = ({ lang }) => {
  const t = content.hero;
  
  const scrollToEnroll = (e: React.MouseEvent) => scrollToElement('enroll', e);

  return (
    <div className="relative bg-brand-50 pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden overflow-x-hidden">
      
      {/* --- GRID BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
         {/* Grid Pattern */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#FFD1D1_1px,transparent_1px),linear-gradient(to_bottom,#FFD1D1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40"></div>
         
         {/* Moving Beam Effect */}
         <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-brand-200 opacity-50 blur-[100px]"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-50 z-0 pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* LEFT COLUMN: Copy & Action */}
          <div className="lg:w-[55%] flex flex-col items-center text-center lg:items-start lg:text-left">
            
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-red-50 border border-red-200 text-red-800 shadow-sm mb-6 animate-fade-in-up cursor-default">
               <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              <span className="text-[11px] font-black tracking-widest uppercase">
                {lang === 'EN' ? t.badge.en : t.badge.gu}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[2.2rem] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-black text-brand-950 tracking-tight leading-[1.1] mb-6 opacity-0 animate-fade-in-up delay-100 relative">
               {lang === 'EN' ? (
                <>
                  {t.headline.line1.en}<br/>
                  <span className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-brand-600 tracking-tight block mt-4 lg:mt-6 mb-2">{t.headline.line2.en}</span>
                </>
              ) : (
                <span className="font-gujarati leading-[1.2] font-extrabold text-[2rem] sm:text-[2.8rem] lg:text-[3.5rem] xl:text-[4rem] block">
                   <span className="text-brand-950 leading-tight">{t.headline.line1.gu}</span><br/>
                   <span className="text-[1.8rem] sm:text-4xl lg:text-5xl font-black text-brand-600 tracking-wide block mt-3 lg:mt-5 mb-2 leading-tight">
                    {t.headline.line2.gu}
                   </span>
                </span>
              )}
            </h1>

            {/* Subheadline (Empathy) */}
            <p className="mt-4 text-brand-800/80 text-lg md:text-xl max-w-2xl leading-relaxed font-semibold opacity-0 animate-fade-in-up delay-200">
              {lang === 'EN' ? t.subheadline.en : <span className="font-gujarati leading-relaxed text-xl">{t.subheadline.gu}</span>}
            </p>

            {/* Price Pill */}
            <div className="mt-8 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 shadow-sm opacity-0 animate-fade-in-up delay-[250ms]">
              <IndianRupee className="w-5 h-5 text-emerald-600" />
              <span className="text-[15px] font-black tracking-wide">
                {lang === 'EN' ? 'Course Fee: ₹3,999 (Was ₹8,999)' : 'કોર્સ ફી: ₹3,999 (પહેલાં ₹8,999)'}
              </span>
            </div>

            {/* CTA Group */}
            <div className="mt-10 w-full flex flex-col items-center lg:items-start opacity-0 animate-fade-in-up delay-300">
                <button 
                  onClick={scrollToEnroll}
                  className="group relative w-full sm:w-auto px-8 py-5 bg-[#25D366] text-white text-[19px] font-bold rounded-full shadow-[0_4px_25px_rgba(37,211,102,0.4)] transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-3 overflow-hidden cursor-pointer hover:bg-[#1ebe5a] animate-heartbeat hover:animate-none"
                >
                  <div className="absolute top-0 -left-[150%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shimmer" />
                  <span className="relative z-10 flex items-center gap-3">
                    <MessageCircle className="w-6 h-6 fill-current" />
                    {lang === 'EN' ? t.cta.en : t.cta.gu}
                  </span>
                </button>
                
                {/* Social Proof Avatars underneath CTA */}
                <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 text-sm font-semibold text-brand-700">
                  <div className="flex -space-x-3">
                     {t.socialProof.avatars.map((avatar, idx) => (
                       <img 
                          key={idx}
                          src={avatar}
                          alt="Student Avatar"
                          className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm bg-brand-100"
                        />
                     ))}
                     <div className="w-10 h-10 rounded-full border-2 border-white bg-brand-100 flex items-center justify-center text-[10px] font-black text-brand-600 shadow-sm z-10">
                       200+
                     </div>
                  </div>
                  <span className="flex items-center gap-1.5 whitespace-nowrap">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                    {lang === 'EN' ? t.socialProof.text.en : t.socialProof.text.gu}
                  </span>
                </div>
            </div>

            {/* Trust Indicators */}
             <div className="mt-10 pt-6 border-t border-brand-200/50 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-[13px] font-bold text-brand-800/70 opacity-0 animate-fade-in-up delay-[400ms]">
              <div className="flex items-center gap-1.5 hover:text-brand-600 transition-colors">
                 <ShieldCheck className="w-4 h-4 text-emerald-500" />
                 <span>{lang === 'EN' ? "100% Secure" : "૧૦૦% સુરક્ષિત"}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-brand-200"></div>
               <div className="flex items-center gap-1.5 hover:text-brand-600 transition-colors">
                 <BookOpen className="w-4 h-4 text-brand-500" />
                 <span>{lang === 'EN' ? "Board Focused" : "બોર્ડ ફોકસ્ડ"}</span>
              </div>
               <div className="w-1 h-1 rounded-full bg-brand-200 hidden sm:block"></div>
               <div className="flex items-center gap-1.5 hover:text-brand-600 transition-colors">
                 <Users className="w-4 h-4 text-brand-500" />
                 <span>{lang === 'EN' ? "Ethical AI Use" : "નૈતિક AI ઉપયોગ"}</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Visual Proof / Mockup */}
          <div className="lg:w-[45%] w-full mt-10 lg:mt-0 relative opacity-0 animate-fade-in-up delay-300">
             
             {/* Visual Container */}
             <div className="relative rounded-[2rem] p-2 bg-gradient-to-tr from-brand-200 to-white shadow-[0_20px_50px_rgba(255,148,148,0.2)]">
               
               {/* Hovering Badges */}
               <div className="absolute -top-4 -right-4 bg-white px-4 py-2 rounded-2xl shadow-lg border border-brand-50 flex items-center gap-3 z-20 animate-bounce-slow" style={{ animationDuration: '4s' }}>
                 <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <span className="font-bold text-sm">A+</span>
                 </div>
                 <div className="flex flex-col">
                   <span className="text-[10px] font-bold text-brand-400 uppercase tracking-wide">Result</span>
                   <span className="text-sm font-black text-brand-900 leading-tight">2x Faster Revision</span>
                 </div>
               </div>

                <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-2xl shadow-xl border border-brand-50 flex items-center gap-3 z-20 animate-bounce-slow" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                  <div className="bg-brand-500 rounded-lg p-2 text-white">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                   <span className="text-[10px] font-bold text-brand-400 uppercase tracking-wide">Subject</span>
                   <span className="text-sm font-black text-brand-900 leading-tight">Physics / Science</span>
                 </div>
               </div>

               {/* Main Image */}
               <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/3] group shadow-inner">
                  <div className="absolute inset-0 bg-brand-900/10 group-hover:bg-brand-900/0 transition-colors duration-500 z-10"></div>

                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80" 
                    alt="Students studying effectively" 
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                  />

                  {/* UI Overlay mock */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/20 z-10 transform translate-y-2 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-300">
                     <div className="flex items-center gap-3">
                       <div className="w-1.5 h-10 rounded-full bg-brand-500"></div>
                       <div>
                         <p className="text-xs font-bold text-brand-400 uppercase mb-0.5 tracking-wide">AI Suggested Concept</p>
                         <p className="text-sm font-black text-brand-900 font-gujarati tracking-wide">ન્યૂટનનો ત્રીજો નિયમ - સરળ ઉદાહરણો</p>
                       </div>
                     </div>
                  </div>
               </div>
             </div>

             {/* Background Blobs for Visual Interest */}
             <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
             <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          </div>

        </div>
      </div>
      
      {/* Bottom Fade to blend with next section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-50 to-transparent"></div>
    </div>
  );
};
