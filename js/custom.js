(function ($) {

	new WOW().init();

	jQuery(window).load(function() {
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");

		// Cambiar imagenes del primer slide
	    var slide = $('.intro');
	    var backgrounds = [
	      'url(img/slides/1.jpg) no-repeat',
	      'url(img/slides/2.jpg) no-repeat',
	      'url(img/slides/3.jpg) no-repeat',
	      'url(img/slides/4.jpg) no-repeat',
	      'url(img/slides/5.jpg) no-repeat',
	    ];
	    var current = 0;

	    function nextBackground() {
	        slide.animate({opacity: 0.25}, 'slow', function() {
		        $(this)
		            .css(
			            'background',
			        backgrounds[current = ++current % backgrounds.length])
		            .animate({opacity: 1});
		    });
	        setTimeout(nextBackground, 5000);
	    }
	    setTimeout(nextBackground, 5000);
	    slide.css('background', backgrounds[0]);

	});


	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

})(jQuery);
