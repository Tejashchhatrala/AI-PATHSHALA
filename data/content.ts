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
  journey: {
    title: BilingualText;
    weeks: {
      title: BilingualText;
      items: BilingualText[];
    }[];
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
  faq: {
    title: BilingualText;
    items: {
      question: BilingualText;
      answer: BilingualText;
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
        en: "Stop Memorizing. Start Understanding with AI.",
        gu: "ગોખણપટ્ટી છોડો. AI સાથે સમજતા શીખો."
      },
      line2: {
        en: "Make AI Your Personal Tutor in 30 Days",
        gu: "30 દિવસમાં AI ને તમારો પર્સનલ ટ્યુટર બનાવો"
      }
    },
    subheadline: {
      en: "Concept Clarity • Faster Revision • Higher Marks • Less Stress",
      gu: "કોન્સેપ્ટ ક્લિયર • ઝડપી રિવિઝન • વધારે માર્ક્સ • ઓછું ટેન્શન"
    },
    cta: {
      en: "Book Free Study Strategy Call",
      gu: "ફ્રી સ્ટડી સ્ટ્રેટેજી કોલ બુક કરો"
    },
    features: [
      {
        en: "Live Zoom Classes",
        gu: "લાઈવ Zoom ક્લાસ"
      },
      {
        en: "Limited Seats",
        gu: "મર્યાદિત સીટ્સ"
      },
      {
        en: "Ethical AI Use",
        gu: "નૈતિક AI ઉપયોગ"
      },
      {
        en: "Learn More About March Batch",
        gu: "માર્ચ બેચ વિશે વધુ જાણો"
      }
    ]
  },
  problem: {
    title: {
      en: "The Real Problem",
      gu: "વાસ્તવિક સમસ્યા"
    },
    subtitle: {
      en: "The problem isn't you. The problem is the method.",
      gu: "સમસ્યા તમે નથી. સમસ્યા પદ્ધતિ છે."
    },
    description: {
      en: "You study 12–14 hours a day. School + Tuition + Homework.",
      gu: "તમે દિવસના 12–14 કલાક વાંચો છો. સ્કૂલ + ટ્યુશન + હોમવર્ક."
    },
    equation: {
      en: "But...",
      gu: "પણ..."
    },
    points: [
      {
        en: "Don't know what is important to study",
        gu: "શું સાચું વાંચવું તે ખબર નથી"
      },
      {
        en: "No time for revision",
        gu: "રિવિઝન માટે સમય નથી"
      },
      {
        en: "Dependency on IMP questions",
        gu: "IMP પ્રશ્નો પર નિર્ભરતા"
      },
      {
        en: "Fear before exams",
        gu: "પરીક્ષા પહેલા ડર"
      },
      {
        en: "Confused by AI tools",
        gu: "AI વાપરો… પણ ગૂંચવણ વધી જાય"
      }
    ],
    conclusion: {
      en: "Other students are moving ahead using AI correctly. You need a system too.",
      gu: "અન્ય વિદ્યાર્થીઓ AI ને સાચી રીતે વાપરી આગળ વધી રહ્યા છે. તમને પણ સિસ્ટમ જોઈએ."
    }
  },
  introduction: {
    title: {
      en: "What is AI Pathshala?",
      gu: "AI Pathshala શું છે?"
    },
    subtitle: {
      en: "Not an AI course. A Study System.",
      gu: "આ AI કોર્સ નથી. આ એક અભ્યાસ સિસ્ટમ છે."
    },
    description: {
      en: "We teach you how to make AI:",
      gu: "અમે તમને શીખવીએ છીએ કે AI ને કેવી રીતે બનાવવું:"
    },
    features: [
      {
        en: "Your Personal Tutor",
        gu: "તમારો પર્સનલ ટ્યુટર"
      },
      {
        en: "Instant Doubt Solver",
        gu: "તરત ડાઉટ સોલ્વર"
      },
      {
        en: "Smart Revision Partner",
        gu: "સ્માર્ટ રિવિઝન પાર્ટનર"
      },
      {
        en: "Mock Test Generator",
        gu: "મોક ટેસ્ટ જનરેટર"
      },
      {
        en: "Study Planner",
        gu: "સ્ટડી પ્લાનર"
      }
    ]
  },
  journey: {
    title: {
      en: "Your 30-Day Transformation Journey",
      gu: "તમારો 30 દિવસનો ટ્રાન્સફોર્મેશન જર્ની"
    },
    weeks: [
      {
        title: {
          en: "Week 1 – AI Foundation",
          gu: "Week 1 – AI Foundation"
        },
        items: [
          {
            en: "Free tools setup (ChatGPT, Gemini, NotebookLM)",
            gu: "Free tools setup (ChatGPT, Gemini, NotebookLM)"
          },
          {
            en: "Ethical AI rules",
            gu: "Ethical AI rules"
          },
          {
            en: "Prompt basics",
            gu: "Prompt basics in Gujarati"
          },
          {
            en: "How AI works",
            gu: "AI કેવી રીતે કામ કરે છે"
          }
        ]
      },
      {
        title: {
          en: "Week 2 – AI as Personal Tutor",
          gu: "Week 2 – AI as Personal Tutor"
        },
        items: [
          {
            en: "Simplifying difficult topics",
            gu: "અઘરા વિષયો સરળ સમજ"
          },
          {
            en: "Explanation in your language",
            gu: "ગુજરાતી એક્સપ્લેનેશન"
          },
          {
            en: "Techniques to ask the right questions",
            gu: "યોગ્ય પ્રશ્ન પૂછવાની ટેકનિક"
          }
        ]
      },
      {
        title: {
          en: "Week 3 – Smart Revision System",
          gu: "Week 3 – Smart Revision System"
        },
        items: [
          {
            en: "AI Revision Notes",
            gu: "AI રિવિઝન નોટ્સ"
          },
          {
            en: "Weak chapter detection",
            gu: "Weak chapter detection"
          },
          {
            en: "Flashcards & Mock tests",
            gu: "Flashcards & Mock tests"
          }
        ]
      },
      {
        title: {
          en: "Week 4 – Exam Strategy & Independence",
          gu: "Week 4 – Exam Strategy & Independence"
        },
        items: [
          {
            en: "Daily study planning",
            gu: "Daily study planning"
          },
          {
            en: "Board & Competitive strategy",
            gu: "Board & Competitive strategy"
          },
          {
            en: "Long-term self-study system",
            gu: "Long-term self-study system"
          }
        ]
      }
    ]
  },
  changes: {
    title: {
      en: "After 30 Days, You Will:",
      gu: "30 દિવસ પછી વિદ્યાર્થી:"
    },
    items: [
      {
        en: "Study independently",
        gu: "સ્વતંત્ર રીતે ભણે"
      },
      {
        en: "Use AI ethically",
        gu: "AI નો નૈતિક ઉપયોગ કરે"
      },
      {
        en: "Revise quickly",
        gu: "ઝડપથી રિવિઝન કરે"
      },
      {
        en: "Take exams with confidence",
        gu: "આત્મવિશ્વાસ સાથે પરીક્ષા આપે"
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
  faq: {
    title: {
      en: "Frequently Asked Questions",
      gu: "વારંવાર પૂછાતા પ્રશ્નો"
    },
    items: [
      {
        question: {
          en: "Is this safe for kids?",
          gu: "શું આ બાળકો માટે સુરક્ષિત છે?"
        },
        answer: {
          en: "Yes, absolutely. We teach ethical AI use, focusing on learning and understanding, not cheating. We also guide students on how to stay safe online.",
          gu: "હા, બિલકુલ. અમે નૈતિક AI ઉપયોગ શીખવીએ છીએ, જે શીખવા અને સમજવા પર કેન્દ્રિત છે, નકલ કરવા પર નહીં. અમે વિદ્યાર્થીઓને ઓનલાઇન સુરક્ષિત રહેવા વિશે પણ માર્ગદર્શન આપીએ છીએ."
        }
      },
      {
        question: {
          en: "Can this help board/certification exam students?",
          gu: "શું આ બોર્ડ/સર્ટિફિકેશન પરીક્ષાના વિદ્યાર્થીઓને મદદ કરી શકે?"
        },
        answer: {
          en: "Yes! Our system helps you create personalized study plans, revise faster, and practice with mock tests generated from your syllabus.",
          gu: "હા! અમારી સિસ્ટમ તમને વ્યક્તિગત અભ્યાસ યોજનાઓ બનાવવા, ઝડપથી પુનરાવર્તન કરવા અને તમારા અભ્યાસક્રમમાંથી બનાવેલ મોક ટેસ્ટ સાથે પ્રેક્ટિસ કરવામાં મદદ કરે છે."
        }
      },
      {
        question: {
          en: "How much time do I need daily?",
          gu: "મારે દરરોજ કેટલો સમય જોઈએ?"
        },
        answer: {
          en: "Just 1 hour daily for the live class and some practice time. The goal is to save you time in the long run by studying smarter.",
          gu: "લાઇવ ક્લાસ અને થોડા પ્રેક્ટિસ સમય માટે દરરોજ માત્ર 1 કલાક. અમારો ધ્યેય સ્માર્ટ અભ્યાસ કરીને લાંબા ગાળે તમારો સમય બચાવવાનો છે."
        }
      },
      {
        question: {
          en: "What tools do I need? Are they paid?",
          gu: "મારે કયા સાધનોની જરૂર છે? શું તેઓ ચૂકવણી કરેલા છે?"
        },
        answer: {
          en: "We use free Gen AI tools like Google Gemini, ChatGPT (Free tier), and NotebookLM. You do not need to purchase any expensive software.",
          gu: "અમે ગૂગલ જેમિની, ચેટજીપીટી (ફ્રી ટિયર) અને નોટબુકએલએમ જેવા ફ્રી જનરેટિવ AI સાધનોનો ઉપયોગ કરીએ છીએ. તમારે કોઈ મોંઘા સોફ્ટવેર ખરીદવાની જરૂર નથી."
        }
      },
      {
        question: {
          en: "Do I get recordings of the classes?",
          gu: "શું મને ક્લાસના રેકોર્ડિંગ મળશે?"
        },
        answer: {
          en: "Yes, all live sessions are recorded and provided to students for revision purposes.",
          gu: "હા, તમામ લાઈવ સત્રો રેકોર્ડ કરવામાં આવે છે અને વિદ્યાર્થીઓને પુનરાવર્તન હેતુ માટે આપવામાં આવે છે."
        }
      },
      {
        question: {
          en: "I don't know how to plan my daily study time.",
          gu: "મને મારા દૈનિક અભ્યાસના સમયનું આયોજન કેવી રીતે કરવું તે ખબર નથી."
        },
        answer: {
          en: "We teach you how to use AI to create a personalized daily schedule that fits your school and tuition timings.",
          gu: "અમે તમને શીખવીએ છીએ કે તમારી શાળા અને ટ્યુશનના સમયને અનુરૂપ વ્યક્તિગત દૈનિક સમયપત્રક બનાવવા માટે AI નો ઉપયોગ કેવી રીતે કરવો."
        }
      },
      {
        question: {
          en: "I am unsure which chapters are weak.",
          gu: "મને ખાતરી નથી કે કયા પ્રકરણો નબળા છે."
        },
        answer: {
          en: "Our method helps you identify your weak areas using AI-generated quizzes and focus your revision where it matters most.",
          gu: "અમારી પદ્ધતિ તમને AI-જનરેટેડ ક્વિઝનો ઉપયોગ કરીને તમારા નબળા વિસ્તારોને ઓળખવામાં અને તમારું પુનરાવર્તન જ્યાં સૌથી વધુ મહત્વનું છે ત્યાં કેન્દ્રિત કરવામાં મદદ કરે છે."
        }
      },
      {
        question: {
          en: "I rely too much on IMP questions.",
          gu: "હું IMP પ્રશ્નો પર ખૂબ નિર્ભર છું."
        },
        answer: {
          en: "Instead of guessing, we teach you to understand the core concepts so you can answer any question, not just the 'important' ones.",
          gu: "અનુમાન લગાવવાને બદલે, અમે તમને મુખ્ય વિભાવનાઓ સમજવાનું શીખવીએ છીએ જેથી તમે કોઈપણ પ્રશ્નનો જવાબ આપી શકો, માત્ર 'મહત્વપૂર્ણ' જ નહીં."
        }
      },
      {
        question: {
          en: "AI answers are sometimes long and confusing.",
          gu: "AI ના જવાબો ક્યારેક લાંબા અને ગૂંચવણભર્યા હોય છે."
        },
        answer: {
          en: "We teach 'Prompt Engineering' specifically for students – how to ask AI to explain things simply, in points, or even in Gujarati.",
          gu: "અમે વિદ્યાર્થીઓ માટે ખાસ 'પ્રોમ્પ્ટ એન્જિનિયરિંગ' શીખવીએ છીએ - AI ને વસ્તુઓ સરળ રીતે, મુદ્દાઓમાં અથવા ગુજરાતીમાં પણ સમજાવવા માટે કેવી રીતે પૂછવું."
        }
      },
      {
        question: {
          en: "I feel embarrassed to ask teachers doubts.",
          gu: "મને શિક્ષકોને શંકાઓ પૂછવામાં શરમ આવે છે."
        },
        answer: {
          en: "AI is your judgment-free study partner. You can ask it the same question 100 times without fear of being scolded.",
          gu: "AI તમારું જજમેન્ટ-ફ્રી સ્ટડી પાર્ટનર છે. તમે તેને ઠપકો મળવાના ડર વિના એક જ પ્રશ્ન 100 વખત પૂછી શકો છો."
        }
      },
      {
        question: {
          en: "I start studying too late before exams.",
          gu: "હું પરીક્ષા પહેલા ખૂબ મોડું ભણવાનું શરૂ કરું છું."
        },
        answer: {
          en: "We help you build a consistent habit and a long-term plan so you never have to panic study again.",
          gu: "અમે તમને સતત આદત અને લાંબા ગાળાની યોજના બનાવવામાં મદદ કરીએ છીએ જેથી તમારે ફરીથી ક્યારેય ગભરાઈને અભ્યાસ કરવો ન પડે."
        }
      },
      {
        question: {
          en: "I want to use AI ethically, not for cheating.",
          gu: "મારે AI નો નૈતિક રીતે ઉપયોગ કરવો છે, છેતરપિંડી માટે નહીં."
        },
        answer: {
          en: "That is our core philosophy. We teach 'AI for Learning', ensuring you use tools to understand better, not just to copy-paste homework.",
          gu: "તે અમારી મુખ્ય ફિલસૂફી છે. અમે 'AI ફોર લર્નિંગ' શીખવીએ છીએ, ખાતરી કરીએ છીએ કે તમે સાધનોનો ઉપયોગ વધુ સારી રીતે સમજવા માટે કરો છો, માત્ર હોમવર્ક કોપી-પેસ્ટ કરવા માટે નહીં."
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
