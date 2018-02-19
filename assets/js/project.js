
$(".services").click(function() {
	event.preventDefault() 
	$(".contact").removeClass("active");
	$(".services").addClass("active");
	$(".gallery").removeClass("active");

    $('html, body').animate({
        scrollTop: $("#section1").offset().top
    }, 1500);
});

$(".contact").click(function() {
	event.preventDefault() 
	$(".contact").addClass("active");
	$(".services").removeClass("active");
	$(".gallery").removeClass("active");

    $('html, body').animate({
        scrollTop: $("#contact-container").offset().top
    }, 1000);
});

$(".gallery").click(function() {
	event.preventDefault() 
	$(".contact").removeClass("active");
	$(".services").removeClass("active");
	$(".gallery").addClass("active");

    $('html, body').animate({
        scrollTop: $("#gallery").offset().top
    }, 1000);
});
$(".home").click(function() {
	event.preventDefault() 
	$(".home").addClass("active");
	$(".contact").removeClass("active");
	$(".services").removeClass("active");
	$(".gallery").removeClass("active");

    $('html, body').animate({
        scrollTop: $("#carousel-example-generic").offset().top
    }, 1000);
});