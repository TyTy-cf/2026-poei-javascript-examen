window.addEventListener("load", () => {
  const listOfUser = document.querySelectorAll("section ul li");
  const input = document.querySelector("input");

  input.addEventListener("input", () => {
    let inputLowered = input.value.toLowerCase();
    console.log("inputLowered : " + inputLowered);
    for (const li of listOfUser) {
      let liLowered = li.innerText.toLowerCase();

      if (input.value === "") {
        li.classList.remove("d-none");
      }

      if (!liLowered.includes(inputLowered)) {
        li.classList.add("d-none");
      }
      console.log(li);
    }
  });
});
