const toggleDarkModeButton = document.querySelector("button.toggleDarkModeButton");
let darkMode = false;

toggleDarkModeButton.addEventListener("click", () => {
    const body = document.querySelector("body");

    body.classList.toggle("bg-dark");
    body.classList.toggle("text-light");

    darkMode = !darkMode;

    darkMode ? toggleDarkModeButton.innerHTML = "Mode clair <i class=\"fa-solid fa-sun\" style=\"color: rgb(0, 0, 0);\"></i>" : toggleDarkModeButton.innerHTML = "Mode sombre <i class=\"fa-solid fa-moon\" style=\"color: rgb(0, 0, 0);\"></i>"
});