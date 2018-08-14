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
		menu_items = menu.querySelectorAll( 'li' ),
		section_items = document.querySelectorAll( 'section' );

	menu_items.forEach( function ( menu_item ) {
		var menu_item_link = menu_item.querySelector( 'a' ),
			section_href = menu_item_link.getAttribute( 'href' ),
			section = document.querySelector( section_href );
		menu_item_link.onclick = function ( e ) {
			// e.preventDefault();
			
			menu_items.forEach( function ( menu_item ) {
				menu_item.classList.remove( 'active' );
			} );
			menu_item.classList.add( 'active' );

            section_items.forEach( function ( section_item ) {
                section_item.classList.remove( 'active' );
            } );
            section.classList.add( 'active' );

			return true;
		};
	} );

	var masks = [ {
		els: document.querySelectorAll( '[name=phone]' ),
		im: new Inputmask( '+7 (999) 999-99-99' )
	}, {
		els: document.querySelectorAll( '[name=email]' ),
		im: new Inputmask( 'email' )
	} ];
	masks.forEach( function ( item ) {
		item.els.forEach( function ( el ) {
			item.im.mask( el );
		} );
	} );

	var about = document.getElementById( 'about' ),
		gallery = document.getElementById( 'gallery' );

	about.onwheel = function ( e ) {
		if ( e.deltaY > 0 ) {
			section_items.forEach( function ( section_item ) {
                section_item.classList.remove( 'active' );
			} );
            gallery.classList.add( 'active' );
		}
	};
	gallery.onwheel = function ( e ) {
		if ( e.deltaY < 0 ) {
			section_items.forEach( function ( section_item ) {
                section_item.classList.remove( 'active' );
			} );
            about.classList.add( 'active' );
		}
	};



	//map init
        var map, placemark;
        ymaps.ready( function () {
            map = new ymaps.Map( "map", {
                controls	: [],
                center		: [ 59.988072, 30.275255 ],
                zoom		: 17
            } );
            placemark = new ymaps.Placemark(
                [ 59.988072, 30.275255 ], {
                    hintContent		: 'Pferd',
                    balloonContent	: '197183, г. Санкт-Петербург<br />ул. Заусадебная д. 15, Лит. Д<br />Тел.: +7(812) 680-02-50<br />E-mail: zakaz@abramat.ru'
                }, {
                    iconLayout		: 'default#image',
                    iconImageHref	: theme_directory + '/img/icons/location.svg'
                }
            );
            map.geoObjects.add( placemark );
        } );

} )();
