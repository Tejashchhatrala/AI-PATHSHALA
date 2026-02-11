import React from 'react';
import { Award, User, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';

interface Props {
  lang: Language;
}

export const Authority: React.FC<Props> = ({ lang }) => {
  const t = content.mentor;
  // Safe access to BASE_URL. fallback to '/' if undefined.
  const baseUrl = (import.meta.env && import.meta.env.BASE_URL) || '/';
  
  const getAssetPath = (path: string) => {
    const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${cleanBase}${cleanPath}`;
  };

  const companyLogos = [
    {
       name: "Google",
       src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
       height: "h-6 md:h-8"
    },
    {
       name: "Microsoft",
       src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
       height: "h-6 md:h-8"
    },
    {
       name: "Oracle",
       src: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
       height: "h-5 md:h-6"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">

        <div className="max-w-4xl mx-auto bg-brand-50 rounded-3xl p-8 md:p-12 border border-brand-100 shadow-xl relative">
          
          <div className="flex flex-col md:flex-row items-center gap-10">
             {/* Left: Mentor Photo */}
             <div className="relative shrink-0">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
                   <img
                      src={getAssetPath("images/tejas.png")}
                      alt="Tejas Chhatrala"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (target.src.indexOf('placehold.co') === -1) {
                              target.src = "https://placehold.co/400x400/png?text=Tejas";
                          }
                      }}
                   />
                </div>
                <div className="absolute bottom-2 right-2 z-20 bg-brand-600 text-white p-2 rounded-full shadow-md">
                   <User className="w-5 h-5" />
                </div>
             </div>

             {/* Right: Mentor Bio */}
             <div className="text-center md:text-left">
                <span className="text-brand-600 font-bold tracking-wider uppercase text-sm bg-white px-4 py-1.5 rounded-full border border-brand-200 inline-block mb-4 shadow-sm">
                   {lang === 'EN' ? t.title.en : t.title.gu}
                </span>

                <h2 className={`text-3xl md:text-4xl font-black text-brand-950 mb-2 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                   {lang === 'EN' ? t.name.en : t.name.gu}
                </h2>

                <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                   <ShieldCheck className="w-5 h-5 text-green-600" />
                   <span className={`font-semibold text-brand-700 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                      {lang === 'EN' ? t.badges.en : t.badges.gu}
                   </span>
                </div>

                <div className="bg-white p-6 rounded-2xl border-l-4 border-brand-400 shadow-sm relative">
                   <p className={`text-lg md:text-xl font-bold text-brand-900 italic leading-relaxed ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                      {lang === 'EN' ? t.quote.en : t.quote.gu}
                   </p>
                </div>

                {/* Trust Badges */}
                <div className="mt-8 pt-6 border-t border-brand-200 flex flex-wrap items-center justify-center md:justify-start gap-6 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                   {companyLogos.map((logo, idx) => (
                      <img
                          key={idx}
                          src={logo.src}
                          alt={logo.name}
                          className={`${logo.height} w-auto object-contain`}
                      />
                   ))}
                </div>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};
