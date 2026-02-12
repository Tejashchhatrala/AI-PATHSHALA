import React, { useEffect } from 'react';
import { Language } from '../types';
import { ArrowLeft, Shield } from 'lucide-react';

interface Props {
  lang: Language;
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<Props> = ({ lang, onBack }) => {
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
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-brand-950">
              {lang === 'EN' ? 'Privacy Policy' : 'પ્રાઇવસી પોલિસી'}
            </h1>
          </div>

          <div className="prose prose-lg text-brand-800 max-w-none">
            <p className="font-medium text-brand-600 mb-8">
              {lang === 'EN'
                ? "Effective Date: February 2026"
                : "અમલીકરણ તારીખ: ફેબ્રુઆરી 2026"}
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-950 mb-4">
                {lang === 'EN' ? "1. Introduction" : "1. પરિચય"}
              </h2>
              <p className="leading-relaxed">
                {lang === 'EN'
                  ? "Welcome to Sarvottam AI Pathshala. We are committed to protecting your privacy and ensuring you have a positive experience on our website and in using our services. This policy outlines our practices regarding the collection, use, and disclosure of your information."
                  : "સર્વોત્તમ AI પાઠશાળામાં આપનું સ્વાગત છે. અમે તમારી પ્રાઇવસીનું રક્ષણ કરવા અને અમારી સેવાઓનો ઉપયોગ કરતી વખતે તમને સારો અનુભવ મળે તે સુનિશ્ચિત કરવા માટે પ્રતિબદ્ધ છીએ. આ પોલિસી તમારી માહિતીના સંગ્રહ, ઉપયોગ અને જાહેરાત અંગેની અમારી પદ્ધતિઓની રૂપરેખા આપે છે."}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-950 mb-4">
                {lang === 'EN' ? "2. Information We Collect" : "2. અમે જે માહિતી એકત્રિત કરીએ છીએ"}
              </h2>
              <p className="mb-4 leading-relaxed">
                {lang === 'EN'
                  ? "We collect information you provide directly to us when you fill out forms, register for classes, or contact us via WhatsApp or other channels. This may include:"
                  : "જ્યારે તમે ફોર્મ ભરો છો, ક્લાસ માટે રજીસ્ટ્રેશન કરો છો અથવા WhatsApp કે અન્ય માધ્યમો દ્વારા અમારો સંપર્ક કરો છો ત્યારે અમે તમે આપેલી માહિતી એકત્રિત કરીએ છીએ. આમાં શામેલ હોઈ શકે છે:"}
              </p>
              <ul className="list-disc pl-6 space-y-3 bg-brand-50/50 p-6 rounded-xl border border-brand-100">
                <li>{lang === 'EN' ? "Student's Name and Age" : "વિદ્યાર્થીનું નામ અને ઉંમર"}</li>
                <li>{lang === 'EN' ? "Parent's Name" : "વાલીનું નામ"}</li>
                <li>{lang === 'EN' ? "Contact information (Phone number, Email address)" : "સંપર્ક માહિતી (ફોન નંબર, ઈમેલ એડ્રેસ)"}</li>
                <li>{lang === 'EN' ? "Educational details (Standard/Grade, School name)" : "શૈક્ષણિક વિગતો (ધોરણ, શાળાનું નામ)"}</li>
                <li>{lang === 'EN' ? "Learning goals and challenges" : "શીખવાના લક્ષ્યો અને પડકારો"}</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-950 mb-4">
                {lang === 'EN' ? "3. How We Use Your Information" : "3. અમે તમારી માહિતીનો કેવી રીતે ઉપયોગ કરીએ છીએ"}
              </h2>
              <p className="mb-4 leading-relaxed">
                {lang === 'EN'
                  ? "We use the information we collect for the following purposes:"
                  : "અમે એકત્રિત કરેલી માહિતીનો ઉપયોગ નીચે મુજબના હેતુઓ માટે કરીએ છીએ:"}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{lang === 'EN' ? "To provide and maintain our educational services." : "અમારી શૈક્ષણિક સેવાઓ પ્રદાન કરવા અને જાળવવા માટે."}</li>
                <li>{lang === 'EN' ? "To communicate with you regarding class schedules, updates, and student progress." : "તમારા ક્લાસના સમયપત્રક, અપડેટ્સ અને વિદ્યાર્થીની પ્રગતિ વિશે વાતચીત કરવા માટે."}</li>
                <li>{lang === 'EN' ? "To personalize the learning experience based on the student's grade and needs." : "વિદ્યાર્થીના ધોરણ અને જરૂરિયાતોના આધારે શીખવાના અનુભવને વ્યક્તિગત કરવા માટે."}</li>
                <li>{lang === 'EN' ? "To improve our curriculum and teaching methods." : "અમારા અભ્યાસક્રમ અને શિક્ષણ પદ્ધતિઓને સુધારવા માટે."}</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-950 mb-4">
                {lang === 'EN' ? "4. Data Security & Sharing" : "4. ડેટા સુરક્ષા અને શેરિંગ"}
              </h2>
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 text-brand-900">
                <p className="font-bold mb-2">
                  {lang === 'EN' ? "Our Promise:" : "અમારું વચન:"}
                </p>
                <p className="leading-relaxed">
                  {lang === 'EN'
                    ? "We implement appropriate technical and organizational measures to protect your personal information. We DO NOT sell, trade, or rent your personal identification information to others. We do not share your data with third-party advertisers."
                    : "અમે તમારી વ્યક્તિગત માહિતીની સુરક્ષા માટે યોગ્ય તકનીકી અને વ્યવસ્થાપકીય પગલાં લઈએ છીએ. અમે તમારી વ્યક્તિગત ઓળખ માહિતી અન્યોને વેચતા, વેપાર કરતા કે ભાડે આપતા નથી. અમે તમારો ડેટા ત્રીજા પક્ષના જાહેરાતકર્તાઓ સાથે શેર કરતા નથી."}
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-950 mb-4">
                {lang === 'EN' ? "5. Children's Privacy" : "5. બાળકોની પ્રાઇવસી"}
              </h2>
              <p className="leading-relaxed">
                {lang === 'EN'
                  ? "Our services are designed for students. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. We collect information from children under 13 only with parental consent and for educational purposes."
                  : "અમારી સેવાઓ વિદ્યાર્થીઓ માટે બનાવવામાં આવી છે. અમે વાલીઓને પ્રોત્સાહિત કરીએ છીએ કે તેઓ તેમની ઓનલાઇન પ્રવૃત્તિનું નિરીક્ષણ કરે અને માર્ગદર્શન આપે. અમે 13 વર્ષથી નાના બાળકો પાસેથી માહિતી માત્ર વાલીની સંમતિથી અને શૈક્ષણિક હેતુ માટે જ એકત્રિત કરીએ છીએ."}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-950 mb-4">
                {lang === 'EN' ? "6. Contact Us" : "6. સંપર્ક કરો"}
              </h2>
              <p className="mb-4 leading-relaxed">
                {lang === 'EN'
                  ? "If you have any questions about this Privacy Policy, please contact us:"
                  : "જો તમને આ પ્રાઇવસી પોલિસી વિશે કોઈ પ્રશ્નો હોય, તો કૃપા કરીને અમારો સંપર્ક કરો:"}
              </p>
              <div className="bg-brand-50 p-6 rounded-xl inline-block pr-12">
                <p className="font-bold text-brand-900">Sarvottam AI Pathshala</p>
                <p className="text-brand-700 mt-1">Rajkot, Gujarat</p>
                <p className="text-brand-700 mt-1">Phone: +91 97241 53232</p>
                <p className="text-brand-700 mt-1">Email: hello@sarvottamai.in</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
