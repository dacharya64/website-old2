$(function () {

	var filterList = {

		init: function () {

			// MixItUp plugin
			// http://mixitup.io
			$('#portfoliolist').mixItUp({
				selectors: {
  			  target: '.portfolio',
  			  filter: '.filter'
  		  },
  		  load: {
    		  filter: '.games' // show app tab on first load
    		}
			});

		}

	};

	// Run the show!
	filterList.init();

});

// $(function() {
// 		var selectedClass = "";
// 		$(".fil-cat").click(function(){
// 		selectedClass = $(this).attr("data-rel");
//      $("#portfolio").fadeTo(100, 0.1);
// 		$("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
//     setTimeout(function() {
//       $("."+selectedClass).fadeIn().addClass('scale-anm');
//       $("#portfolio").fadeTo(300, 1);
//     }, 300);
//
// 	});
// });
