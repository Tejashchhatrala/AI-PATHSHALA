import React, { memo } from 'react';
import { Language } from '../types';
import { content } from '../data/content';
import { WEBSITE_URL } from '../constants';

interface Props {
  lang: Language;
  onPrivacyClick: () => void;
  onRefundClick: () => void;
  onTermsClick: () => void;
  onContactClick: () => void;
}

export const Footer = memo(({ lang, onPrivacyClick, onRefundClick, onTermsClick, onContactClick }: Props) => {
  const t = content.footer;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-brand">AI Pathshala</div>
        <p style={{ fontSize: '0.8rem', color: 'var(--color-text-tertiary)', marginBottom: '0.5rem' }}>
          {lang === 'EN' ? t.tagline.en : t.tagline.gu}
        </p>
        <a
          href={WEBSITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '0.75rem', color: 'var(--color-text-tertiary)' }}
        >
          {WEBSITE_URL.replace('https://', '')}
        </a>

        <div className="footer-links">
          <button onClick={onPrivacyClick} className="footer-link" style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
            {lang === 'EN' ? "Privacy Policy" : "પ્રાઇવસી પોલિસી"}
          </button>
          <button onClick={onRefundClick} className="footer-link" style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
            {lang === 'EN' ? "Refund Policy" : "રિફંડ પોલિસી"}
          </button>
          <button onClick={onTermsClick} className="footer-link" style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
            {lang === 'EN' ? "Terms & Conditions" : "નિયમો અને શરતો"}
          </button>
          <button onClick={onContactClick} className="footer-link" style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
            {lang === 'EN' ? "Contact Us" : "અમારો સંપર્ક"}
          </button>
        </div>

        <div className="footer-copy">
          <p>© 2026 Sarvottam AI Pathshala. {lang === 'EN' ? 'Founded by Tejas Chhatrala.' : 'સ્થાપક: તેજસ છત્રાળા.'}</p>
        </div>

        <div style={{ maxWidth: '600px', margin: '1.5rem auto 0', fontSize: '0.65rem', color: 'var(--color-text-tertiary)', lineHeight: 1.6 }}>
          {lang === 'EN' ? t.disclaimer.en : t.disclaimer.gu}
        </div>
      </div>
    </footer>
  );
});