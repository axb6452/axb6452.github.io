function validatePassword() {
    if ($("#password").val() === "ashok123") {
        $("#password").val("");
        $("#resume-link").show();
    } else {
        $("#password").val("");
        alert('Incorrect password. Please try again.');
    }
}