import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';
import { useScrollReveal } from './ScrollRevealContext';

interface Props {
  lang: Language;
}

export const Authority: React.FC<Props> = ({ lang }) => {
  const t = content.mentor;
  const revealRef = useScrollReveal();
  const baseUrl = (import.meta.env && import.meta.env.BASE_URL) || '/';

  const getAssetPath = (path: string) => {
    const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${cleanBase}${cleanPath}`;
  };

  const companyLogos = [
    {
      name: "Google",
      src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      height: "24px"
    },
    {
      name: "Microsoft",
      src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
      height: "24px"
    },
    {
      name: "Oracle",
      src: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      height: "20px"
    }
  ];

  const certificates = [
    { src: "certificates/google.png", alt: "Google Certification" },
    { src: "certificates/microsoft.png", alt: "Microsoft Certification" },
    { src: "certificates/oracle.png", alt: "Oracle Certification" },
    { src: "certificates/gemini.png", alt: "Google Gemini Certification" },
    { src: "certificates/ai-fluency.png", alt: "AI Fluency Certification" },
    { src: "certificates/completion.png", alt: "Course Completion Certificate" },
  ];

  return (
    <section className="section section-darker">
      <div className="container">
        <div className="section-header reveal" ref={revealRef}>
          <div className="section-eyebrow">{lang === 'EN' ? t.eyebrow.en : t.eyebrow.gu}</div>
          <h2 className="heading-lg section-title">
            {lang === 'EN' ? t.name.en : t.name.gu}
          </h2>
        </div>

        <div className="reveal mentor-card" ref={revealRef}>
          {/* Photo */}
          <div className="mentor-photo">
            <img
              src={getAssetPath("images/tejas.png")}
              alt="Tejas Chhatrala"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src.indexOf('placehold.co') === -1) {
                  target.src = "https://placehold.co/400x400/1a1a2e/0071e3?text=TC&font=Inter";
                }
              }}
            />
          </div>

          {/* Bio */}
          <div className="mentor-info">
            <div className="mentor-creds" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'inherit' }}>
              <ShieldCheck style={{ width: 18, height: 18 }} />
              {lang === 'EN' ? t.credentials.en : t.credentials.gu}
            </div>

            <div className="mentor-quote">
              "{lang === 'EN' ? t.quote.en : t.quote.gu}"
            </div>

            {/* Company Logos */}
            <div className="cert-logos">
              {companyLogos.map((logo, idx) => (
                <img
                  key={idx}
                  src={logo.src}
                  alt={logo.name}
                  style={{ height: logo.height }}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="reveal" ref={revealRef} style={{ marginTop: '3rem' }}>
          <h3 className="heading-sm" style={{ textAlign: 'center', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--color-text-secondary)' }}>
            <Award style={{ width: 20, height: 20, color: 'var(--color-accent)' }} />
            {lang === 'EN' ? t.certTitle.en : t.certTitle.gu}
          </h3>
          <div className="certs-grid">
            {certificates.map((cert, idx) => (
              <div key={idx} className="cert-card">
                <img
                  src={getAssetPath(cert.src)}
                  alt={cert.alt}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
