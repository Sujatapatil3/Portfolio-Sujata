import { useCallback, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

/**
 * Manages dark/light theme, persisting the choice to localStorage and
 * respecting the user's OS preference on first visit.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = window.localStorage.getItem('portfolio-theme') as Theme | null;
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    document.body.classList.toggle('light', theme === 'light');
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggleTheme };
}
