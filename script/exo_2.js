function createElementByTagName(tagName, ...classList) {
    const el = document.createElement(tagName);
    for (const classItem of classList) {
        el.classList.add(classItem);
    }
    return el;

}


window.addEventListener('load', () => {

    const allPage = document.querySelector('body')
    const textBlock = document.querySelector('div')

    const button = createElementByTagName('button', 'btn', 'btn-primary', 'm-4', 'text-center')
    button.innerText = 'Mode Sombre'
    textBlock.after(button)


    button.addEventListener('click', () => {
        allPage.classList.toggle('bg-dark');
        allPage.classList.toggle('text-light');
        button.innerText = 'Mode Clair'
    })


});