$(document).ready(function() {

    $(".burger-nav").on("click", function() {

        $(".nav ul").toggleClass("open");
    });

    function animate() {
        $(".headtext")
        .hide()
        .fadeIn(5000);

    }

    window.onload = animate;
});