window.onload = function() {
//=
};

$(function () {
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
	      mousewheelControl: true,
	      direction: 'vertical',
	      loop: true
	  });


	  // init Isotope
    var $grid = $('.s-portf__isotope-grid').isotope({
      itemSelector: '.grid-item'
    });
    // filter items on button click
    $('.s-portf__isotope-filter').on( 'click', 'li', function() {
      var $this = $(this),
          filterValue = $this.attr('data-filter');

      $this.addClass('active').siblings('.active').removeClass('active');
      $grid.isotope({ filter: filterValue });
    });
});
