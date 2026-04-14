import { product } from "./data.js";

let cont = document.getElementById('cont')
let productD = []

async function trigger() {
    productD = await product()
    displayCards(productD)
}

function displayCards(data) {
    let printD = data.map(p => {
             return `
                <div class="card">
                <img src="${p.thumbnail}">
                <h1>${p.title}</h1>
                <h2>price: $${p.price}</h2>
                <button onclick="addP(${p.id})">Add to Cart</button>
                </div>
                ` 
        }).join('') 
    cont.innerHTML = printD
}
trigger()

let input = document.getElementById('input')

input.addEventListener('input',()=>{
    let search = productD.filter(item =>{
        return item.title.toLowerCase().includes(input.value.toLowerCase())
    })
    displayCards(search)
})

let cartCount = document.getElementById('cartCount')
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
cartCount.innerHTML = cartItems.length

window.addP= (p) => {
    let findP = productD.find(item => item.id == p)
    alert(`${findP.title} added to your cart`)
    cartItems.push(findP)
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
    cartCount.innerHTML = cartItems.length
}



