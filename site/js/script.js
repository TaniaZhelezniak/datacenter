'use strict';

var mainApp = window.mainApp || {};

$(document).ready(function () {
	$('#top-slider').bxSlider({
		// auto: true,
		adaptiveHeight: true,
		mode: 'fade',
		video: true
	});

	$('#feedback-slider').bxSlider({
		// auto: true,
		adaptiveHeight: true,
		mode: 'fade',
		video: true
	});

	$('#certificates-slider').bxSlider({
		mode: 'fade',
		speed: 600,
		pause: 6000,
		autoHover: true,
		auto: true,
		infiniteLoop: true,
		responsive: true,
		preloadImages: 'visible',
		touchEnabled: true,
		adaptiveHeight: true,
		pagerCustom: '#certificates-slider-pager', //чтобы заработал переключатель слайдеров при нажатии на миниатюру убрать "-1"
		// nextText: '<span class="icon"><svg viewBox="0 0 43.323 80" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#arrow-next"></svg></span>',
		// prevText: '<span class="icon"><svg viewBox="0 0 43.323 80" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#arrow-prev"></svg></span>',
	});

	$(document).on('scroll', function() {
		if($(window).scrollTop() !== 0) {
			$('.navbar').addClass('navbar-min');
		} else {
			$('.navbar').removeClass('navbar-min');
		}
	});

	$("#phone-number").mask("+38 (099) 999-9999");

	$('.tour, .tel, .enter').on('click', function() {
		$('.overlay-popup').show('slow');
	});

	$('#close').on('click', function() {
		$('.overlay-popup').hide('slow');
	});
	
	$('#mobile-menu').on('click', function() {
		$('.navbar-collapse').toggleClass('show');
	})
});