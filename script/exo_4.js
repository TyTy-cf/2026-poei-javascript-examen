window.addEventListener('load',()=>{
    const buttons = document.querySelectorAll('button');
    for (const button of buttons){
        button.addEventListener('click',()=>{
            for (const button of buttons){
                button.classList.remove("active");
            }
            button.classList.add("active");

            const pan = button.getAttribute('data-bs-target');
            activePan(pan);
        })
    }
})

function activePan (pan){
    const tabPans = document.querySelectorAll("div.tab-pane");
    for (const tabPan of tabPans){
        if(!pan.includes(tabPan.id)){
            tabPan.classList.remove("show","active");
        } else {
            tabPan.classList.add("show","active");
        }
    }
}