let inp = document.getElementById('inp')
inp.addEventListener('input',()=>{

    // inp.classList.remove('border','border1')

    if (inp.value.length <= 2) {
    inp.classList.add('border')
}
else if (inp.value.length > 2) {
    inp.classList.add('border1')
}
})