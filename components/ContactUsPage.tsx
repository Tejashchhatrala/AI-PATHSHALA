import React, { useEffect } from 'react';
import { Language } from '../types';
import { ArrowLeft, Mail } from 'lucide-react';

interface Props {
  lang: Language;
  onBack: () => void;
}

const ContactUsPageComponent: React.FC<Props> = ({ lang, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-50 font-sans">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-brand-600 hover:text-brand-800 font-bold mb-8 transition-colors group px-4 py-2 rounded-lg hover:bg-brand-100/50 w-fit"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          {lang === 'EN' ? 'Back to Home' : 'પાછા જાઓ'}
        </button>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-brand-100">
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-brand-100">
            <div className="p-3 bg-brand-100 rounded-xl text-brand-600">
              <Mail className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-brand-950">
              Contact Us
            </h1>
          </div>

          <div className="prose prose-lg text-brand-800 max-w-none">
            <p className="font-medium text-brand-600 mb-8">
              Last updated on 17-02-2026 19:29:44
            </p>

            <p className="leading-relaxed mb-6">
              You may contact us using the information below:
            </p>

            <div className="bg-brand-50/50 p-6 rounded-xl border border-brand-100 space-y-3">
              <p>
                <span className="font-bold text-brand-900">Merchant Legal entity name:</span> CHHATRALA TEJAS CHHAGANLAL
              </p>
              <p>
                <span className="font-bold text-brand-900">Registered Address:</span> 3/113, Chatrala Street, Agatrai, Gujarat, PIN: 362222
              </p>
              <p>
                <span className="font-bold text-brand-900">Operational Address:</span> 3/113, Chatrala Street, Agatrai, Gujarat, PIN: 362222
              </p>
              <p>
                <span className="font-bold text-brand-900">Telephone No:</span> 9726684248
              </p>
              <p>
                <span className="font-bold text-brand-900">E-Mail ID:</span> chhatralatejash@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ContactUsPage = React.memo(ContactUsPageComponent);
