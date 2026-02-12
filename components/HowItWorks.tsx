import React from 'react';
import { Flag, Compass, MessageSquare, Trophy, Briefcase, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';

interface Props {
  lang: Language;
}

export const HowItWorks: React.FC<Props> = ({ lang }) => {
  const t = content.howItWorks;

  const icons = [
    <Compass className="w-6 h-6 text-white" />,
    <MessageSquare className="w-6 h-6 text-white" />,
    <Trophy className="w-6 h-6 text-white" />,
    <Briefcase className="w-6 h-6 text-white" />
  ];

  const colors = [
    "bg-brand-500",
    "bg-brand-500",
    "bg-brand-500",
    "bg-green-500"
  ];

  const scrollToEnroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('enroll');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-black text-brand-950 mt-6 mb-6 leading-tight ${lang === 'GU' ? 'font-gujarati' : ''}`}>
            {lang === 'EN' ? t.title.en : t.title.gu}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
           <div className="space-y-8 relative">
              {/* Vertical Line for Mobile/Desktop */}
              <div className="absolute left-8 top-4 bottom-4 w-1 bg-brand-100 hidden md:block"></div>

              {t.phases.map((phase, idx) => (
                <div key={idx} className="relative flex items-center gap-6 group">

                   {/* Number/Icon Marker */}
                   <div className={`hidden md:flex w-16 h-16 rounded-full border-4 border-white shadow-lg items-center justify-center z-10 shrink-0 ${colors[idx]}`}>
                      {icons[idx]}
                   </div>

                   {/* Content Box */}
                   <div className="flex-1 bg-white p-6 md:p-8 rounded-2xl border border-brand-100 shadow-sm hover:shadow-brand-200 transition-all hover:-translate-y-1">
                      <div className="flex items-center gap-4 mb-3">
                         <div className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${colors[idx]}`}>
                            {icons[idx]}
                         </div>
                         <h3 className={`text-xl md:text-2xl font-bold text-brand-900 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                            {lang === 'EN' ? phase.title.en : phase.title.gu}
                         </h3>
                      </div>
                      <p className={`text-brand-700 text-lg leading-relaxed ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                         {lang === 'EN' ? phase.description.en : phase.description.gu}
                      </p>
                   </div>
                </div>
              ))}
           </div>

          <div className="mt-16 text-center">
              <button
                  onClick={scrollToEnroll}
                  className="group relative inline-flex items-center gap-3 text-white bg-brand-400 hover:bg-brand-500 px-10 py-5 rounded-full font-bold text-lg shadow-[0_4px_20px_rgba(255,148,148,0.4)] transition-all transform hover:-translate-y-1 hover:scale-105 overflow-hidden cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Flag className="w-5 h-5" />
                  {lang === 'EN' ? "Book Free Roadmap Call" : "ફ્રી રોડમેપ કોલ બુક કરો"}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};
