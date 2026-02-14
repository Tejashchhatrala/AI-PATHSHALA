import { performance } from 'perf_hooks';

const iterations = 1000000;
const lang = 'EN';
const name = 'test';
const value = '1234567890';

// Case 1: Inline function creation (Current)
function benchmarkInline() {
  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
    // Simulating component render where function is created
    const validateField = (name, value) => {
      let error = '';
      if (name === 'name' && !value.trim()) {
        error = lang === 'EN' ? 'Name is required' : 'નામ લખવું જરૂરી છે';
      }
      if (name === 'phone') {
        if (!value.trim()) {
          error = lang === 'EN' ? 'WhatsApp number is required' : 'વોટ્સએપ નંબર લખવો જરૂરી છે';
        } else if (value.length < 10) {
          error = lang === 'EN' ? 'Invalid phone number' : 'અમાન્ય મોબાઈલ નંબર';
        }
      }
      return error;
    };
    validateField(name, value);
  }
  return performance.now() - start;
}

// Case 2: Static function (Optimized)
const staticValidateField = (name, value, lang) => {
  let error = '';
  if (name === 'name' && !value.trim()) {
    error = lang === 'EN' ? 'Name is required' : 'નામ લખવું જરૂરી છે';
  }
  if (name === 'phone') {
    if (!value.trim()) {
      error = lang === 'EN' ? 'WhatsApp number is required' : 'વોટ્સએપ નંબર લખવો જરૂરી છે';
    } else if (value.length < 10) {
      error = lang === 'EN' ? 'Invalid phone number' : 'અમાન્ય મોબાઈલ નંબર';
    }
  }
  return error;
};

function benchmarkStatic() {
  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
    staticValidateField(name, value, lang);
  }
  return performance.now() - start;
}

console.log('Running benchmark...');
const inlineTime = benchmarkInline();
const staticTime = benchmarkStatic();

console.log(`Inline (Current): ${inlineTime.toFixed(4)}ms`);
console.log(`Static (Optimized): ${staticTime.toFixed(4)}ms`);
console.log(`Improvement: ${((inlineTime - staticTime) / inlineTime * 100).toFixed(2)}%`);
