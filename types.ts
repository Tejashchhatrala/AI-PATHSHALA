export type Language = 'EN' | 'GU';

export interface BilingualText {
  en: string;
  gu: string;
}

export interface CurriculumDay {
  day: string;
  title: BilingualText;
  description: BilingualText;
}

export interface Phase {
  id: number;
  title: BilingualText;
  days: CurriculumDay[];
}

export interface Testimonial {
  name: string;
  role: string;
  text: BilingualText;
}