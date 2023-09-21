function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var country = document.getElementById('country').value;

    // Check if username is 8 characters long
    if (username.length !== 8) {
        alert("Username should be 8 characters long.");
        return false;
    }

    // Check if password starts with a digit and is alphanumeric
    if (!/^\d/.test(password) || !/^[0-9a-zA-Z]+$/.test(password)) {
        alert("Password should start with a digit and be alphanumeric.");
        return false;
    }

    // Check if a country is selected
    if (country === "") {
        alert("Please select a country.");
        return false;
    }

    return true; // Form submission is allowed
}