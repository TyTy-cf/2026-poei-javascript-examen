window.addEventListener("load", () => {
  const input = document.querySelector("input");
  const btn = document.querySelector("span");
  const ul = document.querySelector(".list-unstyled");
  if (input && btn) {
    btn.addEventListener("click", () => {
      if (input.value === "") {
        alert("please type something");
      }

      let li = document.createElement("li");
      li.classList.add("list-group-item");
      li.innerText = input.value;
      ul.appendChild(li);
      input.value = "";
    });
  }
});
