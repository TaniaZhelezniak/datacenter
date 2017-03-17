'use strict';

var mainApp = window.mainApp || {};

$(document).ready(function () {
	$('#top-slider').bxSlider({
		// auto: true,
		adaptiveHeight: true,
		mode: 'fade',
		video: true,
		pager:false
	});

	$(document).on('scroll', function() {
		if($(window).scrollTop() !== 0) {
			$('.logo').css({'max-width': '3rem', 'transition': 'max-width .3s ease-out 0.3s'});
		} else {
			$('.logo').css('max-width', '5rem');
		}
	})
});