$(document).ready(function () {

	$('.image-link').magnificPopup({ type: 'image' });
	$('[data-toggle="tooltip"]').tooltip();

	$('.entrar').click(function() {
		ohSnap('Bienvenido Usuario!', 'green');					
	});
	
});