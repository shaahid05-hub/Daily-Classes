let allRecp = []

async function fetchD() {
    let data = await fetch('https://dummyjson.com/recipes?limit=100')
    console.log(data);
    
    let { recipes } = await data.json()
    allRecp = recipes
    console.log(recipes);
    displayCards(allRecp)
}
 
function displayCards(data) {
     let recpD = data.map((item) => {
        return `
        <div class="card">
            <img src=${item.image} alt="">
            <h1>${item.name}</h1>
            <p>Servings: ${item.servings}</p>
            <p>Preparation Time: ${item.prepTimeMinutes}</p>
        </div>
        ` 
    }).join('')

    document.getElementById('cont').innerHTML = recpD
}
fetchD()

let inp = document.getElementById('inp')
inp.addEventListener('input',()=>{

    let text = inp.value.toLowerCase()

    let filt = allRecp.filter(item =>{
        return item.name.toLowerCase().includes(text)
    })
    displayCards(filt)
})