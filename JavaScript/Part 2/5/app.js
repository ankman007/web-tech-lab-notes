function validateUserData() {
    var rollNo = document.getElementById('rollNo').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    if (isNaN(rollNo)) {
        alert("Roll No. should be a number.");
        return false;
    }

    if (name.trim() === "") {
        alert("Name should not be blank.");
        return false;
    }

    if (!isValidEmail(email)) {
        alert("Invalid email format.");
        return false;
    }

    if (isNaN(phone) || phone.length !== 10) {
        alert("Phone number should be 10 digits and contain numbers only.");
        return false;
    }

    return true; 
}

function isValidEmail(email) {
    var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
}