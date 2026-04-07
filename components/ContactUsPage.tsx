import React from 'react';
import { ArrowLeft, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { WHATSAPP_PHONE_NUMBER } from '../constants';
import { useScrollReveal } from './ScrollRevealContext';

interface Props {
  lang: Language;
  onBack: () => void;
}

export const ContactUsPage: React.FC<Props> = ({ lang, onBack }) => {
  const revealRef = useScrollReveal();
  return (
    <div className="legal-page">
      <div className="container">
        <button onClick={onBack} className="legal-back">
          <ArrowLeft style={{ width: 18, height: 18 }} />
          {lang === 'EN' ? 'Back to Home' : 'હોમ પર પાછા'}
        </button>

        <h1>{lang === 'EN' ? 'Contact Us' : 'અમારો સંપર્ક'}</h1>

        <div className="reveal glass-card" ref={revealRef} style={{ padding: '3rem 2rem', marginTop: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* WhatsApp */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(37, 211, 102, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25d366' }}>
                <MessageCircle style={{ width: 24, height: 24 }} />
              </div>
              <div>
                <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>
                  {lang === 'EN' ? 'WhatsApp' : 'WhatsApp'}
                </p>
                <a href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}`} style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                  +91 98797 37819
                </a>
              </div>
            </div>

            {/* Email */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(0, 113, 227, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}>
                <Mail style={{ width: 24, height: 24 }} />
              </div>
              <div>
                <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>
                  {lang === 'EN' ? 'Email' : 'ઈમેલ'}
                </p>
                <a href="mailto:tejas@sarvottamai.in" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                  tejas@sarvottamai.in
                </a>
              </div>
            </div>

            {/* Location */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-secondary)' }}>
                <MapPin style={{ width: 24, height: 24 }} />
              </div>
              <div>
                <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>
                  {lang === 'EN' ? 'Location' : 'સ્થાન'}
                </p>
                <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                  Rajkot, Gujarat - Online Zoom Classes
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)', textAlign: 'center' }}>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              {lang === 'EN' 
                ? "Have questions? We're a WhatsApp message away."
                : "કોઈ પ્રશ્ન છે? અમને WhatsApp પર મેસેજ કરો."}
            </p>
            <a href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}`} className="btn btn-whatsapp btn-shimmer">
              <MessageCircle style={{ width: 20, height: 20 }} />
              {lang === 'EN' ? 'Message on WhatsApp' : 'WhatsApp પર મેસેજ કરો'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
