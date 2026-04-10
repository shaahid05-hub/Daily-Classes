let image = [

    {img:'https://wompimages.ampify.care/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F003%2F132%2F913%2F553.jpeg'},
    {img:'https://i.pinimg.com/736x/1e/91/56/1e91569297eef6ab294e6e714393098e.jpg'},
    {img:'https://i.pinimg.com/736x/73/12/b2/7312b28da5b8b23f33359d6d2797fa26.jpg'},
    {img:'https://i.pinimg.com/736x/6a/c7/6e/6ac76ec7887faa7f44985a634ec9d1fb.jpg'},
    {img:'https://i.pinimg.com/736x/b0/0e/ac/b00eac7632495f9cccc3aac6a33bcd8d.jpg'},
    {img:'https://i.pinimg.com/1200x/6f/f3/ec/6ff3ecdd9d7a8cda4b2817eb403f64ef.jpg'}
]

let cards = document.querySelectorAll('.card')
cards.forEach((item,index) => {
    item.style.backgroundImage = `url(${image[index].img})`
})

function makeSound(key) {
    key = key.toLowerCase()     
    switch (key) {
        case 'a':
           new Audio("./A.mp3").play()
            break;
        case 'b':
           new Audio("./B.mp3").play()
            break;
        case 'c':
           new Audio("./C.mp3").play()
            break;
        case 'd':
           new Audio("./D.mp3").play()
            break;
        case 'e':
           new Audio("./E.mp3").play()
            break;
        case 'f':
           new Audio("./F.mp3").play()
            break;
        default:
            break;
    }
}

document.addEventListener('keypress',(e)=>{
    makeSound(e.key)
})