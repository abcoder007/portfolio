/************* Main Js File ************************
    Template Name: Ninja App - Html5 Template
    Author: Tanmoy Dhar
    Version: 1.0
    Copyright 2018
****************************************/


/*==================================

        Table of Content

        1. Window Load Function
            a. Preloader Setup
            b. Portfolio Isotope Setup
        2. Document Ready Function
            a. ScrollIt Setup
            b. Navbar Scrolling Background
            c. Stats Counter Setup
            d. Navbar Close On Click Mobile Responsive
            e. Stellar Setup
            f. Magnific Popup Setup
            g. Blog OwlCarousel Setup
            h. Testimonial OwlCarousel Setup
            i. Contact Form Setup

==================================*/

    /*========Window Load Function========*/
    $(window).on("load", function() {
        "use strict";
    /*========Preloader========*/


    // var wind = $(window);

    /*========ScrollIt Setup========*/
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'swing', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -15 // offste (in px) for fixed top navigation
    });

    /*========Navbar Scrolling Background========*/
        var wind = $(window);
    wind.on("scroll", function() {
        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar")
        if (bodyScroll > 300) {
            navbar.addClass("fixed-top");
        } else {
            navbar.removeClass("fixed-top");
        }
    });
            $("#client-caro").owlCarousel({
      navigation: false,
      pagination: true,
      slideSpeed: 800,
      paginationSpeed: 800,
      smartSpeed: 500,
      autoplay: true,
      singleItem: true,
      loop: true,
      responsive:{
        0:{
          items:1
        },
        680:{
          items:1
        },
        1000:{
          items:2
        }
      }
    });
  $("#c-caro").owlCarousel({
      navigation:  true,
      pagination:false,
      slideSpeed: 800,
      paginationSpeed: 800,
      smartSpeed: 500,
      autoplay: false,
      singleItem: true,
      loop: true,
      responsive:{
        0:{
          items:1
        },
        680:{
          items:1
        },
        1000:{
          items:3
        }
      }
    });
    $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      items:1,
      nav:true,
      loop:true,
      dots:false,
      autoplay:true,
      navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
 
  });
        // welcome banner slider js
    $(".header-slides").owlCarousel({
        loop: !0,
        responsiveClass: !0,
        items: 1,
        nav: !1,
        dots: !0,
        autoplay: !0,
        margin: 20,
        animateOut: "bounceOutRight",
        animateIn: "bounceInLeft"
    });


function appScreenshotCarousel () {
    if ($('.app-section-slider').length) {

        var swiper = new Swiper('.app-section-slider', {
            effect: 'coverflow',
            loop: true,
            centeredSlides: true,
            slidesPerView: 4,
            initialSlide: 4,
            keyboardControl: true,
            mousewheelControl: false,
            lazyLoading: true,
            preventClicks: false,
            preventClicksPropagation: false,
            lazyLoadingInPrevNext: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            coverflow: {
                rotate: 0,
                stretch: 0,
                depth: 250,
                modifier: .5,
                slideShadows: false,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                575: {
                    slidesPerView: 1,
                    spaceBetween: 5,
                }
            }
        });

    }
}

// instance of fuction while Window Load event
jQuery(window).on('load', function() {
    (function($) {
       appScreenshotCarousel();

    })(jQuery);
});

    /*========Navbar Close On Click Mobile Responsive========*/
    $(".nav-item .nav-link").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    
});
new WOW().init();
});



    $(window).ready(function() {
        $('#preload').delay(200).fadeOut('fade');
    });
    function appScreenshotCarousel () {
    if ($('.app-section-slider').length) {

        var swiper = new Swiper('.app-section-slider', {
            effect: 'coverflow',
            loop: true,
            centeredSlides: true,
            slidesPerView: 4,
            initialSlide: 4,
            keyboardControl: true,
            mousewheelControl: false,
            lazyLoading: true,
            preventClicks: false,
            preventClicksPropagation: false,
            lazyLoadingInPrevNext: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            coverflow: {
                rotate: 0,
                stretch: 0,
                depth: 250,
                modifier: .5,
                slideShadows: false,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                575: {
                    slidesPerView: 1,
                    spaceBetween: 5,
                }
            }
        });

    }
}

// instance of fuction while Window Load event
jQuery(window).on('load', function() {
    (function($) {
       appScreenshotCarousel();

    })(jQuery);
});
/*========Stats Counter Setup========*/
    (function(){
        if($(".counter-area").length > 0) {
            var a = 0;
            $(window).on('scroll', function() {
                var oTop = $('.counter-area').offset().top - window.innerHeight;
                if (a == 0 && $(window).scrollTop() > oTop) {
                    $('.counter-area .counter-item .counter').each(function() {
                        var $this = $(this),
                            countTo = $this.attr('data-count');
                        $({
                            countNum: $this.text()
                        }).animate({
                            countNum: countTo
                        }, {
                            duration: 2000,
                            easing: 'swing',
                            step: function() {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function() {
                                $this.text(this.countNum);
                            }
                        });
                    });
                    a = 1;
                }
            });
        }

    })();
        $(window).ready(function() {
        $('#preload').delay(200).fadeOut('fade');
    });


$(document).ready(function () {
    var navbarDropdown = $("#navbarDropdown");

    navbarDropdown.mouseenter(function () {
        $("#navbarDropdownMenu").show();
    });

    navbarDropdown.mouseleave(function () {
        $("#navbarDropdownMenu").hide();
    });
})



////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight(),
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

	// Menu.
		var $menu = $('#menu');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {

				event.stopPropagation();

				// Hide.
					$menu._hide();

			})
			.find('.inner')
				.on('click', '.close', function(event) {

					event.preventDefault();
					event.stopPropagation();
					event.stopImmediatePropagation();

					// Hide.
						$menu._hide();

				})
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$menu._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				});

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});

})(jQuery);
