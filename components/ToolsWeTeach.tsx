import React from 'react';
import { Language } from '../types';
import { toolsWeTeachContent as content } from '../data/newContent';
import { Wrench, Sparkles, Music, Video, Presentation, Layout } from 'lucide-react';

interface Props {
  lang: Language;
}

const CATEGORY_ICONS = [
  <Wrench className="w-8 h-8 text-brand-600" />,
  <Sparkles className="w-8 h-8 text-brand-600" />,
  <Music className="w-8 h-8 text-brand-600" />,
  <Video className="w-8 h-8 text-brand-600" />,
  <Presentation className="w-8 h-8 text-brand-600" />,
  <Layout className="w-8 h-8 text-brand-600" />
];

export const ToolsWeTeach: React.FC<Props> = ({ lang }) => {
  return (
    <section className="py-24 bg-brand-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className={`text-3xl md:text-5xl font-black text-brand-950 leading-tight mb-6 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
            {lang === 'EN' ? content.title.en : content.title.gu}
          </h2>
          <p className={`text-xl text-brand-600 leading-relaxed font-semibold mb-8 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
            {lang === 'EN' ? content.subtitle.en : content.subtitle.gu}
          </p>
          <div className="w-24 h-1 bg-brand-200 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {content.categories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-brand-100 shadow-sm hover:shadow-lg transition-all group flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-100 transition-colors">
                  {CATEGORY_ICONS[index]}
                </div>
                <h3 className={`text-2xl font-black text-brand-900 ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                  {lang === 'EN' ? category.name.en : category.name.gu}
                </h3>
              </div>
              <div className="space-y-4 flex-grow">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="bg-brand-50/50 p-4 rounded-2xl border border-brand-50">
                    <h4 className="text-xl font-bold text-brand-800 mb-2 font-sans tracking-tight">
                      {tool.name}
                    </h4>
                    <p className={`text-brand-600 font-medium leading-relaxed ${lang === 'GU' ? 'font-gujarati' : ''}`}>
                      {lang === 'EN' ? tool.description.en : tool.description.gu}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
