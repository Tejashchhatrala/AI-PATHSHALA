import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Language } from '../types';

interface Props {
  lang: Language;
  onBack: () => void;
}

export const RefundPolicy: React.FC<Props> = ({ lang, onBack }) => {
  return (
    <div className="legal-page">
      <div className="container">
        <button onClick={onBack} className="legal-back">
          <ArrowLeft style={{ width: 18, height: 18 }} />
          {lang === 'EN' ? 'Back to Home' : 'હોમ પર પાછા'}
        </button>

        <h1>{lang === 'EN' ? 'Refund Policy' : 'રિફંડ પોલિસી'}</h1>

        <p><strong>{lang === 'EN' ? 'Last Updated: April 2026' : 'છેલ્લું અપડેટ: એપ્રિલ 2026'}</strong></p>

        <h2>{lang === 'EN' ? '1. Refund Eligibility' : '1. રિફંડ પાત્રતા'}</h2>
        <p>{lang === 'EN'
          ? 'If you are not satisfied after the first 3 classes, you may request a full refund within 5 days of enrollment. After this period, refunds are not available as class recordings and materials have been shared.'
          : 'જો તમે પ્રથમ 3 ક્લાસ પછી સંતુષ્ટ ન હો, તો એનરોલમેન્ટના 5 દિવસની અંદર તમે સંપૂર્ણ રિફંડ માગી શકો છો. આ સમયગાળા પછી, ક્લાસ રેકોર્ડિંગ અને મટીરિયલ્સ શેર થયા હોવાથી રિફંડ ઉપલબ્ધ નથી.'
        }</p>

        <h2>{lang === 'EN' ? '2. How to Request a Refund' : '2. રિફંડ કેવી રીતે માગવું'}</h2>
        <p>{lang === 'EN'
          ? 'Send a WhatsApp message to +91 98797 37819 with your name and reason for refund. Refunds are processed within 7 working days.'
          : '+91 98797 37819 પર WhatsApp મેસેજ મોકલો તમારું નામ અને રિફંડનું કારણ. રિફંડ 7 કામકાજના દિવસોમાં પ્રોસેસ થાય છે.'
        }</p>

        <h2>{lang === 'EN' ? '3. Non-Refundable Cases' : '3. બિન-રિફંડેબલ કેસ'}</h2>
        <p>{lang === 'EN'
          ? 'Refunds are not available after the 5-day window, or if the student has attended more than 3 classes.'
          : '5 દિવસની વિન્ડો પછી, અથવા જો વિદ્યાર્થીએ 3 થી વધુ ક્લાસ અટેન્ડ કર્યા હોય તો રિફંડ ઉપલબ્ધ નથી.'
        }</p>
      </div>
    </div>
  );
};
