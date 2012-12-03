;(function( $, window, document, undefined ){

	$(document).ready(function(){

		$.fn.scrollPath("getPath")
		// Move to 'start' element
		.moveTo(400, 50, {name: "start"})
		// Line to 'description' element
		.lineTo(400, 800, {name: "description"})
		// Arc down and line to 'syntax'
		.arc(200, 1200, 400, -Math.PI/2, Math.PI/2, true)
		.lineTo(600, 1600, {
			callback: function() {
				highlight($(".settings"));
			},
			name: "syntax"
		})
		// Continue line to 'scrollbar'
		.lineTo(1750, 1600, {
			callback: function() {
				highlight($(".sp-scroll-handle"));
			},
			name: "scrollbar"
		})
		
		.arc(1800, 1000, 600, Math.PI/2, 0, true, {rotate: Math.PI/2 })
		
		.lineTo(2400, 750, {
			name: "rotations"
		})
		
		.rotate(3*Math.PI/2, {
			name: "rotations-rotated"
		})
		
		.lineTo(2400, -700, {
			name: "source"
		})
		
		.arc(2250, -700, 150, 0, -Math.PI/2, true)

		
		.lineTo(1350, -850, {
			name: "follow"
		})
		
		.arc(1300, 50, 900, -Math.PI/2, -Math.PI, true, {rotate: Math.PI*2, name: "end"});

	// initate the plugin on wrapper element
	$(".wrapper").scrollPath({drawPath: true, wrapAround: true});

	// click on nav
	$("nav").find("a").each(function() {
		var target = $(this).attr("href").replace("#", "");
		$(this).click(function(e) {
			e.preventDefault();
		});
	});

	});

}( jQuery, window, document));