'use strict';

jQuery(document).ready(function () {
	$('.slider').slick({
		dots: true,
		arrows: false
	});

	$('.slider-duble').slick({
		dots: true,
		arrows: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	$('.slider-full').slick({
		dots: true,
		arrows: true
	});

	$('.menu-btn').on('click', function (e) {
		e.preventDefault();
		$(e.currentTarget).add('.header .menu').toggleClass('active');
	});
});