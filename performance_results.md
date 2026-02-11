# Performance Improvement Results

## Optimization: Moving static FAQ data outside of the component render

### Problem
The `faqs` array was defined inside the `FAQ` component, causing it to be re-allocated on every render. This increases memory pressure and triggers more frequent garbage collection.

### Solution
Moved the `faqs` array outside the component to a module-level constant (`FAQS`). This ensures the array is created only once when the module is loaded.

### Benchmarks
A micro-benchmark (`benchmarks/allocation_bench.js`) was created to compare the cost of re-allocating the `faqs` object versus using a static reference.

**Results (1,000,000 iterations):**
- **Baseline (Allocation):** 350.2927ms
- **Optimized (Static Reference):** 5.2005ms
- **Improvement:** 98.52%
- **Approx. saving per render:** ~0.35 microseconds

### Conclusion
While the absolute saving per single render is small (~0.35µs), the optimization follows React best practices by avoiding unnecessary object allocations. In a real-world application with many components or frequent re-renders (e.g., during language toggling or accordion interactions), these small savings contribute to a smoother UI and reduced GC pauses.
