// 1st
// let para = document.querySelectorAll('p')
// // console.log(para);
// for (let i = 0; i < para.length; i++) {
//     para[i].style.color = 'blue' 
// }

// 2nd
// let btn = document.querySelectorAll('button')
// let count = document.getElementById('count')
// count.textContent = btn.length

// 3rd
// let unodlist = document.getElementById('unodlist')
// let list = unodlist.querySelectorAll('li')
// for (let i = 0; i < list.length; i++) {
//     if (i % 2 == 0) {
//         list[i].classList.add('highlight')        
//     }
// }

// 4th
// let btn = document.getElementById('btn')
// let img = document.querySelector('img')
// btn.addEventListener('click',()=>{
//     img.setAttribute('src','https://images.pexels.com/photos/5629850/pexels-photo-5629850.jpeg')
// })

// 5th
// let btn = document.getElementById('btn')
// btn.addEventListener('click',()=>{
//     document.body.classList.toggle('dark-mode')
//     if (document.body.classList.contains('dark-mode')) {
//         btn.textContent = 'Switch to light mode'
//     } else {
//         btn.textContent = 'Switch to dark mode'
//     }
// })

let inp = document.getElementById('inp')
inp.addEventListener('input',()=>{
    if (inp.value.length <= 4) {
    inp.classList.add('border')
} else {
    inp.classList.add('border1')
}
})
