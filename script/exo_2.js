window.addEventListener('load',()=>{
    const btnSombre = document.createElement('button');
    btnSombre.innerText = 'Mode sombre';
    const body = document.querySelector('body');
    if(!body) return;
    body.appendChild(btnSombre);
    btnSombre.addEventListener('click',()=>{
        body.classList.toggle('bg-dark');
        body.classList.toggle('text-light');
        btnSombre.innerText = 'Mode clair';
    })
})