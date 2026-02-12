import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

export const ExitIntentPopup: React.FC<Props> = ({ lang }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasSeen, setHasSeen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/1AxEX-loWlZHlCWXTtimPTezMqAbeKHPvTuBUjORRb3M/formResponse";
  
  const FORM_FIELD_IDS = {
    name: "entry.549617858",
    phone: "entry.1902268774",
    grade: "entry.2145394662"
  };
  const [formData, setFormData] = useState({ name: '', phone: '', grade: 'Popup Lead' });

  useEffect(() => {
    // Check session storage
    const sessionSeen = sessionStorage.getItem('ai_pathshala_exit_popup_seen');
    if (sessionSeen) {
      setHasSeen(true);
      return; // If seen, don't set up any listeners
    }

    const showPopup = () => {
      if (!sessionStorage.getItem('ai_pathshala_exit_popup_seen')) {
        setIsVisible(true);
        setHasSeen(true);
        sessionStorage.setItem('ai_pathshala_exit_popup_seen', 'true');
      }
    };

    // 1. Mouse Leave (Desktop Only)
    // This event only triggers reliably on desktop when cursor leaves the window upwards (to tabs/address bar)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        showPopup();
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasSeen]);

  const handleSubmit = (e: React.FormEvent) => {
    setIsSubmitting(true);
    // WhatsApp redirect logic
    const message = `Hello Tejas Sir, I claimed the Free Prompt Library via the website popup.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}`;
    const whatsappUrl = `https://wa.me/919879737819?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.location.href = whatsappUrl;
      setIsSubmitting(false);
    }, 1500);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-fade-in-up">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-20 cursor-pointer"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Content Body */}
        <div className="p-8 pt-12 md:p-10">
           
           <div className="text-center space-y-4 mb-8">
             {/* Headline */}
             <h3 className={`text-2xl md:text-3xl font-black text-brand-600 leading-tight ${lang === 'GU' ? 'font-gujarati' : ''}`}>
               {lang === 'EN'
                 ? "Wait! Don't Leave Without This Exam Advantage."
                 : "ઊભા રહો! શું તમે આ 50 AI પરીક્ષા પ્રોમ્પ્ટ વગર જશો?"}
             </h3>

             {/* Subheadline */}
             <p className={`text-gray-600 text-lg font-medium leading-snug ${lang === 'GU' ? 'font-gujarati' : ''}`}>
               {lang === 'EN'
                 ? "50 AI Exam Prompts Designed for Grades 9–12. Revise 2x Faster. Score Higher. Study Smarter. Built from the Tejas AI Study System™."
                 : "ધોરણ 9–12 માટે ખાસ તૈયાર. 2x ઝડપી રિવિઝન. વધુ માર્ક્સ. ઓછું ટેન્શન. Tejas AI Study System™ પરથી તૈયાર."}
             </p>

             {/* Micro-Proof */}
             <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-100">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
               <p className={`text-green-800 text-sm font-bold ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                 {lang === 'EN'
                   ? "Already helping 300+ Gujarati students improve marks."
                   : "300+ વિદ્યાર્થીઓ આ પ્રોમ્પ્ટથી પહેલેથી જ ફાયદો લઈ રહ્યા છે."}
               </p>
             </div>
           </div>

           {/* Form */}
           <iframe name="popup_hidden_iframe" id="popup_hidden_iframe" style={{display: 'none'}}></iframe>
           <form 
              action={GOOGLE_FORM_ACTION_URL} 
              method="post" 
              target="popup_hidden_iframe"
              onSubmit={handleSubmit}
              className="space-y-4"
           >
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                   {lang === 'EN' ? "Your Name" : "વિદ્યાર્થીનું નામ"}
                </label>
                <input 
                  type="text"
                  name={FORM_FIELD_IDS.name}
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:outline-none bg-gray-50 placeholder-gray-400"
                  placeholder="e.g. Amit Patel"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                   {lang === 'EN' ? "WhatsApp Number" : "વોટ્સએપ નંબર"}
                </label>
                <input 
                  type="tel"
                  name={FORM_FIELD_IDS.phone}
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:outline-none bg-gray-50 placeholder-gray-400"
                  placeholder="98765 43210"
                />
                <input type="hidden" name={FORM_FIELD_IDS.grade} value="Exit Popup Lead" />
              </div>
              
              {/* Primary CTA */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full mt-6 py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-brand-500/30 transition-all transform active:scale-[0.98] hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
              >
                 {isSubmitting ? 'Processing...' : (
                   <span className="relative z-10 flex items-center gap-2">
                     {lang === 'EN' ? "Yes, Send Me The Study Upgrade PDF" : "હા! મને Study Upgrade PDF મોકલો"}
                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                   </span>
                 )}
              </button>
           </form>

           {/* Secondary CTA & Trust */}
           <div className="mt-6 text-center space-y-4">
             <button 
               onClick={() => setIsVisible(false)} 
               className={`text-sm text-gray-400 hover:text-gray-600 transition-colors cursor-pointer ${lang === 'GU' ? 'font-gujarati' : ''}`}
             >
               {lang === 'EN' ? "No, I’ll Stick To Old Study Methods" : "ના, હું જૂની ગોખણપટ્ટી જ ચાલુ રાખીશ"}
             </button>

             <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
               <ShieldCheck className="w-3 h-3" />
               <span>
                 {lang === 'EN'
                   ? "100% Free. No Spam. PDF delivered instantly on WhatsApp."
                   : "100% ફ્રી. કોઈ સ્પામ નહીં. PDF તરત વોટ્સએપ પર મળશે."}
               </span>
             </div>
           </div>

        </div>
      </div>
    </div>
  );
};