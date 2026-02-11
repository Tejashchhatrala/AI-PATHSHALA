import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

export const FAQ: React.FC<Props> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: { en: "Tejas Sir, do I need a laptop?", gu: "તેજસ સર, શું મારે લેપટોપની જરૂર પડશે?" },
      a: { en: "No! I designed this specifically for mobile users. 90% of my students use just their phone.", gu: "ના! મેં આ ખાસ મોબાઈલ યુઝર્સ માટે બનાવ્યું છે. મારા 90% વિદ્યાર્થીઓ માત્ર ફોનનો ઉપયોગ કરે છે." }
    },
    {
      q: { en: "My English is weak. Can I really do this?", gu: "મારું અંગ્રેજી નબળું છે. શું હું ખરેખર શીખી શકીશ?" },
      a: { en: "Yes. That is exactly why I built AI Pathshala. I teach you how to bypass the English barrier completely.", gu: "હા. એટલે જ તો મેં AI પાઠશાળા બનાવી છે. હું તમને શીખવીશ કે અંગ્રેજીના ડરને કેવી રીતે દૂર કરવો." }
    },
    {
      q: { en: "Will my parents think this is cheating?", gu: "શું મારા વાલીઓને લાગશે કે આ ચીટિંગ છે?" },
      a: { en: "Not at all. I give you an 'Ethics Guide' to show them. Once they see your marks improve, they will support you.", gu: "જરાય નહીં. હું તમને બતાવવા માટે 'એથિક્સ ગાઈડ' આપીશ. જ્યારે તેઓ તમારા માર્ક્સ સુધરતા જોશે, ત્યારે તેઓ તમને સપોર્ટ કરશે." }
    },
    {
      q: { en: "What if I miss your live class?", gu: "જો હું તમારો લાઈવ ક્લાસ ચૂકી જાઉં તો?" },
      a: { en: "Don't worry. I record every session. You can watch me anytime on the app.", gu: "ચિંતા ન કરો. હું દરેક સેશન રેકોર્ડ કરું છું. તમે મને એપ પર ગમે ત્યારે જોઈ શકો છો." }
    }
  ];

  return (
    <section className="py-20 bg-brand-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold text-brand-950 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
            {lang === 'EN' ? "Let Me Answer Your Doubts" : "ચાલો હું તમારા પ્રશ્નોના જવાબ આપું"}
          </h2>
          <p className="text-brand-700 mt-2">
             {lang === 'EN' ? "Direct answers from me to you." : "મારા તરફથી સીધા જવાબો."}
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-brand-200 overflow-hidden shadow-sm">
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-brand-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-bold text-brand-900 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                  {lang === 'EN' ? faq.q.en : faq.q.gu}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-brand-500" />
                ) : (
                  <Plus className="w-5 h-5 text-brand-300" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-brand-800 bg-brand-50/50">
                  <p className={`${lang === 'GU' ? 'font-gujarati' : ''}`}>
                    {lang === 'EN' ? faq.a.en : faq.a.gu}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};