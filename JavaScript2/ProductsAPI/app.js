let cartD = []

async function cart() {
    let data = await fetch('https://dummyjson.com/carts')
    let {carts} = await data.json()
    // console.log(carts);
    cartD = carts
    displayCards(cartD)
}
cart()

let cont = document.getElementById('cont')

function displayCards(data) {
    let printD = data.map(cart => {
        return cart.products.map(product => {
             return `
                <div class="card">
                <img src="${product.thumbnail}">
                <h1>${product.title}</h1>
                <p>${product.price}</p>
                <button class="btn">Add to Cart</button>
                </div>
                ` 
        }).join('') 
    }).join('')

    cont.innerHTML = printD
}