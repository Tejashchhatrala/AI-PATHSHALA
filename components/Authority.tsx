import React from 'react';
import { Award, FileCheck, User } from 'lucide-react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

export const Authority: React.FC<Props> = ({ lang }) => {
  // Safe access to BASE_URL. fallback to '/' if undefined.
  // We use this to construct paths to assets in the public folder.
  // We use (import.meta.env && import.meta.env.BASE_URL) to prevent crash if env is undefined.
  const baseUrl = (import.meta.env && import.meta.env.BASE_URL) || '/';
  
  // Helper to ensure we don't have double slashes if baseUrl ends with / and path starts with /
  const getAssetPath = (path: string) => {
    const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${cleanBase}${cleanPath}`;
  };

  const certificates = [
    { src: getAssetPath("certificates/oracle.png"), alt: "Oracle Certified" },
    { src: getAssetPath("certificates/microsoft.png"), alt: "Microsoft Certified" },
    { src: getAssetPath("certificates/google.png"), alt: "Google Cloud Certified" },
    { src: getAssetPath("certificates/gemini.png"), alt: "Gemini Certified Educator" },
    { src: getAssetPath("certificates/ai-fluency.png"), alt: "AI Fluency Framework" },
    { src: getAssetPath("certificates/completion.png"), alt: "Certificate of Completion" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
          
          {/* Certificate Marquee Display */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
             <div className="relative">
                <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 bg-brand-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md z-20 whitespace-nowrap">
                   {lang === 'EN' ? "6 Global Certifications" : "6 ગ્લોબલ સર્ટિફિકેટ્સ"}
                </div>
                
                {/* Marquee Container */}
                <div className="relative flex overflow-hidden w-full h-[300px] md:h-[400px] bg-brand-50 rounded-3xl border border-brand-200 shadow-xl group">
                   <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] rounded-3xl"></div>
                   
                   {/* Scrolling Content (Doubled for seamless loop) */}
                   <div className="flex animate-scroll hover:[animation-play-state:paused] items-center">
                      {[...certificates, ...certificates].map((cert, i) => (
                        <div key={i} className="flex-shrink-0 w-full h-full p-6 flex items-center justify-center">
                           <img 
                              src={cert.src} 
                              alt={cert.alt} 
                              className="max-w-full max-h-full object-contain rounded-lg shadow-sm border border-brand-100 bg-white"
                              onError={(e) => {
                                // Fallback if user hasn't uploaded images yet
                                const target = e.target as HTMLImageElement;
                                if (target.src.indexOf('placehold.co') === -1) {
                                  target.src = `https://placehold.co/600x400/f1f5f9/334155?text=${cert.alt.replace(/ /g, '+')}`;
                                }
                              }}
                           />
                        </div>
                      ))}
                   </div>
                </div>

                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-brand-600 font-bold uppercase tracking-wide">
                    <FileCheck className="w-5 h-5 text-green-600" />
                    <span>{lang === 'EN' ? "Verified & Globally Recognized" : "પ્રમાણિત અને વૈશ્વિક સ્તરે માન્ય"}</span>
                </div>
             </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <span className="text-brand-600 font-bold tracking-wider uppercase text-sm bg-brand-50 px-4 py-1.5 rounded-full border border-brand-100 inline-block mb-4">
              {lang === 'EN' ? "Meet Your Mentor" : "તમારા મેન્ટરને મળો"}
            </span>
            <h2 className={`text-4xl font-black text-brand-950 mb-6 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
              {lang === 'EN' ? "I'm Tejas Chhatrala. Gujarat's Top AI Educator." : "હું છું તેજસ છત્રાળા. ગુજરાતનો ટોપ AI એજ્યુકેટર."}
            </h2>
            <div className={`text-brand-800 text-lg mb-8 leading-relaxed space-y-4 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
               <p>
                 {lang === 'EN' 
                   ? "I didn't learn AI from random YouTube videos. I spent years mastering Cloud & AI with Google, Oracle, and Microsoft, earning 6 Global Certifications."
                   : "મેં કોઈ સામાન્ય યુટ્યુબ વીડિયોમાંથી AI નથી શીખ્યું. મેં Google, Oracle અને Microsoft સાથે કામ કરીને, 6 ગ્લોબલ સર્ટિફિકેટ મેળવીને આ જ્ઞાન મેળવ્યું છે."}
               </p>
               <p>
                 {lang === 'EN' 
                   ? "I have seen how engineers in Silicon Valley use AI to work faster. Now, I want to bring that same power to Gujarati students."
                   : "મેં જોયું છે કે સિલિકોન વેલીના એન્જિનિયરો AI નો ઉપયોગ કરીને કેવી રીતે ઝડપથી કામ કરે છે. હવે, હું એ જ પાવર ગુજરાતી વિદ્યાર્થીઓને આપવા માંગુ છું."}
               </p>
               <div className="p-4 bg-brand-50 border-l-4 border-brand-600 rounded-r-lg">
                 <p className="font-bold text-brand-900 italic">
                    {lang === 'EN'
                        ? "\"My mission is simple: To give YOU the same power that top engineers have, but in your language.\""
                        : "\"મારું મિશન સરળ છે: ટોપ એન્જિનિયરો પાસે જે પાવર છે, તે તમને તમારી ભાષામાં આપવો.\""}
                 </p>
               </div>
            </div>

            <div className="flex items-center gap-2">
               <div className="bg-brand-600 text-white rounded-full p-2">
                  <User className="w-4 h-4" />
               </div>
               <div className="text-sm font-bold text-brand-700">
                  {lang === 'EN' ? "Join the March 2026 Batch." : "માર્ચ 2026 બેચમાં જોડાઓ."}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};