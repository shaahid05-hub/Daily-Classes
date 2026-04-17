let quote = document.getElementById('quote')
let author = document.getElementById('author')
let btn = document.getElementById('btn')

function trigger() {
    fetch('https://dummyjson.com/quotes?limit=100')
.then(res => {
    return res.json()
}).then(({quotes}) => {

    let randomGen = Math.round(Math.random()*quotes.length) 

    quote.innerHTML = quotes[randomGen].quote
    author.innerHTML = quotes[randomGen].author    
    return quotes
}) 
}

btn.addEventListener('click',trigger)