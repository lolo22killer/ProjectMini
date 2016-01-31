$(function () {

		var $window =             	$(window),
				$body =               	$('body'),
				$html =               	$('html'),
				$mainHeader =         	$('.main-header'),
				$mainHeaderNav =      	$mainHeader.find(".main-header__nav"),
				$navBtnOpen =         	$mainHeader.find(".nav__btn-open"),
				$navBtnClose =        	$mainHeaderNav.find('.nav__btn-close'),

				$aboutSection =       	$('.s-about__skills'),
				$aboutPrBarNum =      	$aboutSection.find('.num'),
				$aboutPrBarProgress = 	$aboutSection.find('.progress'),

				$faсtsSection =       	$(".s-facts"),
				$faсtsNum =           	$faсtsSection.find('.s-facts__grid-item .num'),

				$portfSwiperContainer = $('.s-portf .swiper-container-h'),

				BREAKPOINT = 991,
				SCROLL_Y_MENU_VISIBL = 500,
				SCROLL_Y_FACTS,
				SCROLL_Y_ABOUT;

		/*----------  Subsection comment swiper  ----------*/

		var swiper = new Swiper('.s-banner .swiper-container', {
				pagination: '.s-banner .swiper-pagination',
				slidesPerView: 1,
				paginationClickable: true,
				grabCursor: true,
				spaceBetween: 0,
				autoplay: 5500,
				autoplayDisableOnInteraction: false,
				loop: true
		});

		var swiper = new Swiper('.s-testimonial .swiper-container', {
				pagination: '.s-testimonial .swiper-pagination',
				slidesPerView: 1,
				paginationClickable: true,
				grabCursor: true,
				spaceBetween: 0,
				autoplay: 5500,
				autoplayDisableOnInteraction: false,
				loop: true
		});

		var swiper = new Swiper('.s-portf .swiper-container-h', {
				nextButton: '.s-portf .swiper-control__next',
				prevButton: '.s-portf .swiper-control__prev',
				slidesPerView: 1,
				loop: true
		});

		var swiper = new Swiper('.s-portf .swiper-container-v', {
				pagination: '.s-portf .swiper-pagination-v',
				slidesPerView: 1,
				paginationClickable: true,
				grabCursor: true,
				direction: 'vertical',
				loop: true
		});

		/*----------  Subsection height vertical slider  ----------*/

		function swiperContainerHeight() {
			$portfSwiperContainer.css({height: $('.s-portf .swiper-container-v').find('img').height()});
		}

		$portfSwiperContainer.imagesLoaded( function() {
			swiperContainerHeight();
		});

		/*----------  Subsection comment isotope  ----------*/

		var $grid = $('.s-portf__isotope-grid').imagesLoaded( function() {
			$grid.isotope({
				itemSelector: '.grid-item',
				layoutMode: 'fitRows'
			});
		});

		$('.s-portf__isotope-filter').on( 'click', 'li', function() {
			var $this = $(this),
					filterValue = $this.attr('data-filter');
			$this.addClass('active').siblings('.active').removeClass('active');
			$grid.isotope({ filter: filterValue });
		});



		/*----------  Subsection comment fancybox  ----------*/

		 $(".fancybox").fancybox({
			openEffect	: 'none',
			closeEffect	: 'none'
		});


/*----------  Subsection comment  tooltipster ----------*/

  	$('.s-contact__b-form .form-control').tooltipster({
        trigger: 'custom',
        onlyOne: false,
        position: 'right'
    });


		/*----------  Subsection comment validate  ----------*/

		$(".s-contact__form").validate({
			rules: {
				name: "required",
				email: {
					required: true,
					email: true
				},
				message: "required"
			},
			messages: {
				name: "Please specify your name",
				email: {
					required: "We need your email address to contact you",
					email: "Your email address must be in the format of name@domain.com"
				},
				message: "Please specify your message"
			},

	     errorPlacement: function (error, element) {
            var lastError = $(element).data('lastError'),
                newError = $(error).text();
            $(element).data('lastError', newError);
            if(newError !== '' && newError !== lastError){
                $(element).tooltipster('content', newError);
                $(element).tooltipster('show');
            }
        },
        success: function (label, element) {
            $(element).tooltipster('hide');
        }
		});


		/*----------  Subsection comment menu  ----------*/


		// Visibility main nav
		$navBtnOpen.click(function(event) {
			$mainHeaderNav.removeClass('mobile-off').addClass('mobile-in');
			return false;
		});
		// Hidden main nav
		$navBtnClose.click(function(event) {
			$mainHeaderNav.removeClass('mobile-in').addClass('mobile-off');
			return false;
		});


		$(document).click(function(event) {
			// Hidden main nav
			if( $mainHeaderNav.hasClass('mobile-in') ){
				if( $(event.target).closest($mainHeaderNav).length ) {
					return;
				}
				$mainHeaderNav.removeClass('mobile-in').addClass('mobile-off');
			}
			event.stopPropagation();
		});




		function mobile (){
			if($window.width() > BREAKPOINT){
				$mainHeaderNav.removeClass('mobile-in mobile-off');
			}
		}
		mobile();


		function sectionOffeset  () {
			if($faсtsSection.length){ SCROLL_Y_FACTS = $faсtsSection.offset().top; }
			if($aboutSection.length){ SCROLL_Y_ABOUT = $aboutSection.offset().top; }
		}
		sectionOffeset();



		/*----------  Subsection comment RESIZE  ----------*/
		$window.resize(function(){
			swiperContainerHeight();
			mobile();
			sectionOffeset();
		});




		$window.scroll(function(event) {

			// фиксированное меню
			if ( $body.scrollTop() > SCROLL_Y_MENU_VISIBL || $html.scrollTop() > SCROLL_Y_MENU_VISIBL){
				$mainHeader.addClass('main-header_fixed');
			}
			else{
				$mainHeader.removeClass('main-header_fixed');
			}



			//анимированный прогрессбар
			if ( $body.scrollTop() > SCROLL_Y_ABOUT || $html.scrollTop() > SCROLL_Y_ABOUT ){
				// alert(1);
				$aboutPrBarNum.each(function() {
					var $this = $(this),
					number = $this.attr('data-progressbar');

					$this.animate(
						{ num: number },
						{
							duration: 3000,
							step: function (num) {
								$this.text( (num).toFixed(0) + '%' )
							}
						}
					);
				});
				$aboutPrBarProgress.each(function() {
					var $this = $(this),
					number = $this.attr('data-progressbar');

					$this.animate({ width: number + '%' }, 3000);
				});
			}



			// Анимированные числа
			if ( $body.scrollTop() > SCROLL_Y_FACTS || $html.scrollTop() > SCROLL_Y_FACTS ){

				$faсtsNum.each(function() {
					var $this = $(this),
					number = $this.attr('data-number');

					$this.animate(
						{ num: number },
						{
							duration: 3000,
							step: function (num) {
								$this.text( (num).toFixed(0) )
							}
						}
					);
				});
			}

		});
});

