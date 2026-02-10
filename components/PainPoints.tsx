import React from 'react';
import { Clock, BookOpen, AlertOctagon, HelpCircle, XCircle } from 'lucide-react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

export const PainPoints: React.FC<Props> = ({ lang }) => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
           <span className="text-red-600 font-bold tracking-wider uppercase text-xs md:text-sm bg-white px-4 py-2 rounded-full border border-red-100 inline-flex items-center gap-2 shadow-sm mb-6">
            <AlertOctagon className="w-4 h-4" />
            {lang === 'EN' ? "The Silent Struggle" : "એક ગંભીર સમસ્યા"}
          </span>
          <h2 className={`text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
            {lang === 'EN' 
              ? "Why Are You Studying 12 Hours A Day But Still Scared of Exams?" 
              : "કેમ તમે દિવસના 12 કલાક વાંચો છો છતાં પરીક્ષાથી ડરો છો?"}
          </h2>
          <p className={`text-xl text-slate-600 leading-relaxed ${lang === 'GU' ? 'font-gujarati' : ''}`}>
            {lang === 'EN'
             ? "The traditional education system is broken. It was designed for the year 1990, not 2025. Here is the reality:"
             : "આપણી શિક્ષણ પદ્ધતિ જૂની થઈ ગઈ છે. તે 1990 માટે હતી, 2025 માટે નહીં. આ છે વાસ્તવિકતા:"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
           {/* Pain 1 */}
           <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-red-200 hover:shadow-xl transition-all group">
              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-red-500 transition-colors">
                    <Clock className="w-6 h-6 text-red-500 group-hover:text-white transition-colors" />
                 </div>
                 <div>
                    <h3 className={`text-xl font-bold text-slate-900 mb-2 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                      {lang === 'EN' ? "The 'Time-Poverty' Trap" : "'સમયની ગરીબી'"}
                    </h3>
                    <p className={`text-slate-600 leading-relaxed ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                      {lang === 'EN' 
                        ? "School + Tuition + Homework = 14 Hours. You have ZERO time for self-study. You are just a robot copying notes from the board."
                        : "સ્કૂલ + ટ્યુશન + હોમવર્ક = 14 કલાક. તમારી પાસે 'સેલ્ફ સ્ટડી' માટે સમય જ નથી. તમે માત્ર બોર્ડ પરથી ઉતારો કરતા રોબોટ બની ગયા છો."}
                    </p>
                 </div>
              </div>
           </div>

           {/* Pain 2 */}
           <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-red-200 hover:shadow-xl transition-all group">
              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-red-500 transition-colors">
                    <HelpCircle className="w-6 h-6 text-red-500 group-hover:text-white transition-colors" />
                 </div>
                 <div>
                    <h3 className={`text-xl font-bold text-slate-900 mb-2 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                      {lang === 'EN' ? "The 11 PM Doubt" : "રાત્રે 11 વાગ્યાનો પ્રશ્ન"}
                    </h3>
                    <p className={`text-slate-600 leading-relaxed ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                      {lang === 'EN' 
                        ? "You are stuck on a Math problem at night. Teachers are asleep. Google explains in confusing English. You give up. That's -5 marks."
                        : "તમે રાત્રે ગણિતના દાખલામાં અટવાયા. શિક્ષક સૂઈ ગયા છે. ગૂગલ અઘરું અંગ્રેજી બોલે છે. તમે હાર માની લો છો. અને ત્યાં જ તમારા 5 માર્ક્સ કપાય છે."}
                    </p>
                 </div>
              </div>
           </div>

           {/* Pain 3 */}
           <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-red-200 hover:shadow-xl transition-all group">
              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-red-500 transition-colors">
                    <BookOpen className="w-6 h-6 text-red-500 group-hover:text-white transition-colors" />
                 </div>
                 <div>
                    <h3 className={`text-xl font-bold text-slate-900 mb-2 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                      {lang === 'EN' ? "The English Barrier" : "અંગ્રેજીનો ડર"}
                    </h3>
                    <p className={`text-slate-600 leading-relaxed ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                      {lang === 'EN' 
                        ? "You know the answer in Gujarati, but you can't express it in English. Or you can't understand the question because of complex words."
                        : "તમને જવાબ ગુજરાતીમાં આવડે છે, પણ તમે લખી શકતા નથી. અથવા અઘરા શબ્દોને કારણે તમને પ્રશ્ન જ સમજાતો નથી."}
                    </p>
                 </div>
              </div>
           </div>

            {/* Pain 4 */}
           <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-red-200 hover:shadow-xl transition-all group">
              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-red-500 transition-colors">
                    <XCircle className="w-6 h-6 text-red-500 group-hover:text-white transition-colors" />
                 </div>
                 <div>
                    <h3 className={`text-xl font-bold text-slate-900 mb-2 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                      {lang === 'EN' ? "The Fear of Being Left Behind" : "પાછળ રહી જવાનો ડર"}
                    </h3>
                    <p className={`text-slate-600 leading-relaxed ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                      {lang === 'EN' 
                        ? "Smart kids are already using AI tools secretly to finish projects in minutes. You are doing it the hard way. You are losing the race."
                        : "સ્માર્ટ વિદ્યાર્થીઓ છૂપી રીતે AI વાપરીને મિનિટોમાં પ્રોજેક્ટ પતાવે છે. તમે જૂની રીતે મહેનત કરો છો. તમે રેસમાં પાછળ રહી રહ્યા છો."}
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};