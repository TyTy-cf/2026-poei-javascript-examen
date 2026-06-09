window.addEventListener('load',()=>{
    const container = document.querySelector('body')
    const btnDarkMode = document.createElement('button')
    btnDarkMode.classList.add('btn', 'btn-secondary')
    btnDarkMode.innerHTML='<span>Mode sombre</span> <i class="fa-solid fa-moon"></i>'
    btnDarkMode.classList.add('btn-theme')
    container.appendChild(btnDarkMode)


    btnDarkMode.addEventListener('click',()=>{
        container.classList.toggle('dark-mode')

        if(container.className.includes('dark'))
            btnDarkMode.innerHTML = '<span>Mode claire </span> <i class="fa-solid fa-sun"></i>'
        else
            btnDarkMode.innerHTML='<span>Mode sombre</span> <i class="fa-solid fa-moon"></i>'

    })
})