import { BilingualText } from '../types';

export interface HomepageContent {
  hero: {
    badge: BilingualText;
    headline: {
      line1: BilingualText;
      line2: BilingualText;
    };
    subheadline: BilingualText;
    cta: BilingualText;
    features: BilingualText[];
  };
  problem: {
    title: BilingualText;
    subtitle: BilingualText;
    description: BilingualText;
    equation: BilingualText;
    points: BilingualText[];
    conclusion: BilingualText;
  };
  introduction: {
    title: BilingualText;
    subtitle: BilingualText;
    description: BilingualText;
    features: BilingualText[];
  };
  changes: {
    title: BilingualText;
    items: BilingualText[];
  };
  audience: {
    title: BilingualText;
    segments: {
      title: BilingualText;
      description: BilingualText;
    }[];
  };
  howItWorks: {
    title: BilingualText;
    phases: {
      title: BilingualText;
      description: BilingualText;
    }[];
  };
  trust: {
    title: BilingualText;
    points: BilingualText[];
  };
  mentor: {
    title: BilingualText;
    name: BilingualText;
    badges: BilingualText;
    quote: BilingualText;
    certificationsTitle: BilingualText;
  };
  testimonials: {
    title: BilingualText;
    items: {
      name: string;
      role: BilingualText;
      text: BilingualText;
    }[];
  };
  finalCall: {
    title: BilingualText;
    subtitle: BilingualText;
    cta: BilingualText;
  };
}

