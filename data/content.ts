import { BilingualText } from '../types';

export interface SiteContent {
  nav: {
    cta: BilingualText;
    subtitle: BilingualText;
  };
  hero: {
    badge: BilingualText;
    headline: BilingualText;
    subline: BilingualText;
    description: BilingualText;
    cta: BilingualText;
    pills: BilingualText[];
  };
  problem: {
    eyebrow: BilingualText;
    title: BilingualText;
    subtitle: BilingualText;
    problems: BilingualText[];
    solutionTitle: BilingualText;
    solutions: BilingualText[];
  };
  stats: {
    items: {
      number: string;
      label: BilingualText;
    }[];
  };
  curriculum: {
    eyebrow: BilingualText;
    title: BilingualText;
    subtitle: BilingualText;
    weeks: {
      week: string;
      title: BilingualText;
      items: BilingualText[];
    }[];
  };
  tools: {
    eyebrow: BilingualText;
    title: BilingualText;
    subtitle: BilingualText;
    items: {
      name: string;
      icon: string;
      description: BilingualText;
      free: boolean;
    }[];
    bonusTitle: BilingualText;
    bonusTools: string[];
  };
  mentor: {
    eyebrow: BilingualText;
    name: BilingualText;
    credentials: BilingualText;
    quote: BilingualText;
    certTitle: BilingualText;
  };
  howItWorks: {
    eyebrow: BilingualText;
    title: BilingualText;
    steps: {
      title: BilingualText;
      description: BilingualText;
    }[];
  };
  testimonials: {
    eyebrow: BilingualText;
    title: BilingualText;
    items: {
      name: string;
      initials: string;
      role: BilingualText;
      text: BilingualText;
    }[];
  };
  faq: {
    eyebrow: BilingualText;
    title: BilingualText;
    items: {
      question: BilingualText;
      answer: BilingualText;
    }[];
  };
  cta: {
    eyebrow: BilingualText;
    title: BilingualText;
    subtitle: BilingualText;
    price: string;
    originalPrice: string;
    features: BilingualText[];
    buttonText: BilingualText;
    formTitle: BilingualText;
    formSubtitle: BilingualText;
    guarantee: BilingualText;
  };
  footer: {
    tagline: BilingualText;
    disclaimer: BilingualText;
  };
}

