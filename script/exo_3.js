
function createElementByTagName(tagName, ...classList) {
    const el = document.createElement(tagName);
    for (const classItem of classList) {
        el.classList.add(classItem);
    }
    return el;

}

window.addEventListener('load', () => {

    const newTask = document.querySelector('button');
    const input = document.querySelector('input')
    const section = document.querySelector('section>ul')

    newTask.addEventListener('click', (event) => {
        event.preventDefault();
        const value = input.value
        const toDo = createElementByTagName('li', 'text-to-do');
        section.appendChild(toDo)
        toDo.innerHTML = value

        if (value === '') {
            alert("Remplir l'input pour ajouter")
        }

    })


})
