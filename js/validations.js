function validatePassword() {
    if ($("#password").val() === "ashok123") {
        $("#password").val("");
        return true;
    } else {
        $("#password").val("");
        alert('Incorrect password. Please try again.');
        return false;
    }
}