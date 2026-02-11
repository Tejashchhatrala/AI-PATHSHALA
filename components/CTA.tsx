import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Sparkles, Lock, Bell, Shield, Calendar } from 'lucide-react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

export const CTA: React.FC<Props> = ({ lang }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', grade: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ==============================
  // ⚙️ SETUP COMPLETED
  // ==============================
  
  const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/1AxEX-loWlZHlCWXTtimPTezMqAbeKHPvTuBUjORRb3M/formResponse";
  
  const FORM_FIELD_IDS = {
    name: "entry.2145394662",  
    phone: "entry.1902268774", 
    grade: "entry.549617858"  
  };
  // ==============================

  const handleSubmit = (e: React.FormEvent) => {
    // We let the form submit naturally to the hidden iframe
    setIsSubmitting(true);

    // Prepare WhatsApp Message
    const message = `Hello Tejas Sir, I want to book my Free AI Roadmap Call.%0A%0A*Name:* ${formData.name}%0A*Grade:* ${formData.grade}%0A*Phone:* ${formData.phone}`;
    const whatsappUrl = `https://wa.me/919879737819?text=${message}`;

    // Wait 1.5 seconds to ensure Google Form receives data, then redirect
    setTimeout(() => {
        window.location.href = whatsappUrl;
        setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="enroll" className="py-24 bg-gradient-to-br from-brand-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500 rounded-full opacity-20 blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-[100px]"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
             <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold border border-green-500/30 mb-6 animate-pulse">
                <Bell className="w-3 h-3" />
                {lang === 'EN' ? "Recent inquiry from Ahmedabad (2m ago)" : "અમદાવાદથી હમણાં જ પૂછપરછ આવી (2m પહેલા)"}
             </div>

            <h2 className={`text-4xl md:text-5xl font-black mb-6 leading-tight ${lang === 'GU' ? 'font-gujarati' : ''}`}>
              {lang === 'EN' ? "Book Your Free 1-on-1 AI Roadmap Call" : "તમારો ફ્રી ૧-ઓન-૧ AI રોડમેપ કોલ બુક કરો"}
            </h2>
            
            <p className={`text-slate-300 mb-8 text-lg md:text-xl leading-relaxed ${lang === 'GU' ? 'font-gujarati' : ''}`}>
              {lang === 'EN' 
                ? "I will personally analyze your current study method and show you exactly how to save 2 hours every day." 
                : "હું જાતે તમારી અત્યારની વાંચવાની પદ્ધતિ ચેક કરીશ અને તમને બતાવીશ કે રોજ ૨ કલાક કેવી રીતે બચાવવા."}
            </p>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm mb-8 hover:bg-white/10 transition-colors">
               <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent-500 animate-pulse" />
                  {lang === 'EN' ? "What happens on the call?" : "કોલ પર શું થશે?"}
               </h4>
               <ul className="space-y-3">
                  {[
                    { en: "Personalized Strategy Session", gu: "પર્સનલ સ્ટ્રેટેજી સેશન" },
                    { en: "Secret 'AI Mitra' Demo", gu: "'AI મિત્ર' નો લાઈવ ડેમો" },
                    { en: "Exclusive Resource List", gu: "એક્સક્લુઝિવ રિસોર્સ લિસ્ટ" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300 text-sm md:text-base">
                      <CheckCircle className="w-5 h-5 text-brand-400 shrink-0" />
                      <span className={lang === 'GU' ? 'font-gujarati' : ''}>{lang === 'EN' ? item.en : item.gu}</span>
                    </li>
                  ))}
               </ul>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-slate-500 justify-center lg:justify-start">
               <Shield className="w-4 h-4" />
               {lang === 'EN' ? "Your data is safe. No spam." : "તમારો ડેટા સુરક્ષિત છે. કોઈ સ્પામ નહીં."}
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:w-1/2 w-full max-w-md">
            {/* Pulsing Border Effect */}
            <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-400 to-accent-500 rounded-3xl blur opacity-30 animate-pulse"></div>
                <div className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden text-slate-900 transform transition-all">
                
                {/* Professional Ribbon */}
                <div className="absolute top-0 right-0 bg-brand-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-xl shadow-md z-20">
                    NEW BATCH
                </div>

                <div className="mb-6">
                    <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-700 bg-brand-50 border border-brand-100 px-3 py-1 rounded-full uppercase tracking-widest mb-3">
                        <Calendar className="w-3 h-3" />
                        {lang === 'EN' ? "Limited Seats Available" : "મર્યાદિત બેઠકો ઉપલબ્ધ"}
                    </div>
                    <h3 className={`text-2xl font-bold text-slate-900 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                        {lang === 'EN' ? "Get My Free Roadmap" : "મારો ફ્રી રોડમેપ મેળવો"}
                    </h3>
                    <p className="text-slate-500 text-sm mt-1">
                        {lang === 'EN' ? "Fill this to start your journey." : "તમારી સફર શરૂ કરવા માટે આ ભરો."}
                    </p>
                </div>

                {/* 
                    HIDDEN IFRAME TRICK:
                    We send the form data to this invisible iframe. 
                    This prevents the page from reloading or going to Google's "Thank You" page.
                */}
                <iframe name="hidden_iframe" id="hidden_iframe" style={{display: 'none'}}></iframe>

                <form 
                    action={GOOGLE_FORM_ACTION_URL} 
                    method="post" 
                    target="hidden_iframe"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    >
                    <div className="group">
                    <label className="block text-sm font-bold text-slate-700 mb-1 ml-1 group-focus-within:text-brand-600 transition-colors">
                        {lang === 'EN' ? "Student Name" : "વિદ્યાર્થીનું નામ"}
                    </label>
                    <input 
                        type="text" 
                        name={FORM_FIELD_IDS.name} // Maps to Google Form
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50 transition-all font-medium placeholder:text-slate-400"
                        placeholder={lang === 'EN' ? "e.g. Rahul Patel" : "દા.ત. રાહુલ પટેલ"}
                    />
                    </div>
                    
                    <div className="group">
                    <label className="block text-sm font-bold text-slate-700 mb-1 ml-1 group-focus-within:text-brand-600 transition-colors">
                        {lang === 'EN' ? "WhatsApp Number" : "વોટ્સએપ નંબર"}
                    </label>
                    <input 
                        type="tel" 
                        name={FORM_FIELD_IDS.phone} // Maps to Google Form
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50 transition-all font-medium placeholder:text-slate-400"
                        placeholder="98797 37819"
                    />
                    </div>

                    <div className="group">
                    <label className="block text-sm font-bold text-slate-700 mb-1 ml-1 group-focus-within:text-brand-600 transition-colors">
                        {lang === 'EN' ? "Grade / Stream" : "ધોરણ / પ્રવાહ"}
                    </label>
                    <input 
                        type="text" 
                        name={FORM_FIELD_IDS.grade} // Maps to Google Form
                        required
                        value={formData.grade}
                        onChange={(e) => setFormData({...formData, grade: e.target.value})}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50 transition-all font-medium placeholder:text-slate-400"
                        placeholder={lang === 'EN' ? "e.g. 10th / BCA / Commerce" : "દા.ત. 10th / BCA / Commerce"}
                    />
                    </div>

                    <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full mt-6 py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-green-500/30 transition-all transform active:scale-[0.98] hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden group"
                    >
                    {/* Button Shine Effect */}
                    <div className="absolute top-0 left-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shimmer" />

                    {isSubmitting ? (
                        <span className="animate-pulse">Processing...</span>
                    ) : (
                        <span className="relative z-10 flex items-center gap-2">
                        {lang === 'EN' ? "Continue to WhatsApp" : "વોટ્સએપ પર આગળ વધો"}
                        <ArrowRight className="w-6 h-6" />
                        </span>
                    )}
                    </button>
                    
                    <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
                    {lang === 'EN' ? "100% Free. No Payment Required." : "૧૦૦% ફ્રી. કોઈ પેમેન્ટ કરવાની જરૂર નથી."}
                    </p>
                </form>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};