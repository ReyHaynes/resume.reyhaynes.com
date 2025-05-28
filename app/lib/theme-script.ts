function setTheme(newTheme: string) {
  // Clear any existing theme classes
  document.documentElement.classList.remove('light', 'dark');
  // Add the new theme class
  document.documentElement.classList.add(newTheme);
}

// Initialize theme
(function() {
  try {
    // First try to get theme from localStorage
    let theme = null;
    try {
      theme = localStorage.getItem('theme');
      theme = theme ? theme.trim().toLowerCase() : null;
      
      if (theme !== 'light' && theme !== 'dark') {
        localStorage.removeItem('theme');
        theme = null;
      }
    } catch {
      // Silently handle localStorage errors
    }

    // If no valid theme in localStorage, use system preference
    if (!theme) {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      try {
        localStorage.setItem('theme', theme);
      } catch {
        // Silently handle localStorage errors
      }
    }

    setTheme(theme);

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  } catch {
    // Fallback to light theme if something goes wrong
    setTheme('light');
  }
})();
