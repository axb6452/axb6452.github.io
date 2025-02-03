function validatePassword() {
    const encodedPassword = "YXNob2sxMjM=";
    const enteredPassword = btoa($("#password").val());

    if (enteredPassword === encodedPassword) {
        $("#password").val("");
        window.open('img/resume_12345.pdf', '_blank');
    } else {
        $("#password").val("");
        alert('Incorrect password. Please try again.');
    }
}