import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

export const Testimonials: React.FC<Props> = ({ lang }) => {
  const testimonials = [
    {
      name: "Ravi Patel",
      role: { en: "11th Commerce Student", gu: "ધોરણ 11 કોમર્સ" },
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      text: {
        en: "Tejas Sir explained it so simply. Now I use AI to create practice accounts problems instantly.",
        gu: "તેજસ સરે એટલું સરળ રીતે સમજાવ્યું કે હવે હું એકાઉન્ટ્સના દાખલા પ્રેક્ટિસ કરવા માટે AI નો ઉપયોગ કરું છું."
      },
      result: { en: "Scored 92% in Accounts", gu: "એકાઉન્ટ્સમાં 92% મેળવ્યા" }
    },
    {
      name: "Sneha Mehta",
      role: { en: "College Fresher", gu: "કોલેજ સ્ટુડન્ટ" },
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      text: {
        en: "My English is weak, so I avoided ChatGPT. Tejas Sir taught me how to prompt in Gujarati. It's magic.",
        gu: "મારું અંગ્રેજી નબળું છે એટલે હું ડરતી હતી. તેજસ સરે મને શીખવ્યું કે ગુજરાતીમાં પ્રોમ્પ્ટ કેવી રીતે આપવો. આ જાદુ છે."
      },
      result: { en: "Cleared Interview", gu: "ઇન્ટરવ્યુ પાસ કર્યો" }
    },
    {
      name: "Amit Desai",
      role: { en: "UPSC Aspirant", gu: "UPSC ઉમેદવાર" },
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      text: {
        en: "I was wasting hours. Tejas Sir gave me a personalized study plan. This isn't just a class, it's a productivity hack.",
        gu: "હું કલાકો બગાડતો હતો. તેજસ સરે મને પર્સનલ સ્ટડી પ્લાન આપ્યો. આ માત્ર ક્લાસ નથી, આ પ્રોડક્ટિવિટી હેક છે."
      },
      result: { en: "Saved 4 Hours/Day", gu: "રોજના 4 કલાક બચાવ્યા" }
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-black text-brand-950 mb-6 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
            {lang === 'EN' ? "Don't Just Listen To Me." : "માત્ર મારું ના સાંભળો."}
          </h2>
          <p className="text-xl text-brand-800">
             {lang === 'EN' ? "Listen to students who were confused just like you." : "તેવા વિદ્યાર્થીઓને સાંભળો જે તમારા જેવી જ મૂંઝવણમાં હતા."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-brand-50/40 p-8 rounded-3xl border border-brand-100 shadow-lg hover:shadow-xl transition-all relative group">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-100 group-hover:text-brand-200 transition-colors" />
              <div className="flex items-center gap-4 mb-6">
                <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-sm" />
                <div>
                  <h4 className="font-bold text-brand-900 text-lg">{t.name}</h4>
                  <p className={`text-sm text-brand-600 font-medium ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                    {lang === 'EN' ? t.role.en : t.role.gu}
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>
              <p className={`text-brand-800 leading-relaxed mb-6 font-medium ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                "{lang === 'EN' ? t.text.en : t.text.gu}"
              </p>
              
              <div className="pt-4 border-t border-brand-200 flex items-center gap-2 text-green-700 font-bold bg-green-50/50 p-2 rounded-lg -mx-2">
                 <CheckCircle className="w-5 h-5" />
                 <span className={lang === 'GU' ? 'font-gujarati' : ''}>{lang === 'EN' ? t.result.en : t.result.gu}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};