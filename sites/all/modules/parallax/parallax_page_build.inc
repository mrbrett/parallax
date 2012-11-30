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
$js_path = "$module_path/js/jquery.stellar.min.js";
drupal_add_js($js_path, array('scope' => 'footer','weight' => 1));
$js_path = "$module_path/js/init.js";
drupal_add_js($js_path, array('scope' => 'footer','weight' => 2));

while($number <= 30){
$changing_html .= "
		<div class = \"some_object\" data-stellar-ratio=\"$changing_parallax_var\">
		</div>
	";
	$number++;
	$changing_parallax_var = $changing_parallax_var + 0.5;
}

$html .= "
	<div class = \"container\">
		<div class = \"background_one\" data-stellar-background-ratio=\"0.5\">
		</div>
		$changing_html
		<div class = \"space_wrap\">
		</div>
	</div>
		";

return $html;

}

