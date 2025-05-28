'use client';

import { useEffect, useState, useCallback } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const getCurrentTheme = (): Theme => {
      try {
        let savedTheme = localStorage.getItem('theme');
        // Sanitize the theme value
        savedTheme = savedTheme ? savedTheme.trim().toLowerCase() : null;
        
        if (savedTheme === 'light' || savedTheme === 'dark') {
          return savedTheme as Theme;
        }
        
        // Clear invalid theme
        if (savedTheme) {
          localStorage.removeItem('theme');
        }
      } catch {
        // Silently handle localStorage errors
      }

      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const initialTheme = getCurrentTheme();
    setTheme(initialTheme);
    
    // Ensure DOM matches our state
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(initialTheme);
    
    setMounted(true);

    // Listen for system theme changes when no saved preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(newTheme);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      
      // Update the class on html element
      requestAnimationFrame(() => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(newTheme);
      });
      
      // Try to save to localStorage, but don't break if it fails
      try {
        localStorage.setItem('theme', newTheme);
      } catch {
        // Silently handle localStorage errors
      }
      
      return newTheme;
    });
  }, []);

  return { theme, toggleTheme, mounted };
}
