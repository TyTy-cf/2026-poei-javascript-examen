function clearSearch() {
    const list = document.querySelectorAll('section ul li');

    if (list) {
        for (const item of list) {
            item.classList.remove('d-none');
        }
    }
}

function search(input) {
    if (input === '') clearSearch();
    const list = document.querySelectorAll('section ul li');

    if (list) {
        for (const item of list) {
            if (!item.textContent.includes(input)) {
                item.classList.add('d-none')
            } else item.classList.remove('d-none');
        }
    }
}

window.addEventListener('load', () => {
    const input = document.querySelector('input');

    if (input) {
        input.addEventListener('input', () => {
            search(input.value);
        })
    }
})