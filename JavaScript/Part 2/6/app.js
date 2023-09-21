function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if both fields are not empty
    if (username.trim() === "" || password.trim() === "") {
        alert("Both username and password are required.");
        return false;
    }

    // Check if username and password are not the same
    if (username === password) {
        alert("Username and password cannot be the same.");
        return false;
    }

    // Check if both username and password have a length greater than 5 characters
    if (username.length <= 5 || password.length <= 5) {
        alert("Both username and password should be greater than 5 characters.");
        return false;
    }

    // Check if the provided username and password match the expected values
    if (username !== "nccsBim123" || password !== "nccsKathmandu") {
        alert("Invalid username or password.");
        return false;
    }

    alert("Welcome to NCCS!");
    return true; // Form submission is allowed
}