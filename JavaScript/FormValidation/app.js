function trigger() {

    let userName = document.getElementById('UserName').value
    let password = document.getElementById('Password').value
    let phone = document.getElementById('Phone').value
    let mail = document.getElementById('Mail').value
    let aadhar = document.getElementById('Aadhar').value
    let pan = document.getElementById('Pan').value

    if (userName.trim() == '' || password.trim() == '' || phone.trim() == '' || mail.trim() == '' || aadhar.trim() == '' || pan.trim() == '') {
        alert('Mundhu empty details fill chey bey ')
        return false
    } 
    
    if (userName.length < 3 || userName.length > 12 ) {
        alert('UserName length should be in between 3 to 12 characters')
        return false
    }

    if (password.length < 8 || password.length > 16) {
        alert('Password length should be in between 8  to 16 characters')
        return false
    }
    if (!/[@#$%^&*]/.test(password)) {
        alert('Include a special character in password')
        return false
    }

    if (!/[6789]/.test(phone[0]) || phone.length != 10 ) {
        alert('Enter valid Indian number')
        return false
    }

    if (!mail.includes('@') || !mail.includes('.com')) {
        alert('Enter a valid Email')
        return false
    }

    if (!/^[0-9]{12}$/.test(aadhar)) {
        alert('Enter valid aadhar number')
        return false
    }

    let panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/
    if (!panPattern.test(pan)) {
        alert('Enter a valid Pan number')
        return false
    } 
    
    alert('Registration Successfull')
    return true

}