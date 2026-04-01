import React, { useState, useEffect, useCallback } from 'react';
import { X, ArrowRight, ShieldCheck, AlertCircle, PhoneCall } from 'lucide-react';
import { Language } from '../types';
import { GOOGLE_FORM_EXIT_POPUP_URL, GOOGLE_FORM_FIELD_IDS, WHATSAPP_PHONE_NUMBER, PHONE_REGEX } from '../constants';
import { sanitizeInput } from '../utils';

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
        let finalValue = value;
        if (fieldKey === 'phone') {
             finalValue = value.replace(PHONE_REGEX, '');
        } else {
             // Sanitize input to prevent XSS
             finalValue = sanitizeInput(value, 100, false);
        }

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
    const message = `Hello Tejas Sir, I would like to book the Free 15-Minute Consultation (via website popup) to see if the course is right for my child.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.location.href = whatsappUrl;
      setIsSubmitting(false);
    }, 1500);
  }, [formData, lang]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-white rounded-[2rem] shadow-2xl max-w-lg w-full overflow-hidden animate-fade-in-up border border-brand-100">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-5 right-5 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-20 cursor-pointer"
          aria-label="Close popup"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Content Body */}
        <div className="p-8 pt-12 md:p-10">
           
           <div className="text-center space-y-4 mb-8">
             {/* Headline */}
             <div className="flex justify-center mb-4">
               <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                 <PhoneCall className="w-8 h-8 text-blue-500" />
               </div>
             </div>
             
             <h3 className={`text-2xl md:text-3xl font-black text-brand-950 leading-tight ${lang === 'GU' ? 'font-gujarati' : ''}`}>
               {lang === 'EN'
                 ? "Unsure if AI Pathshala is right for your child?"
                 : "શું તમને ખાતરી નથી કે AI Pathshala તમારા બાળક માટે યોગ્ય છે?"}
             </h3>

             {/* Subheadline */}
             <p className={`text-gray-600 text-base font-medium leading-relaxed ${lang === 'GU' ? 'font-gujarati' : ''}`}>
               {lang === 'EN'
                 ? "Book a free 15-minute consultation call directly with Tejas Sir. We'll discuss your child's study challenges and clear any doubts about the ₹3,999 program."
                 : "તેજસ સર સાથે સીધો ફ્રી 15-મિનિટ કન્સલ્ટેશન કૉલ બુક કરો. આપણે તમારા બાળકની અભ્યાસની સમસ્યાઓ ચર્ચા કરીશું અને ₹3,999 પ્રોગ્રામ વિશે કોઈપણ શંકાઓ દૂર કરીશું."}
             </p>

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
                <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">
                   {lang === 'EN' ? "Parent's Name" : "વાલીનું નામ"}
                </label>
                <input 
                  type="text"
                  name={GOOGLE_FORM_FIELD_IDS.name}
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-5 py-4 rounded-xl border-2 ${errors.name ? 'border-red-400 ring-4 ring-red-400/20' : 'border-gray-200'} focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none bg-gray-50 placeholder-gray-400 font-semibold transition-all`}
                  placeholder="e.g. Amit Patel"
                />
                {errors.name && (
                    <div className="flex items-center gap-1.5 mt-2 text-red-500 text-xs font-bold animate-fade-in">
                        <AlertCircle className="w-3" />
                        <span>{errors.name}</span>
                    </div>
                )}
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">
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
                  className={`w-full px-5 py-4 rounded-xl border-2 ${errors.phone ? 'border-red-400 ring-4 ring-red-400/20' : 'border-gray-200'} focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none bg-gray-50 placeholder-gray-400 font-semibold transition-all`}
                  placeholder="98765 43210"
                />
                {errors.phone && (
                    <div className="flex items-center gap-1.5 mt-2 text-red-500 text-xs font-bold animate-fade-in">
                        <AlertCircle className="w-3" />
                        <span>{errors.phone}</span>
                    </div>
                )}
                <input type="hidden" name={GOOGLE_FORM_FIELD_IDS.grade} value="Exit Popup Lead" />
              </div>
              
              {/* Primary CTA */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full mt-6 py-4.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-[17px] rounded-xl shadow-[0_8px_25px_rgba(37,99,235,0.3)] transition-all transform active:scale-[0.98] hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden border border-blue-500"
              >
                 {isSubmitting ? 'Processing...' : (
                   <span className="relative z-10 flex items-center gap-2 tracking-wide">
                     {lang === 'EN' ? "Book Free 15-Min Call" : "ફ્રી 15-મિનિટ કૉલ બુક કરો"}
                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                   </span>
                 )}
              </button>
           </form>

           {/* Secondary CTA & Trust */}
           <div className="mt-6 text-center space-y-4">
             <button 
               onClick={() => setIsVisible(false)} 
               className={`text-sm text-gray-400 hover:text-gray-600 transition-colors cursor-pointer font-medium ${lang === 'GU' ? 'font-gujarati' : ''}`}
             >
               {lang === 'EN' ? "I'm ready to enroll directly" : "હું સીધા જ એડમિશન લેવા માટે તૈયાર છું"}
             </button>

             <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-gray-400">
               <ShieldCheck className="w-3.5 h-3.5" />
               <span>
                 {lang === 'EN'
                   ? "No Credit Card Required"
                   : "કોઈ ક્રેડિટ કાર્ડ જરૂરી નથી"}
               </span>
             </div>
           </div>

        </div>
      </div>
    </div>
  );
};
