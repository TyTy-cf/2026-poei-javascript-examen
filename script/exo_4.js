window.addEventListener("load", ()=> {
    const tabButton = document.querySelectorAll("button.nav-link");
    const tabContenu = document.querySelectorAll("div.tab-content > div");
    console.log(tabButton);

    for (let i = 0; i < tabButton.length; i++){
        let button = document.querySelector("ul.nav-tabs:nth-child(i) > button");
        let contenu = document.querySelector("div.tab-content:nth-child(i)")
        button.addEventListener("click",()=>{
            contenu.classList.toggle("show");
        })
    }

})