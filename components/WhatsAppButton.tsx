import React from 'react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

export const WhatsAppButton: React.FC<Props> = ({ lang }) => {
  const whatsappUrl = "https://wa.me/919879737819?text=Hello%20Tejas%20Sir,%20I%20have%20a%20query%20about%20AI%20Pathshala.";

  // Text content for the circular ring - Single instance as requested
  // Added bullets/spaces to balance the circle visually
  const textEn = "CHAT WITH US • ADMISSION OPEN • ";
  const textGu = "વાત કરો • એડમિશન લો • "; 
  const text = lang === 'EN' ? textEn : textGu;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group hidden md:flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      {/* Container - w-36 = 144px */}
      <div className="relative w-36 h-36 flex items-center justify-center">
        
        {/* Backdrop Circle for better text contrast */}
        <div className="absolute inset-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-brand-100/50"></div>

        {/* Animated Circular Text Ring */}
        <div className="absolute inset-0 w-full h-full animate-spin-slow origin-center z-10 p-1">
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            <defs>
              {/* Radius 37 keeps it safe within viewbox */}
              <path id="textCircle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            </defs>
            <text className="font-bold tracking-widest uppercase text-[12px] fill-brand-900 font-sans">
              <textPath 
                xlinkHref="#textCircle" 
                startOffset="50%" 
                textAnchor="middle" 
                textLength="225" 
                lengthAdjust="spacingAndGlyphs"
              >
                 {text}
              </textPath>
            </text>
          </svg>
        </div>
        
        {/* Static Central Icon */}
        <div className="absolute inset-0 m-auto w-16 h-16 bg-[#25D366] rounded-full shadow-2xl shadow-green-500/40 flex items-center justify-center transform transition-transform group-hover:scale-110 z-20 border-[3px] border-white">
           <svg 
             xmlns="http://www.w3.org/2000/svg" 
             width="36" 
             height="36" 
             viewBox="0 0 24 24" 
             fill="white"
           >
             <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
           </svg>
        </div>
      </div>
    </a>
  );
};