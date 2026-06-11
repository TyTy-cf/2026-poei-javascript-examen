
window.addEventListener('load', () => {
    const ul = document.querySelector('section > ul');
    const input = document.querySelector('input[type="search"]');
    if (!ul && !input) return;

    const items = ul.querySelectorAll('li');

    input.addEventListener('input', () => {
        const value = input.value.toLowerCase();
        for (const item of items) {
            item.classList.remove('d-none');
            if (!item.textContent.toLowerCase().includes(value)) {
                item.classList.add('d-none');
            }
        }
    });
});