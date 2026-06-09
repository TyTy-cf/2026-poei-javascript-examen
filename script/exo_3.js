function summonIB() {
    const section = document.querySelector('section');

    if (section) {
        const inputBox = document.createElement('input');
        const button = document.createElement('button');

        inputBox.type = "text";
        inputBox.placeholder = "Faire les courses"
        button.type = "button";
        button.textContent = "Ajouter";

        section.appendChild(inputBox);
        inputBox.after(button);

        return [inputBox, button];
    }
}

function addTask(task) {
    if (task === '') {
        alert("Est ce que tu pourrais saisir quelque chose dans la boîte, s'il te plaît..?");
        return "";
    }
    const list = document.querySelector('section ul');

    if (list) {
        const item = document.createElement('li');

        item.classList.add('ms-3');
        item.textContent = task;

        list.appendChild(item);
        
        return "";
    }
}

window.addEventListener('load', () => {
    const items = summonIB();
    items[1].addEventListener('click', () => {
        items[0].value = addTask(items[0].value);
    })
})