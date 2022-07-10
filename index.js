$(() => {
    $(window).on('load', function() {
        console.log("hit");
        document.getElementById("currentYear").innerHTML = new Date().getFullYear();
    })
})
