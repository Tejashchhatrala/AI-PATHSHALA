import { performance } from 'perf_hooks';

const iterations = 10000000;

function benchmarkUnmemoized() {
  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
    // Simulating component render where function is recreated
    const scrollToEnroll = (e) => {
        // Mock scrollToElement behavior
        if (e && e.preventDefault) e.preventDefault();
    };
    // Simulate passing it or calling it
    scrollToEnroll({ preventDefault: () => {} });
  }
  return performance.now() - start;
}

// Simulating memoized version (creation happens once)
const memoizedScrollToEnroll = (e) => {
    if (e && e.preventDefault) e.preventDefault();
};

function benchmarkMemoized() {
  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
    const scrollToEnroll = memoizedScrollToEnroll;
    scrollToEnroll({ preventDefault: () => {} });
  }
  return performance.now() - start;
}

console.log('Running benchmark for function recreation vs memoization...');
const unmemoizedTime = benchmarkUnmemoized();
const memoizedTime = benchmarkMemoized();

console.log(`Unmemoized (Recreated): ${unmemoizedTime.toFixed(4)}ms`);
console.log(`Memoized (Reused): ${memoizedTime.toFixed(4)}ms`);
console.log(`Improvement: ${((unmemoizedTime - memoizedTime) / unmemoizedTime * 100).toFixed(2)}%`);
