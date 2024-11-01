const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    const themeIcon = document.getElementById('theme-icon');
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.innerHTML = '<path d="M12 2a10 10 0 1 0 6.32 18.32A8 8 0 1 1 14 4a9.99 9.99 0 0 0-2-2z" fill="currentColor"/>';
    } else {
        themeIcon.innerHTML = `
            <circle cx="12" cy="12" r="5" fill="currentColor"></circle>
            <line x1="12" y1="2" x2="12" y2="5" stroke="currentColor" stroke-width="2"></line>
            <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" stroke-width="2"></line>
            <line x1="2" y1="12" x2="5" y2="12" stroke="currentColor" stroke-width="2"></line>
            <line x1="19" y1="12" x2="22" y2="12" stroke="currentColor" stroke-width="2"></line>
        `;
    }
});
