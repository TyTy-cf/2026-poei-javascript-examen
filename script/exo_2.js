window.addEventListener("load", () => {
  const button = document.getElementsByClassName(".btn-primary");
  const body = document.getElementsByTagName("body");

  button.addEventListener("click", () => {
    if (!button) {
      return;
    }

    body.classList.add("bg-dark");
    body.classList.add("text-light ");
    
  });
});
