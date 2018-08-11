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

			var section_href = menu_item_link.getAttribute('href');
            var section = document.querySelector(section_href);
			var section_items = section.parentNode.querySelectorAll( 'section' );
            section_items.forEach( function ( section_item ) {
                section_item.classList.remove( 'active' );
            } );
            section.classList.add( 'active' );

			return true;
		};
	} );

	var phones = document.querySelectorAll( '[name=phone]' ),
		emails = document.querySelectorAll( '[name=email]' ),
		im = new Inputmask( '+7 (999) 999-99-99' );
	phones.forEach( function ( phone ) {
		im.mask( phone );
	} );
	im = new Inputmask( 'email' );
	emails.forEach( function ( email ) {
		im.mask( email );
	} );

	

} )();
