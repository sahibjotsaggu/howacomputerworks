$(document).ready(function() {
	console.log($('.components_button').css('right'));
	$('.computer_parts .row .container .col-sm-4 ul li a').click(function() {
		$('.computer_parts').css('top', '-100%');
	});
	$('.components_button').click(function() {
		$('.computer_parts').css('top', '0px');
	});
	$('.hamburger').click(function() {
		$('.computer_parts').css('top', '0px');
	});
	$('.dd_close_button').click(function() {
		$('.computer_parts').css('top', 'calc(-100% - 20px)');
	});
});
