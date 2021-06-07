var body = $('body');
var menuTrigger = $('.hamburger');
var mainOverlay = $('.js-main-overlay');

menuTrigger.on('click', function() {
	$(this).toggleClass('is-active');
	body.toggleClass('menu-is-active');
});

mainOverlay.on('click', function() {
	menuTrigger.removeClass('is-active');
	body.removeClass('menu-is-active');
});

$('.menu li a').on('click', function() {
	menuTrigger.removeClass('is-active');
	body.removeClass('menu-is-active');
}); 