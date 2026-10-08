export type Theme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'theme';

export const themeInitializerScript = `
(function () {
  var storedTheme = null;

  try {
    storedTheme = window.localStorage.getItem('${THEME_STORAGE_KEY}');
    storedTheme = storedTheme ? storedTheme.trim().toLowerCase() : null;
  } catch (_) {}

  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  var theme = storedTheme === 'light' || storedTheme === 'dark'
    ? storedTheme
    : prefersDark ? 'dark' : 'light';
  var root = document.documentElement;

  root.classList.remove('light', 'dark');
  root.classList.add(theme);
  root.style.colorScheme = theme;
})();
`;
