let cart = JSON.parse(localStorage.getItem('cart')) || []

document.getElementById('v').innerHTML = cart.length

let container = document.getElementById('products')

console.log(cart);



let carD = cart.map(item =>{
     return `
        
               <div id="card">
                <img src="${item.img}" alt=""/>
                 <h1>${item.name}</h1>
                <p>${item.boxOffice}</p>
                <button onclick="Remove(${item.id})">Remove</button>
                </div>
       
        `
})

container.innerHTML = carD


// let num = [1,2,3,4]

// console.log(num);

// let d = num.filter(x => x !== 3)

// console.log(d);




window.Remove = (x)=>{

let removeData = cart.filter(item => item.id !== x)

localStorage.setItem('cart',JSON.stringify(removeData))


document.getElementById('v').innerHTML = cart.length

}