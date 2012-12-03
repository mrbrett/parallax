;(function( $, window, document, undefined ){

	$(document).ready(function() {
			var controller = $.superscrollorama();

			controller.addTween('#fade-it', TweenMax.from( $('#fade-it'), .5, {css:{opacity: 0}}));
			controller.addTween('#fly-it', TweenMax.from( $('#fly-it'), .25, {css:{right:'1000px'}, ease:Quad.easeInOut}));
			controller.addTween('#spin-it', TweenMax.from( $('#spin-it'), .25, {css:{opacity:0, rotation: 720}, ease:Quad.easeOut}));
			controller.addTween('#scale-it', TweenMax.fromTo( $('#scale-it'), .25, {css:{opacity:0, fontSize:'20px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, fontSize:'240px'}, ease:Quad.easeInOut}));
			controller.addTween('#smush-it', TweenMax.fromTo( $('#smush-it'), .25, {css:{opacity:0, 'letter-spacing':'30px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, 'letter-spacing':'-10px'}, ease:Quad.easeInOut}), 0, 100); // 100 px offset for better timing
		
			// set duration, in pixels scrolled, for pinned element
				var pinDur = 1000;
				// create animation timeline for pinned element
				var pinAnimations = new TimelineLite();
				pinAnimations
					.append(TweenMax.from($('#pin-frame-pin h2'), .5, {css:{marginTop:0}, ease: Quad.easeInOut}))
					.append([
						TweenMax.to($('#pin-frame-slide'), .5, {css:{marginLeft:0}}),
						TweenMax.to($('#pin-frame-pin'), .5, {css:{marginLeft:'100%'}})
					], .5)
					.append([
						TweenMax.to($('#pin-frame-wipe'), .5, {css:{top:0}}),
						TweenMax.from($('#pin-frame-wipe h2'), .5, {css:{marginTop:'-600px'}})
					], .5)
					.append(TweenMax.from($('#pin-frame-bounce'), 5, {css:{marginTop:'-100%'}, ease:Bounce.easeOut}), .5)
					.append(TweenMax.from($('#pin-frame-color'), .25, {css:{opacity:0}}), .5)
					.append([
						TweenMax.to($('#pin-frame-color'), .25, {css:{backgroundColor:'blue'}}),
						TweenMax.to($('#pin-frame-color h2'), .25, {css:{color:'orange'}})
					])
					.append([
						TweenMax.to($('#pin-frame-color'), .25, {css:{backgroundColor:'green'}}),
						TweenMax.to($('#pin-frame-color h2'), .25, {css:{color:'red'}})
					])
					.append([
						TweenMax.to($('#pin-frame-color'), .25, {css:{backgroundColor:'yellow'}}),
						TweenMax.to($('#pin-frame-color h2'), .25, {css:{color:'purple'}})
					])
					.append([
						TweenMax.to($('#pin-frame-color'), .25, {css:{backgroundColor:'orange'}}),
						TweenMax.to($('#pin-frame-color h2'), .25, {css:{color:'blue'}})
					])
					.append([
						TweenMax.to($('#pin-frame-color'), .25, {css:{backgroundColor:'red'}}),
						TweenMax.to($('#pin-frame-color h2'), .25, {css:{color:'green'}})
					])
					.append([
						TweenMax.to($('#pin-frame-color'), .25, {css:{backgroundColor:'#222438'}}),
						TweenMax.to($('#pin-frame-color h2'), .25, {css:{color:'#FFB000'}})
					])
					.append(TweenMax.to($('#pin-frame-unpin'), .5, {css:{top:'100px'}}));

				// pin element, use onPin and onUnpin to adjust the height of the element
				controller.pin($('#examples-pin'), pinDur, {
					anim:pinAnimations, 
					onPin: function() {
						$('#examples-pin').css('height','100%');
					}, 
					onUnpin: function() {
						$('#examples-pin').css('height','600px');
					}
				});
		});

}( jQuery, window, document));