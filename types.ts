export type Language = 'EN' | 'GU';

export interface BilingualText {
  en: string;
  gu: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: BilingualText;
}
