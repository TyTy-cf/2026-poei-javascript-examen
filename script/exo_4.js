window.addEventListener("load", () => {
  const firstBtn = document.querySelector("#first-tab");
  const firstTabPane = document.querySelector("#first-tab-pane");

  const secondBtn = document.querySelector("#second-tab");
  const secondTabPane = document.querySelector("#second-tab-pane");

  const thirdBtn = document.querySelector("#third-tab");
  const thirdTabPane = document.querySelector("#third-tab-pane");

  firstBtn.addEventListener("click", () => {
    firstTabPane.classList.add("active", "show");
    secondTabPane.classList.remove("active", "show");
    thirdTabPane.classList.remove("active", "show");
  });

  secondBtn.addEventListener("click", () => {
    secondTabPane.classList.add("active", "show");
    firstTabPane.classList.remove("active", "show");
    thirdTabPane.classList.remove("active", "show");
  });

  thirdBtn.addEventListener("click", () => {
    thirdTabPane.classList.add("active", "show");
    secondTabPane.classList.remove("active", "show");
    firstTabPane.classList.remove("active", "show");
  });
});
