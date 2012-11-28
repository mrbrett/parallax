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

<div class="container">
  <div class="row">
    <?php print $messages; ?>
    <div class="span12">
    </div>
  </div>
</div>

<footer id="footer">
  <div class="container">
  </div>
</footer> 