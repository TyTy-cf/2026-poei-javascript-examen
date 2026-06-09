const tabs = document.querySelectorAll(".nav-link");

for (const tab of tabs) {
    tab.addEventListener("click", () => {
        deactivatePanes(tabs);

        const pane = document.querySelector(tab.dataset.bsTarget);

        pane.classList.add("show");
        pane.classList.add("active");
        tab.classList.add("active");
    });
}

function deactivatePanes(tabs)
{
    for (const tab of tabs) {
        const pane = document.querySelector(tab.dataset.bsTarget);

        pane.classList.remove("show");
        pane.classList.remove("active");
        tab.classList.remove("active");
    }
}