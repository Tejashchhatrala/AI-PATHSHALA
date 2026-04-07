import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Language } from '../types';

interface Props {
  lang: Language;
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<Props> = ({ lang, onBack }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <div className="container">
        <button onClick={onBack} className="legal-back">
          <ArrowLeft style={{ width: 18, height: 18 }} />
          {lang === 'EN' ? 'Back to Home' : 'હોમ પર પાછા'}
        </button>

        <h1>{lang === 'EN' ? 'Privacy Policy' : 'પ્રાઇવસી પોલિસી'}</h1>

        <p><strong>{lang === 'EN' ? 'Last Updated: April 2026' : 'છેલ્લું અપડેટ: એપ્રિલ 2026'}</strong></p>

        <h2>{lang === 'EN' ? '1. Information We Collect' : '1. અમે કઈ માહિતી એકત્ર કરીએ છીએ'}</h2>
        <p>{lang === 'EN'
          ? 'We collect your name, phone number (WhatsApp), and grade information when you submit the enrollment form. This information is used solely to contact you regarding the AI Pathshala program.'
          : 'જ્યારે તમે એનરોલમેન્ટ ફોર્મ ભરો છો ત્યારે અમે તમારું નામ, ફોન નંબર (WhatsApp), અને ગ્રેડ માહિતી એકત્ર કરીએ છીએ. આ માહિતી ફક્ત AI Pathshala પ્રોગ્રામ વિશે તમારો સંપર્ક કરવા માટે વપરાય છે.'
        }</p>

        <h2>{lang === 'EN' ? '2. How We Use Your Information' : '2. અમે તમારી માહિતી કેવી રીતે વાપરીએ છીએ'}</h2>
        <p>{lang === 'EN'
          ? 'Your information is used to: (a) Process your enrollment request, (b) Send course details via WhatsApp, (c) Communicate about classes and schedules. We do not sell or share your data with third parties.'
          : 'તમારી માહિતી (a) એનરોલમેન્ટ રિક્વેસ્ટ પ્રોસેસ કરવા, (b) WhatsApp દ્વારા કોર્સ ડિટેલ્સ મોકલવા, (c) ક્લાસ અને શેડ્યૂલ વિશે વાત કરવા માટે વપરાય છે. અમે તમારો ડેટા ત્રીજા પક્ષને વેચતા કે શેર કરતા નથી.'
        }</p>

        <h2>{lang === 'EN' ? '3. Data Storage' : '3. ડેટા સ્ટોરેજ'}</h2>
        <p>{lang === 'EN'
          ? 'Form submissions are stored securely via Google Forms. We take reasonable measures to protect your information.'
          : 'ફોર્મ સબમિશન Google Forms દ્વારા સુરક્ષિત રીતે સ્ટોર થાય છે. અમે તમારી માહિતી સુરક્ષિત રાખવા યોગ્ય પગલાં લઈએ છીએ.'
        }</p>

        <h2>{lang === 'EN' ? '4. Contact' : '4. સંપર્ક'}</h2>
        <p>{lang === 'EN'
          ? 'For any privacy-related questions, contact us via WhatsApp at +91 98797 37819.'
          : 'કોઈપણ પ્રાઇવસી સંબંધિત પ્રશ્ન માટે, WhatsApp પર +91 98797 37819 પર સંપર્ક કરો.'
        }</p>
      </div>
    </div>
  );
};
