window.addEventListener('load',()=>{
    const input = document.querySelector('input.search-filter');
    const users = document.querySelectorAll('section>ul>li');
    if(!input || !users) return;
    input.addEventListener('input', () => {
        const value = input.value;
        for (let i = 0; i < users.length; i++) {
            users[i].classList.remove('d-none');
            if (value.length >= 2) {
                if (!users[i].innerHTML.toLowerCase().includes(value.toLowerCase())) {
                    users[i].classList.add('d-none');
                }
            }
        }
    })
})