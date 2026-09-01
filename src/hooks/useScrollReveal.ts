import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref to attach to an element and a boolean that flips to true
 * once the element scrolls into view. Used to drive Framer Motion's
 * `animate` prop for scroll-triggered reveals without re-running on every
 * scroll tick (IntersectionObserver only fires on threshold crossings).
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
