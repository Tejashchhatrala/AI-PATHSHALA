import React, { useState } from 'react';
import { Check, ShieldCheck, AlertCircle, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';
import { GOOGLE_FORM_CTA_URL, GOOGLE_FORM_FIELD_IDS, WHATSAPP_PHONE_NUMBER, PHONE_REGEX } from '../constants';
import { sanitizeInput } from '../utils';
import { useScrollReveal } from './ScrollRevealContext';

interface Props {
  lang: Language;
}

const validateField = (name: string, value: string, lang: Language) => {
  let error = '';
  if (name === 'name' && !value.trim()) {
    error = lang === 'EN' ? 'Name is required' : 'નામ ભરવું જરૂરી છે';
  }
  if (name === 'phone') {
    if (!value.trim()) {
      error = lang === 'EN' ? 'WhatsApp number is required' : 'WhatsApp નંબર ભરવો જરૂરી છે';
    } else if (value.length < 10) {
      error = lang === 'EN' ? 'Enter a valid 10-digit number' : 'માન્ય 10 અંકનો નંબર ભરો';
    }
  }
  return error;
};

export const CTA: React.FC<Props> = ({ lang }) => {
  const t = content.cta;
  const revealRef = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [errors, setErrors] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let fieldKey = '';
    if (name === GOOGLE_FORM_FIELD_IDS.name) fieldKey = 'name';
    if (name === GOOGLE_FORM_FIELD_IDS.phone) fieldKey = 'phone';
    if (fieldKey) {
      const error = validateField(fieldKey, value, lang);
      setErrors(prev => ({ ...prev, [fieldKey]: error }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let fieldKey = '' as keyof typeof formData;
    if (name === GOOGLE_FORM_FIELD_IDS.name) fieldKey = 'name';
    if (name === GOOGLE_FORM_FIELD_IDS.phone) fieldKey = 'phone';

    if (fieldKey) {
      let finalValue = value;
      if (fieldKey === 'phone') {
        finalValue = value.replace(PHONE_REGEX, '');
      } else {
        finalValue = sanitizeInput(value, 100, false);
      }
      setFormData(prev => ({ ...prev, [fieldKey]: finalValue }));
      if (errors[fieldKey]) {
        setErrors(prev => ({ ...prev, [fieldKey]: '' }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    const nameError = validateField('name', formData.name, lang);
    const phoneError = validateField('phone', formData.phone, lang);

    if (nameError || phoneError) {
      e.preventDefault();
      setErrors({ name: nameError, phone: phoneError });
      return;
    }

    setIsSubmitting(true);

    const message = `Hello Tejas Sir, I want to enroll in the AI Pathshala course (₹3,999).\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.location.href = whatsappUrl;
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="enroll" className="section cta-section" style={{ paddingBottom: '6rem' }}>
      {/* Background glows */}
      <div className="cta-bg-glow" style={{ background: 'var(--color-accent)', top: '-200px', right: '-200px' }} />
      <div className="cta-bg-glow" style={{ background: '#7c3aed', bottom: '-200px', left: '-200px' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className="section-header reveal" ref={revealRef}>
          <div className="section-eyebrow">{lang === 'EN' ? t.eyebrow.en : t.eyebrow.gu}</div>
          <h2 className="heading-lg section-title" style={{ whiteSpace: 'pre-line' }}>
            {lang === 'EN' ? t.title.en : t.title.gu}
          </h2>
          <p className="section-subtitle">
            {lang === 'EN' ? t.subtitle.en : t.subtitle.gu}
          </p>
        </div>

        {/* Two column: Features + Form */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', maxWidth: '900px', margin: '0 auto' }} className="reveal" ref={revealRef}>
          {/* Pricing + Features column */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {/* Price card */}
            <div className="glass-card-strong" style={{ padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                {lang === 'EN' ? 'Complete 30-Day Program' : 'સંપૂર્ણ 30 દિવસનો પ્રોગ્રામ'}
              </div>
              <div className="cta-price-amount">{t.price}</div>
              <div className="cta-price-period" style={{ marginTop: '0.5rem' }}>
                {lang === 'EN' ? 'One-time payment' : 'એક વખતની ચૂકવણી'}
              </div>
            </div>

            {/* Features list */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <ul className="cta-features">
                {t.features.map((f, i) => (
                  <li key={i} className="cta-feature">
                    <Check style={{ width: 18, height: 18 }} />
                    <span>{lang === 'EN' ? f.en : f.gu}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form Card */}
          <div className="cta-card">
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <h3 className="heading-sm" style={{ marginBottom: '0.5rem' }}>
                {lang === 'EN' ? t.formTitle.en : t.formTitle.gu}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                {lang === 'EN' ? t.formSubtitle.en : t.formSubtitle.gu}
              </p>
            </div>

            <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }} />

            <form
              action={GOOGLE_FORM_CTA_URL}
              method="post"
              target="hidden_iframe"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="form-group">
                <label className="form-label">
                  {lang === 'EN' ? "Student's Name" : "વિદ્યાર્થીનું નામ"}
                </label>
                <input
                  type="text"
                  name={GOOGLE_FORM_FIELD_IDS.name}
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  placeholder={lang === 'EN' ? "e.g. Rahul Patel" : "દા.ત. રાહુલ પટેલ"}
                />
                {errors.name && (
                  <div className="form-error" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <AlertCircle style={{ width: 14, height: 14 }} />
                    {errors.name}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">
                  {lang === 'EN' ? "WhatsApp Number" : "WhatsApp નંબર"}
                </label>
                <input
                  type="tel"
                  name={GOOGLE_FORM_FIELD_IDS.phone}
                  required
                  pattern="[0-9]{10}"
                  maxLength={10}
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-input ${errors.phone ? 'error' : ''}`}
                  placeholder="98797 37819"
                />
                {errors.phone && (
                  <div className="form-error" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <AlertCircle style={{ width: 14, height: 14 }} />
                    {errors.phone}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-whatsapp btn-shimmer w-full"
                style={{ marginTop: '1rem' }}
              >
                {isSubmitting ? (
                  <span style={{ opacity: 0.7 }}>Processing...</span>
                ) : (
                  <>
                    <MessageCircle style={{ width: 20, height: 20 }} />
                    {lang === 'EN' ? t.buttonText.en : t.buttonText.gu}
                  </>
                )}
              </button>

              <div style={{ textAlign: 'center', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.375rem' }}>
                <ShieldCheck style={{ width: 14, height: 14, color: 'var(--color-success)' }} />
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-tertiary)', fontWeight: 500 }}>
                  {lang === 'EN' ? t.guarantee.en : t.guarantee.gu}
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
