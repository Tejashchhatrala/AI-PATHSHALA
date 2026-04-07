import React, { createContext, useContext, useEffect, useRef, useCallback, ReactNode } from 'react';

// Create context for scroll reveal
const ScrollRevealContext = createContext<{
  register: (node: Element) => void;
  unregister: (node: Element) => void;
} | null>(null);

export const ScrollRevealProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<Set<Element>>(new Set());

  // Initialize observer only when needed
  const getObserver = useCallback(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              // Optionally unobserve after revealing to prevent triggering again if we only want it once
              // observerRef.current?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );
    }
    return observerRef.current;
  }, []);

  const register = useCallback((node: Element) => {
    if (!elementsRef.current.has(node)) {
      elementsRef.current.add(node);
      getObserver().observe(node);
    }
  }, [getObserver]);

  const unregister = useCallback((node: Element) => {
    if (elementsRef.current.has(node)) {
      elementsRef.current.delete(node);
      observerRef.current?.unobserve(node);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, []);

  return (
    <ScrollRevealContext.Provider value={{ register, unregister }}>
      {children}
    </ScrollRevealContext.Provider>
  );
};

export const useScrollReveal = () => {
  const context = useContext(ScrollRevealContext);
  const nodeRef = useRef<Element | null>(null);

  if (!context) {
    // If not used within provider, return a dummy ref callback
    return useCallback((node: Element | null) => {}, []);
  }

  // Return a callback ref that components can attach to elements
  return useCallback((node: Element | null) => {
    if (node) {
      nodeRef.current = node;
      context.register(node);
    } else {
      if (nodeRef.current) {
        context.unregister(nodeRef.current);
        nodeRef.current = null;
      }
    }
  }, [context]);
};
