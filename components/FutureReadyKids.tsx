import React from 'react';
import { Language } from '../types';
import { futureReadyKidsContent as content } from '../data/newContent';
import { Bot, BookOpen, Mic, MonitorPlay, Palette, Video } from 'lucide-react';

interface Props {
  lang: Language;
}

const ICONS = [
  <Bot className="w-8 h-8 text-brand-600" />,
  <BookOpen className="w-8 h-8 text-brand-600" />,
  <Mic className="w-8 h-8 text-brand-600" />,
  <MonitorPlay className="w-8 h-8 text-brand-600" />,
  <Palette className="w-8 h-8 text-brand-600" />,
  <Video className="w-8 h-8 text-brand-600" />
];

export const FutureReadyKids: React.FC<Props> = ({ lang }) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className={`text-3xl md:text-5xl font-black text-brand-950 leading-tight mb-6 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
            {lang === 'EN' ? content.title.en : content.title.gu}
          </h2>
          <div className="w-24 h-1 bg-brand-200 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {content.features.map((feature, index) => (
            <div key={index} className="bg-brand-50 p-8 rounded-3xl border border-brand-100 shadow-sm hover:shadow-lg transition-all group flex flex-col h-full">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {ICONS[index]}
              </div>
              <h3 className={`text-xl font-black text-brand-900 mb-4 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                {lang === 'EN' ? feature.title.en : feature.title.gu}
              </h3>
              <ul className="space-y-4 flex-grow">
                {feature.points.map((point, pointIndex) => (
                  <li key={pointIndex} className={`flex items-start gap-3 text-brand-700 leading-relaxed font-medium ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                    <span className="w-2 h-2 mt-2 rounded-full bg-brand-400 shrink-0"></span>
                    <span>{lang === 'EN' ? point.en : point.gu}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
