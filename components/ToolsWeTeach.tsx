import React, { useState } from 'react';
import { Language } from '../types';
import { toolsWeTeachContent as content } from '../data/newContent';
import { MessageSquare, Search, BookOpen, Globe, Presentation, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';

interface Props {
  lang: Language;
}

const STUDY_TOOL_ICONS = [
  <MessageSquare className="w-7 h-7 text-white" />,
  <Globe className="w-7 h-7 text-white" />,
  <BookOpen className="w-7 h-7 text-white" />,
  <Search className="w-7 h-7 text-white" />,
  <Presentation className="w-7 h-7 text-white" />,
];

const TOOL_COLORS = [
  'from-emerald-500 to-emerald-600',
  'from-blue-500 to-blue-600',
  'from-purple-500 to-purple-600',
  'from-orange-500 to-orange-600',
  'from-brand-500 to-brand-600',
];

export const ToolsWeTeach: React.FC<Props> = ({ lang }) => {
  const [showBonus, setShowBonus] = useState(false);

  return (
    <section className="py-24 bg-brand-50 relative overflow-hidden">
      {/* Subtle bg dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#FFD1D1_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mx-auto mb-6 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            {lang === 'EN' ? 'Board & Exam Focused Only' : 'બોર્ડ અને પરીક્ષા ફોકસ્ડ'}
          </div>
          <h2 className={`text-3xl md:text-5xl font-black text-brand-950 leading-tight mb-4 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
            {lang === 'EN' ? content.title.en : content.title.gu}
          </h2>
          <p className={`text-lg text-brand-600 leading-relaxed font-semibold ${lang === 'GU' ? 'font-gujarati' : ''}`}>
            {lang === 'EN' ? content.subtitle.en : content.subtitle.gu}
          </p>
        </div>

        {/* 5 Core Study Tools — prominent grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {content.studyTools.map((tool, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-brand-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group flex flex-col p-6 gap-4"
            >
              {/* Icon + Name */}
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${TOOL_COLORS[index]} flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform`}>
                  {STUDY_TOOL_ICONS[index]}
                </div>
                <h3 className="text-xl font-black text-brand-900 font-sans tracking-tight">{tool.name}</h3>
              </div>
              {/* Use-case description */}
              <p className={`text-brand-700 font-semibold leading-relaxed text-sm ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                {lang === 'EN' ? tool.useCase.en : tool.useCase.gu}
              </p>
            </div>
          ))}
          {/* 6th slot: Ethical AI note */}
          <div className="bg-emerald-50 rounded-3xl border border-emerald-200 p-6 flex flex-col justify-center items-center text-center gap-3">
            <ShieldCheck className="w-10 h-10 text-emerald-600" />
            <h3 className={`text-lg font-black text-emerald-900 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
              {lang === 'EN' ? 'Ethical Use Only' : 'ફક્ત નૈતિક ઉપયોગ'}
            </h3>
            <p className={`text-sm text-emerald-700 font-medium ${lang === 'GU' ? 'font-gujarati' : ''}`}>
              {lang === 'EN'
                ? 'We teach how NOT to cheat. AI is used to understand — never to copy.'
                : 'ચીટ કેવી રીતે ન કરવી તે શીખવીએ.AI સમજ માટે — ક્યારેય કૉપિ માટે નહીં.'}
            </p>
          </div>
        </div>

        {/* Bonus Tools — collapsed by default, clearly labeled optional */}
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => setShowBonus(!showBonus)}
            className="w-full flex items-center justify-between bg-white border border-brand-100 rounded-2xl px-6 py-4 text-brand-700 font-bold hover:bg-brand-50 transition-colors cursor-pointer group"
          >
            <span className={`flex items-center gap-3 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
              <span className="bg-brand-100 text-brand-600 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">
                {lang === 'EN' ? 'Optional' : 'ઓપ્શનલ'}
              </span>
              {lang === 'EN' ? content.bonusTools.title.en : content.bonusTools.title.gu}
            </span>
            {showBonus
              ? <ChevronUp className="w-5 h-5 text-brand-400 group-hover:text-brand-600 transition-colors" />
              : <ChevronDown className="w-5 h-5 text-brand-400 group-hover:text-brand-600 transition-colors" />}
          </button>

          {showBonus && (
            <div className="mt-4 bg-white border border-brand-100 rounded-2xl p-6">
              <p className={`text-sm text-brand-500 mb-5 font-medium ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                {lang === 'EN' ? content.bonusTools.subtitle.en : content.bonusTools.subtitle.gu}
              </p>
              <div className="flex flex-wrap gap-3">
                {content.bonusTools.toolNames.map((name, idx) => (
                  <span key={idx} className="px-4 py-2 bg-brand-50 border border-brand-100 rounded-full text-sm font-bold text-brand-600 font-sans">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
