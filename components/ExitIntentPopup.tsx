import React, { useState, useEffect, useCallback } from 'react';
import { X, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { Language } from '../types';
import { GOOGLE_FORM_EXIT_POPUP_URL, GOOGLE_FORM_FIELD_IDS, WHATSAPP_PHONE_NUMBER } from '../constants';

interface Props {
  lang: Language;
}

const validatePopupField = (name: string, value: string, lang: Language) => {
  let error = '';
  if (name === 'name' && !value.trim()) {
    error = lang === 'EN' ? 'Name is required' : 'નામ લખવું જરૂરી છે';
  }
  if (name === 'phone') {
    if (!value.trim()) {
      error = lang === 'EN' ? 'WhatsApp number is required' : 'વોટ્સએપ નંબર લખવો જરૂરી છે';
    } else if (value.length < 10) {
      error = lang === 'EN' ? 'Invalid phone number' : 'અમાન્ય મોબાઈલ નંબર';
    }
  }
  return error;
};

export const ExitIntentPopup: React.FC<Props> = ({ lang }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasSeen, setHasSeen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({ name: '', phone: '', grade: 'Popup Lead' });
  const [errors, setErrors] = useState({ name: '', phone: '' });

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

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let fieldKey = '' as keyof typeof formData;
    if (name === GOOGLE_FORM_FIELD_IDS.name) fieldKey = 'name';
    if (name === GOOGLE_FORM_FIELD_IDS.phone) fieldKey = 'phone';

    if (fieldKey) {
        // Special handling for phone
        const finalValue = fieldKey === 'phone' ? value.replace(/\D/g, '') : value;

        setFormData(prev => ({ ...prev, [fieldKey]: finalValue }));

        // Clear error if exists
        setErrors(prev => {
            if (prev[fieldKey as keyof typeof errors]) {
                return { ...prev, [fieldKey]: '' };
            }
            return prev;
        });
    }
  }, []);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let fieldKey = '' as keyof typeof formData;
    if (name === GOOGLE_FORM_FIELD_IDS.name) fieldKey = 'name';
    if (name === GOOGLE_FORM_FIELD_IDS.phone) fieldKey = 'phone';

    if (fieldKey) {
       const error = validatePopupField(fieldKey as string, value, lang);
       setErrors(prev => ({ ...prev, [fieldKey]: error }));
    }
  }, [lang]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    const nameError = validatePopupField('name', formData.name, lang);
    const phoneError = validatePopupField('phone', formData.phone, lang);

    if (nameError || phoneError) {
        e.preventDefault();
        setErrors({
            name: nameError,
            phone: phoneError
        });
        return;
    }

    setIsSubmitting(true);
    // WhatsApp redirect logic
    const message = `Hello Tejas Sir, I claimed the Free Prompt Library via the website popup.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.location.href = whatsappUrl;
      setIsSubmitting(false);
    }, 1500);
  }, [formData, lang]);

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
             <div className="inline-flex items-center gap-2 bg-brand-50 px-4 py-2 rounded-full border border-brand-100">
               <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></div>
               <p className={`text-brand-800 text-sm font-bold ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                 {lang === 'EN'
                   ? "Already helping 300+ Gujarati students improve marks."
                   : "300+ વિદ્યાર્થીઓ આ પ્રોમ્પ્ટથી પહેલેથી જ ફાયદો લઈ રહ્યા છે."}
               </p>
             </div>
           </div>

           {/* Form */}
           <iframe name="popup_hidden_iframe" id="popup_hidden_iframe" style={{display: 'none'}}></iframe>
           <form 
              action={GOOGLE_FORM_EXIT_POPUP_URL}
              method="post" 
              target="popup_hidden_iframe"
              onSubmit={handleSubmit}
              className="space-y-4"
              noValidate
           >
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                   {lang === 'EN' ? "Your Name" : "વિદ્યાર્થીનું નામ"}
                </label>
                <input 
                  type="text"
                  name={GOOGLE_FORM_FIELD_IDS.name}
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-brand-500 ring-1 ring-brand-500' : 'border-gray-200'} focus:ring-2 focus:ring-brand-500 focus:outline-none bg-gray-50 placeholder-gray-400`}
                  placeholder="e.g. Amit Patel"
                />
                {errors.name && (
                    <div className="flex items-center gap-1 mt-1 text-brand-600 text-xs font-bold animate-fade-in">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                    </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                   {lang === 'EN' ? "WhatsApp Number" : "વોટ્સએપ નંબર"}
                </label>
                <input 
                  type="tel"
                  name={GOOGLE_FORM_FIELD_IDS.phone}
                  required
                  pattern="[0-9]{10}"
                  maxLength={10}
                  title={lang === 'EN' ? "Please enter a valid 10-digit phone number" : "કૃપા કરીને 10 અંકનો માન્ય મોબાઈલ નંબર દાખલ કરો"}
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-brand-500 ring-1 ring-brand-500' : 'border-gray-200'} focus:ring-2 focus:ring-brand-500 focus:outline-none bg-gray-50 placeholder-gray-400`}
                  placeholder="98765 43210"
                />
                {errors.phone && (
                    <div className="flex items-center gap-1 mt-1 text-brand-600 text-xs font-bold animate-fade-in">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                    </div>
                )}
                <input type="hidden" name={GOOGLE_FORM_FIELD_IDS.grade} value="Exit Popup Lead" />
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
