import React from 'react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

export const Footer: React.FC<Props> = ({ lang }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
           <h3 className="text-2xl text-white font-bold mb-2">AI Pathshala</h3>
           <p className="text-brand-500 font-medium uppercase tracking-wider text-sm">
             {lang === 'EN' ? "Gujarat's First AI School" : "ગુજરાતની પ્રથમ AI સ્કૂલ"}
           </p>
        </div>
        
        <div className="max-w-2xl mx-auto border-t border-slate-800 pt-6 mt-6">
          <p className="text-sm">
            © {new Date().getFullYear()} AI Pathshala. {lang === 'EN' ? "All rights reserved." : "સર્વાધિકાર સુરક્ષિત."}
          </p>
          <p className="text-xs mt-3 text-slate-500">
             {lang === 'EN' 
               ? "Founded by Tejas Chhatrala, Gujarat's Top AI Educator." 
               : "સ્થાપક: તેજસ છત્રાળા, ગુજરાતના ટોપ AI એજ્યુકેટર."}
          </p>
          
          <div className="mt-8 text-[10px] text-slate-600 leading-relaxed">
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
};