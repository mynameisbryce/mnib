
$(document).ready(function(){

	$('span.author').addClass('activate');
	$('section.header h2').addClass('activate');
	$('section.header h1').addClass('activate');
	$('section.header p').addClass('activate');
	$('div.three-points').addClass('activate');
	$('div.dial').addClass('activate');
	$('section.header').addClass('activate');
	$('header').addClass('activate');
	$('div.three-points-content ul li').addClass('activate');
	$('div.three-points-content').addClass('activate');
	$('section.header').addClass('activate');
	setTimeout(function(){
		$('.diamonds').addClass('activate');
	}, 500);

	$('li.item-1').hover(function(){

		$('div.dial').attr('class','dial activate position-1');
		$('span.icn').attr('class','icn pos-1');


	}, function(){});

	$('li.item-2').hover(function(){

		$('div.dial').attr('class','dial activate position-2');
		$('span.icn').attr('class','icn pos-2');
		
	}, function(){});

	$('li.item-3').hover(function(){

		$('div.dial').attr('class','dial activate position-3');
		$('span.icn').attr('class','icn pos-3');

		
	}, function(){});

	$('div.zone-1').hover(function(){

		$('div.dial').attr('class','dial activate position-1');
		$('span.icn').attr('class','icn pos-1');
	},function(){


	});

	$('div.zone-2').hover(function(){

		$('div.dial').attr('class','dial activate position-2');
		$('span.icn').attr('class','icn pos-2');

	},function(){

		
	});

	$('div.zone-3').hover(function(){

		$('div.dial').attr('class','dial activate position-3');
		$('span.icn').attr('class','icn pos-3');

	},function(){

		
	});


	$('.back-to-top').click(function(){
			$('html, body').animate({scrollTop : 0},800);
			return false;
		});


});