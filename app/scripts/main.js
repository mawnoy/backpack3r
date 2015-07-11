// jshint devel:true

$(document).ready(function() {


/*------- myPage Scripts -------*/
	
	var backpack3r = {
		
		init: function() {

			backpack3r.smoothScroll();
			console.log('Hello');

		},

		smoothScroll: function() {
			$('ul a').click(function() {
				var $anchor = $(this);

				$('html, body').animate({
					scrollTop: $($anchor.attr('href')).offset().top
				}, 1000);
				return false;
			});
		}

	};


	backpack3r.init();


});
