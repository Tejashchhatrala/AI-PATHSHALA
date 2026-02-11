import React from 'react';
import { Award, User } from 'lucide-react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

export const Authority: React.FC<Props> = ({ lang }) => {
  // Safe access to BASE_URL. fallback to '/' if undefined.
  const baseUrl = (import.meta.env && import.meta.env.BASE_URL) || '/';
  
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

  const companyLogos = [
    {
       name: "Google",
       src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
       height: "h-8"
    },
    {
       name: "Microsoft",
       src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
       height: "h-8"
    },
    {
       name: "Oracle",
       src: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
       height: "h-6"
    },
    {
       name: "Anthropic",
       src: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg",
       height: "h-6"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Top Section: Mentor Profile */}
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto mb-20">
          
          {/* Left: Mentor Photo */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-200 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src={getAssetPath("images/tejas.png")}
                alt="Tejas Chhatrala"
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-2xl"
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.indexOf('placehold.co') === -1) {
                        target.src = "https://placehold.co/400x400/png?text=Tejas";
                    }
                }}
              />
              <div className="absolute bottom-4 right-4 bg-brand-600 text-white p-2 rounded-full shadow-lg border-2 border-white">
                <User className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Right: Mentor Bio */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <span className="text-brand-600 font-bold tracking-wider uppercase text-sm bg-brand-50 px-4 py-1.5 rounded-full border border-brand-100 inline-block mb-4">
              {lang === 'EN' ? "Meet Your Mentor" : "તમારા મેન્ટરને મળો"}
            </span>
            <h2 className={`text-4xl md:text-5xl font-black text-brand-950 mb-6 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
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
               <div className="p-6 bg-brand-50 border-l-4 border-brand-600 rounded-r-lg shadow-sm">
                 <p className="font-bold text-brand-900 italic text-xl">
                    {lang === 'EN'
                        ? "\"My mission is simple: To give YOU the same power that top engineers have, but in your language.\""
                        : "\"મારું મિશન સરળ છે: ટોપ એન્જિનિયરો પાસે જે પાવર છે, તે તમને તમારી ભાષામાં આપવો.\""}
                 </p>
               </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-2">
               <div className="bg-brand-600 text-white rounded-full p-2">
                  <Award className="w-4 h-4" />
               </div>
               <div className="text-sm font-bold text-brand-700">
                  {lang === 'EN' ? "Join the March 2026 Batch." : "માર્ચ 2026 બેચમાં જોડાઓ."}
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Certificates Grid */}
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <span className="inline-block bg-brand-100 text-brand-800 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest mb-4">
                   {lang === 'EN' ? "World-Class Credentials" : "વર્લ્ડ-ક્લાસ સર્ટિફિકેટ્સ"}
                </span>
                <h3 className={`text-3xl font-bold text-gray-900 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                   {lang === 'EN' ? "6 Global Certifications" : "6 ગ્લોબલ સર્ટિફિકેટ્સ"}
                </h3>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    {lang === 'EN' ? "Verified by top tech giants like Google, Microsoft, and Oracle." : "Google, Microsoft અને Oracle જેવી ટોચની ટેક કંપનીઓ દ્વારા પ્રમાણિત."}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certificates.map((cert, i) => (
                <div key={i} className="group relative bg-white rounded-2xl border border-brand-100 p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center">
                    <div className="w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center mb-4 relative">
                        <div className="absolute inset-0 bg-brand-600/0 group-hover:bg-brand-600/5 transition-colors duration-300 z-10"></div>
                        <img
                            src={cert.src}
                            alt={cert.alt}
                            className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                if (target.src.indexOf('placehold.co') === -1) {
                                target.src = `https://placehold.co/800x600/f1f5f9/334155?text=${cert.alt.replace(/ /g, '+')}`;
                                }
                            }}
                        />
                    </div>
                    <h4 className="font-semibold text-gray-900 text-center">{cert.alt}</h4>
                </div>
                ))}
            </div>

            {/* Company Logos Row */}
            <div className="mt-16 pt-8 border-t border-gray-100">
                <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
                    {lang === 'EN' ? "Certifications from Top Tech Giants" : "ટોચની ટેક કંપનીઓ તરફથી પ્રમાણિત"}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {companyLogos.map((logo, idx) => (
                        <img
                            key={idx}
                            src={logo.src}
                            alt={logo.name}
                            className={`${logo.height} w-auto object-contain hover:scale-110 transition-transform`}
                        />
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};