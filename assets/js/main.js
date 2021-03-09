(function($){
	"use strict";
    jQuery(document).ready(function () {
        jQuery('.menu-area').meanmenu();
    });
	// PRELOADER JS CODE
    jQuery(window).on('load',function(){
        jQuery(".loader-box").fadeOut(500);
    });
	// END PRELOADER JS CODE
	
	
	
	$(document).on('ready', function(){
		
		// START MENU JS CODE
		$(window).on('scroll', function() {
			if ($(this).scrollTop() > 100) {
				$('.menu-area').addClass('menu-shrink animated slideInDown');
			} else {
				$('.menu-area').removeClass('menu-shrink animated slideInUp');
			}
		});	
		
		$('.menu li a').on('click', function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 50
			}, 1000);
			e.preventDefault();
        });
		
		$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
        });
		
		$('.navbar-nav>li>a').on('click', function(){
			$('.navbar-collapse').collapse('hide');
        });

		


		// TOP BUTTON JS CODE
		$('body').append('<div id="toTop" class="top-arrow"><i class="icofont-swoosh-up"></i></div>');
		$(window).on('scroll', function () {
			if ($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
			$('#toTop').fadeOut();
			}
		}); 
		$('#toTop').on('click', function(){
			$("html, body").animate({ scrollTop: 0 }, 600);
			return false;
		});
		// END TOP BUTTON JS CODE
	});
	$(document).ready(function() {
		$('.testimonial-slider').slick({
			autoplay: false,
			autoplaySpeed: 1000,
			speed: 600,
			draggable: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
		});
	
		$('.slick-dots li:nth-child(1)').html('<button style="background: url(img/profile.jpg);"></button>');
		$('.slick-dots li:nth-child(2)').html('<button style="background: url(img/profile1.jpg);"></button>');
		$('.slick-dots li:nth-child(3)').html('<button style="background: url(img/profile2.jpg);"></button>');
		$('.slick-dots li:nth-child(4)').html('<button style="background: url(img/profile3.jpg);"></button>');
	}); 
	$(document).ready(function(){
		$('.customer-logos').slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 1500,
			arrows: false,
			dots: false,
			pauseOnHover: false,
			responsive: 
			[{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 520,
				settings: {
					slidesToShow: 1
				}
			}, {
				breakpoint: 992,
				settings: {
					slidesToShow: 3
				}
			}, {
				breakpoint: 1200,
				settings: {
					slidesToShow: 4
				}
			}]
		});
	});

		/*==============================================================*/
		// Hero slider
		/*==============================================================*/
		var $bannerSlider = jQuery('.banner-slider');
		var $bannerFirstSlide = $('div.banner-slide:first-child');

		$bannerSlider.on('init', function(e, slick) {
			var $firstAnimatingElements = $bannerFirstSlide.find('[data-animation]');
			slideanimate($firstAnimatingElements);
		});
		$bannerSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('div.slick-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			slideanimate($animatingElements);
		});
		$bannerSlider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			dots: false,
			swipe: true,
			autoplay: true,
			adaptiveHeight: true,
			nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><i class="icofont-rounded-right"></i></div>',
			prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><i class="icofont-rounded-left"></i></div>',
			responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed: 4000,
					swipe: true,
				}
			}
			]
		});
		function slideanimate(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function() {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function() {
					$this.removeClass($animationType);
				});
			});
		}

		// data color
		jQuery("[data-color]").each(function () {
				jQuery(this).css('color', jQuery(this).attr('data-color'));
		});
		// data background color
		jQuery("[data-bgcolor]").each(function () {
			jQuery(this).css('background-color', jQuery(this).attr('data-bgcolor'));
		});


    
}(jQuery));
