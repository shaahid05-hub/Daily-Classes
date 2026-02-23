let input = document.getElementById('input')
let btn = document.getElementById('btn')
let actors = document.getElementById('actors')
btn.addEventListener('click',()=>{
    newActor = document.createElement('li')
    newActor.textContent = input.value
    actors.append(newActor)
    input.value = ''
}) 

// localStorage.setItem('name','PSPK')
// localStorage.setItem('title','Power Star')
// sessionStorage.setItem('Actor','Prabhas')
// sessionStorage.setItem('title','Rebel Star')

