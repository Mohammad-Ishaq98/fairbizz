document.addEventListener(
  "DOMContentLoaded", () => {
      const menu = new MmenuLight(
          document.querySelector( "#menu" ),
          "(max-width: 991px)"
      );

      const navigator = menu.navigation();
      const drawer = menu.offcanvas();

      document.querySelector( "a[href='#menu']" )
          .addEventListener( "click", ( evnt ) => {
              evnt.preventDefault();
              drawer.open();
          });
  }
);
//venobox
new VenoBox({
	selector: '.my-link',
});
(function ($) {
"use strict";
// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
})


$('.collapse.show').each(function(){
  $(this).parent().find(".fa").removeClass("fa-plus").addClass("fa-minus");
  });

  
//Toggle plus/minus icon on show/hide of collapse element
$('.collapse').on('shown.bs.collapse', function(){
  $(this).parent().find(".fa").removeClass("fa-plus").addClass("fa-minus");
}).on('hidden.bs.collapse', function(){
  $(this).parent().find(".fa").removeClass("fa-minus").addClass("fa-plus");
});  
// accordiaons
$('.card').on('click', function(){
  $(this).addClass('bg-red').siblings().removeClass('bg-red');
})
//sticky menu
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});
// data background
$("[data-background]").each(function(){
	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
});

// mainSlider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: true,
		fade: true,
		arrows: true,
		nextArrow:'<i class="hero_arrow_right fas fa-arrow-right"></i>',
		prevArrow:'<i class="hero_arrow_left fas fa-arrow-left"></i>',
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();


//service-slick
$('.service_right').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
	arrow:false,
	autoplay: false,
	autoplaySpeed: 1000,
	nextArrow:'<i class="service_arrow_right fas fa-arrow-right"><span class="service-next-arrow-txt">NEXT</span></i>',
	prevArrow:'<i class="service_arrow_left fas fa-arrow-left"><span class="service-prev-arrow-txt">PREV</span></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//case section slider
$('.our_case_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
	arrow:false,
	autoplay: false,
	autoplaySpeed: 1000,
	nextArrow:'<i class="case_arrow_right fas fa-arrow-right"></i>',
	prevArrow:'<i class="case_arrow_left fas fa-arrow-left"></i>',
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//consultation slider
$('.consultation_left').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
	arrow:false,
	autoplay: false,
	autoplaySpeed: 1000,
	nextArrow:'<i class="case_arrow_right fas fa-arrow-right"></i>',
	prevArrow:'<i class="case_arrow_left fas fa-arrow-left"></i>',
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


// isotop
$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});


// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();


})(jQuery);