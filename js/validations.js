function validatePassword() {
    if ($("#password").val() == "ashok123") {
        return true;
    } else {
        alert('wrong password!');
        return false;
    }
}