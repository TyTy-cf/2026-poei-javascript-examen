window.addEventListener('load',()=>{
    const ulSection  = document.querySelector('section > ul')
    const searchBar = document.createElement('input')
    searchBar.type='text'
    searchBar.placeholder = 'Search...'

    ulSection.before(searchBar)

    searchBar.addEventListener('input',()=>{

        const list = ulSection.querySelectorAll('li')
        const value = searchBar.value.toLowerCase()
        console.log(value)
        for(const li of list)
        {
            const innerFormat = li.innerHTML.toLowerCase()
            if(!innerFormat.includes(value))
                li.classList.add('d-none')
            else
                li.classList.remove('d-none')
        }


    })
})