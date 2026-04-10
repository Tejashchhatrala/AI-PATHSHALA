import { performance } from 'perf_hooks';

// Mock content
const items = [
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
];

const iterations = 1000000;

function benchmarkUnmemoized() {
  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
    const duplicated = [...items, ...items];
    // Simulate map
    duplicated.forEach(item => {
        const x = item.name;
    });
  }
  return performance.now() - start;
}

const memoizedItems = [...items, ...items];

function benchmarkMemoized() {
  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
    const duplicated = memoizedItems;
    // Simulate map
    duplicated.forEach(item => {
        const x = item.name;
    });
  }
  return performance.now() - start;
}

console.log('Running benchmark for redundant array creation...');
const unmemoizedTime = benchmarkUnmemoized();
const memoizedTime = benchmarkMemoized();

console.log(`Unmemoized (Created on each iteration): ${unmemoizedTime.toFixed(4)}ms`);
console.log(`Memoized (Reused): ${memoizedTime.toFixed(4)}ms`);
console.log(`Improvement: ${((unmemoizedTime - memoizedTime) / unmemoizedTime * 100).toFixed(2)}%`);
