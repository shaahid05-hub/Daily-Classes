let btn = document.getElementById('btn')
let input = document.getElementById('input')
let ul = document.getElementById('list')
let toDo = JSON.parse(localStorage.getItem('toDo')) || []

function add() {
    ul.innerHTML = ''
    toDo.forEach(item => {
        let box1 = document.createElement('div')
        box1.classList.add('box1')
        let task = document.createElement('p')
        task.textContent = item
        box1.append(task)

        let editBtn = document.createElement('button')
        editBtn.classList.add('editBtn')
        editBtn.textContent = 'Edit'
        box1.append(editBtn)

        let delBtn = document.createElement('button')
        delBtn.classList.add('delBtn')
        delBtn.textContent = 'Delete'
        box1.append(delBtn)
        ul.append(box1)

        editBtn.addEventListener('click', () => {
            if (editBtn.textContent === 'Edit') {
                let input1 = document.createElement('input')
                input1.value = task.textContent
                box1.replaceChild(input1, task)
                editBtn.textContent = 'Save'
            }


            if (editBtn.textContent == 'Save') {
                task.textContent = input1.value
                box1.replaceChild(task, input1)
            }
        })
    });
}

btn.addEventListener('click', () => {
    let val = input.value
    if (val == '') return alert('Enter Something')

    toDo.push(val)
    localStorage.setItem('toDo', JSON.stringify(toDo))
    input.value = ''
    add()
})

add()

