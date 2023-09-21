function validateForm(){

    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let rePassword = document.getElementById('re-password').value
    let gender = document.querySelector('input[name="gender"]:checked')
    let hobbies = document.querySelectorAll('input[name=hobbies]:checked')
    let nationality = document.getElementById('select').value
    let email = document.getElementById('email').value
    let phoneNo = document.getElementById('phone').value

    if (username.length < 2 || username.length > 20){
        alert('Username should be greater than 2 character and less than 20 character.')
        return false
    }
    if (password.length < 5){
        alert('Password should have greater than 5 characters')
        return false
    }
    if (password !== rePassword){
        alert('Both password fields should have same password.')
        return false
    }
    if (!gender){
        alert('Please select a gender')
        return false
    }
    if (hobbies.length == 0) {
        alert("Please select at least one hobby.");
        return false;
    }

    if (nationality === "") {
        alert("Please select a nationality.");
        return false;
    }
    if (email.indexOf('@') !== 0 || email.indexOf('.') === email.length || email.indexOf('.') - email.indexOf('@') < 2){
        alert('Please, enter correct email format')
    }

    if(isNaN(phoneNo) || phoneNo.length !== 10){
        alert('Please, enter correct phone number format')
        return false
    }
}
// if (email.indexOf("@") === 0 || email.indexOf(".") === email.length - 1 || email.indexOf(".") - email.indexOf("@") < 2) {
