(function () {
	
	'use strict';

	let mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    let container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};
	let moveDot = function() {
		$('.nav-item-container').click(function (e) {
			$('.active')
			.removeClass('active');
			$(e.target)
				.parent()
				.addClass('active');
				console.log(e.target);
		});
	};

	let sendEmail = function(message, subject){
		Email.send({
			Host: 'smtp.gmail.com', 
			Username: 'cbrudder84@gmail.com',
			Password: 'qscjghobbrmnexbd',
			To: 'cbrudder84@gmail.com',
			From: 'cbrudder84@gmail.com',
			Subject: `${subject}`,
			Body: `${message}`
		}).then( () => alert("Your message has been sent successfully!"));
	};

	let submitForm = function(){
		$('.btn-primary').click(function(e){
			let info = $('form').serializeArray();
			let infoObj = {};
			$(info).each(function(i, field){
				infoObj[field.name] = field.value;
			});
			console.log(infoObj);
			let name = (infoObj.firstName + " " + infoObj.lastName);
			let subject = infoObj.subject;
			let email = infoObj.email;
			let message = infoObj.message;
			console.log(subject + " " + email + " " + message)

			sendEmail(email, message, subject);
			// for(let i = 0; i < info.length; i++){
			// 	infoArray = Object.values(info[i].value);
				
			// };
			//console.log(infoArray);
			//console.log(info);
			//sendEmail()
			//document.querySelector(".contact-form").reset();
			//alert("Your message has been sent successfully!");
		});
	};

	let offcanvasMenu = function() {

		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		let clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		let clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');
		document.Get
		$('.offcanvas-has-dropdown').mouseenter(function(){
			let $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			let $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	let burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			let $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	let contentWayPoint = function() {
		let i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						let el = $(this);
						setTimeout( function () {
							let effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	let dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			let $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			let $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	let goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			let $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};

	let loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	let counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	let counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	
	$(function(){
		moveDot();
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		goToTop();
		loaderPage();
		counterWayPoint();
		submitForm();
	});


}());