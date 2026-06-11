
window.addEventListener('load', () => {
    const button = document.querySelector('.btn-dark');
    const body = document.body;

    if (!button && !body) return;

    button.addEventListener('click', () => {
        body.classList.toggle('bg-dark');
        body.classList.toggle('text-light');

        if (body.classList.contains('bg-dark')) {
            button.innerHTML = 'Mode clair ' + '<i class="fa-solid fa-sun"></i>';
        } else {
            button.innerHTML = 'Mode sombre ' + '<i class="fa-solid fa-moon"></i>';
        }
    });
});