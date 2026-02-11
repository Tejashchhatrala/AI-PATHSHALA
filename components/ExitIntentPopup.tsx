import React, { useState, useEffect } from 'react';
import { X, Gift, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

export const ExitIntentPopup: React.FC<Props> = ({ lang }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasSeen, setHasSeen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/1AxEX-loWlZHlCWXTtimPTezMqAbeKHPvTuBUjORRb3M/formResponse";
  
  // Updated IDs: Swapped Phone and Grade based on user feedback
  const FORM_FIELD_IDS = {
    name: "entry.549617858",
    phone: "entry.1902268774", // Previously assigned to grade
    grade: "entry.2145394662"  // Previously assigned to phone
  };
  const [formData, setFormData] = useState({ name: '', phone: '', grade: 'Popup Lead' });

  useEffect(() => {
    // Check session storage so we don't annoy user on every refresh
    const sessionSeen = sessionStorage.getItem('ai_pathshala_exit_popup_seen');
    if (sessionSeen) {
      setHasSeen(true);
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // If mouse leaves the top of the window
      if (e.clientY <= 0 && !hasSeen && !sessionStorage.getItem('ai_pathshala_exit_popup_seen')) {
        setIsVisible(true);
        setHasSeen(true);
        sessionStorage.setItem('ai_pathshala_exit_popup_seen', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasSeen]);

  const handleSubmit = (e: React.FormEvent) => {
    setIsSubmitting(true);
    // WhatsApp redirect after form submission
    const message = `Hello Tejas Sir, I claimed the Free Prompt Library via the website popup.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}`;
    const whatsappUrl = `https://wa.me/919879737819?text=${message}`;

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
          className="absolute top-4 right-4 p-2 bg-brand-50 rounded-full hover:bg-brand-100 transition-colors z-20 cursor-pointer"
        >
          <X className="w-5 h-5 text-brand-400" />
        </button>

        {/* Header */}
        <div className="bg-brand-600 p-8 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-brand-400 rounded-full blur-3xl opacity-50 -mr-10 -mt-10"></div>
           <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-50 -ml-10 -mb-10"></div>
           
           <div className="relative z-10 flex flex-col items-center">
             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-4 animate-bounce">
                <Gift className="w-8 h-8 text-brand-600" />
             </div>
             <h3 className={`text-2xl md:text-3xl font-black text-white leading-tight ${lang === 'GU' ? 'font-gujarati' : ''}`}>
               {lang === 'EN' ? "Wait! Don't Leave Empty Handed!" : "ઊભા રહો! ખાલી હાથે ન જશો!"}
             </h3>
             <p className={`text-brand-100 mt-2 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
               {lang === 'EN' ? "Get my secret 'Top 50 Exam Prompts' PDF for FREE." : "મારી સિક્રેટ 'Top 50 પરીક્ષા પ્રોમ્પ્ટ' PDF ફ્રીમાં મેળવો."}
             </p>
           </div>
        </div>

        {/* Form Body */}
        <div className="p-8">
           <iframe name="popup_hidden_iframe" id="popup_hidden_iframe" style={{display: 'none'}}></iframe>
           <form 
              action={GOOGLE_FORM_ACTION_URL} 
              method="post" 
              target="popup_hidden_iframe"
              onSubmit={handleSubmit}
              className="space-y-4"
           >
              <div>
                <label className="block text-sm font-bold text-brand-900 mb-1">
                   {lang === 'EN' ? "Your Name" : "તમારું નામ"}
                </label>
                <input 
                  type="text"
                  name={FORM_FIELD_IDS.name}
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-brand-200 focus:ring-2 focus:ring-brand-500 focus:outline-none bg-brand-50"
                  placeholder="e.g. Amit Patel"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-900 mb-1">
                   {lang === 'EN' ? "WhatsApp Number" : "વોટ્સએપ નંબર"}
                </label>
                <input 
                  type="tel"
                  name={FORM_FIELD_IDS.phone}
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-brand-200 focus:ring-2 focus:ring-brand-500 focus:outline-none bg-brand-50"
                  placeholder="98765 43210"
                />
                {/* Sending grade as hidden field for popup submissions */}
                <input type="hidden" name={FORM_FIELD_IDS.grade} value="Exit Popup Lead" />
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full mt-6 py-4 bg-brand-400 hover:bg-brand-500 text-white font-bold text-lg rounded-full shadow-[0_4px_20px_rgba(255,148,148,0.4)] transition-all transform active:scale-[0.98] hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
              >
                 {isSubmitting ? 'Processing...' : (
                   <span className="relative z-10 flex items-center gap-2">
                     {lang === 'EN' ? "Send Me The PDF" : "મને PDF મોકલો"}
                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                   </span>
                 )}
              </button>
           </form>
           <div className="mt-4 text-center">
             <button 
               onClick={() => setIsVisible(false)} 
               className="text-sm text-brand-400 hover:text-brand-600 underline cursor-pointer"
             >
               {lang === 'EN' ? "No thanks, I don't want better marks" : "ના, મારે સારા માર્ક્સ નથી જોઈતા"}
             </button>
           </div>
        </div>
      </div>
    </div>
  );
};