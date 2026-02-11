import React from 'react';
import { Gift, PlayCircle, Book, Users, Award, Plus, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

export const TheStack: React.FC<Props> = ({ lang }) => {
  const stackItems = [
    {
      icon: <PlayCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />,
      color: "bg-brand-400",
      title: { en: "The 30-Day Live AI Course", gu: "30-દિવસનો લાઈવ AI કોર્સ" },
      desc: { en: "Live classes via Zoom/Meet. Covering Prompt Engineering, Study Hacks, and Exam Prep.", gu: "Zoom/Meet પર લાઈવ ક્લાસ. પ્રોમ્પ્ટ એન્જિનિયરિંગ અને સ્ટડી હેક્સ શીખો." }
    },
    {
      icon: <Book className="w-8 h-8 md:w-10 md:h-10 text-white" />,
      color: "bg-purple-400",
      title: { en: "The 'Smart Student' Prompt Library", gu: "'સ્માર્ટ સ્ટુડન્ટ' પ્રોમ્પ્ટ લાઈબ્રેરી" },
      desc: { en: "500+ Copy-Paste prompts for Math, Science, English, and Gujarati essays.", gu: "ગણિત, વિજ્ઞાન અને અંગ્રેજી માટે 500+ તૈયાર પ્રોમ્પ્ટ. કોપી અને પેસ્ટ કરો." }
    },
    {
      icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-white" />,
      color: "bg-amber-400",
      title: { en: "VIP Student Community", gu: "VIP સ્ટુડન્ટ કોમ્યુનિટી" },
      desc: { en: "Lifetime access to our WhatsApp & Discord group. Network with toppers.", gu: "અમારા વોટ્સએપ અને ડિસ્કોર્ડ ગ્રુપનું લાઈફટાઈમ એક્સેસ." }
    },
    {
      icon: <Award className="w-8 h-8 md:w-10 md:h-10 text-white" />,
      color: "bg-green-500",
      title: { en: "Verified Certificate of Completion", gu: "વેરિફાઈડ કોર્સ સર્ટિફિકેટ" },
      desc: { en: "A globally recognized certificate to showcase your new AI skills to colleges.", gu: "કોલેજ અને જોબ માટે માન્ય એવું તમારું AI સ્કિલ સર્ટિફિકેટ." }
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
    <section className="py-20 md:py-24 bg-brand-50 text-brand-950 relative overflow-hidden">
       {/* Background */}
       <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
       <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-200 blur-[150px] opacity-40 rounded-full pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-200 blur-[150px] opacity-40 rounded-full pointer-events-none"></div>

       <div className="container mx-auto px-4 sm:px-6 relative z-10">
         <div className="text-center mb-12 md:mb-20">
            <span className="text-brand-800 font-bold tracking-wider uppercase text-xs md:text-sm border border-brand-200 px-4 py-1.5 rounded-full bg-white backdrop-blur-sm inline-block mb-4 shadow-sm">
               {lang === 'EN' ? "What's Included" : "કોર્સમાં શું સામેલ છે"}
            </span>
            <h2 className={`text-3xl md:text-6xl font-black mb-6 text-brand-950 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
               {lang === 'EN' ? "Everything You Need" : "તમને જોઈતું બધું જ"}
            </h2>
            <p className="text-brand-800 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
               {lang === 'EN' 
                 ? "We stacked everything you need to succeed. Fast learning, Fast results." 
                 : "સફળ થવા માટે જરૂરી બધું જ અમે અહીં મૂક્યું છે. ઝડપી શિક્ષણ, ઝડપી પરિણામ."}
            </p>
         </div>

         {/* Stack Items - Vertical Layout for clarity */}
         <div className="max-w-4xl mx-auto space-y-6">
            {stackItems.map((item, idx) => (
               <div key={idx} className="relative group">
                  {/* Connector Line */}
                  {idx !== stackItems.length - 1 && (
                     <div className="absolute left-8 md:left-10 top-20 bottom-[-24px] w-0.5 bg-brand-200 group-hover:bg-brand-400 transition-colors z-0 hidden md:block"></div>
                  )}
                  
                  <div className="bg-white border border-brand-200 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center relative z-10 hover:border-brand-400 transition-all shadow-lg hover:shadow-brand-200 hover:-translate-y-1">
                     {/* Icon Box */}
                     <div className={`${item.color} p-4 md:p-5 rounded-2xl shrink-0 shadow-md self-start`}>
                        {item.icon}
                     </div>

                     {/* Content */}
                     <div className="flex-1 w-full">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                           <h3 className={`text-xl md:text-2xl font-bold text-brand-950 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                              {lang === 'EN' ? item.title.en : item.title.gu}
                           </h3>
                        </div>
                        <p className={`text-brand-700 leading-relaxed text-sm md:text-base ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                           {lang === 'EN' ? item.desc.en : item.desc.gu}
                        </p>
                     </div>
                  </div>
               </div>
            ))}
         </div>

         {/* Total Summary */}
         <div className="max-w-4xl mx-auto mt-6 flex justify-center">
            <div className="bg-white rounded-full p-2 border border-brand-200 shadow-sm animate-pulse">
                <Plus className="w-6 h-6 text-brand-400" />
            </div>
         </div>

         {/* Bonus Box - The Big Reveal */}
         <div className="max-w-4xl mx-auto mt-6">
            <div className="bg-gradient-to-b from-brand-300 via-brand-400 to-brand-500 rounded-3xl p-[2px] shadow-[0_4px_30px_rgba(255,148,148,0.3)] hover:scale-[1.01] transition-transform duration-500">
               <div className="bg-brand-50 rounded-[22px] p-8 md:p-10 relative overflow-hidden">
                  {/* Decorative Background inside card */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-200/50 rounded-full blur-3xl -mr-16 -mt-16"></div>

                  <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                     <div className="w-full text-center">
                        <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-600 px-4 py-1.5 rounded-full text-xs font-bold mb-4 border border-brand-200 uppercase tracking-widest animate-pulse">
                           <Gift className="w-3 h-3" />
                           {lang === 'EN' ? "Fast Action Bonus" : "ફાસ્ટ એક્શન બોનસ"}
                        </div>
                        <h3 className={`text-2xl md:text-3xl font-black text-brand-950 mb-3 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                           {lang === 'EN' ? "The 'Exam Hack' Cheat Sheet" : "'એક્ઝામ હેક' ચીટ શીટ"}
                        </h3>
                        <p className="text-brand-800 max-w-2xl mx-auto">
                           {lang === 'EN' ? "My secret list of AI tools to summarize a 100-page book in 5 minutes. (Only for first 50 students)" : "100 પાનાની ચોપડી 5 મિનિટમાં વાંચવાની મારી સિક્રેટ AI ટિપ્સ."}
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
         <div className="text-center mt-12">
            <button 
               onClick={scrollToEnroll}
               className="group relative inline-flex items-center gap-3 text-white bg-brand-400 hover:bg-brand-500 px-10 py-5 rounded-full font-bold text-lg shadow-[0_4px_20px_rgba(255,148,148,0.4)] transition-all hover:-translate-y-1 hover:scale-105 overflow-hidden cursor-pointer"
            >
               <span className="relative z-10 flex items-center gap-2">
                  {lang === 'EN' ? "Yes! I Want To Join" : "હા! મારે જોડાવું છે"}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
               </span>
            </button>
            <p className="mt-4 text-brand-800 text-sm">
               {lang === 'EN' ? "Admission open for March 2026 Batch." : "માર્ચ 2026 બેચ માટે એડમિશન શરૂ."}
            </p>
         </div>
       </div>
    </section>
  );
};