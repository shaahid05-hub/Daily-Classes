let image = ['https://images.pexels.com/photos/34386689/pexels-photo-34386689.jpeg',
             'https://images.pexels.com/photos/33978228/pexels-photo-33978228.jpeg',
             'https://content.pexels.com/images/canva/ai-generated-ad/off-theme/fiery_sunset_sky_swirling-full.jpg',
             'https://content.pexels.com/images/canva/ai-generated-ad/off-theme/waves_crashing_on_rocky_tropical_shore-full.jpg',
             'https://content.pexels.com/images/canva/ai-generated-ad/off-theme/misty_alpine_meadow_at_dawn-full.jpg'
]

document.body.innerHTML = `
    <div class='cont' >
        <button id='prev'> < </button>
        <div class='slide' id='slide'></div>
        <button id='next'> > </button>
    </div>
`

let index = 0
let slide = document.getElementById('slide')
slide.style.backgroundImage = `url(${image[index]})`

let interval;
function startAutoPlay() {
    interval = setInterval(()=>{
        index = (index + 1) % image.length
        slide.style.backgroundImage = `url(${image[index]})`
    },4000)   
}

function resetAutoPlay(){
    clearInterval(interval)
    startAutoPlay()
}

startAutoPlay()

document.getElementById('next').addEventListener('click',()=>{
    index = (index+1)%image.length
    slide.style.backgroundImage = `url(${image[index]})`
    resetAutoPlay()
})

document.getElementById('prev').addEventListener('click',()=>{
    index = (index - 1 + image.length) % image.length
    slide.style.backgroundImage = `url(${image[index]})`
    resetAutoPlay()
})