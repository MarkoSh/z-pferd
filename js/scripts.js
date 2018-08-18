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
		section_items = document.querySelectorAll( 'section' ),
        activate_section_func = function (section_href) {
            var section = document.querySelector(section_href);
            section_items.forEach(function (section_item) {
                section_item.classList.remove('active');
            });
            section.classList.add('active');
        };


	menu_items.forEach( function ( menu_item ) {
		var menu_item_link = menu_item.querySelector( 'a' ),
			section_href = menu_item_link.getAttribute( 'href' );

		menu_item_link.onclick = function ( e ) {
			// e.preventDefault();
			
			menu_items.forEach( function ( menu_item ) {
				menu_item.classList.remove( 'active' );
			} );
			menu_item.classList.add( 'active' );

            activate_section_func(section_href);

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

    var about_link= document.querySelector( '.about-link' ),
        gallery_link = document.querySelector( '.gallery-link' );

    about_link.onclick = gallery_link.onclick = function (el) {
        var section_href = el.target.getAttribute('href');
        activate_section_func(section_href);
    }


    //gallery carousel
    var carousel =  document.getElementById("img_carousel"),
        gallery_section = document.querySelector( '.gallery-section' ),
		carousel_img = carousel.querySelector("img"),
        carousel_counter = carousel.querySelector(".counter"),
    	gallery_img_links = document.querySelectorAll(".gallery a"),
        gallery_img_srcs = [],
        carousel_close = carousel.querySelector(".close"),
		carousel_arrow_left = carousel.querySelector(".arrow-left"),
		carousel_arrow_right = carousel.querySelector(".arrow-right");

    carousel_arrow_left.onclick = function () {
        show_carousel_next(-1);
    }

    carousel_arrow_right.onclick = function () {
        show_carousel_next(1);
    }

    carousel_close.onclick = function () {
        carousel.classList.remove( 'active' );
        gallery_section.classList.remove( 'blured' );
    }


    var show_carousel = function (position) {
        carousel.classList.add( 'active' );
        gallery_section.classList.add( 'blured' );
        carousel_img.src = gallery_img_links[position];
        carousel_img.position = position;
        carousel_counter.innerHTML = position + " из " + (gallery_img_srcs.length + 1);
    }

    var show_carousel_next = function(dir){
    	var next_position;
    	if(dir){
    		next_position = carousel_img.position < gallery_img_srcs.length - 1?  carousel_img.position + 1: 0;
		} else {
            next_position = carousel_img.position > 0?  carousel_img.position - 1: gallery_img_srcs.length - 1;
        }
    	show_carousel(next_position)
	}

    carousel_img.onclick = function(){
        show_carousel_next(1);
  	}

    gallery_img_links.forEach(function (link, position){
        gallery_img_srcs.push(link.getAttribute('href'));
        link.onclick = function (e) {
        	e.preventDefault();
			show_carousel(position);
        };
	});


    //map init
    var map, placemark;
    ymaps.ready(function () {
        map = new ymaps.Map("map", {
            controls: [],
            center: [59.988072, 30.275255],
            zoom: 17
        });
        placemark = new ymaps.Placemark(
            [59.988072, 30.275255], {
                hintContent: 'Pferd',
                balloonContent: '197183, г. Санкт-Петербург<br />ул. Заусадебная д. 15, Лит. Д<br />Тел.: +7(812) 680-02-50<br />E-mail: zakaz@abramat.ru'
            }, {
                iconLayout: 'default#image',
                iconImageHref: theme_directory + '/img/icons/location.svg'
            }
        );
        map.geoObjects.add(placemark);
    });

	var show_modals = document.querySelectorAll( '.show-modal' ),
		sections = document.querySelectorAll( 'section' );
	show_modals.forEach( function ( show_modal ) {
		var hash = show_modal.getAttribute( 'href' ),
			modal = document.querySelector( hash );
		show_modal.onclick = function ( e ) {
			e.preventDefault();
			modal.classList.add( 'active' );
			sections.forEach( function ( section ) {
				section.classList.add( 'blured' );
			} );
			return true;
		};
	} );

	window.onclick = function ( e ) {
		var modals = document.querySelectorAll( '.modal' );
		if ( e.target.classList.contains( 'modal' ) || e.target.classList.contains( 'dismiss' ) ) {
			modals.forEach( function ( modal ) {
				modal.classList.remove( 'active' );
			} );
			sections.forEach( function ( section ) {
				section.classList.remove( 'blured' );
			} );
		}
	};

} )();
