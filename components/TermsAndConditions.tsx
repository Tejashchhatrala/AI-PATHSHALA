import React, { useEffect } from 'react';
import { Language } from '../types';
import { ArrowLeft, FileText } from 'lucide-react';

interface Props {
  lang: Language;
  onBack: () => void;
}

const TermsAndConditionsComponent: React.FC<Props> = ({ lang, onBack }) => {
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
              <FileText className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-brand-950">
              Terms & Conditions
            </h1>
          </div>

          <div className="prose prose-lg text-brand-800 max-w-none">
            <p className="font-medium text-brand-600 mb-8">
              Last updated on 17-02-2026 19:30:09
            </p>

            <p className="leading-relaxed mb-6">
              These Terms and Conditions, along with privacy policy or other terms (“Terms”) constitute a binding agreement by and between CHHATRALA TEJAS CHHAGANLAL, ( “Website Owner” or “we” or “us” or “our”) and you (“you” or “your”) and relate to your use of our website, goods (as applicable) or services (as applicable) (collectively, “Services”).
            </p>

            <p className="leading-relaxed mb-6">
              By using our website and availing the Services, you agree that you have read and accepted these Terms (including the Privacy Policy). We reserve the right to modify these Terms at any time and without assigning any reason. It is your responsibility to periodically review these Terms to stay informed of updates.
            </p>

            <p className="leading-relaxed mb-4">
              The use of this website or availing of our Services is subject to the following terms of use:
            </p>

            <ul className="list-disc pl-6 space-y-4 bg-brand-50/50 p-6 rounded-xl border border-brand-100">
              <li>
                To access and use the Services, you agree to provide true, accurate and complete information to us during and after registration, and you shall be responsible for all acts done through the use of your registered account.
              </li>
              <li>
                Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials offered on this website or through the Services, for any specific purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
              </li>
              <li>
                Your use of our Services and the website is solely at your own risk and discretion. You are required to independently assess and ensure that the Services meet your requirements.
              </li>
              <li>
                The contents of the Website and the Services are proprietary to Us and you will not have any authority to claim any intellectual property rights, title, or interest in its contents.
              </li>
              <li>
                You acknowledge that unauthorized use of the Website or the Services may lead to action against you as per these Terms or applicable laws.
              </li>
              <li>
                You agree to pay us the charges associated with availing the Services.
              </li>
              <li>
                You agree not to use the website and/ or Services for any purpose that is unlawful, illegal or forbidden by these Terms, or Indian or local laws that might apply to you.
              </li>
              <li>
                You agree and acknowledge that website and the Services may contain links to other third party websites. On accessing these links, you will be governed by the terms of use, privacy policy and such other policies of such third party websites.
              </li>
              <li>
                You understand that upon initiating a transaction for availing the Services you are entering into a legally binding and enforceable contract with the us for the Services.
              </li>
              <li>
                You shall be entitled to claim a refund of the payment made by you in case we are not able to provide the Service. The timelines for such return and refund will be according to the specific Service you have availed or within the time period provided in our policies (as applicable). In case you do not raise a refund claim within the stipulated time, then this would make you ineligible for a refund.
              </li>
              <li>
                Notwithstanding anything contained in these Terms, the parties shall not be liable for any failure to perform an obligation under these Terms if performance is prevented or delayed by a force majeure event.
              </li>
              <li>
                These Terms and any dispute or claim relating to it, or its enforceability, shall be governed by and construed in accordance with the laws of India.
              </li>
              <li>
                All disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Agatrai, Gujarat.
              </li>
              <li>
                All concerns or communications relating to these Terms must be communicated to us using the contact information provided on this website.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TermsAndConditions = React.memo(TermsAndConditionsComponent);
