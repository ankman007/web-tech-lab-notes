function validateForm(){
    hobbiesCheckedButton = document.querySelectorAll('input[type="checkbox"]:checked')
    if (hobbiesCheckedButton.length >= 2){
        alert('Form validated');
        return true;
    } else {
        alert('Select at least two hobbies.');
        return false;
    }
}