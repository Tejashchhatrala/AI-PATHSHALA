import React, { useState } from 'react';
import { Calendar, ShieldCheck, AlertCircle, IndianRupee } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';
import { GOOGLE_FORM_CTA_URL, GOOGLE_FORM_FIELD_IDS, WHATSAPP_PHONE_NUMBER, PHONE_REGEX } from '../constants';
import { sanitizeInput } from '../utils';

interface Props {
  lang: Language;
}

const validateField = (name: string, value: string, lang: Language) => {
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
  if (name === 'grade' && !value.trim()) {
    error = lang === 'EN' ? 'Grade is required' : 'ધોરણ લખવું જરૂરી છે';
  }
  return error;
};

export const CTA: React.FC<Props> = ({ lang }) => {
  const t = content.finalCall;
  const [formData, setFormData] = useState({ name: '', phone: '', grade: '' });
  const [errors, setErrors] = useState({ name: '', phone: '', grade: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let fieldKey = '';
    if (name === GOOGLE_FORM_FIELD_IDS.name) fieldKey = 'name';
    if (name === GOOGLE_FORM_FIELD_IDS.phone) fieldKey = 'phone';
    if (name === GOOGLE_FORM_FIELD_IDS.grade) fieldKey = 'grade';

    if (fieldKey) {
       const error = validateField(fieldKey, value, lang);
       setErrors(prev => ({ ...prev, [fieldKey]: error }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let fieldKey = '' as keyof typeof formData;
    if (name === GOOGLE_FORM_FIELD_IDS.name) fieldKey = 'name';
    if (name === GOOGLE_FORM_FIELD_IDS.phone) fieldKey = 'phone';
    if (name === GOOGLE_FORM_FIELD_IDS.grade) fieldKey = 'grade';

    if (fieldKey) {
        // Special handling for phone
        let finalValue = value;
        if (fieldKey === 'phone') {
             finalValue = value.replace(PHONE_REGEX, '');
        } else {
             finalValue = sanitizeInput(value, 100, false);
        }

        setFormData(prev => ({ ...prev, [fieldKey]: finalValue }));

        // Clear error if exists
        if (errors[fieldKey]) {
            setErrors(prev => ({ ...prev, [fieldKey]: '' }));
        }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    // Validate all fields
    const nameError = validateField('name', formData.name, lang);
    const phoneError = validateField('phone', formData.phone, lang);
    const gradeError = validateField('grade', formData.grade, lang);

    if (nameError || phoneError || gradeError) {
        e.preventDefault();
        setErrors({
            name: nameError,
            phone: phoneError,
            grade: gradeError
        });
        return;
    }

    setIsSubmitting(true);

    // Prepare WhatsApp Message for Consultation Waitlist
    const message = `Hello Tejas Sir, I would like to book a free 15-minute consultation to see if the AI Pathshala course (₹3,999) is a good fit for my child.\n\n*Name:* ${formData.name}\n*Grade:* ${formData.grade}\n*Phone:* ${formData.phone}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
        window.location.href = whatsappUrl;
        setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="enroll" className="py-24 bg-gradient-to-br from-brand-900 to-brand-950 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-800 rounded-full opacity-30 blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-900 rounded-full opacity-30 blur-[100px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
             <div className="inline-flex items-center gap-2 bg-brand-800/50 text-brand-200 px-4 py-1.5 rounded-full text-xs font-bold border border-brand-700 mb-6 shadow-sm backdrop-blur-sm">
                <Calendar className="w-4 h-4" />
                {lang === 'EN' ? "Admissions Open: April 2026 Batch" : "એડમિશન શરૂ: એપ્રિલ 2026 બેચ"}
             </div>

             {/* Pricing Spotlight */}
             <div className="mb-6 flex flex-col justify-center lg:justify-start items-center lg:items-start">
               <span className="text-brand-300 font-bold uppercase tracking-widest text-sm mb-1">
                 {lang === 'EN' ? "Full 30-Day Program" : "સંપૂર્ણ 30-દિવસનો પ્રોગ્રામ"}
               </span>
               <div className="flex items-baseline gap-3">
                 <span className="text-4xl lg:text-5xl font-black text-white flex items-center">
                   <IndianRupee className="w-8 h-8 lg:w-10 lg:h-10 text-emerald-400" />
                   3,999
                 </span>
                 <span className="line-through text-brand-500/80 text-xl lg:text-2xl font-semibold flex items-center">
                   <IndianRupee className="w-5 h-5" /> 8,999
                 </span>
               </div>
             </div>

            <h2 className={`text-[2rem] md:text-5xl font-black mb-6 leading-[1.15] text-white ${lang === 'GU' ? 'font-gujarati' : ''}`}>
              {lang === 'EN' ? t.title.en : t.title.gu}
            </h2>
            
            <p className={`text-brand-100/90 mb-8 text-lg font-medium leading-relaxed max-w-xl ${lang === 'GU' ? 'font-gujarati' : ''}`}>
               {lang === 'EN' ? t.subtitle.en : t.subtitle.gu}
            </p>

            <div className="flex flex-col gap-3 text-sm font-semibold text-brand-200 justify-center lg:justify-start">
               <div className="flex items-center gap-2 justify-center lg:justify-start">
                 <ShieldCheck className="w-5 h-5 text-emerald-400" />
                 {lang === 'EN' ? "100% Secure. 15-Minute Free Consultation." : "૧૦૦% સલામત. 15-મિનિટ ફ્રી કન્સલ્ટેશન."}
               </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:w-1/2 w-full max-w-md">
            <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-brand-400 to-emerald-400 rounded-3xl blur opacity-30 animate-pulse"></div>
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden text-brand-950">
                
                <div className="mb-8 text-center">
                    <h3 className={`text-2xl font-black text-brand-950 mb-2 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                       {lang === 'EN' ? "Book Free Consultation" : "ફ્રી કન્સલ્ટેશન બુક કરો"}
                    </h3>
                    <p className="text-brand-600 text-[13px] font-semibold leading-relaxed">
                        {lang === 'EN' 
                          ? "Fill this form to schedule a free 15-min call with Tejas Sir to check if this AI course is right for your child." 
                          : "તમારા બાળક માટે આ AI કોર્સ યોગ્ય છે કે નહીં તે જાણવા માટે તેજસ સર સાથે ફ્રી 15-મિનિટ કૉલ બુક કરવા આ ફોર્મ ભરો."}
                    </p>
                </div>

                <iframe name="hidden_iframe" id="hidden_iframe" style={{display: 'none'}}></iframe>

                <form 
                    action={GOOGLE_FORM_CTA_URL}
                    method="post" 
                    target="hidden_iframe"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                    >
                    <div className="group">
                    <label className="block text-[13px] font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                        {lang === 'EN' ? "Student Name" : "વિદ્યાર્થીનું નામ"}
                    </label>
                    <input 
                        type="text" 
                        name={GOOGLE_FORM_FIELD_IDS.name}
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-5 py-4 rounded-xl border-2 ${errors.name ? 'border-red-400 ring-4 ring-red-400/20' : 'border-gray-200'} focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/20 bg-gray-50 transition-all font-semibold placeholder:text-gray-400 placeholder:font-medium`}
                        placeholder={lang === 'EN' ? "e.g. Rahul Patel" : "દા.ત. રાહુલ પટેલ"}
                    />
                    {errors.name && (
                        <div className="flex items-center gap-1.5 mt-2 text-red-500 text-xs font-bold animate-fade-in">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.name}</span>
                        </div>
                    )}
                    </div>
                    
                    <div className="group">
                    <label className="block text-[13px] font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                        {lang === 'EN' ? "Parent's WhatsApp Number" : "વાલીનો વોટ્સએપ નંબર"}
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
                        className={`w-full px-5 py-4 rounded-xl border-2 ${errors.phone ? 'border-red-400 ring-4 ring-red-400/20' : 'border-gray-200'} focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/20 bg-gray-50 transition-all font-semibold placeholder:text-gray-400 placeholder:font-medium`}
                        placeholder="98797 37819"
                    />
                    {errors.phone && (
                        <div className="flex items-center gap-1.5 mt-2 text-red-500 text-xs font-bold animate-fade-in">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.phone}</span>
                        </div>
                    )}
                    </div>

                    <div className="group">
                    <label className="block text-[13px] font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                        {lang === 'EN' ? "Grade / Stream" : "ધોરણ / પ્રવાહ"}
                    </label>
                    <input 
                        type="text" 
                        name={GOOGLE_FORM_FIELD_IDS.grade}
                        required
                        value={formData.grade}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-5 py-4 rounded-xl border-2 ${errors.grade ? 'border-red-400 ring-4 ring-red-400/20' : 'border-gray-200'} focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/20 bg-gray-50 transition-all font-semibold placeholder:text-gray-400 placeholder:font-medium`}
                        placeholder={lang === 'EN' ? "e.g. 10th / BCA / Commerce" : "દા.ત. 10th / BCA / Commerce"}
                    />
                    {errors.grade && (
                        <div className="flex items-center gap-1.5 mt-2 text-red-500 text-xs font-bold animate-fade-in">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.grade}</span>
                        </div>
                    )}
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-4 py-4.5 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-black text-lg rounded-xl shadow-[0_8px_25px_rgba(37,211,102,0.3)] transition-all transform active:scale-[0.98] hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                          <span className="animate-pulse">Processing...</span>
                      ) : (
                          <span>
                            {lang === 'EN' ? "Book Free Call on WhatsApp →" : "WhatsApp પર કૉલ બુક કરો →"}
                          </span>
                      )}
                    </button>
                    
                    <div className="text-center mt-5">
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        {lang === 'EN' ? "No Credit Card Required for Consultation" : "કન્સલ્ટેશન માટે કોઈ ક્રેડિટ કાર્ડ જરૂરી નથી"}
                      </p>
                    </div>
                </form>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
