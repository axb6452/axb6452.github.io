$(() => {
    $(document).on("ready", function() {
        document.getElementById("currentYear").innerHTML = new Date().getFullYear();
    })
})
