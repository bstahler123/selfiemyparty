
$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#section1").offset().top
    }, 1500);
});