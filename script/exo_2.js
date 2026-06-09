window.addEventListener("load", () => {
  const body = document.querySelector("body");
  const btn = document.querySelector("button");

  btn.addEventListener("click", () => {
    body.classList.toggle("bg-dark");
    body.classList.toggle("text-light");
    btnContent(btn, body);
  });
});

function btnContent(btn, body) {
  if (body.classList.contains("bg-dark")) {
    btn.innerText = "Mode Clair";
  } else {
    btn.innerText = "Mode Sombre";
  }
}
