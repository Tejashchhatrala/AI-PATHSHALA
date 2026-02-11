import React from 'react';
import { Gift, PlayCircle, Book, Users, Calendar, Check, Plus, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

export const TheStack: React.FC<Props> = ({ lang }) => {
  const stackItems = [
    {
      icon: <PlayCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />,
      color: "bg-brand-500",
      title: { en: "The AI Pathshala Core Course", gu: "AI પાઠશાળા મુખ્ય કોર્સ" },
      desc: { en: "4 Weeks of HD video lessons covering Prompt Engineering, Study Hacks, and Exam Prep.", gu: "4 અઠવાડિયાના HD વિડિયો લેસન: પ્રોમ્પ્ટ એન્જિનિયરિંગ અને સ્ટડી હેક્સ." }
    },
    {
      icon: <Book className="w-8 h-8 md:w-10 md:h-10 text-white" />,
      color: "bg-purple-500",
      title: { en: "The 'Magic Prompt' Library", gu: "'મેજિક પ્રોમ્પ્ટ' લાઈબ્રેરી" },
      desc: { en: "500+ Copy-Paste prompts for Math, Science, English, and Gujarati essays.", gu: "ગણિત, વિજ્ઞાન અને અંગ્રેજી માટે 500+ તૈયાર પ્રોમ્પ્ટ. કોપી અને પેસ્ટ કરો." }
    },
    {
      icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-white" />,
      color: "bg-amber-500",
      title: { en: "VIP Student Community", gu: "VIP સ્ટુડન્ટ કોમ્યુનિટી" },
      desc: { en: "Lifetime access to our WhatsApp & Discord group. Network with toppers.", gu: "અમારા વોટ્સએપ અને ડિસ્કોર્ડ ગ્રુપનું લાઈફટાઈમ એક્સેસ." }
    },
    {
      icon: <Calendar className="w-8 h-8 md:w-10 md:h-10 text-white" />,
      color: "bg-green-500",
      title: { en: "4 Live Mentorship Calls", gu: "4 લાઈવ મેન્ટરશિપ કોલ" },
      desc: { en: "Direct access to Tejas Sir every Sunday to solve your personal doubts.", gu: "દર રવિવારે તેજસ સર સાથે સીધી વાત કરો અને તમારા પ્રશ્નો પૂછો." }
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
    <section className="py-20 md:py-24 bg-slate-900 text-white relative overflow-hidden">
       {/* Background */}
       <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
       <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-600 blur-[150px] opacity-20 rounded-full pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600 blur-[150px] opacity-20 rounded-full pointer-events-none"></div>

       <div className="container mx-auto px-4 sm:px-6 relative z-10">
         <div className="text-center mb-12 md:mb-20">
            <span className="text-brand-300 font-bold tracking-wider uppercase text-xs md:text-sm border border-brand-700/50 px-4 py-1.5 rounded-full bg-brand-900/50 backdrop-blur-sm inline-block mb-4">
               {lang === 'EN' ? "What's Included" : "કોર્સમાં શું સામેલ છે"}
            </span>
            <h2 className={`text-3xl md:text-6xl font-black mb-6 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
               {lang === 'EN' ? "Unlock Your Full Potential" : "તમારી સંપૂર્ણ ક્ષમતાને અનલોક કરો"}
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
               {lang === 'EN' 
                 ? "We stacked everything you need to succeed. No hidden fees." 
                 : "સફળ થવા માટે જરૂરી બધું જ અમે અહીં મૂક્યું છે. કોઈ છૂપો ખર્ચ નહીં."}
            </p>
         </div>

         {/* Stack Items - Vertical Layout for clarity */}
         <div className="max-w-4xl mx-auto space-y-6">
            {stackItems.map((item, idx) => (
               <div key={idx} className="relative group">
                  {/* Connector Line */}
                  {idx !== stackItems.length - 1 && (
                     <div className="absolute left-8 md:left-10 top-20 bottom-[-24px] w-0.5 bg-slate-800 group-hover:bg-brand-900/50 transition-colors z-0 hidden md:block"></div>
                  )}
                  
                  <div className="bg-slate-800 border border-slate-700 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center relative z-10 hover:border-brand-500/30 transition-all shadow-lg hover:shadow-brand-900/20 hover:-translate-y-1">
                     {/* Icon Box */}
                     <div className={`${item.color} p-4 md:p-5 rounded-2xl shrink-0 shadow-lg shadow-black/20 self-start`}>
                        {item.icon}
                     </div>

                     {/* Content */}
                     <div className="flex-1 w-full">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                           <h3 className={`text-xl md:text-2xl font-bold text-white ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                              {lang === 'EN' ? item.title.en : item.title.gu}
                           </h3>
                        </div>
                        <p className={`text-slate-400 leading-relaxed text-sm md:text-base ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                           {lang === 'EN' ? item.desc.en : item.desc.gu}
                        </p>
                     </div>
                  </div>
               </div>
            ))}
         </div>

         {/* Total Summary */}
         <div className="max-w-4xl mx-auto mt-6 flex justify-center">
            <div className="bg-slate-800/50 rounded-full p-2 border border-slate-700/50 backdrop-blur-sm animate-pulse">
                <Plus className="w-6 h-6 text-slate-500" />
            </div>
         </div>

         {/* Bonus Box - The Big Reveal */}
         <div className="max-w-4xl mx-auto mt-6">
            <div className="bg-gradient-to-b from-amber-500 via-yellow-500 to-amber-600 rounded-3xl p-[2px] shadow-[0_0_40px_-10px_rgba(245,158,11,0.3)] hover:scale-[1.01] transition-transform duration-500">
               <div className="bg-slate-900 rounded-[22px] p-8 md:p-10 relative overflow-hidden">
                  {/* Decorative Background inside card */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

                  <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                     <div className="w-full text-center">
                        <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-1.5 rounded-full text-xs font-bold mb-4 border border-yellow-500/50 uppercase tracking-widest animate-pulse">
                           <Gift className="w-3 h-3" />
                           {lang === 'EN' ? "Fast Action Bonus" : "ફાસ્ટ એક્શન બોનસ"}
                        </div>
                        <h3 className={`text-2xl md:text-3xl font-black text-white mb-3 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                           {lang === 'EN' ? "The 'Exam Hack' Cheat Sheet" : "'એક્ઝામ હેક' ચીટ શીટ"}
                        </h3>
                        <p className="text-slate-300 max-w-2xl mx-auto">
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
               className="group relative inline-flex items-center gap-3 text-white bg-green-600 hover:bg-green-700 px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-green-500/30 transition-all hover:-translate-y-1 hover:scale-105 overflow-hidden cursor-pointer"
            >
               {/* Shimmer Effect */}
               <div className="absolute top-0 left-0 -inset-full h-full w-1/2 z-[1] block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shimmer pointer-events-none" />

               <span className="relative z-10 flex items-center gap-2">
                  {lang === 'EN' ? "Yes! I Want To Join" : "હા! મારે જોડાવું છે"}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
               </span>
            </button>
            <p className="mt-4 text-slate-500 text-sm">
               {lang === 'EN' ? "Limited seats available for this batch." : "આ બેચ માટે મર્યાદિત બેઠકો ઉપલબ્ધ છે."}
            </p>
         </div>
       </div>
    </section>
  );
};