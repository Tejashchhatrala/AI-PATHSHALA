import React, { useEffect } from 'react';
import { Language } from '../types';
import { ArrowLeft, RefreshCw } from 'lucide-react';

interface Props {
  lang: Language;
  onBack: () => void;
}

const RefundPolicyComponent: React.FC<Props> = ({ lang, onBack }) => {
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
              <RefreshCw className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-brand-950">
              Cancellation & Refund Policy
            </h1>
          </div>

          <div className="prose prose-lg text-brand-800 max-w-none">
            <p className="font-medium text-brand-600 mb-8">
              Last updated on 17-02-2026 19:30:42
            </p>

            <p className="leading-relaxed mb-6">
              CHHATRALA TEJAS CHHAGANLAL believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:
            </p>

            <ul className="list-disc pl-6 space-y-4 bg-brand-50/50 p-6 rounded-xl border border-brand-100">
              <li>
                Cancellations will be considered only if the request is made immediately after placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.
              </li>
              <li>
                CHHATRALA TEJAS CHHAGANLAL does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.
              </li>
              <li>
                In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within Only same day of receipt of the products. In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within Only same day of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.
              </li>
              <li>
                In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them. In case of any Refunds approved by the CHHATRALA TEJAS CHHAGANLAL, it’ll take 3-5 Days for the refund to be processed to the end customer.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export const RefundPolicy = React.memo(RefundPolicyComponent);
