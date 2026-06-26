import { useRef, useState, useEffect } from 'react';

interface UseInViewOptions {
  threshold?: number;
  delay?: number;
}

/**
 * Fires once when the element enters the viewport.
 * Supports an optional delay (ms) before setting inView = true,
 * useful for staggered animation groups.
 */
export function useInView({ threshold = 0.15, delay = 0 }: UseInViewOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            const t = setTimeout(() => setInView(true), delay);
            obs.disconnect();
            return () => clearTimeout(t);
          }
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, delay]);

  return { ref, inView };
}
