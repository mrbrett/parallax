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
$js_path = "$module_path/js/jquery.scrollpath.min.js";
drupal_add_js($js_path, array('scope' => 'footer','weight' => 1));
$js_path = "$module_path/js/init.js";
drupal_add_js($js_path, array('scope' => 'footer','weight' => 2));


$html .= "
	<div class = \"wrapper\">
		<div class=\"first_words\">
			<h2>Testing out this js plug!</h2>
			<span class=\"words_wrap\">kinda like a thug -.-</span>
		</div>

		<div class=\"scrollbar\">
			<span class=\"words_wrap\">blah blah blah</span>
		</div>

		<div class=\"rotations\">
			<span class=\"words_wrap\">what the heck...</span>
			<span class=\"upside_down words_wrap\">is happening?</span>
		</div>

		<div class=\"source\">
			<span class=\"words_wrap\">SOME MORE WORDS.</span>
		</div>

		<div class=\"follow\">
			<span class=\"words_wrap\">LAST STUFF FOR THIS DEMO</span>
		</div>

		<div class = \"background_one\">
		</div>

		<div class = \"space_wrap\">
		</div>
	</div>
		";

return $html;

}

