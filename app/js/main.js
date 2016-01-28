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
});
