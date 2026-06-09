const toggleDarkModeButton = document.querySelector("input.toggleDarkModeButton");
let darkMode = false;

toggleDarkModeButton.addEventListener("click", () => {
    const body = document.querySelector("body");

    body.classList.toggle("bg-dark");
    body.classList.toggle("text-light");

    darkMode = !darkMode;

    darkMode ? toggleDarkModeButton.value = "Mode clair" : toggleDarkModeButton.value = "Mode sombre"
});