<header id="header">
	<div class="container">
    <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo">
      <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>"/>
    </a>
    <nav id="main-menu">
      <?php include 'menu.inc'; ?>
    </nav>
	</div>
</header>

<div class="container" class="<?php print $classes; ?>"<?php print $attributes; ?>>
  <div class="row">
    <?php print $messages; ?>
    <?php global $user; if ( $user->uid ): ?>
      <div id="content-header" class="span12">
      	<div class="tabs"><?php print render($tabs); ?></div>
      </div> 
    <?php endif; ?>
    <div class="span12">
    	<?php print render($page['content']) ?>
    </div>
  </div>
</div>

<footer id="footer">
  <div class="container">
  </div>
</footer> 