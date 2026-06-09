window.addEventListener("load", ()=> {
    const button = document.querySelector("button");
    const input = document.querySelector("input");
    const newListe = document.querySelector(".list-unstyled");
    console.log(newListe)
    button.addEventListener("click", ()=> {
        if (input.value === ""){
            alert("Champs vide")
        }
        const newTache = document.createElement("li");
        newListe.appendChild(newTache);
        newTache.innerText = input.value;
        input.value = "";
    })

})