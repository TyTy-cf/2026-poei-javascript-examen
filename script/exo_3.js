const addItemBtn = document.querySelector("button.submitItem");

addItemBtn.addEventListener("click", () => {
    const input = document.querySelector("#itemInput");
    let itemValue = input.value;

    if (itemValue !== "") {
        const ul = document.querySelector("section>ul");

        const li = document.createElement("li");
        li.textContent = itemValue;

        ul.appendChild(li);

        input.value = "";
    } else {
        alert("Yo wtf poto");
    }
});