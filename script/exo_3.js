window.addEventListener('load',()=> {
    const section = document.querySelector("section");
    const input = document.createElement("input");
    input.type='text';
    const btnAjouter = document.createElement("button");
    btnAjouter.innerText = 'Ajouter';
    const liste = document.querySelector('ul');
    if (!section || !liste)return;
    section.appendChild(input);
    input.after(btnAjouter);
    btnAjouter.addEventListener('click',()=>{
        let inputValue = input.value;
        if (inputValue === ''){
            alert("Impossible d'ajouter un champ vide")
        } else {
            const nouveau = document.createElement('li');
            nouveau.innerText = inputValue;
            liste.appendChild(nouveau);
            input.value='';
        }
    })
})