export const content: HomepageContent = {
  hero: {
    badge: {
      en: "Admissions Open – March 2026 Batch",
      gu: "માર્ચ 2026 બેચ માટે એડમિશન શરૂ"
    },
    headline: {
      line1: {
        en: "Stop Memorizing. Start Thinking.",
        gu: "ગોખણપટ્ટી છોડો. વિચારતા શીખો. 30 દિવસમાં AI ને તમારો પર્સનલ ટ્યુટર બનાવો."
      },
      line2: {
        en: "Gujarat’s First AI-Powered Study System",
        gu: "ગુજરાતનું પ્રથમ AI આધારિત અભ્યાસ સિસ્ટમ"
      }
    },
    subheadline: {
      en: "Designed to turn confused students into confident, concept-clear performers in just 30 days.",
      gu: "વિદ્યાર્થીઓ માટે 30 દિવસનું AI આધારિત અભ્યાસ સિસ્ટમ જ્યાં અમે તમને શીખવીએ છીએ કે AI ને કેવી રીતે બનાવવું તમારો પર્સનલ ટ્યુટર — જેથી કોન્સેપ્ટ ક્લિયર થાય, રિવિઝન ઝડપથી થાય અને માર્ક્સ વધે."
    },
    cta: {
      en: "Book Your Free Study Strategy Call",
      gu: "ફ્રી સ્ટડી સ્ટ્રેટેજી કોલ બુક કરો"
    },
    features: [
      {
        en: "Live on Zoom",
        gu: "લાઈવ Zoom ક્લાસ"
      },
      {
        en: "Gujarati-friendly",
        gu: "સરળ ગુજરાતી"
      },
      {
        en: "Ethical AI learning",
        gu: "નૈતિક AI શીખ"
      },
      {
        en: "Limited Batch",
        gu: "મર્યાદિત બેચ"
      },
      {
        en: "Mobile Friendly",
        gu: "મોબાઈલ પર કામ કરે"
      }
    ]
  },
  problem: {
    title: {
      en: "The Real Problem",
      gu: "વાસ્તવિક સમસ્યા"
    },
    subtitle: {
      en: "You study 12 hours a day… But still feel scared before exams.",
      gu: "તમે દિવસના 12 કલાક વાંચો છો… પણ પરીક્ષા પહેલા ડર લાગે છે."
    },
    description: {
      en: "The problem isn’t you. The system teaches memorization — not understanding.",
      gu: "સમસ્યા તમે નથી. સમસ્યા પદ્ધતિ છે. જે ગોખણપટ્ટી શીખવે છે - સમજ નહીં."
    },
    equation: {
      en: "School + Tuition + Homework = 14 hours.",
      gu: "સ્કૂલ + ટ્યુશન + હોમવર્ક = 14 કલાક"
    },
    points: [
      {
        en: "No time to think.",
        gu: "વિચારવાનો સમય નથી."
      },
      {
        en: "No time to revise properly.",
        gu: "રિવિઝનનો સમય નથી."
      },
      {
        en: "No one to solve doubts instantly.",
        gu: "તરત ડાઉટ સોલ્યુશન નથી."
      }
    ],
    conclusion: {
      en: "Meanwhile, smart students are already using AI tools to move ahead.",
      gu: "જ્યારે અન્ય વિદ્યાર્થીઓ AI નો ઉપયોગ કરીને આગળ વધી રહ્યા છે."
    }
  },
  introduction: {
    title: {
      en: "Introducing AI Pathshala",
      gu: "AI Pathshala શું છે?"
    },
    subtitle: {
      en: "Not an AI course. A Study System.",
      gu: "આ AI કોર્સ નથી. આ એક અભ્યાસ સિસ્ટમ છે."
    },
    description: {
      en: "We teach you how to use AI as:",
      gu: "અમે તમને શીખવીએ છીએ કે AI ને કેવી રીતે બનાવવું:"
    },
    features: [
      {
        en: "Your personal tutor",
        gu: "તમારો પર્સનલ ટ્યુટર"
      },
      {
        en: "Your revision partner",
        gu: "તમારો રિવિઝન પાર્ટનર"
      },
      {
        en: "Your mock test generator",
        gu: "તમારો મોક ટેસ્ટ બનાવનાર"
      },
      {
        en: "Your concept simplifier",
        gu: "અઘરા વિષયો સરળ સમજાવનાર"
      }
    ]
  },
  changes: {
    title: {
      en: "What Changes in 30 Days?",
      gu: "30 દિવસમાં શું બદલાય?"
    },
    items: [
      {
        en: "You understand concepts deeply",
        gu: "કોન્સેપ્ટ ક્લિયર"
      },
      {
        en: "You revise faster",
        gu: "ઝડપી રિવિઝન"
      },
      {
        en: "You solve doubts instantly",
        gu: "તરત ડાઉટ સોલ્યુશન"
      },
      {
        en: "You build confidence",
        gu: "વધુ આત્મવિશ્વાસ"
      },
      {
        en: "You study smarter, not longer",
        gu: "ઓછું ટેન્શન"
      }
    ]
  },
  audience: {
    title: {
      en: "Who Is This For?",
      gu: "આ કોના માટે છે?"
    },
    segments: [
      {
        title: {
          en: "Students (Grades 9–12)",
          gu: "ધોરણ 9–12 વિદ્યાર્થી"
        },
        description: {
          en: "Struggling with Science or Commerce? Want instant explanation in Gujarati?",
          gu: "સાયન્સ/કોમર્સ અઘરું લાગે છે?"
        }
      },
      {
        title: {
          en: "College Students",
          gu: "કોલેજ સ્ટુડન્ટ"
        },
        description: {
          en: "Finish assignments faster. Learn real-world AI skills.",
          gu: "એસાઈનમેન્ટ ઝડપથી પૂરા કરવા છે?"
        }
      },
      {
        title: {
          en: "Competitive Aspirants",
          gu: "સ્પર્ધાત્મક પરીક્ષા"
        },
        description: {
          en: "Generate mock tests. Summarize current affairs. Save hours daily.",
          gu: "GPSC, UPSC, ક્લાર્ક તૈયારી?"
        }
      }
    ]
  },
  howItWorks: {
    title: {
      en: "How The System Works",
      gu: "સિસ્ટમ કેવી રીતે કામ કરે છે?"
    },
    phases: [
      {
        title: {
          en: "Phase 1 – Foundation",
          gu: "ફેઝ 1 – પાયો મજબૂત"
        },
        description: {
          en: "Set up your AI study system.",
          gu: "AI સેટઅપ અને નિયમો"
        }
      },
      {
        title: {
          en: "Phase 2 – Personal Tutor",
          gu: "ફેઝ 2 – પર્સનલ ટ્યુટર"
        },
        description: {
          en: "Master the art of asking AI for clarity.",
          gu: "અઘરા વિષયો સરળ બનાવો"
        }
      },
      {
        title: {
          en: "Phase 3 – Exam Strategy",
          gu: "ફેઝ 3 – પરીક્ષા સ્ટ્રેટેજી"
        },
        description: {
          en: "Rapid revision & mock test generation.",
          gu: "ઝડપી રિવિઝન અને મોક ટેસ્ટ"
        }
      },
      {
        title: {
          en: "Phase 4 – Future Skills",
          gu: "ફેઝ 4 – ભવિષ્યની સ્કિલ્સ"
        },
        description: {
          en: "Learn real-world AI productivity skills.",
          gu: "2030 માટે તૈયાર"
        }
      }
    ]
  },
  trust: {
    title: {
      en: "Why Parents Trust Us",
      gu: "શા માટે માતા-પિતા વિશ્વાસ કરે?"
    },
    points: [
      {
        en: "Ethical AI training",
        gu: "નૈતિક AI ઉપયોગ"
      },
      {
        en: "Live teaching",
        gu: "લાઈવ માર્ગદર્શન"
      },
      {
        en: "Certified by global tech companies",
        gu: "ગ્લોબલ સર્ટિફાઈડ મેન્ટર"
      },
      {
        en: "Focus on understanding, not cheating",
        gu: "સમજ પર ફોકસ"
      }
    ]
  },
  mentor: {
    title: {
      en: "Meet Your Mentor",
      gu: "તમારા મેન્ટરને મળો"
    },
    name: {
      en: "Tejas Chhatrala",
      gu: "તેજસ છત્રાળા"
    },
    badges: {
      en: "Certified by Google, Microsoft & Oracle.",
      gu: "Google, Microsoft અને Oracle દ્વારા પ્રમાણિત."
    },
    quote: {
      en: "“My mission is simple: To give Gujarati students the same AI advantage that top engineers use.”",
      gu: "“મારું મિશન સરળ છે: ગુજરાતી વિદ્યાર્થીઓને તે જ AI ફાયદો આપવો જે ટોચના એન્જિનિયરો વાપરે છે.”"
    },
    certificationsTitle: {
      en: "Certifications & Achievements",
      gu: "પ્રમાણપત્રો અને સિદ્ધિઓ"
    }
  },
  testimonials: {
    title: {
      en: "Testimonials",
      gu: "વિદ્યાર્થીઓ શું કહે છે?"
    },
    items: [
      {
        name: "Rohan Patel",
        role: {
          en: "Grade 10 Student",
          gu: "ધોરણ 10 વિદ્યાર્થી"
        },
        text: {
          en: "I used to hate Science. After learning how to use AI to visualize concepts, I scored 92% in my prelims.",
          gu: "મને વિજ્ઞાન ગમતું નહોતું. પણ AI થી કોન્સેપ્ટ સમજ્યા પછી, મેં પ્રિલિમ્સમાં 92% મેળવ્યા."
        }
      },
      {
        name: "Priya Shah",
        role: {
          en: "Commerce Student",
          gu: "કોમર્સ વિદ્યાર્થી"
        },
        text: {
          en: "Accounts was confusing. Now I use AI to explain journal entries in simple Gujarati. My confidence is sky high.",
          gu: "એકાઉન્ટ્સ બહુ અઘરું હતું. હવે હું AI નો ઉપયોગ કરીને આમનોંધ સરળ ગુજરાતીમાં સમજું છું. મારો આત્મવિશ્વાસ વધી ગયો છે."
        }
      },
      {
        name: "Rajesh Kumar",
        role: {
          en: "Parent",
          gu: "વાલી"
        },
        text: {
          en: "I was worried about AI being a distraction. But Tejas Sir taught my son how to use it for studies. He is now more independent.",
          gu: "મને ચિંતા હતી કે AI થી બાળક બગડશે. પણ તેજસ સરે મારા દીકરાને ભણવા માટે તેનો ઉપયોગ શીખવ્યો. હવે તે જાતે ભણે છે."
        }
      }
    ]
  },
  finalCall: {
    title: {
      en: "The future belongs to students who understand — not memorize.",
      gu: "ભવિષ્ય સમજદાર વિદ્યાર્થીઓનું છે."
    },
    subtitle: {
      en: "The Smarter Way to Study in the Age of AI.",
      gu: "AI ના યુગમાં અભ્યાસ કરવાની સૌથી સમજદાર રીત."
    },
    cta: {
      en: "Book Your Free Roadmap Call",
      gu: "ફ્રી રોડમેપ કોલ બુક કરો"
    }
  }
};
