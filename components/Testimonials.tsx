import React, { useRef, useEffect } from 'react';
import { Language } from '../types';
import { content } from '../data/content';

interface Props {
  lang: Language;
}

export const Testimonials: React.FC<Props> = ({ lang }) => {
  const t = content.testimonials;
  const trackRef = useRef<HTMLDivElement>(null);

  // Auto-scroll animation
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationFrame: number;
    let scrollPos = 0;
    let isPaused = false;

    const scroll = () => {
      if (!isPaused && track) {
        scrollPos += 0.5;
        if (scrollPos >= track.scrollWidth - track.clientWidth) {
          scrollPos = 0;
        }
        track.scrollLeft = scrollPos;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };
    const handleTouchStart = () => { isPaused = true; };
    const handleTouchEnd = () => {
      // Sync scrollPos after touch
      setTimeout(() => {
        scrollPos = track.scrollLeft;
        isPaused = false;
      }, 2000);
    };

    track.addEventListener('mouseenter', handleMouseEnter);
    track.addEventListener('mouseleave', handleMouseLeave);
    track.addEventListener('touchstart', handleTouchStart);
    track.addEventListener('touchend', handleTouchEnd);

    animationFrame = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrame);
      track.removeEventListener('mouseenter', handleMouseEnter);
      track.removeEventListener('mouseleave', handleMouseLeave);
      track.removeEventListener('touchstart', handleTouchStart);
      track.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <section className="section section-dark">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-eyebrow">{lang === 'EN' ? t.eyebrow.en : t.eyebrow.gu}</div>
          <h2 className="heading-lg section-title" style={{ whiteSpace: 'pre-line' }}>
            {lang === 'EN' ? t.title.en : t.title.gu}
          </h2>
        </div>
      </div>

      {/* Full-width testimonials track */}
      <div className="testimonials-track" ref={trackRef} style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        {/* Duplicate for infinite scroll effect */}
        {[...t.items, ...t.items].map((item, i) => (
          <div key={i} className="testimonial-card">
            <div className="testimonial-text">
              "{lang === 'EN' ? item.text.en : item.text.gu}"
            </div>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{item.initials}</div>
              <div>
                <div className="testimonial-name">{item.name}</div>
                <div className="testimonial-role">{lang === 'EN' ? item.role.en : item.role.gu}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
