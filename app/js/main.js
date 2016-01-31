$(function () {

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
			$('.s-portf .swiper-container-h').css({height: $('.s-portf .swiper-container-v').find('img').height()});
		}
		swiperContainerHeight();


		/*----------  Subsection comment isotope  ----------*/

		var $grid = $('.s-portf__isotope-grid').isotope({
			itemSelector: '.grid-item'
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

		var $mainHeaderNav = $(".main-header__nav"),
				$NavBtnOpen = $(".nav__btn-open"),
				$NavBtnClose = $mainHeaderNav.find('.nav__btn-close');


		// Visibility main nav
		$NavBtnOpen.click(function(event) {
			$mainHeaderNav.removeClass('mobile-off').addClass('mobile-in');
			return false;
		});
		// Hidden main nav
		$NavBtnClose.click(function(event) {
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


/*----------  Subsection comment resize window  ----------*/
		var $window = $(window),
				BREAKPOINT = 991;

		function mobile (){
			if($window.width() > BREAKPOINT){
				$mainHeaderNav.removeClass('mobile-in mobile-off');
			}
		}
		mobile();


		$window.resize(function(){
			swiperContainerHeight();
			mobile();
		});




});

