

document.addEventListener('keydown',(e)=>{
    switch (e.key.toLowerCase()) {
        case 'a':
            // console.log('you pressed ' + e.key);
            document.getElementById('card1').style.transform = 'rotateY(45deg)'
            break;
        case 'b':
            // console.log('you pressed ' +e.key);
            break; 
        case 'c':
            // console.log('you pressed ' +e.key);
            break;
        case 'd':
            // console.log('you pressed ' +e.key);
            break; 
        case 'e':
            // console.log('you pressed ' +e.key);
            break;           
        default:
            break;
    }
})