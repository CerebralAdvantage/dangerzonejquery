$(document).ready(function(){
	$('.btn-1').click(function(){
		$('.ninja').slideUp();
	});

	$('.btn-2').click(function(){
		$('.ninja').slideDown();
	})

	$('.btn-3').click(function(){
		$('.ninja').toggle();
	})

	$('.btn-4').click(function(){
		$('.ninja').fadeOut();
	})

	$('.btn-5').click(function(){
		$('.ninja').fadeIn();
	})



});
