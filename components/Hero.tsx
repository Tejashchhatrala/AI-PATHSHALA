import React from 'react';
import { MessageCircle, ShieldCheck, BookOpen, Users, IndianRupee } from 'lucide-react';
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
          
          {/* Urgency Badge — Seat Count + Deadline */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-red-50 border border-red-200 text-red-800 shadow-sm mb-8 animate-fade-in-up cursor-default">
             <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
            </span>
            <span className="text-xs font-extrabold tracking-wide uppercase">
              {lang === 'EN' ? t.badge.en : t.badge.gu}
            </span>
          </div>

          {/* Main Headline — Parent-Facing Transformation */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-950 tracking-tight leading-[1.15] mb-6 opacity-0 animate-fade-in-up delay-100">
             {lang === 'EN' ? (
              <>
                {t.headline.line1.en}<br/>
                <span className="text-xl md:text-3xl font-extrabold text-brand-600 tracking-wide block mt-5 mb-2">{t.headline.line2.en}</span>
              </>
            ) : (
              <span className="font-gujarati leading-tight font-extrabold">
                 {t.headline.line1.gu}<br/>
                 <span className="text-xl md:text-3xl font-bold text-brand-600 tracking-wide block mt-5 mb-2">{t.headline.line2.gu}</span>
              </span>
            )}
          </h1>

          {/* Subheadline — Empathy + Promise for Parents */}
          <p className="mt-6 text-lg md:text-2xl text-brand-800/80 max-w-3xl mx-auto leading-relaxed font-medium opacity-0 animate-fade-in-up delay-200">
            {lang === 'EN' ? t.subheadline.en : <span className="font-gujarati">{t.subheadline.gu}</span>}
          </p>

          {/* Price Pill — ₹0 Front and Center */}
          <div className="mt-8 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 shadow-sm opacity-0 animate-fade-in-up delay-200">
            <IndianRupee className="w-4 h-4" />
            <span className="text-sm font-extrabold tracking-wide">
              {lang === 'EN' ? '₹0 — Completely Free. No Hidden Charges.' : '₹0 — સંપૂર્ણ ફ્રી. કોઈ છુપા ચાર્જ નહીં.'}
            </span>
          </div>

          {/* CTA Button — WhatsApp-First */}
          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 animate-fade-in-up delay-300">
            <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
              <button 
                onClick={scrollToEnroll}
                className="group relative w-full sm:w-auto px-10 py-5 bg-[#25D366] text-white text-xl font-bold rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-3 overflow-hidden cursor-pointer hover:bg-[#1ebe5a] animate-heartbeat hover:animate-none"
              >
                {/* Shimmer effect */}
                <div className="absolute top-0 -left-[150%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 animate-shimmer" />

                <span className="relative z-10 flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 fill-current" />
                  {lang === 'EN' ? t.cta.en : t.cta.gu}
                </span>
              </button>
              <span className="text-[10px] md:text-xs font-bold text-red-600 tracking-wide uppercase flex items-center gap-1.5 opacity-90">
                {lang === 'EN' ? '⏳ Only 12 seats left — April batch' : '⏳ માત્ર 12 સીટ બાકી — એપ્રિલ બેચ'}
              </span>
            </div>
          </div>

          {/* Trust Indicators — Parent Objection Busters */}
           <div className="mt-20 pt-8 border-t border-brand-200 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-semibold text-brand-800 opacity-0 animate-fade-in-up delay-300">
            <div className="flex items-center gap-2 hover:text-brand-600 transition-colors">
               <BookOpen className="w-5 h-5 text-brand-500" />
               <span>{lang === 'EN' ? t.features[0].en : t.features[0].gu}</span>
            </div>
            <div className="w-px h-4 bg-brand-200 hidden sm:block"></div>
            <div className="flex items-center gap-2 hover:text-brand-600 transition-colors">
              <ShieldCheck className="w-5 h-5 text-brand-600" />
               <span>{lang === 'EN' ? t.features[2].en : t.features[2].gu}</span>
            </div>
             <div className="w-px h-4 bg-brand-200 hidden sm:block"></div>
             <div className="flex items-center gap-2 hover:text-brand-600 transition-colors">
              <Users className="w-5 h-5 text-brand-500" />
              <span>{lang === 'EN' ? t.features[1].en : t.features[1].gu}</span>
            </div>
             <div className="w-px h-4 bg-brand-200 hidden sm:block"></div>
             <div className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
              <IndianRupee className="w-5 h-5 text-emerald-500" />
              <span>{lang === 'EN' ? t.features[3].en : t.features[3].gu}</span>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Bottom Fade to blend with next section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-50 to-transparent"></div>
    </div>
  );
};
