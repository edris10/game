// Get current language
function getCurrentLanguage() {
    return localStorage.getItem('gameLanguage') || 'en';
}

// Apply language to page
function applyLanguageToPage() {
    const lang = getCurrentLanguage();
    document.body.setAttribute('dir', lang === 'ku' ? 'rtl' : 'ltr');
    
    document.querySelectorAll('[data-en], [data-ku]').forEach(element => {
        if (element.dataset[lang]) {
            if (element.tagName === 'OPTION') {
                element.textContent = element.dataset[lang];
            } else if (element.tagName === 'LABEL') {
                element.textContent = element.dataset[lang];
            } else {
                element.textContent = element.dataset[lang];
            }
        }
    });
}

// Change language and reload
function changeLanguage(lang) {
    localStorage.setItem('gameLanguage', lang);
    window.location.reload();
}