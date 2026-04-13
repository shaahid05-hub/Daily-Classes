let carData = [
    { id: 1, name: 'Shaahid', car: 'Audi', },
    { id: 2, name: 'Uday', car: 'BMW' },
    { id: 3, name: 'Pawan', car: 'Benz' },
    { id: 4, name: 'Siva', car: 'Range Rover' },
]

let cont = document.getElementById('cont')

carData.forEach((item) => {
    let card = document.createElement('div')
    card.className = 'card'

    card.innerHTML = `  
        <h2>${item.name}</h2>
        <p>${item.car}</p>

         <div class="inp">
                <input type="text" placeholder="Entername" class="en"><br>
                <input type="text" placeholder="Location" class="loc"><br>
                <button class="btn">Submit</button>
            </div>
            <p class="msg"></p>
    `
    cont.appendChild(card)

    let inp = card.querySelector('.inp')
    let btn = card.querySelector('.btn')
    let msg = card.querySelector('.msg')

    card.addEventListener('click', () => {
        inp.style.display = 'block'
    })

    btn.addEventListener('click', (event) => {
        event.stopPropagation()
        let en = card.querySelector('.en').value
        let loc = card.querySelector('.loc').value
        inp.style.display = 'none'

        msg.innerHTML = `   
        Hi Mr. ${en}, thanks for choosing ${item.name}'s ${item.car}.
        We'll pick you up from ${loc} at 10AM. Thank you!  

    `
        card.querySelector('.en').value = ''
        card.querySelector('.loc').value = ''

    })
})

