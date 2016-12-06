$(document).ready(function() {
	$('.box1').mouseenter(function() {
	
		$(this).animate({
			height: "+=15px"
		});
	});

	
	$('.box1').mouseleave(function() {
		$(this).animate({
			height: "-=15px"
		});
	});
	
	$('.box2').mouseenter(function() {
	
		$(this).animate({
			height: "+=15px"
		});
	});

	
	$('.box2').mouseleave(function() {
		$(this).animate({
			height: "-=15px"
		});
	});
	

	
	
 
 });
