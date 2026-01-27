// let btn = document.getElementById('btn')
// console.log(btn);

let count = 0
function genC() {
    if (count < 5) {
        let card = document.createElement('div')
        card.setAttribute('class', 'card')
        card.textContent = 'Java Full Stack'
        document.getElementById('parent').append(card)
        count++;
    }
    else{
        let btn = document.getElementById('btn')
        btn.disabled = true
    }

}






