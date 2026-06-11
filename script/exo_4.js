
window.addEventListener('load', () => {
   const tabLinks = document.querySelectorAll('[data-bs-toggle="tab"]');
    for (const tabLink of tabLinks) {
        const linkedElement = document.querySelector(tabLink.getAttribute('data-bs-target'));
        if (linkedElement) {
            tabLink.addEventListener('click', () => {
                tabLink.classList.add('active');
                linkedElement.classList.add('show');
                linkedElement.classList.add('active');
                tabLink.setAttribute('aria-selected', 'true');

                for (const other of tabLinks) {
                    if (other === tabLink) continue;
                    other.classList.remove('active');
                    const otherElement = document.querySelector(other.getAttribute('data-bs-target'));
                    otherElement.classList.remove('show');
                    otherElement.classList.remove('active');
                    other.setAttribute('aria-selected', 'false');
                }
            });
        }
    }
});