window.addEventListener("load", ()=> {
    const button = document.createElement("button");
    const container = document.querySelector("div.container");
    container.appendChild(button);
    button.classList.add("p-3");
    button.innerText = "Mode Sombre";
    button.addEventListener("click",()=>{
        const fullBody = document.querySelector("body");
        fullBody.classList.toggle("bg-dark");
        fullBody.classList.toggle("text-light");
        if (fullBody.className === "bg-dark"){
            button.innerText = "Mode Clair";
        }
    })
})