let btn = document.getElementById('btn')
// let contain = true
btn.addEventListener('click',()=>{
    document.body.classList.toggle('dark-mode')
    if (document.body.classList.contains('dark-mode')) {
        btn.textContent = 'Switch to light mode'
    }
    else{
        btn.textContent = 'Switch to dark mode'
    }
})