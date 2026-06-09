const { createElement } = require("react");

window.addEventListener("load", () => {
  const button = document.getElementsByClassName(".btn-primary");
  const input = document.getElementsByTagName("input");
  const ul = document.getElementsByClassName('.list-unstyled"');
  //console.log(input);

  console.log(inputValue);

  button.addEventListener("click", () => {
    if (button) {
      const value = input.value;
      const li = document.createElement("li");
      li.classList.add("list-group-item");
      li.textContent = value;
      ul.appendChild(li);
      
      if (value === "") {
        alert("champ est vide ");
      }
      else{

      }
    }
  });
});
