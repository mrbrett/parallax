<?php
/**
* @file
*
* Build parallax page
*
*/

function parallax_display(){

// Init vars
$module_path = drupal_get_path('module','parallax');
$html = '';
$changing_html = '';
$number = 1;
$changing_parallax_var = '.8';


// Adding javascript
$js_path = "$module_path/js/jquery.superscrollorama.js";
drupal_add_js($js_path, array('scope' => 'footer','weight' => 1));
$js_path = "$module_path/js/TweenMax.min.js";
drupal_add_js($js_path, array('scope' => 'footer','weight' => 2));
$js_path = "$module_path/js/init.js";
drupal_add_js($js_path, array('scope' => 'footer','weight' => 3));


$html .= "
	<div class = \"wrapper\">
		<div class=\"first_words\">
			<h2>Testing out this js plug!</h2>
			<span id=\"fade-it\">kinda like a thug -.- </span>
		</div>

		<div id=\"fly-it\">
			<span class=\"words_wrap\">blah blah blah</span>
		</div>

		<div id=\"spin-it\">
			<span class=\"words_wrap\">what the heck...</span>
		</div>
		<div id=\"examples-pin\">
				<div id=\"pin-frame-pin\" class=\"pin-frame\"><h2>Pin It</h2></div>
			<div id=\"pin-frame-slide\" class=\"pin-frame\"><h2>Slide It</h2></div>
			<div id=\"pin-frame-wipe\" class=\"pin-frame\"><h2>Wipe It</h2></div>
			<div id=\"pin-frame-bounce\" class=\"pin-frame\"><h2>Bounce It</h2></div>
			<div id=\"pin-frame-color\" class=\"pin-frame\"><h2>Color It</h2></div>
			<div id=\"pin-frame-unpin\" class=\"pin-frame\"><h2>Unpin It</h2></div>
		</div>

		<div id=\"scale-it\">
			<span class=\"words_wrap\">SOME MORE WORDS.</span>
		</div>

		<div id=\"smush-it\">
			<span class=\"words_wrap\">LAST STUFF FOR THIS DEMO</span>
		</div>
	</div>
		";

return $html;

}

