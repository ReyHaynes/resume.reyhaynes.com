"use strict";
function setTheme(newTheme) {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
}
(function () {
    try {
        var theme = null;
        try {
            theme = localStorage.getItem('theme');
            theme = theme ? theme.trim().toLowerCase() : null;
            if (theme !== 'light' && theme !== 'dark') {
                localStorage.removeItem('theme');
                theme = null;
            }
        }
        catch (_a) {
        }
        if (!theme) {
            theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            try {
                localStorage.setItem('theme', theme);
            }
            catch (_b) {
            }
        }
        setTheme(theme);
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
    catch (_c) {
        setTheme('light');
    }
})();
