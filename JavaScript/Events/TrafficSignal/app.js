let red = document.getElementById('round1')
let yellow = document.getElementById('round2')
let green = document.getElementById('round3')
let car1 = document.getElementById('car1')
document.getElementById('btn').addEventListener('click', () => {
    red.style.backgroundColor = 'red'
    setTimeout(() => {
        red.style.backgroundColor = 'antiquewhite'
        yellow.style.backgroundColor = 'yellow'
        setTimeout(() => {
            yellow.style.backgroundColor = 'antiquewhite'
            green.style.backgroundColor = 'green'
            car1.style.transform = 'translateX(-250px)'
        }, 2000)
        setTimeout(() => {
            green.style.backgroundColor = 'antiquewhite'
        }, 10000)
    }, 5000)
})


let signal = document.getElementById('round4')
let car2 = document.getElementById('car2')
document.getElementById('btn1').addEventListener('click',()=>{
    signal.style.backgroundColor = 'red'
    setTimeout(()=>{
        signal.style.backgroundColor = 'yellow'
        setTimeout(()=>{
            signal.style.backgroundColor = 'green'
            car2.style.transform = 'translateX(250px)'
        },2000)
        setTimeout(()=>{
            signal.style.backgroundColor = 'antiquewhite'
        },10000)
    },5000)

})