function toggleMode() {
    const main = document.querySelector('body');
    const btn = document.querySelector('button');
    const isDark = document.querySelector('bg-dark')

    if (main && btn) {
        if (isDark) {
            btn.textContent = "Mode sombre";
        } else btn.textContent = "Mode clair"
        main.classList.toggle('bg-dark');
        main.classList.toggle('text-light');
    }
}

window.addEventListener('load', () => {
    const btn = document.querySelector('button');

    if (btn) {
        btn.addEventListener('click', () => {
            toggleMode();
        })
    }
})