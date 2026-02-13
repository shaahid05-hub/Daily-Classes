let userLoggedIn = false
let text = document.getElementById('text')
document.getElementById('btn').addEventListener('click',()=>{
    if (userLoggedIn == false) {
       text.textContent = 'You logged into the page'
       btn.textContent = 'Logout' 
       userLoggedIn = true
    } 
    else {
       text.textContent = 'You logged out of the page'
       btn.textContent = 'Login' 
       userLoggedIn = false 
    }
})