const inputText = document.querySelector(".search-filter");

inputText.addEventListener("input", () => {
    searchList(document.querySelector("section>ul"), inputText);
});

function searchList(list, input) {
    const items = list.getElementsByTagName("li");
    let countVisible = 0;

    let containsSearch = false;

    for (const item of items) {
        if (item.innerHTML.toLowerCase().includes(input.value.toLowerCase())) {
            containsSearch = true;
            countVisible++;
        }

        containsSearch ? item.classList.remove("d-none") : item.classList.add("d-none")

        containsSearch = false;
    }
}