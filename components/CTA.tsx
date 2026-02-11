import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Shield, Calendar, Smartphone } from 'lucide-react';
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
  
  // Updated IDs: Swapped Phone and Grade based on user feedback
  const FORM_FIELD_IDS = {
    name: "entry.549617858",
    phone: "entry.1902268774", // Previously assigned to grade
    grade: "entry.2145394662"  // Previously assigned to phone
  };
  // ==============================

  const handleSubmit = (e: React.FormEvent) => {
    // We let the form submit naturally to the hidden iframe
    setIsSubmitting(true);

    // Prepare WhatsApp Message
    const message = `Hello Tejas Sir, I want to join the March 2026 Batch.%0A%0A*Name:* ${formData.name}%0A*Grade:* ${formData.grade}%0A*Phone:* ${formData.phone}`;
    const whatsappUrl = `https://wa.me/919879737819?text=${message}`;

    // Wait 1.5 seconds to ensure Google Form receives data, then redirect
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
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
             <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-200 mb-6 shadow-sm">
                <Calendar className="w-3 h-3" />
                {lang === 'EN' ? "Admission Open: March 2026 Batch" : "એડમિશન શરૂ: માર્ચ 2026 બેચ"}
             </div>

            <h2 className={`text-4xl md:text-5xl font-black mb-6 leading-tight ${lang === 'GU' ? 'font-gujarati' : ''}`}>
              {lang === 'EN' ? "Prepare Them For The Age of AI." : "આવનારો યુગ AI નો છે. શું તમે તૈયાર છો?"}
            </h2>
            
            <p className={`text-brand-800 mb-8 text-lg md:text-xl leading-relaxed ${lang === 'GU' ? 'font-gujarati' : ''}`}>
              {lang === 'EN' 
                ? "Degrees alone won't be enough in 2030. Give your child the unfair advantage of mastering AI tools before they even enter college." 
                : "2030 માં માત્ર ડિગ્રી પૂરતી નહીં હોય. તમારા બાળકને કોલેજમાં જતા પહેલા જ AI ટૂલ્સમાં માસ્ટર બનાવીને સૌથી મોટો ફાયદો આપો."}
            </p>

            <div className="bg-white/40 rounded-2xl p-6 border border-white/50 backdrop-blur-sm mb-8 hover:bg-white/60 transition-colors shadow-sm">
               <h4 className="font-bold text-brand-900 mb-4 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-brand-500" />
                  {lang === 'EN' ? "Why Join This Course?" : "શા માટે આ કોર્સ?"}
               </h4>
               <ul className="space-y-3">
                  {[
                    { en: "30-Day Live Practical Training", gu: "30-દિવસની લાઈવ પ્રેક્ટિકલ ટ્રેનિંગ" },
                    { en: "Boost Logic & Problem Solving", gu: "તર્કશક્તિ અને પ્રોબ્લેમ સોલ્વિંગમાં વધારો" },
                    { en: "Useful for Job, Business & Studies", gu: "નોકરી, બિઝનેસ અને અભ્યાસ માટે ઉપયોગી" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-brand-800 text-sm md:text-base">
                      <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                      <span className={lang === 'GU' ? 'font-gujarati' : ''}>{lang === 'EN' ? item.en : item.gu}</span>
                    </li>
                  ))}
               </ul>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-brand-700 justify-center lg:justify-start">
               <Shield className="w-4 h-4" />
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
                    <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-700 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full uppercase tracking-widest mb-3">
                        <Calendar className="w-3 h-3" />
                        {lang === 'EN' ? "Limited Seats Available" : "મર્યાદિત બેઠકો ઉપલબ્ધ"}
                    </div>
                    <h3 className={`text-2xl font-bold text-brand-950 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                        {lang === 'EN' ? "Book Free Roadmap Call" : "ફ્રી રોડમેપ કોલ બુક કરો"}
                    </h3>
                    <p className="text-brand-600 text-sm mt-1">
                        {lang === 'EN' ? "Fill this to start your journey." : "તમારી સફર શરૂ કરવા માટે આ ભરો."}
                    </p>
                </div>

                <iframe name="hidden_iframe" id="hidden_iframe" style={{display: 'none'}}></iframe>

                <form 
                    action={GOOGLE_FORM_ACTION_URL} 
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
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3.5 rounded-xl border border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-400 bg-brand-50 transition-all font-medium placeholder:text-brand-300"
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
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3.5 rounded-xl border border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-400 bg-brand-50 transition-all font-medium placeholder:text-brand-300"
                        placeholder="98797 37819"
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
                        value={formData.grade}
                        onChange={(e) => setFormData({...formData, grade: e.target.value})}
                        className="w-full px-4 py-3.5 rounded-xl border border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-400 bg-brand-50 transition-all font-medium placeholder:text-brand-300"
                        placeholder={lang === 'EN' ? "e.g. 10th / BCA / Commerce" : "દા.ત. 10th / BCA / Commerce"}
                    />
                    </div>

                    <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full mt-6 py-4 bg-brand-400 hover:bg-brand-500 text-white font-bold text-lg rounded-full shadow-[0_4px_20px_rgba(255,148,148,0.4)] transition-all transform active:scale-[0.98] hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
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