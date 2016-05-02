
$(document).ready(function(){

	if($('body').hasClass('home')){
		$('div.element-1, div.element-2, div.element-3').addClass('active');
		$('section.masthead h1, section.masthead h2, section.masthead a').addClass('active');

		setTimeout(function(){
			$('div.element-1, div.element-2, div.element-3').addClass('floating');
		}, 2500);
	}

	if($('body').hasClass('maxplay')){
			
			$('button.mobile-menu').click(function(){
				
			});

			$('button.mobile-menu').click(function(){

				if($('aside').attr('data-click-state') == 1) {
					$('aside').attr('data-click-state', 0)
				 	$('aside').addClass('open');
				 	$(this).addClass('open');
					
				 
				} else {
					$('aside').attr('data-click-state', 1)
				 	$('aside').removeClass('open');
				 	$(this).removeClass('open');
					
				 
				}
			});

			$('aside ul li').click(function(){
				$('aside').removeClass('open');
				$('aside').attr('data-click-state', 1);
				$('button.mobile-menu').removeClass('open');
			});

			$('aside ul li').eq(0).click(function(){
				$('body').ScrollTo({
					duration: 500,
				    easing: 'linear'
				});
			});
			$('aside ul li').eq(1).click(function(){
				$('#bck').ScrollTo({
					duration: 500,
				    easing: 'linear'
				});
			});
			$('aside ul li').eq(2).click(function(){
				$('#app').ScrollTo({
					duration: 500,
				    easing: 'linear'
				});
			});
			$('aside ul li').eq(3).click(function(){
				$('#process').ScrollTo({
					duration: 500,
				    easing: 'linear'
				});
			});
			$('aside ul li').eq(4).click(function(){
				$('#eng').ScrollTo({
					duration: 500,
				    easing: 'linear'
				});
			});
			$('aside ul li').eq(5).click(function(){
				$('#inspire').ScrollTo({
					duration: 500,
				    easing: 'linear'
				});
			});
			$('aside ul li').eq(6).click(function(){
				$('#explore').ScrollTo({
					duration: 500,
				    easing: 'linear'
				});
			});
			$('aside ul li').eq(7).click(function(){
				$('#dir').ScrollTo({
					duration: 500,
				    easing: 'linear'
				});
			});
			$('aside ul li').eq(8).click(function(){
				$('#fin').ScrollTo({
					duration: 500,
				    easing: 'linear'
				});
			});
			$('aside ul li').eq(9).click(function(){
				$('#spr').ScrollTo({
					duration: 500,
				    easing: 'linear'
				});
			});
			$('aside ul li').eq(10).click(function(){
				$('#guide').ScrollTo({
					duration: 500,
				    easing: 'linear'
				});
			});

			$('button.mobile-left').click(function(){
				var viewportWidth = $(window).width();
				console.log(viewportWidth);
				$('aside ul').animate({left: '+=' + viewportWidth});
			});

			$('button.mobile-right').click(function(){
				var viewportWidth = $(window).width();
				console.log(viewportWidth);
				$('aside ul').animate({left: '-=' + viewportWidth});
			});
			
	}

	var waypoint = new Waypoint({
	  element: document.getElementById('bnr'),
	  handler: function(direction) {

	  	if($('body').hasClass('maxplay')){

	  		if(direction=="down"){
	  			console.log(direction);
	  			$('aside ul li').removeClass('active-tab');
	  			$('aside ul li').eq(0).addClass('active-tab');
	  			$('aside ul').removeAttr('class').removeAttr('style').addClass('pos0');
	  		}

	  		if(direction=="up"){
	  			console.log(direction);
	  			$('aside ul li').removeClass('active-tab');
	  			$('aside ul li').eq(0).addClass('active-tab');
	  			$('aside ul').removeAttr('class').removeAttr('style').addClass('pos0');
	  		}
	  		
	  	}
	  }
	})

	var waypoint = new Waypoint({
	  element: document.getElementById('bck'),
	  handler: function(direction) {

	  	if($('body').hasClass('maxplay')){
	  		if(direction=="down"){
	  			$('aside ul li').removeClass('active-tab');
	  			$('aside ul li').eq(1).addClass('active-tab');
	  			$('aside ul').removeAttr('class').removeAttr('style').addClass('pos1');
	  		}
	  		
	  	}
	  },offset: '50%'
	})

	var waypoint = new Waypoint({
	  element: document.getElementById('grp'),
	  handler: function(direction) {

	  	if($('body').hasClass('maxplay')){

	  		if(direction=="up"){
	  			console.log(direction);
	  			$('aside ul li').removeClass('active-tab');
	  			$('aside ul li').eq(1).addClass('active-tab');
	  			$('aside ul').removeAttr('class').removeAttr('style').addClass('pos1');
	  		}
	  	}
	  },offset: -100
	  })



	

	
	var waypoint = new Waypoint({
	  element: document.getElementById('app'),
	  handler: function(direction) {
	  	
	  	if($('body').hasClass('maxplay')){
	  		  	if(direction=="down"){
	  			  	$('aside ul li').removeClass('active-tab');
	  			  	$('aside ul li').eq(2).addClass('active-tab');	
	  		  		$('aside ul').removeAttr('class').removeAttr('style').addClass('pos2');
	  		  	}


	  	}
	  },offset: '50%'
	})

	var waypoint = new Waypoint({
	  element: document.getElementById('app'),
	  handler: function(direction) {
	  	
	  	if($('body').hasClass('maxplay')){
	  		  	if(direction=="up"){
	  			  	$('aside ul li').removeClass('active-tab');
	  			  	$('aside ul li').eq(2).addClass('active-tab');
	  			  	$('aside ul').removeAttr('class').removeAttr('style').addClass('pos2');	
	  		  	}
	  	}
	  },offset: 'bottom-in-view'
	})

	var waypoint = new Waypoint({
	  element: document.getElementById('process'),
	  handler: function(direction) {
	  	
	  	if($('body').hasClass('maxplay')){
	  		if(direction=="down"){
	  			$('aside ul li').removeClass('active-tab');
	  			$('aside ul li').eq(3).addClass('active-tab');
	  			$('aside ul').removeAttr('class').removeAttr('style').addClass('pos3');	
	  		}
	  	}
	  },offset: '50%'
	})

	var waypoint = new Waypoint({
	  element: document.getElementById('process'),
	  handler: function(direction) {
	  	
	  	if($('body').hasClass('maxplay')){
	  		if(direction=="up"){
	  			$('aside ul li').removeClass('active-tab');
	  			$('aside ul li').eq(3).addClass('active-tab');
	  			$('aside ul').removeAttr('class').addClass('pos3');	
	  		}
	  	}
	  },offset: -100
	})

	



	var waypoint = new Waypoint({
	  element: document.getElementById('eng'),
	  handler: function(direction) {
	  	
	  	if($('body').hasClass('maxplay')){
		  	if(direction=="down"){
		  		$('aside ul li').removeClass('active-tab');
		  		$('aside ul li').eq(4).addClass('active-tab');
		  		$('aside ul').removeAttr('class').addClass('pos4');	
		  	}	
	  	}
	  },offset: '50%'
	})

	var waypoint = new Waypoint({
	  element: document.getElementById('eng'),
	  handler: function(direction) {
	  	
	  	if($('body').hasClass('maxplay')){
		  	if(direction=="up"){
		  		$('aside ul li').removeClass('active-tab');
		  		$('aside ul li').eq(4).addClass('active-tab');
		  		$('aside ul').removeAttr('class').addClass('pos4');	
		  	}	
	  	}
	  },offset: -100
	})

	var waypoint = new Waypoint({
	  element: document.getElementById('inspire'),
	  handler: function(direction) {
	  	
	  	if($('body').hasClass('maxplay')){
	  		if(direction=="down"){
	  			$('aside ul li').removeClass('active-tab');
	  			$('aside ul li').eq(5).addClass('active-tab');
	  			$('aside ul').removeAttr('class').addClass('pos5');	
	  		}
	  	}
	  },offset: '50%'
	})

	var waypoint = new Waypoint({
	  element: document.getElementById('inspire'),
	  handler: function(direction) {
	  	
	  	if($('body').hasClass('maxplay')){
	  		if(direction=="up"){
	  			$('aside ul li').removeClass('active-tab');
	  			$('aside ul li').eq(5).addClass('active-tab');
	  			$('aside ul').removeAttr('class').addClass('pos5');	
	  		}
	  	}
	  },offset: -100
	})

	var waypoint = new Waypoint({
	  element: document.getElementById('explore'),
	  handler: function(direction) {
	  	
	  	if($('body').hasClass('maxplay')){
	  		if(direction=="down"){
	  			$('aside ul li').removeClass('active-tab');
	  			$('aside ul li').eq(6).addClass('active-tab');
	  			$('aside ul').removeAttr('class').addClass('pos6');	
	  		}
	  	}
	  },offset: '50%'
	})

	var waypoint = new Waypoint({
	  element: document.getElementById('explore'),
	  handler: function(direction) {
	  	
	  	if($('body').hasClass('maxplay')){
	  		if(direction=="up"){
	  			$('aside ul li').removeClass('active-tab');
	  			$('aside ul li').eq(6).addClass('active-tab');
	  			$('aside ul').removeAttr('class').addClass('pos6');	
	  		}
	  	}
	  },offset: -100
	})

	var waypoint = new Waypoint({
	  element: document.getElementById('dir'),
	  handler: function(direction) {
	  	
	  	if($('body').hasClass('maxplay')){
	  		if(direction=="down"){
	  			$('aside ul li').removeClass('active-tab');
	  			$('aside ul li').eq(7).addClass('active-tab');
	  			$('aside ul').removeAttr('class').addClass('pos7');	
	  		}
	  		
	  	}
	  },offset: '50%'
	})

	var waypoint = new Waypoint({
	  element: document.getElementById('dir'),
	  handler: function(direction) {
	  	
	  	if($('body').hasClass('maxplay')){
	  		if(direction=="up"){
	  			$('aside ul li').removeClass('active-tab');
	  			$('aside ul li').eq(7).addClass('active-tab');
	  			$('aside ul').removeAttr('class').addClass('pos7');	
	  		}
	  		
	  	}
	  },offset: -100
	})

	var waypoint = new Waypoint({
	  element: document.getElementById('fin'),
	  handler: function(direction) {

	  	if($('body').hasClass('maxplay')){
	  		if(direction=="down"){
	  			$('aside ul li').removeClass('active-tab');
	  			$('aside ul li').eq(8).addClass('active-tab');
	  			$('aside ul').removeAttr('class').addClass('pos8');	
	  		}
	  	}
	  },offset: '50%'
	})

	var waypoint = new Waypoint({
	  element: document.getElementById('fin'),
	  handler: function(direction) {

	  	if($('body').hasClass('maxplay')){
	  		if(direction=="up"){
	  			$('aside ul li').removeClass('active-tab');
	  			$('aside ul li').eq(8).addClass('active-tab');
	  			$('aside ul').removeAttr('class').addClass('pos8');	
	  		}
	  	}
	  },offset: -100
	})

	var waypoint = new Waypoint({
	  element: document.getElementById('spr'),
	  handler: function(direction) {
	  	
	  	if($('body').hasClass('maxplay')){
	  		if(direction=="down"){
	  			$('aside ul li').removeClass('active-tab');
	  			$('aside ul li').eq(9).addClass('active-tab');
	  			$('aside ul').removeAttr('class').addClass('pos9');	
	  		}
	  	}
	  },offset: '50%'
	})

	var waypoint = new Waypoint({
	  element: document.getElementById('spr'),
	  handler: function(direction) {
	  	
	  	if($('body').hasClass('maxplay')){
	  		if(direction=="up"){
	  			$('aside ul li').removeClass('active-tab');
	  			$('aside ul li').eq(9).addClass('active-tab');
	  			$('aside ul').removeAttr('class').addClass('pos9');	
	  		}
	  	}
	  },offset: -1000
	})

	var waypoint = new Waypoint({
	  element: document.getElementById('guide'),
	  handler: function(direction) {

	  	if($('body').hasClass('maxplay')){
	  		if(direction=="down"){
	  			$('aside ul li').removeClass('active-tab');
	  			$('aside ul li').eq(10).addClass('active-tab');
	  			$('aside ul').removeAttr('class').addClass('pos10');	
	  		}
	  		
	  	}
	  },offset: '50%'
	})

	var waypoint = new Waypoint({
	  element: document.getElementById('guide'),
	  handler: function(direction) {

	  	if($('body').hasClass('maxplay')){
	  		if(direction=="up"){
	  			$('aside ul li').removeClass('active-tab');
	  			$('aside ul li').eq(10).addClass('active-tab');
	  			$('aside ul').removeAttr('class').addClass('pos10');	
	  		}
	  		
	  	}
	  },offset: -100
	})
	/*$('span.author').addClass('activate');
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

	$(window).resize(function(){
				resizeBg();
	});


	function resizeBg(){

		
		
		var theWindow = $(window);

		var aspectRatio = 2540/1590;


		if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
		        $('body').addClass('bgheight');
		        $('body').removeClass('bgwidth');
		        

		} else {
		        $('body').addClass('bgwidth');
		        $('body').removeClass('bgheight');
		       
		}


	}

	resizeBg();

	$('body.home h1.title').addClass('activate');
	$('body.home h2.subtitle').addClass('activate');
	$('body.home section.contents a').addClass('activate');
	$('body.home div.issue-stamp').addClass('activate');

*/	
});

