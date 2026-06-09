window.addEventListener('load', () => {
    const onglets = document.querySelectorAll('.nav-item')
    console.log(onglets)
    const tabContents = document.querySelectorAll('.tab-content> *')
    console.log(tabContents)

    onglets.forEach((value, index) => {
        value.addEventListener('click', () => {
            removeActive()
            value.classList.add('active')

            for (const tab of tabContents)
                tab.classList.remove('active', 'show')

            tabContents[index].classList.toggle('show')
            tabContents[index].classList.toggle('active')

        })
    })

    const removeActive = () => {
        for (const onglet of onglets) {
            onglet.querySelector('button').classList.remove('active')
            onglet.classList.remove('active')
        }
    }


})