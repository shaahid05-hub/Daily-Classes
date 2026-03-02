import { prodcuts } from "./Data.js"

let container = document.getElementById('products')

let cart = JSON.parse(localStorage.getItem('cart')) || []

document.getElementById('v').innerHTML = cart.length



function renderP(item) {
    let productsData = item.map(p => {
        return `
        
               <div id="card">
                <img src="${p.img}" alt=""/>
                 <h1>${p.name}</h1>
                <p>${p.boxOffice}</p>
                <button onclick="addP(${p.id})">Add Movie</button>
                </div>
            
        
        `
    })

    container.innerHTML = productsData.join('')
}

renderP(prodcuts)



window.fillD = ()=> {
    let serach = document.getElementById('search').value
    let temp = prodcuts.filter(m => m.name.toLowerCase().includes(serach.toLowerCase()))
    renderP(temp)
}

window.addP = (p)=>{
let addItem = prodcuts.find(item=> item.id == p)
alert(`movie ${addItem.name} Added to the list`)
cart.push(addItem)
localStorage.setItem('cart',JSON.stringify(cart))
document.getElementById('v').innerHTML = cart.length
}