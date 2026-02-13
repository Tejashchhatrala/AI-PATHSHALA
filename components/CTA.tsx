import React, { useState } from 'react';
import { ArrowRight, Calendar, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';

interface Props {
  lang: Language;
}

export const CTA: React.FC<Props> = ({ lang }) => {
  const t = content.finalCall;
  const [formData, setFormData] = useState({ name: '', phone: '', grade: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ==============================
  // ⚙️ SETUP COMPLETED
  // ==============================
  
  const FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSepGWEDJ0ohH_e7XUK2TRrgB0gGNp9E3vnBKC4EY07F8K0jww/formResponse";
  
  const FORM_FIELD_IDS = {
    name: "entry.549617858",
    phone: "entry.1902268774",
    grade: "entry.2145394662"
  };
  // ==============================

  const handleSubmit = (e: React.FormEvent) => {
    setIsSubmitting(true);

    // Prepare WhatsApp Message
    const message = `Hello Tejas Sir, I want to join the March 2026 Batch.\n\n*Name:* ${formData.name}\n*Grade:* ${formData.grade}\n*Phone:* ${formData.phone}`;
    const whatsappUrl = `https://wa.me/919879737819?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
        window.location.href = whatsappUrl;
        setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="enroll" className="py-24 bg-gradient-to-br from-brand-200 to-brand-100 text-brand-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50 rounded-full opacity-50 blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full opacity-50 blur-[100px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
             <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-xs font-bold border border-brand-200 mb-6 shadow-sm">
                <Calendar className="w-3 h-3" />
                {lang === 'EN' ? "Admissions Open: March 2026 Batch" : "એડમિશન શરૂ: માર્ચ 2026 બેચ"}
             </div>

            <h2 className={`text-3xl md:text-5xl font-black mb-6 leading-tight ${lang === 'GU' ? 'font-gujarati' : ''}`}>
              {lang === 'EN' ? t.title.en : t.title.gu}
            </h2>
            
            <p className={`text-brand-800 mb-8 text-lg md:text-2xl font-bold leading-relaxed ${lang === 'GU' ? 'font-gujarati' : ''}`}>
               {lang === 'EN' ? "AI Pathshala" : "AI Pathshala"}<br/>
               <span className="text-brand-600 font-normal">{lang === 'EN' ? t.subtitle.en : t.subtitle.gu}</span>
            </p>

            <div className="flex items-center gap-2 text-xs text-brand-700 justify-center lg:justify-start">
               <ShieldCheck className="w-4 h-4" />
               {lang === 'EN' ? "Your data is safe. No spam." : "તમારો ડેટા સુરક્ષિત છે. કોઈ સ્પામ નહીં."}
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:w-1/2 w-full max-w-md">
            {/* Pulsing Border Effect */}
            <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-300 to-brand-400 rounded-3xl blur opacity-60 animate-pulse"></div>
                <div className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden text-brand-950 transform transition-all">
                
                {/* Professional Ribbon */}
                <div className="absolute top-0 right-0 bg-brand-500 text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-xl shadow-md z-20">
                    MARCH 2026
                </div>

                <div className="mb-6">
                    <h3 className={`text-2xl font-bold text-brand-950 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                       {lang === 'EN' ? t.cta.en : t.cta.gu}
                    </h3>
                    <p className="text-brand-600 text-sm mt-1">
                        {lang === 'EN' ? "Fill this to start your journey." : "તમારી સફર શરૂ કરવા માટે આ ભરો."}
                    </p>
                </div>

                <iframe name="hidden_iframe" id="hidden_iframe" style={{display: 'none'}}></iframe>

                <form 
                    action={FORM_ACTION_URL}
                    method="post" 
                    target="hidden_iframe"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    >
                    <div className="group">
                    <label className="block text-sm font-bold text-brand-800 mb-1 ml-1 group-focus-within:text-brand-500 transition-colors">
                        {lang === 'EN' ? "Student Name" : "વિદ્યાર્થીનું નામ"}
                    </label>
                    <input 
                        type="text" 
                        name={FORM_FIELD_IDS.name} 
                        required
                        maxLength={100}
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3.5 rounded-xl border border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-600 bg-brand-50 transition-all font-medium placeholder:text-brand-300"
                        placeholder={lang === 'EN' ? "e.g. Rahul Patel" : "દા.ત. રાહુલ પટેલ"}
                    />
                    </div>
                    
                    <div className="group">
                    <label className="block text-sm font-bold text-brand-800 mb-1 ml-1 group-focus-within:text-brand-500 transition-colors">
                        {lang === 'EN' ? "WhatsApp Number" : "વોટ્સએપ નંબર"}
                    </label>
                    <input 
                        type="tel" 
                        name={FORM_FIELD_IDS.phone} 
                        required
                        pattern="[0-9]{10}"
                        maxLength={10}
                        title={lang === 'EN' ? "Please enter a 10-digit WhatsApp number" : "કૃપા કરીને 10-અંકનો વોટ્સએપ નંબર દાખલ કરો"}
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10)})}
                        className="w-full px-4 py-3.5 rounded-xl border border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-600 bg-brand-50 transition-all font-medium placeholder:text-brand-300"
                        placeholder="9879737819"
                    />
                    </div>

                    <div className="group">
                    <label className="block text-sm font-bold text-brand-800 mb-1 ml-1 group-focus-within:text-brand-500 transition-colors">
                        {lang === 'EN' ? "Grade / Stream" : "ધોરણ / પ્રવાહ"}
                    </label>
                    <input 
                        type="text" 
                        name={FORM_FIELD_IDS.grade} 
                        required
                        maxLength={50}
                        value={formData.grade}
                        onChange={(e) => setFormData({...formData, grade: e.target.value})}
                        className="w-full px-4 py-3.5 rounded-xl border border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-600 bg-brand-50 transition-all font-medium placeholder:text-brand-300"
                        placeholder={lang === 'EN' ? "e.g. 10th / BCA / Commerce" : "દા.ત. 10th / BCA / Commerce"}
                    />
                    </div>

                    <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full mt-6 py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold text-lg rounded-full shadow-[0_4px_20px_rgba(224,96,96,0.4)] transition-all transform active:scale-[0.98] hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
                    >
                    {isSubmitting ? (
                        <span className="animate-pulse">Processing...</span>
                    ) : (
                        <span className="relative z-10 flex items-center gap-2">
                        {lang === 'EN' ? "Continue to WhatsApp" : "વોટ્સએપ પર આગળ વધો"}
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </span>
                    )}
                    </button>
                    
                    <p className="text-center text-xs text-brand-400 mt-4 flex items-center justify-center gap-1">
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
