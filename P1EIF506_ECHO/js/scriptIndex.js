/// <reference path="../typings/jquery/jquery.d.ts"/>
$(document).ready(function () {

  $('.more').click(function () {
    var $btn = $(this).button('loading');
    // business logic...
    setTimeout(function () {
      $btn.button('reset');
    }, 2000);

  });

  $('.entrar').click(function() {
		ohSnap('Bienvenido Usuario!', 'green');					
	});

});