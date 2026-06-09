window.addEventListener('load',()=>{

    const section = document.querySelector('section')
    const input = document.createElement('input')
    const ul = document.querySelector('.list-unstyled')

    input.type = 'text'
    input.name= 'inputTodo'
    input.placeholder='Tâche à ajouter'

    const submit = document.createElement('button')
    submit.innerText='Add + '

    ul.before(input)
    ul.before(submit)

    submit.addEventListener('click',()=>{

        if(input.value)
        {
            const task = input.value
            const li = document.createElement('li')
            li.innerText = task
            ul.appendChild(li)
            input.value= ''
            console.log(task)
        }
        else
            alert('pas de tâche à ajouter ')
    })

})