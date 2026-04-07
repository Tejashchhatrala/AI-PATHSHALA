import React, { createContext, useContext, useEffect, useRef, useCallback } from 'react';

interface ScrollRevealContextType {
  register: (element: HTMLElement | null) => void;
}

const ScrollRevealContext = createContext<ScrollRevealContextType | null>(null);

export const useScrollReveal = () => {
  const context = useContext(ScrollRevealContext);
  if (!context) {
    throw new Error('useScrollReveal must be used within a ScrollRevealProvider');
  }
  return context.register;
};

export const ScrollRevealProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Keep track of elements to observe before the observer is initialized (or if it's already running)
  const elementsToObserve = useRef<Set<HTMLElement>>(new Set());

  const initObserver = useCallback(() => {
    if (observerRef.current) return observerRef.current;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // We could unobserve here to avoid triggering the callback again,
            // but the original logic didn't, so we'll keep it simple for now.
            // observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    return observerRef.current;
  }, []);

  const register = useCallback((element: HTMLElement | null) => {
    if (element) {
      elementsToObserve.current.add(element);
      const observer = initObserver();
      observer.observe(element);
    }
  }, [initObserver]);

  // Clean up observer on unmount
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      elementsToObserve.current.clear();
    };
  }, []);

  return (
    <ScrollRevealContext.Provider value={{ register }}>
      {children}
    </ScrollRevealContext.Provider>
  );
};
