( function () {
	
	var callbacklLinks = document.querySelectorAll( 'a.callback' ),
		callback = document.getElementById( 'callback' );
	callbacklLinks.forEach( function ( callbacklLink ) {
		callbacklLink.onclick = function ( e ) {
			e.preventDefault();
			callback.classList.toggle( 'active' );
			return true;
		};
	} );

	var menu = document.getElementById( 'menu' ),
		menu_items = menu.querySelectorAll( 'li' );

	menu_items.forEach( function ( menu_item ) {
		var menu_item_link = menu_item.querySelector( 'a' );
		menu_item_link.onclick = function ( e ) {
			// e.preventDefault();
			menu_items.forEach( function ( menu_item ) {
				menu_item.classList.remove( 'active' );
			} );
			menu_item.classList.add( 'active' );
			return true;
		};
	} );

} )();
