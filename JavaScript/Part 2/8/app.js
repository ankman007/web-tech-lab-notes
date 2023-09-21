var passwordInput = document.getElementById('password');
var showPasswordCheckbox = document.getElementById('showPassword');

// Add an event listener to the checkbox
showPasswordCheckbox.addEventListener('change', function() {
    // If the checkbox is checked, show the password
    if (showPasswordCheckbox.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});