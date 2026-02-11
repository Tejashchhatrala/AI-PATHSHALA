const ITERATIONS = 1000000;

function runBenchmark() {
  console.log(`Running benchmark with ${ITERATIONS} iterations...`);

  // Baseline: Recreating the array in every render (simulated)
  const startAllocation = performance.now();
  for (let i = 0; i < ITERATIONS; i++) {
    const faqs = [
      {
        q: { en: "Tejas Sir, do I need a laptop?", gu: "તેજસ સર, શું મારે લેપટોપની જરૂર પડશે?" },
        a: { en: "No! I designed this specifically for mobile users. 90% of my students use just their phone.", gu: "ના! મેં આ ખાસ મોબાઈલ યુઝર્સ માટે બનાવ્યું છે. મારા 90% વિદ્યાર્થીઓ માત્ર ફોનનો ઉપયોગ કરે છે." }
      },
      {
        q: { en: "My English is weak. Can I really do this?", gu: "મારું અંગ્રેજી નબળું છે. શું હું ખરેખર શીખી શકીશ?" },
        a: { en: "Yes. That is exactly why I built AI Pathshala. I teach you how to bypass the English barrier completely.", gu: "હા. એટલે જ તો મેં AI પાઠશાળા બનાવી છે. હું તમને શીખવીશ કે અંગ્રેજીના ડરને કેવી રીતે દૂર કરવો." }
      },
      {
        q: { en: "Will my parents think this is cheating?", gu: "શું મારા વાલીઓને લાગશે કે આ ચીટિંગ છે?" },
        a: { en: "Not at all. I give you an 'Ethics Guide' to show them. Once they see your marks improve, they will support you.", gu: "જરાય નહીં. હું તમને બતાવવા માટે 'એથિક્સ ગાઈડ' આપીશ. જ્યારે તેઓ તમારા માર્ક્સ સુધરતા જોશે, ત્યારે તેઓ તમને સપોર્ટ કરશે." }
      },
      {
        q: { en: "What if I miss your live class?", gu: "જો હું તમારો લાઈવ ક્લાસ ચૂકી જાઉં તો?" },
        a: { en: "Don't worry. I record every session. You can watch me anytime on the app.", gu: "ચિંતા ન કરો. હું દરેક સેશન રેકોર્ડ કરું છું. તમે મને એપ પર ગમે ત્યારે જોઈ શકો છો." }
      }
    ];
    // Use it to prevent optimization from completely removing it
    if (faqs.length === 0) console.log('error');
  }
  const endAllocation = performance.now();
  const allocationTime = endAllocation - startAllocation;

  // Optimized: Static reference
  const staticFaqs = [
    {
      q: { en: "Tejas Sir, do I need a laptop?", gu: "તેજસ સર, શું મારે લેપટોપની જરૂર પડશે?" },
      a: { en: "No! I designed this specifically for mobile users. 90% of my students use just their phone.", gu: "ના! મેં આ ખાસ મોબાઈલ યુઝર્સ માટે બનાવ્યું છે. મારા 90% વિદ્યાર્થીઓ માત્ર ફોનનો ઉપયોગ કરે છે." }
    },
    {
      q: { en: "My English is weak. Can I really do this?", gu: "મારું અંગ્રેજી નબળું છે. શું હું ખરેખર શીખી શકીશ?" },
      a: { en: "Yes. That is exactly why I built AI Pathshala. I teach you how to bypass the English barrier completely.", gu: "હા. એટલે જ તો મેં AI પાઠશાળા બનાવી છે. હું તમને શીખવીશ કે અંગ્રેજીના ડરને કેવી રીતે દૂર કરવો." }
    },
    {
      q: { en: "Will my parents think this is cheating?", gu: "શું મારા વાલીઓને લાગશે કે આ ચીટિંગ છે?" },
      a: { en: "Not at all. I give you an 'Ethics Guide' to show them. Once they see your marks improve, they will support you.", gu: "જરાય નહીં. હું તમને બતાવવા માટે 'એથિક્સ ગાઈડ' આપીશ. જ્યારે તેઓ તમારા માર્ક્સ સુધરતા જોશે, ત્યારે તેઓ તમને સપોર્ટ કરશે." }
    },
    {
      q: { en: "What if I miss your live class?", gu: "જો હું તમારો લાઈવ ક્લાસ ચૂકી જાઉં તો?" },
      a: { en: "Don't worry. I record every session. You can watch me anytime on the app.", gu: "ચિંતા ન કરો. હું દરેક સેશન રેકોર્ડ કરું છું. તમે મને એપ પર ગમે ત્યારે જોઈ શકો છો." }
    }
  ];

  const startStatic = performance.now();
  for (let i = 0; i < ITERATIONS; i++) {
    const faqs = staticFaqs;
    if (faqs.length === 0) console.log('error');
  }
  const endStatic = performance.now();
  const staticTime = endStatic - startStatic;

  console.log(`\nResults:`);
  console.log(`Allocation Time: ${allocationTime.toFixed(4)}ms`);
  console.log(`Static Reference Time: ${staticTime.toFixed(4)}ms`);
  console.log(`Improvement: ${((allocationTime - staticTime) / allocationTime * 100).toFixed(2)}%`);
  console.log(`Absolute difference: ${(allocationTime - staticTime).toFixed(4)}ms for ${ITERATIONS} iterations`);
  console.log(`Approx. saving per render: ${((allocationTime - staticTime) / ITERATIONS * 1000).toFixed(6)} microseconds`);
}

runBenchmark();
