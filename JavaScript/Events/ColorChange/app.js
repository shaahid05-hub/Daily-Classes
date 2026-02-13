let holder = ['red','green','blue','yellow','black']
let index = -1
document.getElementById('btn'),addEventListener('click',()=>{
    index = (index + 1) % holder.length
    document.body.style.backgroundColor = holder[index]
})