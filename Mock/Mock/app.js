let color = ['red','blue','green']
let btn = document.getElementById('btn')
let count = 0
btn.addEventListener('click',()=>{
        document.body.style.backgroundColor = color[count]
        count++  
        if (count==color.length) {
             count = 0   
        }    
})

