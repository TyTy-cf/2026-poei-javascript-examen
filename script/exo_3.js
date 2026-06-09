window.addEventListener("load", () => {
    const input = document.querySelector("input");
    const button = document.querySelector("button");
    const list = document.querySelector("section ul");

    button.addEventListener("click", () => {
        const text = input.value.trim();
        if (text === "") {
            alert("Veuillez saisir une tâche !");
            return;
        }

        const li = document.createElement("li");
        li.textContent = text;
        list.appendChild(li);

        input.value = "";
    });
});