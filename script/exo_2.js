window.addEventListener("load", () => {
    const button = document.querySelector("button");
    const body = document.body;
    const icon = button.querySelector('i')

    button.addEventListener("click", () => {
        body.classList.toggle("bg-dark");
        body.classList.toggle("text-light");

        if (body.classList.contains("bg-dark")) {
            button.innerHTML = '<i class="fa-regular fa-sun"></i>' + " Mode clair";
        } else {
            button.innerHTML = '<i class="fa-regular fa-moon"></i>' + " Mode sombre";
        }
    });
});