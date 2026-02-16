import React, { memo } from 'react';
import { Language } from '../types';
import { WEBSITE_URL } from '../constants';

interface Props {
  lang: Language;
  onPrivacyClick: () => void;
}

export const Footer = memo(({ lang, onPrivacyClick }: Props) => {
  return (
    <footer className="bg-brand-100 text-brand-800 py-12 border-t border-brand-200">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
           <h3 className="text-2xl text-brand-950 font-bold mb-2">AI Pathshala</h3>
           <p className="text-brand-800 text-sm mb-1 font-medium">An Initiative by Sarvottam</p>
           <a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-800 text-sm font-medium transition-colors">
             {WEBSITE_URL.replace('https://', '')}
           </a>
        </div>
        
        <div className="max-w-2xl mx-auto border-t border-brand-200 pt-6 mt-6">
          <p className="text-sm text-brand-800 font-medium">
            © 2026 Sarvottam AI Pathshala
          </p>
          <div className="flex items-center justify-center gap-4 mt-2 mb-1">
             <button onClick={onPrivacyClick} className="text-xs text-brand-600 hover:text-brand-800 underline font-medium cursor-pointer">
               {lang === 'EN' ? "Privacy Policy" : "પ્રાઇવસી પોલિસી"}
             </button>
          </div>
          <p className="text-xs mt-3 text-brand-600">
             {lang === 'EN' 
               ? "Founded by Tejas Chhatrala, Gujarat's Top AI Educator." 
               : "સ્થાપક: તેજસ છત્રાળા, ગુજરાતના ટોપ AI એજ્યુકેટર."}
          </p>
          
          <div className="mt-8 text-[10px] text-brand-500 leading-relaxed">
             <p>
                {lang === 'EN' 
                 ? "Disclaimer: Results may vary from student to student. This program teaches the use of AI tools for educational purposes. We do not encourage plagiarism or cheating in exams. Students are advised to use these tools ethically for learning and understanding concepts only."
                 : "ડિસ્ક્લેમર: દરેક વિદ્યાર્થી પ્રમાણે પરિણામો અલગ હોઈ શકે છે. આ પ્રોગ્રામ માત્ર શૈક્ષણિક હેતુ માટે AI ટૂલ્સનો ઉપયોગ શીખવે છે. અમે પરીક્ષામાં ચોરી કે પ્લેગિયરિઝમને પ્રોત્સાહન આપતા નથી. વિદ્યાર્થીઓને સલાહ આપવામાં આવે છે કે તેઓ માત્ર શીખવા અને સમજવા માટે જ આ સાધનોનો નૈતિક ઉપયોગ કરે."}
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
});