let input = document.getElementById('input')
let cont = document.getElementById('cont')

let products = [
    { name: 'OnePlus', img: 'https://images.pexels.com/photos/14238851/pexels-photo-14238851.png', price: '90000' },
    { name: 'Samsung', img: 'https://images.pexels.com/photos/14238851/pexels-photo-14238851.png', price: '80000' },
    { name: 'Moto', img: 'https://images.pexels.com/photos/14238851/pexels-photo-14238851.png', price: '70000' },
    { name: 'Iphone', img: 'https://images.pexels.com/photos/14238851/pexels-photo-14238851.png', price: '60000' },
    { name: 'Nokia', img: 'https://images.pexels.com/photos/14238851/pexels-photo-14238851.png', price: '50000' },
    { name: 'Jio', img: 'https://images.pexels.com/photos/14238851/pexels-photo-14238851.png', price: '40000' },
    { name: 'Redmi', img: 'https://images.pexels.com/photos/14238851/pexels-photo-14238851.png', price: '30000' },
    { name: 'Realme', img: 'https://images.pexels.com/photos/14238851/pexels-photo-14238851.png', price: '35000' }
]

function displayProducts(list) {
    let cards = list.map((item, index) => {
        return `
            <div class='card'>
                <h1>${item.name}</h1>
                <img src='${item.img}'>
                <p>Price: ${item.price}</p>
                <button class='button' data-index = '${index}'>Add to Cart</button>
            </div>
    `
    }).join('')

    cont.innerHTML = cards
}
displayProducts(products)


function filt() {
    let inp = input.value.toLowerCase()
    let filteredProducts = products.filter((item) => {
        return item.name.toLowerCase().includes(inp)
    })
    displayProducts(filteredProducts)
}
input.addEventListener('input', filt)

let cart = []
let buttons = document.querySelectorAll('button')
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        let index = btn.dataset.index
        cart.push(products[index])
        count.textContent = cart.length
    })
})