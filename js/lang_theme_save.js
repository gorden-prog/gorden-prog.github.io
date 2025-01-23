const langToggle = document.getElementById('lang-toggle');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const langElements = document.querySelectorAll('[data-text-ru]');
const computerImage = document.getElementById('computer-image');

let currentLang = localStorage.getItem('lang') || 'ru';
let currentTheme = localStorage.getItem('theme') || 'light';

function updateText(lang) {
    langElements.forEach(element => {
        const ruText = element.getAttribute('data-text-ru');
        const enText = element.getAttribute('data-text-en');
            element.childNodes[0].textContent = lang === 'ru' ? ruText : enText;
        });
}

function setTheme(theme){
    if (theme === 'dark'){
        body.classList.add('dark-theme');
        themeToggle.textContent =  'Светлая тема';
        if (computerImage) {
        computerImage.src = 'img/computer-dark.png';
        }
    } else {
        body.classList.remove('dark-theme');
        themeToggle.textContent =  'Темная тема';
        if (computerImage) {
        computerImage.src = 'img/computer-light.png';
        }
    }
    localStorage.setItem('theme',theme)
}


// Изменение текста и темы

langToggle.textContent = currentLang === 'ru' ? 'Русский' : 'English';
langToggle.setAttribute('data-lang',currentLang);
updateText(currentLang);
setTheme(currentTheme);

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    localStorage.setItem('lang', currentLang);
    langToggle.textContent = currentLang === 'ru' ? 'Русский' : 'English';
    langToggle.setAttribute('data-lang',currentLang);
    updateText(currentLang);
});

themeToggle.addEventListener('click', () => {
    currentTheme = body.classList.contains('dark-theme') ? 'light' : 'dark';
    setTheme(currentTheme);
});
