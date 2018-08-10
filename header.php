<!DOCTYPE html>
<html <?php language_attributes(); ?>>

	<head>

		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		
		<!-- Custom Browsers Color Start -->
		<meta name="theme-color" content="#000">
		<!-- Custom Browsers Color End -->

		<?php wp_head(); ?>

		<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/style.min.css">

	</head>

	<body <?php body_class(); ?>>
		<div id="page" class="hfeed site grid">
			<div class="sidebar grid">
				<div class="top grid">
					<a href="/" class="logo"></a>
					<div class="phone-callback">
						<a href="tel:+88126800250">8 812 680 02 50</a>
						<a href="#" class="callback">Заказать звонок</a>
						<form id="callback" action="" method="post" class="">
							<div class="fieldset grid">
								<input type="text" class="input-text" name="phone" placeholder="Телефон" required />
								<input type="text" class="input-text" name="name" placeholder="Контактное лицо" required />
							</div>
							<button type="submit" class="button">Заказать звонок</button>
						</form>
					</div>
				</div>
				<div class="menu-wrapper grid">
					<ul id="menu" class="menu">
						<li class="icon icon-about active"><a href="#">О компании</a></li>
						<li class="icon icon-adv"><a href="#">Преимущества</a></li>
						<li class="icon icon-mill"><a href="#">Борфрезы</a></li>
						<li class="icon icon-flap"><a href="#">Лепестковые диски</a></li>
						<li class="icon icon-callback"><a href="#">Обратная связь</a></li>
					</ul>
				</div>
				<div class="footer-link-wrapper grid">
					<a href="/" class="footer-link grid">Вернуться на основной сайт</a>
				</div>
			</div>
			<div id="main" class="wrapper">
