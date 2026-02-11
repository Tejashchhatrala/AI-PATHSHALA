import React from 'react';
import { Flag, Compass, MessageSquare, Trophy, Briefcase, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

export const Curriculum: React.FC<Props> = ({ lang }) => {
  const phases = [
    {
      icon: <Compass className="w-6 h-6 text-white" />,
      color: "bg-blue-500",
      title: { en: "Phase 1: The Foundation", gu: "ફેઝ 1: પાયો મજબૂત કરો" },
      desc: { en: "Setting up your digital workspace & understanding AI ethics.", gu: "તમારું ડિજિટલ વર્કસ્પેસ તૈયાર કરવું અને AI ના નિયમો સમજવા." },
      outcome: { en: "Setup Complete", gu: "સેટઅપ પૂર્ણ" }
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      color: "bg-purple-500",
      title: { en: "Phase 2: The Personal Tutor", gu: "ફેઝ 2: પર્સનલ ટ્યુટર" },
      desc: { en: "Mastering the art of asking AI to explain complex topics.", gu: "AI ને અઘરા વિષયો પૂછવાની અને સમજવાની કળા." },
      outcome: { en: "Concept Clarity", gu: "કોન્સેપ્ટ ક્લિયર" }
    },
    {
      icon: <Trophy className="w-6 h-6 text-white" />,
      color: "bg-amber-500",
      title: { en: "Phase 3: Exam Domination", gu: "ફેઝ 3: પરીક્ષાની તૈયારી" },
      desc: { en: "Using AI for rapid revision, mock tests, and memorization.", gu: "ઝડપી રિવિઝન અને મોક ટેસ્ટ માટે AI નો ઉપયોગ." },
      outcome: { en: "High Marks", gu: "વધુ માર્ક્સ" }
    },
    {
      icon: <Briefcase className="w-6 h-6 text-white" />,
      color: "bg-green-500",
      title: { en: "Phase 4: Future Proofing", gu: "ફેઝ 4: કરિયર પ્લાનિંગ" },
      desc: { en: "Building real-world skills (coding, writing) for 2030.", gu: "2030 માટેની ભવિષ્યની સ્કિલ્સ શીખવી." },
      outcome: { en: "Career Ready", gu: "કરિયર માટે તૈયાર" }
    }
  ];

  const scrollToEnroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('enroll');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="curriculum" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold tracking-wider uppercase text-sm bg-brand-50 px-4 py-1.5 rounded-full border border-brand-100">
             The Roadmap
          </span>
          <h2 className={`text-3xl md:text-5xl font-black text-brand-950 mt-6 mb-6 leading-tight ${lang === 'GU' ? 'font-gujarati' : ''}`}>
            {lang === 'EN' ? "Your 4-Step Path To Success" : "તમારી સફળતાનો 4-સ્ટેપ નકશો"}
          </h2>
          <p className="text-brand-700 max-w-2xl mx-auto">
            {lang === 'EN' ? "From confused student to AI-powered topper." : "મૂંઝાયેલા વિદ્યાર્થીમાંથી AI-પાવર્ડ ટોપર સુધીની સફર."}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-brand-100 transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {phases.map((phase, idx) => (
                <div key={idx} className={`relative flex items-center md:justify-between ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Icon Marker */}
                  <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full border-4 border-white shadow-xl flex items-center justify-center z-10 ${phase.color}`}>
                    {phase.icon}
                  </div>

                  {/* Content Box */}
                  <div className={`ml-24 md:ml-0 md:w-[42%] bg-white p-6 rounded-2xl border border-brand-100 shadow-lg hover:shadow-brand-200 transition-all ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                     <div className={`inline-block px-3 py-1 rounded-md text-xs font-bold uppercase mb-3 ${phase.color.replace('bg-', 'bg-opacity-10 text-')}`}>
                        {lang === 'EN' ? phase.outcome.en : phase.outcome.gu}
                     </div>
                     <h3 className={`text-xl font-bold text-brand-900 mb-2 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                        {lang === 'EN' ? phase.title.en : phase.title.gu}
                     </h3>
                     <p className={`text-brand-700 text-sm leading-relaxed ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                        {lang === 'EN' ? phase.desc.en : phase.desc.gu}
                     </p>
                  </div>
                  
                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-[42%]"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
              <button 
                  onClick={scrollToEnroll}
                  className="group relative inline-flex items-center gap-3 text-white bg-brand-400 hover:bg-brand-500 px-10 py-5 rounded-full font-bold text-lg shadow-[0_4px_20px_rgba(255,148,148,0.4)] transition-all transform hover:-translate-y-1 hover:scale-105 overflow-hidden cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Flag className="w-5 h-5" />
                  {lang === 'EN' ? "Start Phase 1 Now" : "ફેઝ 1 અત્યારે જ શરૂ કરો"}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};