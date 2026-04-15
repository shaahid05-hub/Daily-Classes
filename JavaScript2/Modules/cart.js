let cartItems = JSON.parse(localStorage.getItem('cart')) || []

document.getElementById('cartCount').innerHTML = cartItems.length

let cont = document.getElementById('cont')

let cartD = cartItems.map(p => {
             return `
                <div class="card">
                <img src="${p.thumbnail}">
                <h1>${p.title}</h1>
                <h2>price: $${p.price}</h2>
                <button onclick="addP(${p.id})">Add to Cart</button>
                </div>
                ` 
        }).join('') 
    cont.innerHTML = cartD

