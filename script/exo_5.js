window.addEventListener('load', () => {

    const inputSearch = document.querySelector('input')
    const liste = document.querySelectorAll('section>ul>li')

    inputSearch.addEventListener('input', () => {
        const value = inputSearch.value;
        for (const li of liste) {
            li.classList.remove('d-none');
            if (value.length >= 2) {
                if (!li.innerHTML.toLowerCase().includes(value.toLowerCase())) {
                    li.classList.add('d-none');

                }
            }
        }
    });

});