export const content: SiteContent = {
  nav: {
    cta: {
      en: "Enroll Now",
      gu: "હવે નોંધણી કરો"
    },
    subtitle: {
      en: "Gujarat's First AI Learning Program",
      gu: "ગુજરાતનો પ્રથમ AI લર્નિંગ પ્રોગ્રામ"
    }
  },

  hero: {
    badge: {
      en: "April 2026 Batch — Limited Seats",
      gu: "એપ્રિલ 2026 બેચ — મર્યાદિત સીટ"
    },
    headline: {
      en: "The AI Advantage\nYour Child Needs.",
      gu: "તમારા બાળકને જોઈતો\nAI ફાયદો."
    },
    subline: {
      en: "30 Days. 1 Hour/Day. ₹3,999.",
      gu: "30 દિવસ. 1 કલાક/દિવસ. ₹3,999."
    },
    description: {
      en: "Gujarat's first structured AI learning program. Live Zoom classes in Gujarati + English. From Std 8 to College.",
      gu: "ગુજરાતનો પ્રથમ સ્ટ્રક્ચર્ડ AI લર્નિંગ પ્રોગ્રામ. ગુજરાતી + અંગ્રેજીમાં લાઈવ Zoom ક્લાસ. ધોરણ 8 થી કૉલેજ સુધી."
    },
    cta: {
      en: "Start Learning AI →",
      gu: "AI શીખવાનું શરૂ કરો →"
    },
    pills: [
      { en: "Live Zoom Classes", gu: "લાઈવ Zoom ક્લાસ" },
      { en: "Gujarati + English", gu: "ગુજરાતી + અંગ્રેજી" },
      { en: "No Subscriptions Needed", gu: "કોઈ સબ્સ્ક્રિપ્શન જરૂરી નથી" },
      { en: "Works on Mobile", gu: "મોબાઈલ પર ચાલે" }
    ]
  },

  problem: {
    eyebrow: {
      en: "The Reality",
      gu: "વાસ્તવિકતા"
    },
    title: {
      en: "The World Is Changing.\nIs Your Child Ready?",
      gu: "દુનિયા બદલાઈ રહી છે.\nતમારું બાળક તૈયાર છે?"
    },
    subtitle: {
      en: "AI is reshaping education worldwide. Students who learn AI tools now will have a massive advantage over those who don't.",
      gu: "AI વિશ્વભરમાં શિક્ષણને બદલી રહ્યું છે. જે વિદ્યાર્થીઓ હમણાં AI ટૂલ્સ શીખશે તેમને ઘણો ફાયદો થશે."
    },
    problems: [
      { en: "Students use AI randomly — no structure, no guidance", gu: "વિદ્યાર્થીઓ AI વાપરે છે — પણ કોઈ માર્ગદર્શન નથી" },
      { en: "YouTube tutorials are scattered and incomplete", gu: "YouTube ટ્યુટોરિયલ્સ અધૂરા અને વિખરાયેલા છે" },
      { en: "Parents worry AI means cheating or distraction", gu: "વાલીઓ ચિંતિત છે કે AI ચીટિંગ કે વ્યર્થ સમય છે" },
      { en: "Schools don't teach practical AI skills", gu: "શાળાઓ AI ની પ્રેક્ટિકલ સ્કિલ શીખવતી નથી" },
      { en: "The global AI race is accelerating — Gujarat students are falling behind", gu: "વૈશ્વિક AI રેસ ઝડપી થઈ રહી છે — ગુજરાતના વિદ્યાર્થીઓ પાછળ પડી રહ્યા છે" }
    ],
    solutionTitle: {
      en: "What AI Pathshala Gives Your Child",
      gu: "AI Pathshala તમારા બાળકને શું આપે છે"
    },
    solutions: [
      { en: "30-day structured curriculum — not random tutorials", gu: "30 દિવસનો સ્ટ્રક્ચર્ડ અભ્યાસક્રમ — YouTube નહીં" },
      { en: "Daily 1-hour live class on Zoom with a certified mentor", gu: "દરરોજ 1 કલાકનો લાઈવ Zoom ક્લાસ સર્ટિફાઈડ મેન્ટર સાથે" },
      { en: "Practical skills: ChatGPT, Gemini, NotebookLM, Gamma & more", gu: "પ્રેક્ટિકલ સ્કિલ: ChatGPT, Gemini, NotebookLM, Gamma અને વઘુ" },
      { en: "All in Gujarati + English — no language barrier", gu: "ગુજરાતી + અંગ્રેજી — ભાષાની અડચણ નહીં" },
      { en: "Ethical AI use — parents can trust the approach", gu: "નૈતિક AI ઉપયોગ — વાલીઓ વિશ્વાસ કરી શકે" }
    ]
  },

  stats: {
    items: [
      { number: "30", label: { en: "Days to AI Mastery", gu: "દિવસમાં AI શીખો" } },
      { number: "1 Hr", label: { en: "Daily Commitment", gu: "દૈનિક સમય" } },
      { number: "10+", label: { en: "AI Tools Covered", gu: "AI ટૂલ્સ શીખવાય" } },
      { number: "₹3,999", label: { en: "Complete Program", gu: "સંપૂર્ણ પ્રોગ્રામ" } }
    ]
  },

  curriculum: {
    eyebrow: {
      en: "The 30-Day System",
      gu: "30-દિવસની સિસ્ટમ"
    },
    title: {
      en: "What Your Child Will\nLearn in 30 Days",
      gu: "30 દિવસમાં તમારું બાળક\nશું શીખશે"
    },
    subtitle: {
      en: "A carefully designed curriculum — 1 hour per day, from zero to AI-confident.",
      gu: "કાળજીપૂર્વક ડિઝાઇન કરેલ અભ્યાસક્રમ — દરરોજ 1 કલાક, શૂન્યથી AI-કોન્ફિડન્ટ સુધી."
    },
    weeks: [
      {
        week: "01",
        title: { en: "AI Foundation", gu: "AI ફાઉન્ડેશન" },
        items: [
          { en: "What is AI? How does it actually work?", gu: "AI શું છે? તે કેવી રીતે કામ કરે છે?" },
          { en: "Setting up ChatGPT, Gemini & Perplexity (free)", gu: "ChatGPT, Gemini અને Perplexity સેટઅપ (ફ્રી)" },
          { en: "The art of prompting — how to talk to AI", gu: "પ્રોમ્પ્ટિંગની કળા — AI સાથે કેવી રીતે વાત કરવી" },
          { en: "Ethics & responsibility — using AI the right way", gu: "નૈતિકતા — AI નો સાચો ઉપયોગ" }
        ]
      },
      {
        week: "02",
        title: { en: "AI for Smarter Study", gu: "સ્માર્ટ અભ્યાસ માટે AI" },
        items: [
          { en: "Get any topic explained in simple Gujarati", gu: "કોઈપણ વિષય સરળ ગુજરાતીમાં સમજો" },
          { en: "NotebookLM — upload textbook, get instant summaries", gu: "NotebookLM — ટેક્સ્ટબુક અપલોડ કરો, ઝટપટ સારાંશ" },
          { en: "Flashcards & quiz creation from any chapter", gu: "કોઈપણ પ્રકરણમાંથી ફ્લેશકાર્ડ અને ક્વિઝ" },
          { en: "AI as your personal doubt-solving tutor", gu: "AI — તમારો પર્સનલ ડાઉટ સોલ્વર ટ્યુટર" }
        ]
      },
      {
        week: "03",
        title: { en: "AI for Productivity", gu: "પ્રોડક્ટિવિટી માટે AI" },
        items: [
          { en: "Gamma — stunning presentations in 5 minutes", gu: "Gamma — 5 મિનિટમાં ભવ્ય પ્રેઝન્ટેશન" },
          { en: "AI writing — essays, emails, applications", gu: "AI લેખન — નિબંધ, ઈમેલ, અરજીઓ" },
          { en: "Research with verified sources using Perplexity", gu: "Perplexity થી વેરિફાઇડ રિસર્ચ" },
          { en: "Smart study planning & time management", gu: "સ્માર્ટ સ્ટડી પ્લાનિંગ અને ટાઈમ મેનેજમેન્ટ" }
        ]
      },
      {
        week: "04",
        title: { en: "Creative AI & Beyond", gu: "ક્રિએટિવ AI અને ભવિષ્ય" },
        items: [
          { en: "Image generation basics (AI art, posters, designs)", gu: "ઇમેજ જનરેશન (AI આર્ટ, પોસ્ટર, ડિઝાઈન)" },
          { en: "Intro to AI video & voice tools", gu: "AI વિડીયો અને વોઇસ ટૂલ્સનો પરિચય" },
          { en: "Build a no-code website with AI", gu: "AI સાથે નો-કોડ વેબસાઇટ બનાવો" },
          { en: "Final project showcase & certificate ceremony", gu: "ફાઈનલ પ્રોજેક્ટ શોકેસ અને સર્ટિફિકેટ" }
        ]
      }
    ]
  },

  tools: {
    eyebrow: {
      en: "Tools You'll Master",
      gu: "તમે શીખશો આ ટૂલ્સ"
    },
    title: {
      en: "Real AI Tools.\nReal Skills.",
      gu: "અસલી AI ટૂલ્સ.\nઅસલી સ્કિલ્સ."
    },
    subtitle: {
      en: "No toy apps. These are the same AI tools used by professionals at Google, Microsoft, and top companies worldwide.",
      gu: "કોઈ રમકડાં એપ્સ નહીં. આ એ જ AI ટૂલ્સ છે જે Google, Microsoft અને ટોચની કંપનીઓમાં વપરાય છે."
    },
    items: [
      {
        name: "ChatGPT",
        icon: "💬",
        description: { en: "Personal AI tutor — explains any topic, any time", gu: "પર્સનલ AI ટ્યુટર — ગમે ત્યારે ગમે તે વિષય સમજાવે" },
        free: true
      },
      {
        name: "Google Gemini",
        icon: "✨",
        description: { en: "Google's AI — search, analyze, and create content", gu: "Google નું AI — સર્ચ, એનાલિસિસ, કન્ટેન્ટ ક્રિએશન" },
        free: true
      },
      {
        name: "NotebookLM",
        icon: "📓",
        description: { en: "Upload textbooks, get summaries & quizzes instantly", gu: "ટેક્સ્ટબુક અપલોડ કરો, ઝટપટ સારાંશ અને ક્વિઝ" },
        free: true
      },
      {
        name: "Perplexity AI",
        icon: "🔍",
        description: { en: "Research with real sources — no hallucinations", gu: "સાચા સ્ત્રોતો સાથે રિસર્ચ — ખોટી માહિતી નહીં" },
        free: true
      },
      {
        name: "Gamma",
        icon: "🎨",
        description: { en: "Create stunning presentations in minutes", gu: "મિનિટોમાં ભવ્ય પ્રેઝન્ટેશન બનાવો" },
        free: true
      }
    ],
    bonusTitle: {
      en: "Bonus: Creative AI Tools",
      gu: "બોનસ: ક્રિએટિવ AI ટૂલ્સ"
    },
    bonusTools: ["Midjourney", "Suno", "Runway", "ElevenLabs", "HeyGen", "Lovable"]
  },

  mentor: {
    eyebrow: {
      en: "Your Mentor",
      gu: "તમારા મેન્ટર"
    },
    name: {
      en: "Tejas Chhatrala",
      gu: "તેજસ છત્રાળા"
    },
    credentials: {
      en: "Certified by Google, Microsoft & Oracle",
      gu: "Google, Microsoft અને Oracle દ્વારા પ્રમાણિત"
    },
    quote: {
      en: "I saw Gujarat's students falling behind in the global AI race. I created AI Pathshala so every student — regardless of language or location — can learn AI the structured way.",
      gu: "મેં જોયું કે ગુજરાતના વિદ્યાર્થીઓ વૈશ્વિક AI રેસમાં પાછળ પડી રહ્યા છે. મેં AI Pathshala બનાવ્યું જેથી દરેક વિદ્યાર્થી — ભાષા કે સ્થાન ને ધ્યાનમાં લીધા વિના — AI ને સ્ટ્રક્ચર્ડ રીતે શીખી શકે."
    },
    certTitle: {
      en: "Certifications & Achievements",
      gu: "પ્રમાણપત્રો અને સિદ્ધિઓ"
    }
  },

  howItWorks: {
    eyebrow: {
      en: "How It Works",
      gu: "કેવી રીતે કામ કરે છે"
    },
    title: {
      en: "3 Simple Steps to\nStart Learning AI",
      gu: "AI શીખવા માટે\n3 સરળ પગલાં"
    },
    steps: [
      {
        title: { en: "Book Your Spot", gu: "તમારી સીટ બુક કરો" },
        description: {
          en: "Fill the form below with your name and WhatsApp number. We'll send you all the details on WhatsApp.",
          gu: "નીચે ફોર્મમાં તમારું નામ અને WhatsApp નંબર ભરો. અમે તમને WhatsApp પર બધી વિગતો મોકલીશું."
        }
      },
      {
        title: { en: "Join Daily Zoom Class", gu: "ડેઈલી Zoom ક્લાસ જોઈન કરો" },
        description: {
          en: "Attend 1-hour live classes on Zoom daily. Learn, practice, and ask questions in real-time.",
          gu: "દરરોજ 1-કલાક લાઈવ Zoom ક્લાસ અટેન્ડ કરો. શીખો, પ્રેક્ટિસ કરો, અને સવાલ પૂછો."
        }
      },
      {
        title: { en: "Become AI-Confident", gu: "AI-કોન્ફિડન્ટ બનો" },
        description: {
          en: "In 30 days, your child masters AI tools for study, productivity, and creativity. Future-ready.",
          gu: "30 દિવસમાં, તમારું બાળક અભ્યાસ, પ્રોડક્ટિવિટી અને ક્રિએટિવિટી માટે AI ટૂલ્સ શીખી જાય છે."
        }
      }
    ]
  },

  testimonials: {
    eyebrow: {
      en: "What Parents & Students Say",
      gu: "વાલીઓ અને વિદ્યાર્થીઓ શું કહે છે"
    },
    title: {
      en: "Real Results.\nReal People.",
      gu: "સાચા પરિણામો.\nસાચા લોકો."
    },
    items: [
      {
        name: "Rohan Patel",
        initials: "RP",
        role: { en: "Class 10 Student", gu: "ધોરણ 10 વિદ્યાર્થી" },
        text: {
          en: "I used to hate Science. After learning how to use AI to visualize concepts, I scored 92% in my prelims. AI Pathshala changed everything.",
          gu: "મને વિજ્ઞાન ગમતું નહોતું. AI થી કોન્સેપ્ટ સમજ્યા પછી, મેં પ્રિલિમ્સમાં 92% મેળવ્યા. AI Pathshala એ બધું બદલ્યું."
        }
      },
      {
        name: "Priya Shah",
        initials: "PS",
        role: { en: "Commerce Student", gu: "કોમર્સ વિદ્યાર્થી" },
        text: {
          en: "Accounts was impossible for me. Now I use AI to explain journal entries in Gujarati. My confidence is sky high.",
          gu: "એકાઉન્ટ્સ મારા માટે અશક્ય હતું. હવે હું AI થી આમનોંધ ગુજરાતીમાં સમજું છું. મારો આત્મવિશ્વાસ ખૂબ વધ્યો."
        }
      },
      {
        name: "Rajesh Kumar",
        initials: "RK",
        role: { en: "Parent", gu: "વાલી" },
        text: {
          en: "I was worried AI would distract my son. Tejas Sir taught him to use it for learning. He now studies independently and I'm proud of him.",
          gu: "મને ચિંતા હતી કે AI બાળકને ભટકાવશે. તેજસ સરે ભણવા માટે AI ઉપયોગ શીખવ્યો. હવે તે જાતે ભણે છે."
        }
      },
      {
        name: "Meena Desai",
        initials: "MD",
        role: { en: "Parent", gu: "વાલી" },
        text: {
          en: "My daughter creates her own study notes using AI now. Her teachers are impressed. Best ₹3,999 I ever invested.",
          gu: "મારી દીકરી હવે AI થી પોતાની સ્ટડી નોટ્સ બનાવે છે. તેના શિક્ષકો પ્રભાવિત છે. ₹3,999 નું શ્રેષ્ઠ રોકાણ."
        }
      }
    ]
  },

  faq: {
    eyebrow: {
      en: "Common Questions",
      gu: "સામાન્ય પ્રશ્નો"
    },
    title: {
      en: "Everything You\nNeed to Know",
      gu: "તમારે જાણવું જોઈએ\nબધું જ"
    },
    items: [
      {
        question: { en: "Is this safe? Will my child learn to cheat?", gu: "શું આ સુરક્ષિત છે? મારું બાળક ચીટિંગ તો નહીં શીખે?" },
        answer: {
          en: "Absolutely not. Our #1 principle is ethical AI use. We teach students to use AI as a learning companion — to understand concepts better, create study materials, and learn independently. Not to copy homework.",
          gu: "બિલકુલ નહીં. અમારો #1 સિદ્ધાંત નૈતિક AI ઉપયોગ છે. અમે વિદ્યાર્થીઓને AI ને શીખવાના સાથી તરીકે ઉપયોગ કરવાનું શીખવીએ છીએ — કોન્સેપ્ટ સમજવા, સ્ટડી મટીરિયલ બનાવવા, અને સ્વતંત્ર રીતે શીખવા માટે."
        }
      },
      {
        question: { en: "What age group is this for?", gu: "આ કઈ ઉંમર માટે છે?" },
        answer: {
          en: "Standard 8 to College students (approx. age 13-22). This is the ideal age where students can grasp AI concepts and immediately apply them to their studies and projects.",
          gu: "ધોરણ 8 થી કૉલેજ સુધીના વિદ્યાર્થીઓ (આશરે 13-22 વર્ષ). આ ઉંમરના વિદ્યાર્થીઓ AI કોન્સેપ્ટ સમજી શકે અને તરત અભ્યાસ-પ્રોજેક્ટમાં વાપરી શકે."
        }
      },
      {
        question: { en: "Do I need a laptop? Will a phone work?", gu: "શું લેપટોપ જરૂરી છે? ફોન ચાલશે?" },
        answer: {
          en: "A laptop is recommended for the best experience, but everything works on a smartphone too. All you need is a device with internet connection. No expensive equipment required.",
          gu: "શ્રેષ્ઠ અનુભવ માટે લેપટોપ સારું, પણ સ્માર્ટફોન પર પણ બધું ચાલે. ફક્ત ઈન્ટરનેટ કનેક્શન જોઈએ. કોઈ મોંઘા સાધનો જરૂરી નથી."
        }
      },
      {
        question: { en: "Are the AI tools paid? Any hidden costs?", gu: "AI ટૂલ્સ પેઈડ છે? કોઈ છુપા ખર્ચ?" },
        answer: {
          en: "No hidden costs. All AI tools we teach (ChatGPT, Gemini, NotebookLM, Perplexity, Gamma) have free tiers that are more than enough for student usage. Zero extra subscriptions needed.",
          gu: "કોઈ છુપા ખર્ચ નથી. અમે જે AI ટૂલ્સ શીખવીએ (ChatGPT, Gemini, NotebookLM, Perplexity, Gamma) બધાના ફ્રી વર્ઝન છે, વિદ્યાર્થીઓ માટે પૂરતા. કોઈ વધારાના સબ્સ્ક્રિપ્શનની જરૂર નથી."
        }
      },
      {
        question: { en: "What if my child misses a class?", gu: "જો મારું બાળક ક્લાસ ચૂકે તો?" },
        answer: {
          en: "All sessions are recorded. Your child can watch the recording and catch up at their own pace.",
          gu: "બધા સેશન રેકોર્ડ થાય છે. તમારું બાળક રેકોર્ડિંગ જોઈને પોતાની ગતિએ શીખી શકે."
        }
      },
      {
        question: { en: "My child doesn't know English well. Will this work?", gu: "મારા બાળકને અંગ્રેજી સારું નથી આવડતું. ચાલશે?" },
        answer: {
          en: "Yes! Classes are taught in Gujarati + English (bilingual). Tejas Sir explains everything in simple Gujarati first, then shows the English terms. No language barrier.",
          gu: "હા! ક્લાસ ગુજરાતી + અંગ્રેજી (દ્વિભાષી) માં શીખવાય છે. તેજસ સર પહેલા સરળ ગુજરાતીમાં સમજાવે, પછી અંગ્રેજી ટર્મ્સ બતાવે. કોઈ ભાષાની અડચણ નહીં."
        }
      },
      {
        question: { en: "Is this a coding course?", gu: "આ કોડિંગ કોર્સ છે?" },
        answer: {
          en: "No. This is NOT a coding or programming course. We teach how to use AI tools effectively — typing prompts, creating content, researching, studying smarter. No coding knowledge needed.",
          gu: "ના. આ કોડિંગ કોર્સ નથી. અમે AI ટૂલ્સ અસરકારક રીતે વાપરવાનું શીખવીએ છીએ — પ્રોમ્પ્ટ ટાઈપ કરવું, કન્ટેન્ટ બનાવવું, રિસર્ચ, સ્માર્ટ સ્ટડી. કોઈ કોડિંગ જ્ઞાન જરૂરી નથી."
        }
      },
      {
        question: { en: "Why ₹3,999? Is it worth it?", gu: "₹3,999 — શું વળતર મળશે?" },
        answer: {
          en: "Compare: one month of private tuition costs ₹2,000-5,000 and teaches one subject. AI Pathshala teaches a lifelong skill in 30 days — the ability to learn anything faster using AI. Your child will use these skills for the rest of their academic and professional career.",
          gu: "વિચારો: એક મહિનાનું પ્રાઈવેટ ટ્યુશન ₹2,000-5,000 — અને એક જ વિષય. AI Pathshala 30 દિવસમાં આજીવન કૌશલ્ય શીખવે — AI થી ગમે તે ઝડપથી શીખવાની ક્ષમતા. આ સ્કિલ આખી કારકિર્દી કામ લાગશે."
        }
      }
    ]
  },

  cta: {
    eyebrow: {
      en: "Enroll Now",
      gu: "હવે નોંધણી કરો"
    },
    title: {
      en: "Give Your Child the\nAI Advantage Today.",
      gu: "તમારા બાળકને આજે\nAI ફાયદો આપો."
    },
    subtitle: {
      en: "The April 2026 batch is filling up. Secure your child's spot now.",
      gu: "એપ્રિલ 2026 બેચ ભરાઈ રહ્યો છે. તમારા બાળકની સીટ હમણાં બુક કરો."
    },
    price: "₹3,999",
    originalPrice: "",
    features: [
      { en: "30 days of live Zoom classes", gu: "30 દિવસ લાઈવ Zoom ક્લાસ" },
      { en: "Daily 1-hour sessions", gu: "દરરોજ 1-કલાક સેશન" },
      { en: "Gujarati + English instruction", gu: "ગુજરાતી + અંગ્રેજી" },
      { en: "10+ AI tools mastered", gu: "10+ AI ટૂલ્સ" },
      { en: "Recordings of all classes", gu: "બધા ક્લાસના રેકોર્ડિંગ" },
      { en: "Completion certificate", gu: "સમાપ્તિ પ્રમાણપત્ર" },
      { en: "No extra subscriptions needed", gu: "કોઈ વધારાના ખર્ચ નહીં" }
    ],
    buttonText: {
      en: "Enroll via WhatsApp →",
      gu: "WhatsApp થી એનરોલ કરો →"
    },
    formTitle: {
      en: "Secure Your Spot",
      gu: "તમારી સીટ બુક કરો"
    },
    formSubtitle: {
      en: "Fill this form and we'll reach you on WhatsApp with all details.",
      gu: "ફોર્મ ભરો, અમે WhatsApp પર બધી વિગતો મોકલીશું."
    },
    guarantee: {
      en: "100% Secure. Your information stays private.",
      gu: "100% સલામત. તમારી માહિતી ખાનગી રહેશે."
    }
  },

  footer: {
    tagline: {
      en: "Gujarat's First AI Learning Program for Students",
      gu: "ગુજરાતનો પ્રથમ AI લર્નિંગ પ્રોગ્રામ"
    },
    disclaimer: {
      en: "Results may vary. This program teaches AI tools for educational purposes. We do not encourage plagiarism or academic dishonesty. Students are guided to use AI ethically for learning and understanding.",
      gu: "પરિણામો બદલાઈ શકે. આ પ્રોગ્રામ શૈક્ષણિક હેતુ માટે AI ટૂલ્સ શીખવે છે. અમે ચોરી કે શૈક્ષણિક અપ્રમાણિકતાને પ્રોત્સાહન આપતા નથી."
    }
  }
};
