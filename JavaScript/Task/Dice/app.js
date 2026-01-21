// let num = Math.floor(Math.random()*10)
// // console.log(num);

const btn = document.querySelector('button')
const dice = document.querySelector('.dice')
btn.addEventListener('click', () => {
    const num = Math.floor(Math.random()*6)+1;
    dice.textContent = num;
})