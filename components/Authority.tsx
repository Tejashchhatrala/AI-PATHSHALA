import React from 'react';
import { Award, CheckCircle, Shield, FileCheck, User } from 'lucide-react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

export const Authority: React.FC<Props> = ({ lang }) => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
          
          {/* Certificate Wall */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
             <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
                <div className="grid grid-cols-2 gap-4">
                    {/* Visual Certificates Representation */}
                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <span className="font-bold text-blue-600 text-xl">G</span>
                        </div>
                        <p className="font-bold text-slate-900 text-sm">Google Cloud</p>
                        <p className="text-xs text-slate-500 mt-1">Certified Professional</p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
                            <span className="font-bold text-red-600 text-xl">O</span>
                        </div>
                        <p className="font-bold text-slate-900 text-sm">Oracle</p>
                        <p className="text-xs text-slate-500 mt-1">Infrastructure Certified</p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                            <span className="font-bold text-sky-600 text-xl">M</span>
                        </div>
                        <p className="font-bold text-slate-900 text-sm">Microsoft</p>
                        <p className="text-xs text-slate-500 mt-1">Azure Expert</p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                            <span className="font-bold text-purple-600 text-xl">AI</span>
                        </div>
                        <p className="font-bold text-slate-900 text-sm">Generative AI</p>
                        <p className="text-xs text-slate-500 mt-1">Certified Specialist</p>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500 font-bold uppercase tracking-wide">
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
            <h2 className={`text-4xl font-black text-slate-900 mb-6 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
              {lang === 'EN' ? "I'm Tejas Chhatrala. Gujarat's Top AI Educator." : "હું છું તેજસ છત્રાળા. ગુજરાતનો ટોપ AI એજ્યુકેટર."}
            </h2>
            <div className={`text-slate-600 text-lg mb-8 leading-relaxed space-y-4 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
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
               <div className="text-sm font-bold text-slate-700">
                  {lang === 'EN' ? "Be part of my first exclusive batch." : "મારી પ્રથમ ખાસ બેચનો ભાગ બનો."}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};