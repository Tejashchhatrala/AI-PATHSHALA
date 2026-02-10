import React from 'react';
import { Language } from '../types';

interface Props {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const LanguageToggle: React.FC<Props> = ({ lang, setLang }) => {
  return (
    <div className="flex bg-white rounded-full p-1 border border-gray-200 shadow-sm">
      <button
        onClick={() => setLang('EN')}
        className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${
          lang === 'EN' ? 'bg-brand-900 text-white' : 'text-gray-500 hover:text-brand-900'
        }`}
      >
        ENG
      </button>
      <button
        onClick={() => setLang('GU')}
        className={`px-3 py-1 text-xs font-bold font-gujarati rounded-full transition-colors ${
          lang === 'GU' ? 'bg-brand-900 text-white' : 'text-gray-500 hover:text-brand-900'
        }`}
      >
        ગુજરાતી
      </button>
    </div>
  );
};