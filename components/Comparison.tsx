import React from 'react';
import { X, Check } from 'lucide-react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

export const Comparison: React.FC<Props> = ({ lang }) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-black text-brand-950 mb-6 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
            {lang === 'EN' ? "Stop Wasting Money on Old Methods" : "જૂની પદ્ધતિઓ પર પૈસા બગાડવાનું બંધ કરો"}
          </h2>
          <p className="text-brand-700 text-lg">
            {lang === 'EN' ? "See the difference yourself." : "તફાવત જાતે જુઓ."}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full max-w-5xl mx-auto border-collapse">
            <thead>
              <tr className="border-b-2 border-brand-100">
                <th className="p-6 text-left w-1/3"></th>
                <th className="p-6 text-center w-1/3 text-brand-400 font-medium text-lg bg-brand-50/50 rounded-t-2xl">
                   {lang === 'EN' ? "Traditional Tuition" : "સામાન્ય ટ્યુશન"}
                </th>
                <th className="p-6 text-center w-1/3 text-brand-600 font-bold text-xl bg-brand-100/50 rounded-t-2xl border-t-4 border-brand-500">
                   AI Pathshala
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { 
                  feat: { en: "Doubt Solving", gu: "પ્રશ્નોનું સોલ્યુશન" }, 
                  old: { en: "Wait for next day class", gu: "બીજા દિવસની રાહ જોવી પડે" },
                  new: { en: "Instant (24/7)", gu: "ત્વરિત (24 કલાક)" }
                },
                { 
                  feat: { en: "Language", gu: "ભાષા" }, 
                  old: { en: "English/Bookish", gu: "ચોપડીની ભાષા" },
                  new: { en: "Simple Gujarati + Hinglish", gu: "સરળ ગુજરાતી + હિંગ્લિશ" }
                },
                { 
                  feat: { en: "Attention", gu: "ધ્યાન" }, 
                  old: { en: "1 Teacher : 50 Students", gu: "1 શિક્ષક : 50 વિદ્યાર્થી" },
                  new: { en: "1 AI : 1 Student (Personal)", gu: "1 AI : 1 વિદ્યાર્થી (પર્સનલ)" }
                },
                { 
                  feat: { en: "Exam Prep", gu: "પરીક્ષાની તૈયારી" }, 
                  old: { en: "Generic IMP List", gu: "સામાન્ય IMP લિસ્ટ" },
                  new: { en: "Custom Paper Analysis", gu: "પર્સનલ પેપર એનાલિસિસ" }
                }
              ].map((row, i) => (
                <tr key={i} className="border-b border-brand-100 hover:bg-brand-50 transition-colors">
                  <td className={`p-6 text-brand-900 font-bold text-lg ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                    {lang === 'EN' ? row.feat.en : row.feat.gu}
                  </td>
                  <td className={`p-6 text-center text-brand-600 bg-brand-50/30 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                    <div className="flex items-center justify-center gap-2">
                       <X className="w-5 h-5 text-brand-400" />
                       {lang === 'EN' ? row.old.en : row.old.gu}
                    </div>
                  </td>
                  <td className={`p-6 text-center font-bold text-brand-800 bg-brand-100/30 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                    <div className="flex items-center justify-center gap-2">
                       <Check className="w-6 h-6 text-green-500" />
                       {lang === 'EN' ? row.new.en : row.new.gu}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};