$(document).ready(function()  {

	var duration = 1000;
	var $root = $('html, body');
	var checkPoint = $('#nav').offset().top;

	$('a[href^="#"]').click(function(event) {
		event.preventDefault();
		$root.animate({scrollTop:$( $(this).attr('href')).position().top}, duration);
		return false;
	});
	
	$('.topReturn').css({ left: '-2em'});

	$(window).scroll(function() {
		if ($(this).scrollTop() > checkPoint) {
			$('.topReturn').fadeIn(duration);
		} else {
			$('.topReturn').fadeOut(duration);
		}
	});

	var owl = $("#owl-demo");
 
  	owl.owlCarousel({
    	navigation : true,
    	singleItem : true,
    	transitionStyle : "fade"
  	});

});

