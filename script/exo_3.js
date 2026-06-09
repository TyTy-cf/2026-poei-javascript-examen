


window.addEventListener('load', () => {

    const newTask = document.querySelector('section>div');
    const section = document.querySelector('section>ul')

    newTask.addEventListener('submit', (event) => {
        const value = newTask.value
        console.log(value)

    })


})
