'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    // Get initial theme
    const savedTheme = localStorage.getItem('theme')?.trim().toLowerCase() as 'light' | 'dark' || 'light';
    setTheme(savedTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (isChanging) return;
    
    setIsChanging(true);
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    
    // Update state and localStorage
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update HTML class
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    
    // Announce theme change for screen readers
    const announcement = `Switched to ${newTheme} theme`;
    const liveRegion = document.getElementById('aria-live-polite');
    if (liveRegion) {
      liveRegion.textContent = announcement;
    }
    
    // Reset changing state after transition
    setTimeout(() => setIsChanging(false), 300);
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      disabled={isChanging}
      className="p-2 rounded hover:bg-black/[.05] transition-colors cursor-pointer disabled:cursor-not-allowed print:hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      aria-pressed={theme === 'dark'}
      style={{ color: 'var(--text-primary)' }}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" aria-hidden="true" />
      ) : (
        <Moon className="w-5 h-5" aria-hidden="true" />
      )}
      <span className="sr-only">
        {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
    </button>
  );
}
