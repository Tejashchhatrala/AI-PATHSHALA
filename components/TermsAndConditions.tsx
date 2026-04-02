import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Language } from '../types';

interface Props {
  lang: Language;
  onBack: () => void;
}

export const TermsAndConditions: React.FC<Props> = ({ lang, onBack }) => {
  return (
    <div className="legal-page">
      <div className="container">
        <button onClick={onBack} className="legal-back">
          <ArrowLeft style={{ width: 18, height: 18 }} />
          {lang === 'EN' ? 'Back to Home' : 'હોમ પર પાછા'}
        </button>

        <h1>{lang === 'EN' ? 'Terms & Conditions' : 'નિયમો અને શરતો'}</h1>

        <p><strong>{lang === 'EN' ? 'Last Updated: April 2026' : 'છેલ્લું અપડેટ: એપ્રિલ 2026'}</strong></p>

        <h2>{lang === 'EN' ? '1. Course Enrollment' : '1. કોર્સ એનરોલમેન્ટ'}</h2>
        <p>{lang === 'EN'
          ? 'By enrolling in AI Pathshala, you agree to attend the live Zoom sessions as scheduled. Course materials and recordings are for personal use only and should not be shared or redistributed.'
          : 'AI Pathshala માં એનરોલ થઈને, તમે નિર્ધારિત સમય મુજબ લાઈવ Zoom સેશન્સમાં જોડાવા માટે સંમત થાઓ છો. કોર્સ મટીરિયલ્સ અને રેકોર્ડિંગ્સ ફક્ત વ્યક્તિગત ઉપયોગ માટે છે અને તેને શેર કરવા જોઈએ નહીં.'
        }</p>

        <h2>{lang === 'EN' ? '2. Ethical Use of AI' : '2. AI નો નૈતિક ઉપયોગ'}</h2>
        <p>{lang === 'EN'
          ? 'We teach AI tools for educational enhancement. Students are expected to use these tools ethically and responsibly. We do not support or encourage academic dishonesty or plagiarism.'
          : 'અમે શૈક્ષણિક ઉન્નતિ માટે AI ટૂલ્સ શીખવીએ છીએ. વિદ્યાર્થીઓ પાસેથી આ ટૂલ્સનો નૈતિક અને જવાબદારીપૂર્વક ઉપયોગ કરવાની અપેક્ષા રાખવામાં આવે છે. અમે શૈક્ષણિક અપ્રમાણિકતા કે ચોરીને પ્રોત્સાહન આપતા નથી.'
        }</p>

        <h2>{lang === 'EN' ? '3. Intellectual Property' : '3. બૌદ્ધિક સંપત્તિ'}</h2>
        <p>{lang === 'EN'
          ? 'All course content, including videos, presentations, and documents, are the intellectual property of Sarvottam AI Pathshala and Tejas Chhatrala.'
          : 'વીડિયો, પ્રેઝન્ટેશન અને ડોક્યુમેન્ટ્સ સહિત તમામ કોર્સ કન્ટેન્ટ સર્વોત્તમ AI Pathshala અને તેજસ છત્રાળાની બૌદ્ધિક સંપત્તિ છે.'
        }</p>

        <h2>{lang === 'EN' ? '4. Limitation of Liability' : '4. જવાબદારીની મર્યાદા'}</h2>
        <p>{lang === 'EN'
          ? 'While we strive to provide the most accurate and up-to-date information, we are not liable for any changes in third-party AI tools or services.'
          : 'અમે સૌથી સચોટ અને અપ-ટૂ-ડેટ માહિતી આપવાનો પ્રયત્ન કરીએ છીએ, છતાં ત્રીજા પક્ષના AI ટૂલ્સ કે સેવાઓમાં થતા ફેરફારો માટે અમે જવાબદાર નથી.'
        }</p>
      </div>
    </div>
  );
};
