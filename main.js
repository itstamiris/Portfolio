const buttonDarkMode = document.querySelector(".dark-mode-btn");

// 1. Dark mode examination on System Settings
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    buttonDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add('dark');
}

// 2. Dark mode examination
if (localStorage.getItem('darkMode') === 'dark') {
    buttonDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add('dark');
} else if (localStorage.getItem('darkMode') === 'light') {
    buttonDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove('dark');
}

// Auto SS changing
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
    const newColorScheme = event.matches ? 'dark' : 'light';

    if(newColorScheme === 'dark') {
        buttonDarkMode.classList.add("dark-mode-btn--active");
        document.body.classList.add('dark');  
        localStorage.setItem('darkMode', 'dark');
    } else {
        buttonDarkMode.classList.remove("dark-mode-btn--active");
        document.body.classList.remove('dark');
        localStorage.setItem('darkMode', 'light');
    }
})

//  Dark mode turning on
buttonDarkMode.onclick = function () {
    buttonDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem('darkMode', 'dark');
    } else {
        localStorage.setItem('darkMode', 'light');
    }
}

