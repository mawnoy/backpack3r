// jshint devel:true

$(document).ready(function() {


/*------- myPage Scripts -------*/
	
	var backpack3r = {
		
		init: function() {

			smoothScroll();

		},

		smoothScroll: function() {
			$('ul a').click(function() {
				var $anchor = $(this);
			});
		}

	};


	init();


});
